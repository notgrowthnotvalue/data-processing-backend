// Import the fs and asset modules
const assert = require('assert');
const fs = require('fs');

// Import data/processed/eduction.json file
const report = fs.readFileSync('../data/processed/education.json', 'utf-8');
// Use JSON.parse to convert file to a JS object
const reportData = JSON.parse(report);

// Run assertion test on this JS object to see if it matches the observations we 
// made above.
assert(typeof reportData === "object", "The typeof JSON should be 'object'.");

assert(reportData.length === 3, "FAILED: The array should have three members.");

for (let i = 0; i < reportData.length; i++) {
    const reportItem = reportData[i];
    assert(reportItem.label !== undefined, "FAILED: Report item missing label.");
    assert(reportItem.value !== undefined, "FAILED: Report item missing value");
}

console.log("TESTING COMPLETE.");