// Q6. Progressive Discount System

// Input total purchase amount
const totalPurchaseAmount = 7500;

// Apply dynamic discount tiers
let discountPercentage = 0;
if (totalPurchaseAmount >= 10000) {
  discountPercentage = 25;
} else if (totalPurchaseAmount >= 5000) {
  discountPercentage = 15;
} else if (totalPurchaseAmount >= 2000) {
  discountPercentage = 5;
}

const discountAmount = (totalPurchaseAmount * discountPercentage) / 100;
const finalPrice = totalPurchaseAmount - discountAmount;

// Calculate and print
console.log(`Original Total: ${totalPurchaseAmount}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Final Price after discount: ${Math.round(finalPrice)}`);
