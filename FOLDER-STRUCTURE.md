# New Folder Structure

Your files are now organized for cleanliness and clarity:

```
Reflection Discipline/
│
├── 📁 code/                                (All code files)
│   ├── index.html                          (Landing page)
│   ├── entry.html                   (Entry form)
│   ├── viewer.html                         (View/filter entries dashboard)
│   ├── google-apps-script.gs               (Backend code)
│   └── quotes-placeholder.json             (Quote library)
│
├── 📄 README.md                            (System overview)
├── 📄 QUICKSTART.md                        (Fast 15-min setup)
├── 📄 SETUP-INSTRUCTIONS.md                (Detailed setup guide)
├── 📄 GOOGLE-SHEET-SETUP.md                (Google Sheet help)
├── 📄 DEPLOYMENT-UPDATE.md                 (Landing page info)
├── 📄 DEBUGGING-FIX.md                     (Troubleshooting guide)
├── 📄 FILE-INVENTORY.md                    (File reference)
├── 📄 FOLDER-STRUCTURE.md                  (This file)
│
├── 📚 mindset-master.md                    (40+ page reference)
├── 📚 section-tree.md                      (Quick-scan checklist)
├── 📚 mindset.md                           (Original mindset doc)
└── 📚 thought-patterns.md                  (Original patterns doc)
```

## What's Where

### Code Files (in `code/` folder)
- **index.html** — Landing page with buttons to Make Entry and View Entries
- **entry.html** — 5:30am reflection entry form
- **viewer.html** — Dashboard to view, filter, and analyze your entries
- **google-apps-script.gs** — Backend code (copy into Google Apps Script)
- **quotes-placeholder.json** — Your rotating daily quotes

### Documentation (in root folder)
- **README.md** — Start here, complete system guide
- **QUICKSTART.md** — 15-minute setup
- **SETUP-INSTRUCTIONS.md** — Detailed setup steps
- **DEPLOYMENT-UPDATE.md** — Landing page & viewer info
- **DEBUGGING-FIX.md** — Troubleshooting
- **FILE-INVENTORY.md** — File reference guide
- **FOLDER-STRUCTURE.md** — This file

### Reference Material (in root folder)
- **mindset-master.md** — Your complete reference (40+ pages)
- **section-tree.md** — Quick morning review checklist
- **mindset.md** — Original mindset document
- **thought-patterns.md** — Original patterns document

## How to Deploy to GitHub

### Structure for GitHub Pages

```
reflection-logging/  (your GitHub repo)
│
├── code/
│   ├── index.html             (landing page)
│   ├── entry.html      (form)
│   ├── viewer.html            (dashboard)
│   ├── google-apps-script.gs  (for reference)
│   └── quotes-placeholder.json
│
├── README.md
├── QUICKSTART.md
├── SETUP-INSTRUCTIONS.md
├── mindset-master.md
├── section-tree.md
├── mindset.md
└── thought-patterns.md
```

### Step-by-Step Deployment

1. **Update your GitHub repo structure:**
   ```bash
   # In your reflection-logging repo folder
   mkdir code
   mv *.html code/         # Move HTML files to code/
   mv *.json code/         # Move JSON to code/
   cp google-apps-script.gs code/  # Copy (keep reference)
   ```

2. **Update GitHub Pages settings:**
   - Go to Settings → Pages
   - Source: Branch `main`, Folder: `/(root)`

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Reorganize: Move code files to code/ folder for cleanliness"
   git push
   ```

4. **Your landing page will be at:**
   - https://yourusername.github.io/reflection-logging/code/index.html
   
   Or create a simple redirect from root by adding an `index.html` in the root:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta http-equiv="refresh" content="0;url=code/index.html">
   </head>
   </html>
   ```

### Direct Access URLs

Once deployed:
- **Landing page:** https://yourusername.github.io/reflection-logging/code/
- **Make entry:** https://yourusername.github.io/reflection-logging/code/entry.html
- **View entries:** https://yourusername.github.io/reflection-logging/code/viewer.html

## Why This Structure?

1. **Clean root folder** — Documentation stays at the root for easy access
2. **Grouped code** — All executable files in one `code/` folder
3. **Easy navigation** — HTML files reference each other within the same folder
4. **Professional appearance** — Clear separation of concerns
5. **SEO-friendly** — Landing page is front and center

## File Relationships

```
Landing Page (code/index.html)
  ├─→ Button links to code/entry.html
  └─→ Button links to code/viewer.html

Form (code/entry.html)
  ├─→ Loads quotes from code/quotes-placeholder.json
  ├─→ Submits to Google Apps Script
  └─→ Home button returns to code/index.html

Viewer (code/viewer.html)
  ├─→ Fetches data from Google Apps Script
  └─→ Home button returns to code/index.html

Google Apps Script (code/google-apps-script.gs)
  ├─→ doPost() receives form submissions
  └─→ doGet() serves entry data to viewer
```

## That's It!

Your system is now beautifully organized. Push to GitHub and you're live! 🎉
