// Q9 - JSON Audit
"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
  '{"user":"Sam","age":17}', // Added for bonus task
  '{"user":"Bob"}' // Added for missing key test
];

const cleanData = [];
const errorLogs = [];

console.log("--- JSON Audit Report ---");

rawData.forEach((entry, index) => {
  try {
    // 1. Parse each entry in a loop using try...catch.
    const parsedData = JSON.parse(entry);

    // 2. Detect missing keys (user, age) and invalid JSON.
    if (!parsedData.user || parsedData.age === undefined) {
      throw new Error(`Missing 'user' or 'age' key in entry.`);
    }

    // Convert age to Number (Bonus Task)
    const age = Number(parsedData.age);
    if (isNaN(age)) {
      throw new Error(`Invalid age format for user ${parsedData.user}.`);
    }
    parsedData.age = age;

    // 5. Add bonus: convert age to Number and filter under-18 users.
    if (parsedData.age < 18) {
      console.log(`Skipping under-18 user: ${parsedData.user}`);
      return; // Skip adding to cleanData
    }

    // 3. Push valid entries to a clean array
    cleanData.push(parsedData);

  } catch (error) {
    // 3. log errors with line numbers.
    errorLogs.push({
      lineNumber: index + 1,
      rawEntry: entry,
      error: error.message,
      errorType: error.name
    });
    console.error(`Error at line ${index + 1}: ${error.message} (Raw: "${entry}")`);
  }
});

console.log("\n--- Audit Summary ---");
console.log("Cleaned and Valid Data (Age >= 18):", cleanData);
console.log("Error Logs:", errorLogs);
console.log("---------------------");

// 4. Debug step-by-step to see how control flows on error.
// (This is a manual step for the user in their IDE)
// - Set breakpoints inside the try block and the catch block.
// - Step through the loop, especially when processing '{invalid}' or '{"id":2}'.
// - Observe how execution jumps to the catch block when an error occurs.
