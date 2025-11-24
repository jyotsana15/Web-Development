// Q5. Prototype Inheritance
"use strict";

// Create a Person constructor with property name
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function() {
  console.log(`Name: ${this.name}`);
};

// Create a Student constructor that inherits from Person and adds property branch
function Student(name, branch) {
  Person.call(this, name); // Call Person constructor to inherit name
  this.branch = branch;
}

// Inherit Person's prototype methods
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // Correct the constructor reference

Student.prototype.printBranch = function() {
  console.log(`Branch: ${this.branch}`);
};

// Demonstrate the prototype chain working.
const student1 = new Student("Alice", "Computer Science");

console.log("--- Q5 Prototype Inheritance ---");
student1.printName();
student1.printBranch();

console.log("Is student1 an instance of Student?", student1 instanceof Student);
console.log("Is student1 an instance of Person?", student1 instanceof Person);
console.log("----------------------------------");
