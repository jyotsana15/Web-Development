// Q1 - Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", "", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

console.log("--- Dynamic Data Parser Report ---");

apiData.forEach((item, index) => {
  console.log(`\nProcessing item at index ${index}: "${item}"`);

  // 1. Convert each value into a Number, Boolean, and String form.
  const numValue = Number(item);
  const boolValue = Boolean(item);
  const stringValue = String(item);

  console.log(`  Number: ${numValue} (Type: ${typeof numValue})`);
  console.log(`  Boolean: ${boolValue} (Type: ${typeof boolValue})`);
  console.log(`  String: "${stringValue}" (Type: ${typeof stringValue})`);

  // 2. Skip invalid numbers (NaN, "", "100px") but log them separately.
  // 3. Build two arrays one for valid numeric data, one for invalid.
  if (isNaN(numValue) || item === "" || item === "100px") {
    console.log(`  Invalid number detected: "${item}"`);
    invalidNumericData.push(item);
  } else {
    validNumericData.push(numValue);
  }
});

console.log("\n--- Summary ---");
console.log("Valid Numeric Data:", validNumericData);
console.log("Invalid Numeric Data (logged separately):", invalidNumericData);
console.log("----------------------------------");
