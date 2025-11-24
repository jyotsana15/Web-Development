// Q3. Monthly Expense Tracker

// Use an array of expenses for 5 categories
const expenses = [100, 200, 50, 150, 300]; // food, travel, rent, bills, leisure

// Calculate total and average monthly expenses
let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
  totalExpenses += expenses[i];
}

const averageExpense = totalExpenses / expenses.length;

// Add 10% tax to the total
const tax = totalExpenses * 0.1;
const finalAmount = totalExpenses + tax;

// Display total, average, and final amount after tax
console.log(`Total Expenses: ${totalExpenses.toFixed(2)}`);
console.log(`Average Expense: ${averageExpense.toFixed(2)}`);
console.log(`Final Amount (including 10% tax): ${finalAmount.toFixed(2)}`);
