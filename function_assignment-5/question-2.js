// Q2. Apply Operation
"use strict";

function applyOperation(numbers, operation) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    results.push(operation(numbers[i]));
  }
  return results;
}

// Callback function to double a number
function double(num) {
  return num * 2;
}

// Callback function to square a number
function square(num) {
  return num * num;
}

const numbersArray = [1, 2, 3, 4];

// Use it to double each number
const doubledNumbers = applyOperation(numbersArray, double);
console.log("Doubled numbers:", doubledNumbers); // Expected: [2, 4, 6, 8]

// Use it to square each number
const squaredNumbers = applyOperation(numbersArray, square);
console.log("Squared numbers:", squaredNumbers); // Expected: [1, 4, 9, 16]
