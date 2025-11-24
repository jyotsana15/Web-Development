// Q1. Personalized Login Greeting

// Declare variables for userName and current hour
const userName = "Jyotsana";
const currentHour = new Date().getHours();

// Greet users with time-based messages
if (currentHour < 12) {
  console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
  console.log(`Good Afternoon ${userName}!`);
} else {
  console.log(`Good Evening ${userName}!`);
}
