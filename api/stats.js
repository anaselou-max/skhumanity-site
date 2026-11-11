// Fichier : api/stats.js
// Route Vercel : GET /api/stats
// Renvoie le dernier relevé vérifié de la cagnotte (saisi via /admin.html à partir de la page
// CotizUp officielle). Aucune lecture automatique de CotizUp : ses CGU (art. 9) l'interdisent.
//
// Cache CDN Vercel de 5 minutes : un nouveau relevé est visible par tous en 5 minutes maximum.
// En cas d'erreur, la page garde les dernières valeurs vérifiées intégrées au HTML (data-*).

import { OBJECTIF, readStats, storeConfigured } from './_store.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  // ?t=... (utilisé par /admin.html) : lecture directe, sans cache
  const bypassCache = Boolean(req.query && req.query.t);

  if (!storeConfigured()) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).json({ error: 'Stockage non configuré.' });
  }

  try {
    const s = await readStats();
    if (!s) {
      res.setHeader('Cache-Control', 'no-store');
      return res.status(404).json({ error: 'Aucun relevé enregistré pour le moment.' });
    }
    if (bypassCache) {
      res.setHeader('Cache-Control', 'no-store');
    } else {
      // Navigateur : revérifie à chaque fois (jamais d'ancien chiffre servi depuis son cache).
      // CDN Vercel uniquement : garde la réponse 5 minutes, et continue de servir le dernier
      // relevé pendant 24 h si le stockage tombe en panne.
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      res.setHeader('Vercel-CDN-Cache-Control', 'max-age=300, stale-while-revalidate=86400');
    }
    return res.status(200).json({
      collecte: s.collecte,
      donateurs: s.donateurs,
      objectif: OBJECTIF,
      verifieLe: s.verifieLe,
      source: 'releve-manuel-page-cotizup',
    });
  } catch (err) {
    console.error('api/stats :', err.message);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).json({ error: 'Stockage momentanément indisponible.' });
  }
}
