// Q4. Academic Performance Evaluator

// Input marks of 5 subjects
const marks = [90, 80, 70, 60, 40];

// Calculate average and overall percentage
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}
const averageMarks = totalMarks / marks.length;
const overallPercentage = (totalMarks / (marks.length * 100)) * 100;

// Add validation
let detained = false;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 35) {
    detained = true;
    break;
  }
}

// Print the result
if (detained) {
  console.log("Detained");
} else if (overallPercentage >= 85) {
  console.log("Promoted with Distinction");
} else if (overallPercentage >= 50 && overallPercentage <= 84) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
