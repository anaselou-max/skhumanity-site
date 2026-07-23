// Fichier : api/cagnotte.js
// Route Vercel : /api/cagnotte
// Scrape la page Cotizup et retourne le montant collecté en JSON.

export default async function handler(req, res) {
  const COTIZUP_URL = "https://www.cotizup.com/@suleyman-et-kabir-humanity/sadaka-jarya-orphelins-mosquee";
  const FETCH_URL = "https://r.jina.ai/" + COTIZUP_URL;

  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const response = await fetch(FETCH_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "X-Return-Format": "text",
      },
    });

    if (!response.ok) {
      throw new Error(`Cotizup a répondu ${response.status}`);
    }

    let html = await response.text();
    html = html.replace(/[*_#>`]/g, "");

    // Trouve tous les montants en euros, peu importe le format (espace ou virgule)
    const euroMatches = [...html.matchAll(/€ ?[\d][\d.,\u00A0 ]{0,7}|[\d][\d.,\u00A0 ]{0,7} ?€/g)];
      .map((m) => parseInt(m[0].replace(/[^\d]/g, ""), 10))
      .filter((n) => Number.isFinite(n) && n > 0);

    if (amounts.length < 2) {
      throw new Error("Montants introuvables. Extrait: " + html.slice(0, 300));
    }

    const collecte = amounts[0];
    const objectif = amounts[1];

    // Nombre de donateurs : premier nombre isolé après un pourcentage
    const donorsMatch = html.match(/%[\s\S]{0,10}?(\d+)/);
    const donateurs = donorsMatch ? parseInt(donorsMatch[1], 10) : null;

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
    return res.status(500).json({ error: err.message });
  }
}
