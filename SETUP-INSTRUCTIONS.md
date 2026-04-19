# Complete Setup Guide: Reflection Logging System

Welcome! This guide walks you through getting your online reflection logging system live. The system has three main components:

1. **The Form** (`entry.html`) — Where you log daily reflections
2. **Google Apps Script** — Backend that receives and stores your entries
3. **Google Sheet** — Database where all your reflections live

**Estimated setup time:** 15-20 minutes

---

## Component 1: Set Up Google Sheet & Apps Script

### Quick Overview
- Create a Google Sheet to store all your reflection entries
- Create a Google Apps Script that listens for form submissions
- Deploy the script as a web app

### Detailed Steps

#### Step A: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Create** → Blank spreadsheet
3. Name it: **"Reflection Logging System"**
4. In **cell A1**, type: `Date`
5. In **B1**: `Entry Type`
6. In **C1**: `Section`
7. In **D1**: `Subsection`
8. In **E1**: `Description`
9. In **F1**: `Timestamp`
10. (Optional) Format: View → Freeze → 1 row (keeps headers visible when scrolling)

#### Step B: Get Your Sheet ID

1. Look at the URL of your Google Sheet:
   ```
   https://docs.google.com/spreadsheets/d/1ABC2DEF3GHI4JKL5MNO6PQRS7TUV8WXY9Z/edit
                                         ↑ This part is your Sheet ID
   ```
2. Copy the long string (the Sheet ID)
3. Keep it safe — you'll need it shortly

#### Step C: Create & Deploy Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
   - A new tab opens with the script editor
2. Delete any code already there
3. Copy the entire contents of `google-apps-script.gs` and paste it
4. On **line 2**, find:
   ```javascript
   const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
   ```
5. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
6. Click **Save** (Ctrl+S or Cmd+S)

#### Step D: Deploy as Web App

1. Click the **Deploy** button (top-right area)
2. Choose **New deployment**
3. Click the dropdown that says "Select type"
4. Choose **Web app**
5. For "Execute as", select your email (or "Me")
6. For "Who has access", choose **Anyone** (so the form can reach it)
7. Click **Deploy**
8. A permission popup appears — click **Authorize** and grant access to your spreadsheet
9. After authorization, you'll see a dialog with:
   ```
   Deployment ID: xxx
   Web app URL: https://script.google.com/macros/d/abc123/userweb...
   ```
10. **Copy your Web app URL** — you'll need this in Component 2

**Save these two values somewhere safe:**
- Your Sheet ID - 1SfII766fQY_y3nuzL36UglqZoes256rzKLo3riK2Xa0
- Your Deployment URL - AKfycbzFa6OcWIL0-omBUId3uGAmJKuCps9KUFvWryB2OYPFmEhkkrkZvqEmfk26W4V6btoQ
- Web App URL - https://script.google.com/macros/s/AKfycbzFa6OcWIL0-omBUId3uGAmJKuCps9KUFvWryB2OYPFmEhkkrkZvqEmfk26W4V6btoQ/exec
---

## Component 2: Update & Host the Form

### Overview
The form (`entry.html`) is your daily interface. You need to:
1. Update it with your Web app URL
2. Host it online (or use locally)

### Steps

1. Open `entry.html` in a text editor (VS Code, Sublime, or even Notepad)
2. Find this line (search for "GOOGLE_APPS_SCRIPT_URL_HERE"):
   ```javascript
   const APPS_SCRIPT_URL = "GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. Replace `GOOGLE_APPS_SCRIPT_URL_HERE` with your Web app URL from Step D above
4. **Save the file**

### Hosting Options

Choose one:

#### Option A: Use Locally (Simplest)
- Just open `entry.html` directly in your browser
- Bookmark it or pin the browser tab
- Works offline except for submission (which needs internet)

#### Option B: Host on GitHub Pages (Free & Easy)
1. Create a GitHub account if you don't have one
2. Create a new public repository named `reflection-logging`
3. Upload `entry.html`, `section-tree.md`, and other files
4. Go to repository Settings → Pages
5. Under "Source", select Branch: `main`, Folder: `/(root)`
6. Your form will be at: `https://yourusername.github.io/reflection-logging/entry.html`
7. Share this link or bookmark it

