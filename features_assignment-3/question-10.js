// Q10 – Nested Hoisting and Closures
"use strict";

function outer() {
  // 1. Predict and explain output.
  // Prediction:
  // - console.log(count); // Output: undefined (due to var hoisting, but not initialization)
  // - var count = 5;      // 'count' is initialized to 5 here
  console.log("Outer scope - before inner:", count); // Output: 5

  function inner() {
    // Prediction:
    // - console.log(count); // Output: undefined (inner's 'var count' is hoisted, shadowing outer's 'count')
    // - var count = 10;     // inner's 'count' is initialized to 10 here
    console.log("Inner scope:", count); // Output: 10
  }

  inner();
  console.log("Outer scope - after inner:", count); // Output: 5 (outer's count is unaffected by inner's local count)
}

console.log("--- Q10 Nested Hoisting and Closures ---");
outer();
console.log("----------------------------------------");

// 2. Show how hoisting creates separate memory contexts.
// Explanation:
// When `outer()` is called, its execution context is created.
// `var count` inside `outer` is hoisted to the top of `outer`'s scope,
// so `console.log(count)` before `var count = 5;` sees `count` as `undefined`.
//
// When `inner()` is called, its own execution context is created.
// `var count` inside `inner` is hoisted to the top of `inner`'s scope.
// This `count` is *different* from `outer`'s `count`. It shadows `outer`'s `count`
// within the `inner` function's scope.
// So, `console.log(count)` inside `inner` before `var count = 10;` would also
// output `undefined` if it were there. After `var count = 10;`, it outputs `10`.
// When `inner()` finishes, its execution context is destroyed, and `outer`'s `count`
// remains `5`. This demonstrates that `var` creates function-scoped variables,
// and nested functions create new scopes, leading to separate memory contexts for variables
// with the same name.

// 3. Convert the inner function to an arrow and note behavior changes.
console.log("\n--- Q10 Arrow Function Version ---");

function outerArrow() {
  var count = 5;
  console.log("Outer Arrow scope - before inner:", count); // Output: 5

  // Arrow functions do not have their own 'this' or 'arguments' or 'super' or 'new.target'.
  // More importantly for this problem, they do NOT create their own 'var' binding context.
  // They inherit 'var' variables from their lexical (enclosing) scope.
  const innerArrow = () => {
    // If 'var count = 10;' was here, it would be a SyntaxError in strict mode
    // because 'count' is already declared in the outer scope.
    // In non-strict mode, it would re-declare the outer 'count'.
    // To demonstrate closure, we'll just log the outer 'count'.
    console.log("Inner Arrow scope (accessing outer's count):", count); // Output: 5
  };

  innerArrow();
  console.log("Outer Arrow scope - after inner:", count); // Output: 5
}
outerArrow();
console.log("----------------------------------");

// Behavior Changes with Arrow Function:
// - An arrow function does not create its own `var` binding context.
// - If `var count = 10;` were placed inside `innerArrow`, it would attempt to re-declare
//   the `count` from `outerArrow`'s scope, leading to a `SyntaxError` in strict mode
//   ("Identifier 'count' has already been declared").
// - This highlights that arrow functions are lexically scoped; they don't introduce
//   a new `var` scope, so they "see" variables from their parent scope directly.

// 4. Add a debug session and explain the call stack flow.
// (This is a manual step for the user in their IDE)
// - Set breakpoints at the start of `outer()`, `inner()`, and `outerArrow()`, `innerArrow()`.
// - Observe the 'Call Stack' panel.
// - For `outer()` and `inner()`: You'll see `inner` pushed onto the stack on top of `outer`.
// - For `outerArrow()` and `innerArrow()`: The call stack behavior is similar for function calls.
//   The key difference is in variable scoping and how `this` is bound, which is not directly
//   visible in the call stack but in the scope pane of the debugger.
