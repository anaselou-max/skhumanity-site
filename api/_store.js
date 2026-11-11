// Fichier : api/_store.js (le préfixe "_" empêche Vercel d'en faire une route publique)
// Stockage des dernières statistiques vérifiées de la cagnotte, dans Upstash Redis
// (intégration gratuite du Marketplace Vercel), via son API REST : aucune dépendance npm.
//
// Variables d'environnement créées automatiquement par l'intégration Upstash sur Vercel :
//   KV_REST_API_URL + KV_REST_API_TOKEN   (ou UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)
//
// Seuls des totaux publics sont stockés : montant collecté, nombre de donateurs, date du relevé.
// Aucune donnée personnelle de donateur.

export const OBJECTIF = 25250;              // objectif fixé par l'association (confirmé le 11/11/2026)
export const STATS_KEY = 'skh:stats';       // dernier relevé vérifié
export const LOG_KEY = 'skh:stats:log';     // historique des 100 derniers relevés (traçabilité)

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';

export function storeConfigured() {
  return Boolean(REDIS_URL && REDIS_TOKEN);
}

// Exécute une ou plusieurs commandes Redis en un seul appel (pipeline REST Upstash).
// Exemple : await redis(['GET', 'cle'], ['EXPIRE', 'cle', 60])
export async function redis(...commands) {
  const res = await fetch(REDIS_URL.replace(/\/$/, '') + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + REDIS_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error('Stockage indisponible (HTTP ' + res.status + ')');
  const out = await res.json();
  const failed = out.find((r) => r && r.error);
  if (failed) throw new Error('Erreur de stockage : ' + failed.error);
  return out.map((r) => r.result);
}

export async function readStats() {
  const [raw] = await redis(['GET', STATS_KEY]);
  if (!raw) return null;
  const s = JSON.parse(raw);
  if (!Number.isInteger(s.collecte) || !Number.isInteger(s.donateurs) || !s.verifieLe) return null;
  return s;
}
