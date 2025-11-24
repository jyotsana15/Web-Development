// Q9: Shopping Cart Total
"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(couponCode) {
    const couponRegex = /^(SAVE|DISC)(\d{2})$/;
    const match = couponCode.match(couponRegex);

    if (match) {
      const discountPercentage = parseInt(match[2], 10);
      const total = this.getTotal();
      const discountAmount = (total * discountPercentage) / 100;
      const finalTotal = total - discountAmount;

      console.log(`\nCoupon "${couponCode}" applied!`);
      console.log(`Discount: ${discountPercentage}%`);
      console.log(`Final Total: $${finalTotal.toFixed(2)}`);
      return finalTotal;
    } else {
      console.log("\nInvalid coupon code.");
      return this.getTotal();
    }
  }
}

const myCart = new Cart();
myCart.addItem("Laptop", 1200, 1);
myCart.addItem("Mouse", 25, 2);
myCart.addItem("Keyboard", 75, 1);

console.log("--- Shopping Cart ---");
console.log("Items:", myCart.items);
console.log(`Initial Total: $${myCart.getTotal().toFixed(2)}`);

myCart.applyCoupon("SAVE20");
myCart.applyCoupon("DISC10");
myCart.applyCoupon("INVALID");
