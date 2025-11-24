// Q7. Closure (makeMultiplier)
"use strict";

function makeMultiplier(multiplier) {
  // Explain how closure works in this example.
  // The inner function (anonymous function returned by makeMultiplier)
  // "closes over" the `multiplier` variable from its outer (makeMultiplier) scope.
  // Even after `makeMultiplier` has finished executing and its execution context
  // is popped off the call stack, the inner function still retains access to
  // `multiplier`. This is a closure.
  return function(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("--- Q7 Closure (makeMultiplier) ---");
console.log("Triple 5:", triple(5));   // Expected: 15
console.log("Double 10:", double(10)); // Expected: 20
console.log("-----------------------------------");
