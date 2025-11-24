// Q3 - Transaction Validator
"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
  { id: 4, amount: 1500 }
];

const validTransactions = [];
const invalidTransactions = [];
let successfulTransactionsCount = 0;
let failedTransactionsCount = 0;

// Custom Error Classes
class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class MissingDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingDataError";
  }
}

class NullEntryError extends Error {
  constructor(message) {
    super(message);
    this.name = "NullEntryError";
  }
}

console.log("--- Transaction Validation Report ---");

transactions.forEach((transaction, index) => {
  try {
    // 1. Loop through each transaction.
    // 2. Throw custom errors for: Negative amount, Missing amount or id, Null entries
    if (transaction === null) {
      throw new NullEntryError(`Transaction at index ${index} is null.`);
    }
    if (!transaction || transaction.id === undefined || transaction.amount === undefined) {
      throw new MissingDataError(`Transaction at index ${index} has missing 'id' or 'amount'.`);
    }
    if (transaction.amount < 0) {
      throw new NegativeAmountError(`Transaction ID ${transaction.id} has a negative amount: ${transaction.amount}.`);
    }

    validTransactions.push(transaction);
    successfulTransactionsCount++;
    console.log(`Transaction ID ${transaction.id}: Valid. Amount: ${transaction.amount}`);

  } catch (error) {
    // 3. Catch and categorize each error type in arrays (invalid, valid).
    invalidTransactions.push({ transaction, error: error.message, type: error.name });
    failedTransactionsCount++;
    console.error(`Error for transaction at index ${index}: ${error.message} (Type: ${error.name})`);
  }
});

console.log("\n--- Final Report ---");
console.log(`Total Transactions: ${transactions.length}`);
console.log(`Successful Transactions: ${successfulTransactionsCount}`);
console.log(`Failed Transactions: ${failedTransactionsCount}`);
console.log("Valid Transactions Data:", validTransactions);
console.log("Invalid Transactions Details:", invalidTransactions);
console.log("------------------------------------\n");

// 5. Use a breakpoint to watch variable states. (This would be done in a debugger like VS Code)
// Example: Set a breakpoint inside the catch block and inspect 'transaction', 'error', 'index'.
