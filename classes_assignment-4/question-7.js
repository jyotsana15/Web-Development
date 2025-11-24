"use strict";

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const loginStatus = document.getElementById("loginStatus");

  let isValid = true;
  usernameError.textContent = "";
  passwordError.textContent = "";
  loginStatus.innerHTML = "";

  // Username: at least 5 characters
  if (username.length < 5) {
    usernameError.textContent = "Username must be at least 5 characters long.";
    isValid = false;
  }

  // Password: at least 8 characters, must include number, uppercase, lowercase, special character
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
    passwordError.textContent = "Password must be at least 8 characters and include a number, uppercase, lowercase, and special character.";
    isValid = false;
  }

  if (isValid) {
    loginStatus.innerHTML = '<p class="success-message">Login successful!</p>';
    alert("Login successful!");
  } else {
    loginStatus.innerHTML = '<p class="error-message">Please fix the errors above.</p>';
  }
});
