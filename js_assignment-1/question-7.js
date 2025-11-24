// Q7. Smart Guessing Game (Number Range)

// Generate a random secret number between 1–50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Let userGuess be a variable with a test value
const userGuess = 30;

// Print the result
if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
  console.log("Very close!");
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}
console.log(`The secret number was: ${secretNumber}`);
