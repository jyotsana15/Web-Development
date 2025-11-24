// Q6. Prototype Chain with Multiple Levels
"use strict";

// Person constructor
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

// Faculty constructor inheriting from Person
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function() {
  console.log(`${this.name} teaches in the ${this.department} department.`);
};

// Professor constructor inheriting from Faculty
function Professor(name, department, researchArea) {
  Faculty.call(this, name, department);
  this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function() {
  console.log(`${this.name} is researching ${this.researchArea}.`);
};

// Show how a Professor object can access all methods up the chain.
const prof = new Professor("Dr. Smith", "Computer Science", "AI Ethics");

console.log("--- Q6 Prototype Chain with Multiple Levels ---");
prof.greet();    // Method from Person.prototype
prof.teach();    // Method from Faculty.prototype
prof.research(); // Method from Professor.prototype

console.log("-----------------------------------------------");
