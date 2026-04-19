# Google Sheet Setup for Reflection Logging

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Create** (blank spreadsheet)
3. Name it: **"Reflection Logging System"** (or your preferred name)
4. Click the **Share** button and set permissions:
   - You: Editor
   - (Optional) Share with collaborators if needed

## Step 2: Set Up Column Headers

In the newly created sheet, set up the following headers in Row 1:

| Column | Header | Format |
|--------|--------|--------|
| A | Date | Text |
| B | Entry Type | Text |
| C | Section | Text |
| D | Subsection | Text |
| E | Description | Text |
| F | Timestamp | Text |

**Example Row 1:**
```
Date | Entry Type | Section | Subsection | Description | Timestamp
```

## Step 3: Format the Sheet (Optional but Recommended)

1. **Freeze Header Row:**
   - Select row 1
   - Go to View → Freeze → 1 row
   - This keeps headers visible while scrolling

2. **Adjust Column Widths:**
   - Column A (Date): 120px
   - Column B (Entry Type): 150px
   - Column C (Section): 180px
   - Column D (Subsection): 200px
   - Column E (Description): 300px (or auto-fit)
   - Column F (Timestamp): 180px

3. **Add Alternating Row Colors:**
   - Select all data columns (A:F)
   - Format → Alternating colors → Choose a theme

## Step 4: Get Your Sheet ID

You need this ID to link the Google Apps Script to your sheet.

1. Look at the URL of your Google Sheet. It looks like:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

2. Copy the long string between `/d/` and `/edit` — that's your **SHEET ID**

3. Save this ID somewhere safe; you'll need it in the next step.

## Step 5: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. A new tab will open with the Apps Script editor
3. Delete any default code and paste the contents of `google-apps-script.gs`
4. Find this line in the script:
   ```javascript
   const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
   ```
5. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID (from Step 4)
6. Click **Save** (Ctrl+S or Cmd+S)

## Step 6: Deploy the Apps Script

1. Click the **Deploy** button (or look for "Deploy" near the top)
2. Select **New deployment**
3. In "Select type", choose **Web app**
4. Set:
   - **Execute as:** (your email address)
   - **Who has access:** Anyone (or specific people if you prefer)
5. Click **Deploy**
6. A dialog will appear asking for permissions. Click **Authorize** and grant access
7. After deployment, you'll see a **Deployment ID** and a **Web app URL**

**Important:** Copy the **Web app URL** — you'll need this for the form in the next step.

## Step 7: Update the Form with Your Deployment URL

1. Open `logging-form.html` in a text editor
2. Find this line (around line 200-ish):
   ```javascript
   const APPS_SCRIPT_URL = "GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. Replace `GOOGLE_APPS_SCRIPT_URL_HERE` with your Web app URL from Step 6
4. Save the file

## Step 8: Test the Connection

1. Open `logging-form.html` in your browser
2. Fill out a test entry
3. Click **Submit**
4. You should see a green success message
5. Go back to your Google Sheet and refresh—you should see your entry in a new row!

## Troubleshooting

**"Missing required fields" error:**
- Make sure all form fields are filled out before submitting

**"Sheet not found" error:**
- Check that your SHEET_ID is correct
- Make sure the sheet name in Apps Script matches your actual sheet name (default is "Reflections")

**"Server error" messages:**
- Go to your Apps Script editor
- Click **Execution log** to see what went wrong
- Common issues:
  - Wrong Sheet ID
  - Sheet doesn't exist yet
  - Apps Script not deployed as web app

**Form won't submit:**
- Open browser console (F12 → Console tab)
- Look for error messages
- Check that your Web app URL is correct in the form

## Sheet Data Structure Reference

Your Google Sheet will grow with entries like this:

```
Date       | Entry Type  | Section            | Subsection       | Description | Timestamp
2026-04-19 | Reflection  | Authenticity       | Being Yourself   | ...         | 2026-04-19T...
2026-04-19 | Commitment  | Thinking & Clarity | Clear Thinking   | ...         | 2026-04-19T...
2026-04-20 | Story       | Connection         | Love Better      | ...         | 2026-04-20T...
```

You can sort, filter, and analyze this data directly in Google Sheets using:
- **Data** → **Create a filter** (to filter by Section, Entry Type, Date range, etc.)
- **Data** → **Pivot table** (to see patterns by Section, Entry Type, etc.)
- Built-in charts and visualizations

---

**Next Step:** Once your deployment is working, you'll host the `logging-form.html` file online or locally, and the system will be live!
