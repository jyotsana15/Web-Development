// Q1. Callback Flow
"use strict";

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // Execute the callback function
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

// Demonstrate callback flow
greetUser("Jyotsana", showEndMessage);
