// Q8. Employee Salary Projection

// Declare current salary and annual increment rate
let currentSalary = 50000;
const annualIncrementRate = 5; // in %

// Calculate a 5-year salary projection
const salaryProjections = [];
for (let i = 1; i <= 5; i++) {
  const incrementAmount = (currentSalary * annualIncrementRate) / 100;
  currentSalary += incrementAmount;
  salaryProjections.push({ year: i, salary: Math.round(currentSalary) });
}

// Print yearly salary in a formatted console table
console.table(salaryProjections);
