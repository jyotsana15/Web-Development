// Q9. Random Math Quiz Generator

// Generate two numbers (1–20) and a random operator
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

// Calculate the correct answer using switch statement
let correctAnswer;
switch (randomOperator) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  case '/':
    correctAnswer = (num1 / num2).toFixed(2);
    break;
}

// Display question and correct answer in the console
console.log(`Question: ${num1} ${randomOperator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
