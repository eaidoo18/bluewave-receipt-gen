# BlueWave Invoice

Static invoice page (`index.html`) plus one serverless function (`api/sheet.js`) that reads your Google Sheet.

## Google Sheet
Row 1 headers: `Invoice, Bill To, Invoice Date, Product, QTY, Shipping Amount` (one row per line item; rows with the same Invoice number form one invoice).

Publish it: File > Share > Publish to web > choose the tab > **Comma-separated values (.csv)** > Publish. Copy the link.

## Deploy
1. Push this folder to a GitHub repo.
2. In Vercel: Add New > Project > import the repo (no build settings needed).
3. Settings > Environment Variables:
   - `SHEET_CSV_URL` = the published CSV link
   - `ACCESS_KEY` = any passphrase (optional but recommended; the page asks for it once per browser session)
4. Redeploy. Open the site, pick an invoice, click Save as PDF and choose "Save as PDF" in the print dialog.

Edit the logo by replacing `logo.png`; edit payment details in `index.html`.
