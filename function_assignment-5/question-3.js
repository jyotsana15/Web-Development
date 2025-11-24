// Q3. Object `this` context
"use strict";

const user = {
  name: "Alice",
  // a method showName written as an arrow function
  showNameArrow: () => {
    console.log("Arrow function this.name:", this.name);
    // Explanation: Arrow functions do not have their own `this` context.
    // They lexically bind `this` from their surrounding scope. In this case,
    // the surrounding scope is the global scope (window in browsers, or undefined in strict mode Node.js).
    // Therefore, `this.name` refers to `window.name` (which is usually empty string)
    // or `undefined` in strict mode.
  },
  // Fix it by using a normal function.
  showNameNormal: function() {
    console.log("Normal function this.name:", this.name);
    // Explanation: Regular functions define their own `this` context.
    // When called as a method of an object (e.g., `user.showNameNormal()`),
    // `this` refers to the object itself (`user`).
  }
};

console.log("--- Q3 Object `this` context ---");
user.showNameArrow();
user.showNameNormal();
console.log("--------------------------------");
