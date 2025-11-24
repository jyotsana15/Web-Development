// Q4 - Debugging Mystery
"use strict";

// Original problematic code:
/*
function showMessage() {
  greeting = "Welcome"; // undeclared
  console.log(greeting);
}
showMessage();
*/

// 1. Identify why this throws an error under strict mode.
// Under "use strict", assigning a value to an undeclared variable
// (like 'greeting' in the original code) will throw a ReferenceError.
// In non-strict mode, it would implicitly create a global variable.

// 2. Fix it and explain how scope declaration rules changed behavior.
// To fix it, declare the variable using 'let', 'const', or 'var'.
// This ensures the variable is properly scoped and not implicitly global.

function showMessageFixed() {
  let greeting = "Welcome"; // Declared with 'let'
  console.log(greeting);
}
showMessageFixed();
console.log("Fixed: 'greeting' is now properly declared within showMessageFixed's scope.");

// 3. Add a watch variable and observe the call stack in VS Code's debugger.
// (This is a manual step for the user in their IDE)
// To observe:
// - Set a breakpoint on the 'let greeting = "Welcome";' line inside showMessageFixed.
// - Run the debugger.
// - In the 'Watch' panel, add 'greeting'. You'll see it undefined before the line, then "Welcome" after.
// - In the 'Call Stack' panel, you'll see 'showMessageFixed' called from the global scope.
