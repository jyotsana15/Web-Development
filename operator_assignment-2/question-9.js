// Q9. Odd-Even Number Analyzer

// Accept numbers 1–30 in an array using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Classify numbers and store results in a new array
const results = numbers.map(number => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
});

// Display the results
console.log(results);