#### Option C: Host on Google Drive (Quick & Private)
1. Go to [Google Drive](https://drive.google.com)
2. Upload `entry.html`
3. Right-click → Get link
4. Anyone with link can view/access

### Test Your Setup

1. Open `entry.html` in your browser
2. You should see a motivational quote at the top
3. Fill out a test entry:
   - Date: Today
   - Entry Type: "Story Mining"
   - Section: "Authenticity & Ownership"
   - Subsection: "Being Yourself"
   - Description: "Test entry"
4. Click **Submit**
5. You should see a green success message
6. Go back to your Google Sheet and refresh—your entry should appear!

**If submission fails:**
- Open browser console (F12, go to Console tab)
- Look for error messages
- Check that your Web app URL is correct
- See troubleshooting section below

---

## Component 3: Customize Your Quotes (Later)

The form displays a rotating daily quote. Right now it shows a placeholder message. When you're ready to add your own quotes:

1. Open `quotes-placeholder.json` in a text editor
2. Replace the single quote with your library of quotes
3. Follow the format shown (text + author)
4. The form will automatically cycle through them (one per day)

For now, the placeholder is fine—you can update it anytime.

---

## Daily Usage

### 5:30 AM Routine

1. Open your form (bookmark it for quick access)
2. Choose your entry type:
   - **Story Mining**: What happened yesterday worth keeping?
   - **Reflection**: What pattern showed up? What did I learn?
   - **Commitment**: What will I be careful about today?
3. Pick the relevant Section and Subsection from dropdowns
4. Write your entry (1-2 sentences or more)
5. Click **Submit**
6. Entry saved to Google Sheet automatically

### Over Time

As entries accumulate in your Google Sheet, you can:
- Sort by Section to see patterns
- Filter by Entry Type (show only Reflections, etc.)
- Add formulas to count entries per section
- Create pivot tables to visualize which areas you're working on most

---

## Troubleshooting

### Form Won't Submit

**Problem:** "Missing required fields" error
- **Solution:** Make sure all fields are filled before submitting

**Problem:** "Sheet not found" error
- **Solutions:**
  - Your Sheet ID is wrong (re-check it)
  - Your Apps Script has the wrong sheet name (should be "Reflections" by default, or whatever you named it)
  - Apps Script hasn't been deployed yet

**Problem:** Form submits but nothing appears in Google Sheet
- **Solutions:**
  - Open Google Sheet and refresh (Ctrl+R)
  - Check your Web app URL is correct in the form
  - Go to Apps Script → Executions → check the log for errors

### Google Apps Script Errors

1. Go back to your Apps Script (Extensions → Apps Script from your Sheet)
2. Look for the **Execution log** (or **Executions** tab on left)
3. Find recent runs and look for error messages
4. Common issues:
   - `"Spreadsheet with id ... not found"` → Your Sheet ID is wrong
   - `"Sheet named 'Reflections' not found"` → Wrong sheet name or sheet doesn't exist
   - Permission errors → Need to re-authorize the script

### Web App URL Issues

If you redeploy your Apps Script:
1. A new Web app URL will be generated
2. Update `entry.html` with the new URL
3. Old URLs will no longer work

---

## File Structure Reference

After setup, you should have:

```
Reflection Discipline/
├── entry.html          (Your form — open this daily)
├── section-tree.md            (Quick reference for 5:30am review)
├── mindset-master.md          (Deep reference — read during deep dives)
├── thought-patterns.md        (Original patterns document)
├── google-apps-script.gs      (Backend code — in Google Apps Script)
├── GOOGLE-SHEET-SETUP.md      (Detailed sheet setup guide)
├── SETUP-INSTRUCTIONS.md      (This file)
└── quotes-placeholder.json    (For future quote library)
```

---

## Next Steps

1. **Right now:** Complete Components 1 & 2 above
2. **Test:** Submit one entry from the form to verify everything works
3. **Bookmark:** Save your form URL for daily access
4. **Start:** Begin your 5:30am reflections tomorrow!
5. **Later:** When you have time, update quotes-placeholder.json with your favorite quotes/wisdom

---

## Quick Reference: URLs & IDs to Keep

After setup, save these somewhere safe:

- **Google Sheet URL:** `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
- **Apps Script Deployment ID:** `abc123...` (from deployment dialog)
- **Web App URL:** `https://script.google.com/macros/d/.../userweb...` (goes in form)
- **Form URL:** (wherever you hosted entry.html)

---

## Support

If you get stuck:
1. Check the relevant troubleshooting section above
2. Open browser console (F12) and look for error messages
3. Check Apps Script execution log for backend errors
4. Verify all URLs and IDs are correct

**You've got this!** Once it's working, you have a powerful daily reflection system that grows richer every morning.
