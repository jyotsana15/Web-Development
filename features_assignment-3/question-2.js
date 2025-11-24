// Q2 - Employee Bonus Calculator
"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Invalid", salary: "abc", years: "1" } // Added for error handling test
];

console.log("--- Employee Bonus Report ---");

employees.forEach((employee, index) => {
  try {
    // 1. Convert salary and years to numbers.
    const salary = Number(employee.salary);
    const years = Number(employee.years);

    // Check for conversion errors
    if (isNaN(salary) || isNaN(years)) {
      throw new Error(`Conversion error for employee ${employee.name}: Invalid salary or years data.`);
    }

    // 2. Calculate bonus = (salary * 0.1) if years > 3 else (salary * 0.05).
    let bonus;
    if (years > 3) {
      bonus = salary * 0.1;
    } else {
      bonus = salary * 0.05;
    }

    // 4. Use template strings to print each employee's formatted details.
    console.log(`
Employee: ${employee.name}`);
    console.log(`  Salary: $${salary.toFixed(2)}`);
    console.log(`  Years at company: ${years}`);
    console.log(`  Calculated Bonus: $${bonus.toFixed(2)}`);
    console.log(`  Total Compensation: $${(salary + bonus).toFixed(2)}`);

  } catch (error) {
    // 5. Add try...catch to handle conversion or missing property errors.
    console.error(`
Error processing employee ${employee.name || `at index ${index}`}: ${error.message}`);
  }
});

console.log("-----------------------------");
