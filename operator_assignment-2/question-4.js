// Q4. Array Performance Analyzer

// Create an array of 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Calculate highest, lowest, average score, and number of students who passed
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
const passingStudents = scores.filter(score => score >= 50).length;

// Display a full summary in a formatted output
console.log("--- Student Performance Summary ---");
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Number of students who passed (>= 50): ${passingStudents}`);
console.log("------------------------------------");
