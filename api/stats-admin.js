// Fichier : api/stats-admin.js
// Route Vercel : POST /api/stats-admin   (utilisée par la page /admin.html)
// Enregistre un nouveau relevé : montant collecté et nombre de donateurs lus sur la page CotizUp.
//
// Protection :
//   - code d'accès dans la variable d'environnement ADMIN_TOKEN (au moins 16 caractères),
//     envoyé dans l'en-tête "Authorization: Bearer <code>", comparé en temps constant ;
//   - blocage 15 minutes après 10 codes faux depuis la même adresse ;
//   - contrôles de cohérence : entiers, plafonds, confirmation explicite en cas de baisse.
// Chaque relevé est daté et conservé dans un historique (100 derniers).

import crypto from 'node:crypto';
import { OBJECTIF, STATS_KEY, LOG_KEY, redis, readStats, storeConfigured } from './_store.js';

const MAX_FAILS = 10;
const FAIL_WINDOW_S = 15 * 60;

function sameSecret(given, expected) {
  const a = crypto.createHash('sha256').update(String(given)).digest();
  const b = crypto.createHash('sha256').update(String(expected)).digest();
  return crypto.timingSafeEqual(a, b);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const adminToken = process.env.ADMIN_TOKEN || '';
  if (adminToken.length < 16 || !storeConfigured()) {
    return res.status(503).json({
      error: 'Administration non configurée : ADMIN_TOKEN (16 caractères minimum) et stockage Upstash Redis requis.',
    });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'inconnue';
  const failKey = 'skh:auth:fail:' + crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16);

  try {
    const [fails] = await redis(['GET', failKey]);
    if (Number(fails) >= MAX_FAILS) {
      return res.status(429).json({ error: 'Trop de codes incorrects. Réessayez dans 15 minutes.' });
    }

    const auth = String(req.headers.authorization || '');
    const given = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!given || !sameSecret(given, adminToken)) {
      await redis(['INCR', failKey], ['EXPIRE', failKey, FAIL_WINDOW_S]);
      return res.status(401).json({ error: 'Code d’accès incorrect.' });
    }

    let body = req.body || {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body || '{}'); } catch { return res.status(400).json({ error: 'Requête illisible.' }); }
    }

    const collecte = Number(body.collecte);
    const donateurs = Number(body.donateurs);
    if (!Number.isInteger(collecte) || collecte < 0 || collecte > OBJECTIF * 3) {
      return res.status(400).json({ error: 'Montant invalide : entrez un nombre entier d’euros entre 0 et ' + OBJECTIF * 3 + '.' });
    }
    if (!Number.isInteger(donateurs) || donateurs < 0 || donateurs > 100000) {
      return res.status(400).json({ error: 'Nombre de donateurs invalide : entrez un nombre entier.' });
    }

    const prev = await readStats();
    const isDrop = prev && (collecte < prev.collecte || donateurs < prev.donateurs);
    if (isDrop && body.confirmerBaisse !== true) {
      return res.status(409).json({
        error: 'Ces chiffres sont inférieurs au relevé précédent. Vérifiez la page CotizUp, puis cochez « Confirmer la baisse ».',
        precedent: prev,
      });
    }

    const stats = { collecte, donateurs, verifieLe: new Date().toISOString() };
    await redis(
      ['SET', STATS_KEY, JSON.stringify(stats)],
      ['LPUSH', LOG_KEY, JSON.stringify(stats)],
      ['LTRIM', LOG_KEY, 0, 99],
      ['DEL', failKey],
    );
    return res.status(200).json({ ok: true, objectif: OBJECTIF, ...stats });
  } catch (err) {
    console.error('api/stats-admin :', err.message);
    return res.status(503).json({ error: 'Stockage momentanément indisponible. Rechargez la page pour vérifier si le relevé a été enregistré.' });
  }
}
