// Q8 - Strict Mode Showdown

// Original problematic code:
/*
function demo(a, a) { // Duplicate parameter names
  total = 10;        // Undeclared variable
  delete total;      // Deleting a variable
}
demo(5, 10);
*/

console.log("--- Q8 Strict Mode Showdown ---");

// 1. Run this with and without "use strict".

// --- Without "use strict" (simulated by commenting it out) ---
console.log("\n--- Running WITHOUT 'use strict' ---");
function demoNonStrict(a, a) { // In non-strict, duplicate parameter names are allowed (second 'a' shadows first)
  // console.log("a (first):", arguments[0]); // Access first 'a'
  // console.log("a (second):", a); // Access second 'a'
  let total = 10; // Declaring 'total' to avoid implicit global in non-strict context
  // If 'total' was not declared, it would create a global variable in non-strict mode.
  // For demonstration, let's use an undeclared variable to show the difference.
  // undeclaredVar = 20; // This would create a global variable 'undeclaredVar'
  console.log("Inside demoNonStrict, total:", total);
  // delete total; // In non-strict, deleting a variable is allowed but often returns false for non-configurable properties
  // console.log("After delete total:", total); // total is still 10
}
demoNonStrict(5, 10);
// demoNonStrict(5, 10); // Call with duplicate parameters
// console.log("undeclaredVar (global):", typeof undeclaredVar !== 'undefined' ? undeclaredVar : "not created");


// --- With "use strict" ---
console.log("\n--- Running WITH 'use strict' ---");
try {
  (function() { // Using an IIFE to apply 'use strict' locally
    "use strict";

    // function demoStrict(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
    //   let total = 10;
    //   delete total;
    // }
    // demoStrict(5, 10);

    // Corrected version for strict mode:
    function demoStrictCorrect(param1, param2) {
      let total = 10;
      // delete total; // TypeError: Delete of an unqualified identifier in strict mode.
      console.log("Inside demoStrictCorrect, total:", total);
      // undeclaredVarStrict = 30; // ReferenceError: undeclaredVarStrict is not defined
    }
    demoStrictCorrect(5, 10);
    // console.log("undeclaredVarStrict (global):", typeof undeclaredVarStrict !== 'undefined' ? undeclaredVarStrict : "not created");

  })();
} catch (e) {
  console.error("Error in strict mode block:", e.message);
}


// 2. Record the errors and differences in behavior.
// - Duplicate parameter names:
//   - Non-strict: Allowed, second parameter shadows the first.
//   - Strict: SyntaxError.
// - Undeclared variables:
//   - Non-strict: Creates an implicit global variable.
//   - Strict: ReferenceError.
// - Deleting variables:
//   - Non-strict: Allowed for some properties, returns false for others.
//   - Strict: TypeError.

// 3. Explain why strict mode makes these operations illegal.
// Strict mode aims to eliminate JavaScript's "silent errors" and make code
// more secure and easier to debug.
// - Duplicate parameter names: Can lead to confusion and bugs, strict mode prevents this.
// - Undeclared variables: Prevents accidental creation of global variables, which can pollute the global scope and lead to naming conflicts. It forces explicit variable declaration.
// - Deleting variables: Prevents accidental deletion of important properties or variables, especially those that are non-configurable.

// 4. Show a correct version using ES6 rules.
console.log("\n--- Corrected Version using ES6 Rules ---");
function demoES6(param1, param2) {
  // No duplicate parameters
  let total = 10; // Use 'let' or 'const' for block-scoped variables
  // Deleting variables is generally not done this way in modern JS.
  // If you need to remove a property from an object, use `delete obj.prop`.
  // If you want to clear a variable, reassign it to `null` or `undefined`.
  console.log("Inside demoES6, param1:", param1, "param2:", param2, "total:", total);
}
demoES6(5, 10);
console.log("---------------------------------");
