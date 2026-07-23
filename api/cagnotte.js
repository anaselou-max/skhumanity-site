// Fichier : api/cagnotte.js
// Route Vercel : /api/cagnotte
// Scrape la page Cotizup et retourne le montant collecté en JSON.

export default async function handler(req, res) {
  const COTIZUP_URL = "https://www.cotizup.com/@suleyman-et-kabir-humanity/sadaka-jarya-orphelins-mosquee";

  // Cache 5 minutes côté Vercel (évite de spammer Cotizup)
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const response = await fetch(COTIZUP_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SKHumanityBot/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`Cotizup a répondu ${response.status}`);
    }

    const html = await response.text();

    // Cherche le motif "X XXX € sur 25 250 €"
    const match = html.match(/([\d\s\u00A0]+)\s*€\s*sur\s*([\d\s\u00A0]+)\s*€/i);

    if (!match) {
      throw new Error("Montant introuvable dans la page Cotizup");
    }

    const collecte = parseInt(match[1].replace(/[\s\u00A0]/g, ""), 10);
    const objectif = parseInt(match[2].replace(/[\s\u00A0]/g, ""), 10);

    // Nombre de donateurs (optionnel, best effort)
    const donateursMatch = html.match(/Déjà\s+([\d\s\u00A0]+)\s+personnes ont déjà participé/i);
    const donateurs = donateursMatch
      ? parseInt(donateursMatch[1].replace(/[\s\u00A0]/g, ""), 10)
      : null;

    const pourcentage = Math.round((collecte / objectif) * 100);

    return res.status(200).json({
      collecte,
      objectif,
      pourcentage,
      donateurs,
      reste: objectif - collecte,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    // En cas d'échec, on renvoie une erreur claire (le site gardera l'ancien chiffre en fallback)
    return res.status(500).json({ error: err.message });
  }
}

