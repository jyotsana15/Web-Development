// Q5. Boolean Logic Access System

// Variables for security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to check access
function checkAccess() {
  // Access is granted only if Alarm is on, Door and window are closed, and Owner is inside
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

// Test multiple outcomes
console.log("Initial state:");
checkAccess();

console.log("\nOwner leaves:");
isOwnerInside = false;
checkAccess();

console.log("\nOwner returns and forgets to lock the door:");
isOwnerInside = true;
isDoorLocked = false;
checkAccess();

console.log("\nEverything is secure again:");
isDoorLocked = true;
checkAccess();
