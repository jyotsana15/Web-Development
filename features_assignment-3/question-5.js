// Q5 – Hoisting Lab: The Sequence Trap
"use strict";

// Original code for prediction:
/*
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}
*/

// 1. Predict and explain output.
// Prediction:
// - console.log(score); // Output: undefined (var score is hoisted, but not its assignment)
// - announce();         // Output: "Game started" (function declarations are fully hoisted)
// - var score = 50;     // Assignment happens here
// - function announce() { ... } // No effect, already hoisted
// - let status = "ready"; // 'status' is in TDZ (Temporal Dead Zone) until this line
// - startGame();        // Calls startGame
//   - console.log(status); // Output: ReferenceError: Cannot access 'status' before initialization
//                          // (let/const are hoisted but not initialized, leading to TDZ error)

// 2. Fix the code to run properly.
// To fix, ensure variables are declared before use and 'let' variables are accessed after their declaration.

console.log("--- Q5 Fixed Code ---");

// Declare score before using it
var score = 50; // Using var as per original, but let/const is generally preferred
console.log(score); // Output: 50

// Function declaration is hoisted, so it can be called here
function announce() {
  console.log("Game started");
}
announce(); // Output: "Game started"

// Declare status before using it
let status = "ready";
// Function declaration is hoisted, but 'status' needs to be initialized before startGame uses it
function startGame() {
  console.log(status); // Output: "ready"
}
startGame();

console.log("---------------------");

// 3. Rewrite using arrow functions to compare hoisting differences.
console.log("\n--- Q5 Arrow Function Version ---");

// Arrow functions are not hoisted in the same way as function declarations.
// They behave like 'var', 'let', or 'const' depending on how they are declared.

var arrowScore = 100;
console.log(arrowScore); // Output: 100

// If declared with 'var', it's hoisted as undefined
var arrowAnnounce = () => { console.log("Arrow Game started"); };
arrowAnnounce(); // Output: "Arrow Game started"

// If declared with 'let' or 'const', it's in TDZ
let arrowStatus = "arrow ready";
const arrowStartGame = () => {
  console.log(arrowStatus);
};
arrowStartGame(); // Output: "arrow ready"

console.log("-------------------------------");

// 4. Add a debug session and explain the call stack flow.
// (This is a manual step for the user in their IDE)
// - Set breakpoints at various points (e.g., start of outer(), start of inner(), console.log calls).
// - Observe the 'Call Stack' window in the debugger.
// - When `outer()` is called, it's added to the stack.
// - When `inner()` is called from within `outer()`, `inner()` is added on top of `outer()` in the stack.
// - When `inner()` completes, it's popped off the stack.
// - When `outer()` completes, it's popped off the stack.
// This demonstrates the LIFO (Last-In, First-Out) nature of the call stack.
