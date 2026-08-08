import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Extract contextual data and form fields
    const { 
      sourcePage = 'Unknown', 
      sourceIdentifier = 'None', 
      name = '', 
      email = '', 
      industry = 'N/A', 
      companySize = 'N/A', 
      primaryChallenge = 'N/A',
      scope = 'N/A',
      formType = 'MultiStep'
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // Google Sheets Credentials from Environment Variables
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    // If credentials are not configured yet, just log and return success so frontend doesn't break
    if (!clientEmail || !privateKey || !sheetId) {
      console.warn('Google Sheets credentials missing. Form submission logged only.');
      console.log('Lead Data:', body);
      return NextResponse.json({ 
        message: 'Form submitted successfully (logged locally). Configure Google Sheets to enable saving.' 
      }, { status: 200 });
    }

    // Authenticate with Google API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Format the current date
    const submissionDate = new Date().toISOString();

    // Prepare the row data
    // Columns: [Date, FormType, SourcePage, SourceIdentifier, Name, Email, Industry, CompanySize, Challenge, Scope]
    const rowData = [
      [
        submissionDate,
        formType,
        sourcePage,
        sourceIdentifier,
        name,
        email,
        industry,
        companySize,
        primaryChallenge,
        scope
      ]
    ];

    // Append to the sheet (Assumes the sheet is named "Sheet1")
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: rowData,
      },
    });

    return NextResponse.json({ message: 'Lead successfully saved to Google Sheets.' }, { status: 200 });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission. Please try again later.' },
      { status: 500 }
    );
  }
}
