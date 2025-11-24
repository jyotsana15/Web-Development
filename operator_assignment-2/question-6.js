// Q6. Event-Based Counter Simulation

// Use variable count
let count = 0;

// Create two functions: increment() and decrement()
function increment() {
  count++;
  logCount();
}

function decrement() {
  count--;
  logCount();
}

// Each function modifies count and logs the current value
function logCount() {
  console.log(`The current count is: ${count}`);
}

// Simulate “click” by calling these functions manually in code
console.log("Simulating clicks:");
increment();
increment();
decrement();
increment();
