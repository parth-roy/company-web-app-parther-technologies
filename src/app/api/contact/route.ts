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
      phone = 'N/A',
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
    
    // 1. Check if headers exist by fetching row 1
    const getRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:I1',
    });

    const hasHeaders = getRes.data.values && getRes.data.values.length > 0 && getRes.data.values[0].length > 0;

    // 2. Format the current date
    const submissionDate = new Date().toISOString();

    // Combine primaryChallenge and scope since they serve the same purpose across different forms
    const combinedScope = primaryChallenge !== 'N/A' ? primaryChallenge : scope;

    // Prepare the row data
    // Columns: [Date, FormType, SourcePage, SourceIdentifier, Name, Email, Phone, Industry, CompanySize, ProjectScope]
    const rowData = [
      [
        submissionDate,
        formType,
        sourcePage,
        sourceIdentifier,
        name,
        email,
        phone,
        industry,
        companySize,
        combinedScope
      ]
    ];

    // 3. If no headers exist, append them first
    if (!hasHeaders) {
      const headers = [
        ['Date Submitted', 'Form Type', 'Source Page', 'Source ID', 'Name', 'Email', 'Phone', 'Industry', 'Company Size', 'Project Scope/Challenge']
      ];
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A1:J1',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: headers },
      });
    }

    // 4. Append the actual lead data
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
