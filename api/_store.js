// Fichier : api/_store.js (le préfixe "_" empêche Vercel d'en faire une route publique)
// Stockage des dernières statistiques vérifiées de la cagnotte, dans Upstash Redis
// (intégration gratuite du Marketplace Vercel), via son API REST : aucune dépendance npm.
//
// Variables d'environnement créées automatiquement par l'intégration Upstash sur Vercel :
//   KV_REST_API_URL + KV_REST_API_TOKEN        (ou UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)
//   KV_REST_API_READ_ONLY_TOKEN                (facultatif : utilisé pour les lectures publiques)
// Ces valeurs ne quittent jamais le serveur : elles ne sont ni renvoyées ni journalisées.
//
// Seuls des totaux publics sont stockés : montant collecté, nombre de donateurs, date du relevé.
// Aucune donnée personnelle de donateur.

export const OBJECTIF = 25250;              // objectif fixé par l'association (confirmé le 11/11/2026)
export const STATS_KEY = 'skh:stats';       // dernier relevé vérifié
export const LOG_KEY = 'skh:stats:log';     // historique des 100 derniers relevés (traçabilité)

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
const REDIS_RO_TOKEN = process.env.KV_REST_API_READ_ONLY_TOKEN || '';

export function storeConfigured() {
  return Boolean(REDIS_URL && REDIS_TOKEN);
}

async function pipeline(token, commands) {
  const res = await fetch(REDIS_URL.replace(/\/$/, '') + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error('Stockage indisponible (HTTP ' + res.status + ')');
  const out = await res.json();
  const failed = out.find((r) => r && r.error);
  if (failed) throw new Error('Erreur de stockage : ' + failed.error);
  return out.map((r) => r.result);
}

// Écriture (réservée à /api/stats-admin, après vérification du code d'accès).
// Exemple : await redis(['SET', 'cle', 'valeur'], ['EXPIRE', 'cle', 60])
export function redis(...commands) {
  return pipeline(REDIS_TOKEN, commands);
}

// Lecture : jeton en lecture seule s'il existe (moindre privilège), sinon jeton standard.
export function redisRead(...commands) {
  return pipeline(REDIS_RO_TOKEN || REDIS_TOKEN, commands);
}

export async function readStats() {
  const [raw] = await redisRead(['GET', STATS_KEY]);
  if (!raw) return null;
  const s = JSON.parse(raw);
  if (!Number.isInteger(s.collecte) || !Number.isInteger(s.donateurs) || !s.verifieLe) return null;
  return s;
}
