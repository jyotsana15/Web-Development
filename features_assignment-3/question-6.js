// Q6 – Pyramid Pattern Generator
"use strict";

// Generate:
// *
// **
// ***
// ****

function generatePyramid(limit = 5) {
  console.log(`\n--- Pyramid Pattern (Limit: ${limit}) ---`);
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
  console.log("---------------------------------");
}

generatePyramid(); // Default limit = 5

// 1. Replace let with var and observe changes in output.
// In this specific loop context, replacing 'let' with 'var' for 'i' and 'j'
// would not visibly change the *output* of the pyramid pattern itself,
// because the loop variables are re-assigned in each iteration and not
// captured in closures in a way that would expose the difference.
// However, 'var' would make 'i' and 'j' function-scoped, potentially leading
// to unexpected behavior if they were accessed outside the loop or in closures.
// 'let' provides block-scoping, which is generally safer and prevents such issues.

// Example with var (output will be the same for this simple case):
function generatePyramidWithVar(limit = 5) {
  console.log(`\n--- Pyramid Pattern (using var, Limit: ${limit}) ---`);
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
  // console.log("i after loop:", i); // 'i' would be accessible here if 'var' was used
  console.log("---------------------------------");
}
generatePyramidWithVar(3);

// 2. Debug step-by-step to track variable re-use.
// (This is a manual step for the user in their IDE)
// - Set a breakpoint inside the inner loop (e.g., on `row += "*"`)
// - Step through the code and observe the values of `i`, `j`, and `row` in the 'Variables' panel.
// - You'll see `j` reset for each `i`, and `row` build up.

// 3. Add an outer loop limit controlled by user input (default = 5).
// The `generatePyramid` function already takes a `limit` parameter.
// We can call it with different values:
generatePyramid(7);

// 4. Use "use strict" to catch undeclared loop variables.
// "use strict" is already at the top of this file. If we were to accidentally
// use an undeclared variable inside the loop (e.g., `k = 0;` instead of `let k = 0;`),
// strict mode would throw a ReferenceError, preventing implicit global creation.
// For example, if we changed `let row = "";` to `row = "";` without `let`,
// strict mode would catch it.

