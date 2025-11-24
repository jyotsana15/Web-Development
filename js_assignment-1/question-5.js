// Q5. Weather Activity Planner

// Create variables for temperature, isRaining, windSpeed
const temperature = 25;
const isRaining = false;
const windSpeed = 10;

// Advise a user on what to do based on temperature, rain, and wind speed
if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
  console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
  console.log("Too cold and windy - stay home.");
} else {
  console.log("Perfect day for a walk.");
}
