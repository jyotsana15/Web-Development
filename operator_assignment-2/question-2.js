// Q2. String Manipulation Report

// Store a product name
const productName = " wireless headphones PRO ";

// Trim extra spaces, convert to lowercase, then capitalize the first letter of each word
const cleanedProductName = productName
  .trim()
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")
  .replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log(`Cleaned Product Name: ${cleanedProductName}`);
console.log(`Length of the cleaned name: ${cleanedProductName.length}`);
