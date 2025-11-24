// Q10. Departmental Employee Evaluator

// Create a nested array for departments
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

// Use loops and conditionals to print the evaluation
departments.forEach(department => {
  const departmentName = department[0];
  const score = department[1];
  let evaluation = "";

  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75 && score <= 89) {
    evaluation = "Good";
  } else if (score >= 60 && score <= 74) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }

  console.log(`Department: ${departmentName}, Score: ${score}, Evaluation: ${evaluation}`);
});
