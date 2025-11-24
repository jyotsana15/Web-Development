// Q7. Customer Feedback Processor

// Store a feedback string
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Use string methods to analyze comments for positivity and length
const words = feedback.split(" ");
const wordCount = words.length;

const hasNegativeWords = feedback.includes("bad") || feedback.includes("poor");

// Print the result
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);

if (hasNegativeWords) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}
