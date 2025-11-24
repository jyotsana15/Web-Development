// Q8. Dynamic Discount Evaluator

// Use an array of objects
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Calculate the final total
const finalTotal = cart.reduce((total, item) => {
  let itemPrice = item.price;
  if (item.category === "electronics") {
    itemPrice -= itemPrice * 0.10; // 10% discount
  } else if (item.category === "fashion") {
    itemPrice -= itemPrice * 0.05; // 5% discount
  }
  return total + itemPrice;
}, 0);

let overallDiscount = 0;
if (finalTotal > 50000) {
  overallDiscount = 0.05; // 5% overall discount
}

const finalPrice = finalTotal - (finalTotal * overallDiscount);

console.log(`The final price after all discounts is: ${finalPrice.toFixed(2)}`);
