import { google } from "googleapis";

export async function POST(req: Request) {

  try {

    const body = await req.json();
    // FIX: Removed console.log(process.env.GOOGLE_PRIVATE_KEY) — this
    // leaked the private key to server logs.

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:
          process.env.GOOGLE_CLIENT_EMAIL,

        private_key:
          process.env.GOOGLE_PRIVATE_KEY?.replace(
            /\\n/g,
            "\n"
          ),
      },

      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId:
        process.env.GOOGLE_SHEET_ID,

      range: "Loan Applications!A:N",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            new Date().toLocaleString(),

            body.fullName,
            body.email,
            body.phone,
            body.dob,

            body.employmentType,
            body.income,
            body.creditScore,
            body.existingLoans,

            body.loanType,
            body.loanAmount,
            body.repaymentDuration,
            body.purpose,
            body.notes,
          ],
        ],
      },
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
