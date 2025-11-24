// Q1: E-Commerce Product Manager
"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercentage) {
    this.price -= (this.price * discountPercentage) / 100;
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 1200, "Electronics"),
  new Product(2, "T-shirt", 25, "Apparel"),
  new Product(3, "Coffee Maker", 80, "Appliances"),
  new Product(4, "Gaming Mouse", 1500, "Electronics"),
];

console.log("--- All Products ---");
products.forEach(product => console.log(product.displayDetails()));

console.log("\n--- Applying 10% discount to Laptop ---");
products[0].applyDiscount(10);
console.log(products[0].displayDetails());


console.log("\n--- Products with price > 1000 ---");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));
