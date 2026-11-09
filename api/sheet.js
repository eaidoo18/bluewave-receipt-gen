// Fetches the published Google Sheet CSV on the server, so the sheet link is never exposed in the browser.
module.exports = async (req, res) => {
  const url = process.env.SHEET_CSV_URL;
  if (!url) return res.status(500).send('SHEET_CSV_URL is not set');

  const access = process.env.ACCESS_KEY;
  if (access && req.headers['x-access-key'] !== access) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const r = await fetch(url);
    if (!r.ok) return res.status(502).send('Sheet request failed');
    const text = await r.text();
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(text);
  } catch (e) {
    res.status(502).send('Sheet request failed');
  }
};
