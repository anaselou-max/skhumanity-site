export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch(
      'https://www.cotizup.com/@suleyman-et-kabir-humanity/sadaka-jarya-orphelins-mosquee',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    );
    const html = await response.text();
    const match = html.match(/([\d\s]+)\s*€\s*(?:sur|collect[ée]s?\s*sur)\s*([\d\s]+)\s*€/i);
    const donorsMatch = html.match(/(\d+)\s*(?:personnes?|donateurs?)/i);
    if (match) {
      const raised = parseInt(match[1].replace(/\s/g, ''), 10);
      const goal = parseInt(match[2].replace(/\s/g, ''), 10);
      const donors = donorsMatch ? parseInt(donorsMatch[1], 10) : null;
      res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate');
      return res.status(200).json({ raised, goal, donors, ok: true });
    }
    return res.status(200).json({ ok: false, error: 'pattern_not_found' });
  } catch (e) {
    return res.status(200).json({ ok: false, error: e.message });
  }
}
