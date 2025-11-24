// Q9. ES6 Class Inheritance vs. Prototype Inheritance
"use strict";

// --- Prototype-based inheritance (from Q5 for comparison) ---
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function() {
  console.log(`(Proto) Name: ${this.name}`);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function() {
  console.log(`(Proto) Branch: ${this.branch}`);
};

// --- ES6 Class-based inheritance ---
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`(Class) Name: ${this.name}`);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name); // Call the parent class constructor
    this.branch = branch;
  }

  printBranch() {
    console.log(`(Class) Branch: ${this.branch}`);
  }
}

console.log("--- Q9 ES6 Class Inheritance vs. Prototype Inheritance ---");

console.log("\n--- Prototype Version ---");
const studentProto = new StudentProto("Bob", "Physics");
studentProto.printName();
studentProto.printBranch();
console.log("Is studentProto an instance of StudentProto?", studentProto instanceof StudentProto);
console.log("Is studentProto an instance of PersonProto?", studentProto instanceof PersonProto);

console.log("\n--- ES6 Class Version ---");
const studentClass = new StudentClass("Charlie", "Chemistry");
studentClass.printName();
studentClass.printBranch();
console.log("Is studentClass an instance of StudentClass?", studentClass instanceof StudentClass);
console.log("Is studentClass an instance of PersonClass?", studentClass instanceof PersonClass);

console.log("----------------------------------------------------------");

// Show that both class and prototype versions behave the same.
// Both versions achieve the same inheritance pattern:
// - Student objects inherit properties and methods from Person.
// - Both `instanceof` checks work identically, confirming the inheritance chain.
// - The output for `printName` and `printBranch` is functionally the same,
//   demonstrating that ES6 classes are syntactic sugar over the existing
//   prototype-based inheritance model in JavaScript.
