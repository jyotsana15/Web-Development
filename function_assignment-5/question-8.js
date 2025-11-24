// Q8. Custom Array.prototype.myMap()
"use strict";

// Add a custom prototype method myMap() to all arrays
Array.prototype.myMap = function(callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

const numbers = [1, 2, 3];

console.log("--- Q8 Custom Array.prototype.myMap() ---");
const doubledNumbers = numbers.myMap(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers); // Expected: [2, 4, 6]

const squaredNumbers = [4, 5, 6].myMap(num => num * num);
console.log("Original:", [4, 5, 6]);
console.log("Squared:", squaredNumbers); // Expected: [16, 25, 36]
console.log("-----------------------------------------");
