// Q10. Citizen Eligibility Validator

// Input: age and isCitizen
const age = 20;
const isCitizen = true;

// Use nested if-else and logical operators to print the result
if (isCitizen) {
  if (age >= 18) {
    if (age >= 18 && age <= 20) {
      console.log("Eligible to vote only.");
    } else {
      console.log("Eligible for all services.");
    }
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
