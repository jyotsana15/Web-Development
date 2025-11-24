// Q1. Scope Conflict Resolver

// Declare a global variable bonus
let bonus = 5000;

function calculateSalary(isPermanent) {
  // Declare a local variable salary
  let salary = 40000;

  // Add the bonus only if a local variable isPermanent (boolean) is true
  if (isPermanent) {
    salary += bonus;
  }

  // Print total salary inside the function
  console.log(`The total salary is: ${salary}`);
}

// Demonstrate how changing isPermanent affects the global variable scope
console.log("When isPermanent is true:");
calculateSalary(true);

console.log("When isPermanent is false:");
calculateSalary(false);
