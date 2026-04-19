# Quick Start (5 Minutes)

If you want to get your system running **now**, follow this exact sequence.

## Setup (15-20 minutes, one time only)

### Step 1: Create Google Sheet (2 min)
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create blank spreadsheet, name it "Reflection Logging System"
3. Add headers in Row 1: `Date | Entry Type | Section | Subsection | Description | Timestamp`
4. Freeze row 1: View → Freeze → 1 row

### Step 2: Get Sheet ID (1 min)
1. Look at URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`
2. Copy the long string (YOUR_SHEET_ID_HERE)
3. Save it somewhere

### Step 3: Create Apps Script (5 min)
1. In your sheet: Extensions → Apps Script
2. Delete default code
3. Paste contents of `google-apps-script.gs`
4. Find line 2: `const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";`
5. Replace with your actual Sheet ID
6. Save (Ctrl+S)

### Step 4: Deploy Script (5 min)
1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Execute as: Your email
4. Access: **Anyone**
5. Click **Deploy** → Authorize when asked
6. **Copy your Web app URL** (looks like: `https://script.google.com/macros/d/abc123/userweb...`)

### Step 5: Update Form (2 min)
1. Open `entry.html` in text editor
2. Find line with: `const APPS_SCRIPT_URL = "GOOGLE_APPS_SCRIPT_URL_HERE";`
3. Replace with your Web app URL
4. Save file

### Step 6: Test (1 min)
1. Open `entry.html` in browser
2. Fill test entry and click Submit
3. Go to your Google Sheet and refresh — entry should appear!

**You're done!** Your system is now live.

---

## Daily Usage (5:30am, 5 minutes)

1. Open `entry.html` (bookmark it)
2. Fill out form:
   - **Date**: Today (pre-filled)
   - **Type**: Story Mining / Reflection / Commitment
   - **Section**: Pick from dropdown
   - **Subsection**: Pick from dropdown
   - **Description**: What happened? What did you notice? What will you do?
3. Click **Submit**
4. Done! Entry saved to Google Sheet

---

## Reference (During Deep Dive)

- **Quick scan patterns**: Use `section-tree.md`
- **Read full context**: Use `mindset-master.md`
- **Understand your data**: Check Google Sheet (can sort, filter, search)

---

## Troubleshooting

**Form won't submit:**
- Check all fields filled
- Open browser console (F12) and look for errors
- Verify your Web app URL is correct in the form

**Sheet not updating:**
- Refresh sheet (Ctrl+R)
- Go to Apps Script → check Execution log for errors

**Can't find form:**
- Save `entry.html` to your computer
- Or host on GitHub Pages (see README.md)

---

## What to Do When Ready

- Add quotes to `quotes-placeholder.json`
- Analyze your Google Sheet data (create charts, pivot tables)
- Read full docs (README.md, SETUP-INSTRUCTIONS.md)

---

That's it. You have a working reflection system. Go build clarity.
