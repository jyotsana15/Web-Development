// Q4. Constructor Function and Prototype
"use strict";

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Add a prototype method getDetails()
Car.prototype.getDetails = function() {
  console.log(`Car: ${this.brand} ${this.model}`);
};

// Create two car objects
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("--- Q4 Constructor Function and Prototype ---");
// Call this method to show method sharing via prototype
car1.getDetails();
car2.getDetails();
console.log("---------------------------------------------");
