# Deployment Update: Landing Page & Viewer

Your reflection system now has a beautiful new interface with three pages:

## New Files

1. **index.html** — Landing page with system overview
2. **viewer.html** — Dashboard to view and filter past entries
3. **Updated google-apps-script.gs** — Now supports reading entries

## What Changed

### 1. Landing Page (`index.html`)
- Beautiful hero section describing the system
- Two main action buttons:
  - "Make an Entry" → Opens `entry.html`
  - "View Past Entries" → Opens `viewer.html`
- Three feature cards highlighting key benefits
- Dark/light theme toggle (persistent)
- Mobile responsive design

### 2. Viewer Dashboard (`viewer.html`)
- Beautiful data visualization page
- **Filter Options:**
  - Date range (from/to)
  - Entry Type (Story Mining, Reflection, Commitment)
  - Section (all 9 sections)
  - Subsection (text search)
- **Statistics Cards:**
  - Total entries
  - Stories count
  - Reflections count
  - Commitments count
- **Entry Table:**
  - Date, Type, Section, Subsection, Description
  - Color-coded type badges
  - Sortable and filterable
  - Mobile responsive
- Dark/light theme toggle

### 3. Updated Google Apps Script
Added a new `doGet()` function that:
- Handles GET requests
- Returns all entries as JSON
- Supports `?action=getEntries` parameter
- Sorts entries by date (newest first)
- Returns clean, filterable data

## How to Deploy

### Step 1: Update Google Apps Script

1. Go to your Google Apps Script editor
2. Delete all current code
3. Copy the updated **google-apps-script.gs** from your workspace
4. Paste it completely
5. **Save** (Ctrl+S)

### Step 2: Redeploy Apps Script

1. Click **Deploy** → **New Deployment** (fresh deployment)
2. Type: **Web app**
3. Execute as: Your email
4. Access: **Anyone**
5. Deploy → Authorize
6. **Copy your new Web app URL**

This deployment needs to be new so the `doGet` function is available.

### Step 3: Push to GitHub

Update your GitHub repository with the new files:

```bash
# In your reflection-logging repo folder

# Add the new files
git add index.html viewer.html

# Update the Apps Script reference (if needed)
git add google-apps-script.gs

# Commit
git commit -m "Add landing page and entry viewer dashboard

- Create beautiful landing page (index.html)
- Add viewer dashboard for past entries (viewer.html)
- Update Apps Script to support data retrieval (doGet)
- Add filtering by date, type, section, subsection
- Add statistics cards for entry tracking"

# Push
git push
```

### Step 4: Update Your Links

If your GitHub Pages is set up:
- Your landing page will be: `https://yourusername.github.io/reflection-logging/`
- Or keep direct links:
  - Make entry: `https://yourusername.github.io/reflection-logging/entry.html`
  - View entries: `https://yourusername.github.io/reflection-logging/viewer.html`

## System Architecture

```
Landing Page (index.html)
    ↓
    ├─→ Make an Entry → entry.html → Google Apps Script (doPost)
    │
    └─→ View Past Entries → viewer.html → Google Apps Script (doGet)
                                    ↓
                              Returns all entries as JSON
```

## Features

### Landing Page
✓ Beautiful hero section
✓ System description
✓ Feature highlights
✓ Quick navigation buttons
✓ Dark/light theme
✓ Mobile responsive

### Viewer Dashboard
✓ Load all entries from Google Sheet
✓ Filter by date range
✓ Filter by entry type
✓ Filter by section & subsection
✓ Statistics cards (total, by type)
✓ Sortable entry table
✓ Color-coded type badges
✓ Dark/light theme
✓ Mobile responsive

### Form (entry.html)
✓ Create new entries (unchanged)
✓ Daily rotating quote
✓ Dark/light theme
✓ Mobile responsive

## Testing

### Test the Viewer

1. Merge all files to GitHub
2. Go to: `https://yourusername.github.io/reflection-logging/`
3. Click "View Past Entries"
4. You should see a list of all your entries (if any exist)
5. Try filtering by date, type, section, etc.
6. Check that statistics cards update correctly

### If Viewer Shows No Entries

- Make sure you've already submitted entries via the form
- Check that the Google Apps Script deployment URL is correct
- Open browser console (F12) to see fetch errors
- Verify the doGet function exists in your Apps Script

## Mobile Optimization

All three pages are fully responsive:
- Desktop: Full-width layouts with multi-column grids
- Tablet: Adjusted spacing and layout
- Mobile: Single-column layouts, touch-friendly buttons

## What's Next

1. **Deploy the changes** (follow steps above)
2. **Test the landing page** — Click both buttons
3. **View your existing entries** — Use the viewer dashboard
4. **Share the landing page URL** — It's now your home page
5. **Bookmark it** — Use as your reflection entry point

## File Checklist

You now have these files in your GitHub repo:

```
reflection-logging/
├── index.html                 (NEW - landing page)
├── entry.html          (unchanged)
├── viewer.html                (NEW - entry viewer)
├── google-apps-script.gs      (UPDATED - added doGet)
├── quotes-placeholder.json    (unchanged)
├── section-tree.md            (reference)
├── mindset-master.md          (reference)
├── mindset.md                 (reference)
├── thought-patterns.md        (reference)
└── README.md                  (reference)
```

---

## FAQ

**Q: Will my existing entries still be there?**
A: Yes! The viewer reads from your Google Sheet. All existing entries are preserved.

**Q: Do I need to update the landing page URL in the form?**
A: No. The form already points to your Apps Script URL. Just make sure it's correct.

**Q: Can I access the form directly without the landing page?**
A: Yes. Both work independently. The landing page is just a nice entry point.

**Q: What if the viewer shows no entries?**
A: Check that entries exist in your Google Sheet. If they do, verify the Apps Script deployment succeeded.

**Q: How often does the viewer refresh?**
A: Every time you load the page, it fetches fresh data from your sheet. Real-time as you submit entries.

---

Your system is now complete with a beautiful landing page and analytics dashboard! 🎉
