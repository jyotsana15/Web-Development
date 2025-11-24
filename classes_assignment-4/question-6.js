// Q6: Employee Management System
"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Alice", "Engineering", 75000),
  new Employee(2, "Bob", "Marketing", 60000),
  new Employee(3, "Charlie", "Engineering", 80000),
  new Employee(4, "David", "HR", 55000),
  new Employee(5, "Eve", "Marketing", 62000),
];

console.log("--- Employee Management System ---");

employees.forEach(employee => {
  console.log(`\nEmployee: ${employee.name}`);
  console.log(`  Annual Salary: $${employee.getAnnualSalary()}`);
  employee.applyBonus(5); // Apply a 5% bonus
  console.log(`  Salary after 5% bonus: $${employee.salary.toFixed(2)}`);
});

const totalAnnualPayout = employees.reduce((total, employee) => {
  return total + employee.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Payout for the company: $${totalAnnualPayout.toFixed(2)}`);
