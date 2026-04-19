// Google Apps Script for Reflection Logging System
// Deploy as web app: Execute as "Me" | Anyone can access

const SHEET_ID = "1SfII766fQY_y3nuzL36UglqZoes256rzKLo3riK2Xa0"; // Replace with actual sheet ID
const SHEET_NAME = "Reflections"; // Name of the sheet to write to

// Main handler for POST requests from the form
function doPost(e) {
  try {
    Logger.log("=== doPost called ===");
    Logger.log("e exists: " + (e !== undefined && e !== null));

    let data = {};

    // Try different ways to get the data
    if (e && e.parameter) {
      data = e.parameter;
      Logger.log("Got data from e.parameter: " + JSON.stringify(data));
    } else if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
        Logger.log("Got data from postData (JSON): " + JSON.stringify(data));
      } catch (parseErr) {
        Logger.log("Failed to parse JSON, using raw: " + e.postData.contents);
        data = e.postData.contents;
      }
    } else {
      Logger.log("WARNING: e is undefined or has no data");
      Logger.log("e type: " + typeof e);
      Logger.log("e value: " + e);
    }

    Logger.log("Final data received: " + JSON.stringify(data));

    // Validate required fields
    if (!data.date || !data.entryType || !data.section || !data.subsection || !data.description) {
      Logger.log("VALIDATION FAILED - Missing fields");
      Logger.log("date: " + data.date);
      Logger.log("entryType: " + data.entryType);
      Logger.log("section: " + data.section);
      Logger.log("subsection: " + data.subsection);
      Logger.log("description: " + data.description);

      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Missing required fields"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Open the sheet and get the target sheet
    Logger.log("Opening spreadsheet with ID: " + SHEET_ID);
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);

    Logger.log("Looking for sheet: " + SHEET_NAME);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      Logger.log("ERROR: Sheet not found");
      // List available sheets for debugging
      const sheets = spreadsheet.getSheets();
      let sheetNames = [];
      for (let i = 0; i < sheets.length; i++) {
        sheetNames.push(sheets[i].getName());
      }
      Logger.log("Available sheets: " + sheetNames.join(", "));

      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Sheet '" + SHEET_NAME + "' not found"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Append the data
    const timestamp = new Date().toISOString();
    Logger.log("Appending row with data:");
    Logger.log("  Date: " + data.date);
    Logger.log("  Type: " + data.entryType);
    Logger.log("  Section: " + data.section);
    Logger.log("  Subsection: " + data.subsection);
    Logger.log("  Description: " + data.description.substring(0, 50) + "...");

    sheet.appendRow([
      data.date,
      data.entryType,
      data.section,
      data.subsection,
      data.description,
      timestamp
    ]);

    Logger.log("SUCCESS: Entry added");

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Entry recorded successfully",
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("EXCEPTION: " + error.toString());
    Logger.log("Stack: " + error.stack);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Server error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for viewing entries)
function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === 'getEntries') {
      return getEntriesAsJSON();
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Unknown action"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("doGet error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Server error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Get all entries from sheet as JSON
function getEntriesAsJSON() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Sheet not found",
        entries: []
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      // Only header row exists
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "No entries yet",
        entries: []
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Get all data (skip header row)
    const data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
    const entries = [];

    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      entries.push({
        date: row[0] ? new Date(row[0]).toISOString().split('T')[0] : '',
        entryType: row[1] || '',
        section: row[2] || '',
        subsection: row[3] || '',
        description: row[4] || '',
        timestamp: row[5] || ''
      });
    }

    // Sort by date descending (newest first)
    entries.sort((a, b) => new Date(b.date) - new Date(a.date));

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Entries retrieved",
      entries: entries
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("getEntriesAsJSON error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Error: " + error.toString(),
      entries: []
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to test the sheet setup
function testSheetSetup() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      Logger.log("ERROR: Sheet '" + SHEET_NAME + "' not found");
      return;
    }

    const lastRow = sheet.getLastRow();
    Logger.log("Sheet found. Total rows (including header): " + lastRow);

    // Check if header row exists
    const firstRow = sheet.getRange(1, 1, 1, 6).getValues()[0];
    Logger.log("Header row: " + firstRow.join(" | "));

  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}
