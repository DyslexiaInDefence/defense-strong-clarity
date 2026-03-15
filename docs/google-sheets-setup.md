# Google Sheets Integration Setup

This guide explains how to connect the Join form to a Google Sheet using Google Apps Script.

## Overview

The form submits data via a POST request to a Google Apps Script web app, which writes each submission as a new row in a Google Sheet. No API keys are exposed on the client side.

---

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it (e.g. "Dyslexia in Defence – Join Submissions")
3. In **Row 1**, add these column headers exactly:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email Address | Connection to Defence | Peer networking | Resources and guidance | Events and workshops | Volunteering | Research participation | Community guidelines agreed |

---

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Basic server-side validation
    if (!data.fullName || !data.email || !data.connectionToDefence) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: "error", message: "Missing required fields" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Simple email format check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: "error", message: "Invalid email format" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Append row to sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName,
      data.email,
      data.connectionToDefence,
      data.peerNetworking ? "TRUE" : "FALSE",
      data.resourcesAndGuidance ? "TRUE" : "FALSE",
      data.eventsAndWorkshops ? "TRUE" : "FALSE",
      data.volunteering ? "TRUE" : "FALSE",
      data.researchParticipation ? "TRUE" : "FALSE",
      data.communityGuidelinesAgreed ? "TRUE" : "FALSE"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the project (Ctrl+S)

---

## Step 3: Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description**: "Join form endpoint"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize the script when prompted
6. Copy the **Web app URL** (it looks like `https://script.google.com/macros/s/XXXXX/exec`)

---

## Step 4: Add the URL to Your Project

Add the Apps Script URL as an environment variable:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

In Lovable, add this as a secret named `VITE_GOOGLE_SCRIPT_URL`.

---

## Changing the Destination Google Sheet

To change which Google Sheet receives submissions:

1. Open the new Google Sheet
2. Add the same column headers (see Step 1)
3. Go to **Extensions → Apps Script** and paste the same script
4. Deploy as a new web app and copy the URL
5. Update the `VITE_GOOGLE_SCRIPT_URL` environment variable with the new URL

---

## Architecture

```
[User Browser] → POST JSON → [Google Apps Script Web App] → [Google Sheet]
```

- **Client side** (`src/components/JoinForm.tsx`): Validates form, sends JSON payload
- **Server side** (Google Apps Script): Validates data, appends row to sheet
- **Storage** (Google Sheet): One row per submission with 10 columns
