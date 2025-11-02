import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { itemName, category, description, quantity, photo, cabinet, compartment, sheetUrl } = req.body;
    // Determine spreadsheet ID from env or sheet URL
    let spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId && sheetUrl) {
      const match = sheetUrl.match(/\/spreadsheets\/d\/([^/]+)/);
      if (match) {
        spreadsheetId = match[1];
      }
    }
    if (!spreadsheetId) {
      return res.status(400).json({ error: 'Spreadsheet ID not found' });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const values = [[itemName, category, description, quantity, photo || '', cabinet, compartment]];
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Items!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });
    return res.status(200).json({ message: 'Item added' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.toString() });
  }
}
