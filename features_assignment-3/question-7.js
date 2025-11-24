// Q7 - Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract", "multiply"]; // Added 'multiply' for completeness
const num1 = 25, num2 = 0;

// Custom Error Class for invalid operations
class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

function smartCalculate(operation, a, b) {
  try {
    let result;
    // 1. Use a switch to handle each operation.
    switch (operation) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "multiply":
        result = a * b;
        break;
      case "divide":
        // 2. Add custom error handling for divide by 0
        if (b === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        result = a / b;
        break;
      case "power":
        result = Math.pow(a, b);
        break;
      case "root":
        // 2. Add custom error handling for root of negative number.
        if (a < 0) {
          throw new Error("Cannot calculate square root of a negative number.");
        }
        result = Math.sqrt(a);
        break;
      default:
        // 3. If operation not recognized, throw InvalidOperationError.
        throw new InvalidOperationError(`Operation "${operation}" is not recognized.`);
    }
    return { status: "Success", operation, num1: a, num2: b, result };
  } catch (error) {
    return { status: "Failed", operation, num1: a, num2: b, error: error.message, errorType: error.name };
  }
}

console.log("--- Smart Calculator Results ---");

// Test cases
console.log(smartCalculate("add", num1, num2));
console.log(smartCalculate("divide", num1, num2)); // Division by zero
console.log(smartCalculate("divide", num1, 5));
console.log(smartCalculate("power", num1, 2));
console.log(smartCalculate("root", -9, 0)); // Root of negative
console.log(smartCalculate("root", 16, 0));
console.log(smartCalculate("subtract", num1, num2));
console.log(smartCalculate("unknown", num1, num2)); // Invalid operation
console.log(smartCalculate("multiply", num1, 10));

console.log("--------------------------------");
