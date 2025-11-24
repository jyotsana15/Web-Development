"use strict";

document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  // Name: only alphabets
  if (!/^[a-zA-Z\s]+$/.test(name.value)) {
    name.classList.add("error");
    name.classList.remove("success");
    nameError.textContent = "Name must contain only alphabets.";
    isValid = false;
  } else {
    name.classList.remove("error");
    name.classList.add("success");
    nameError.textContent = "";
  }

  // Email: valid format (example@domain.com)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add("error");
    email.classList.remove("success");
    emailError.textContent = "Invalid email format.";
    isValid = false;
  } else {
    email.classList.remove("error");
    email.classList.add("success");
    emailError.textContent = "";
  }

  // Phone: exactly 10 digits
  if (!/^\d{10}$/.test(phone.value)) {
    phone.classList.add("error");
    phone.classList.remove("success");
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    isValid = false;
  } else {
    phone.classList.remove("error");
    phone.classList.add("success");
    phoneError.textContent = "";
  }

  // Password: must contain 1 uppercase, 1 number, and 1 special character
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password.value)) {
    password.classList.add("error");
    password.classList.remove("success");
    passwordError.textContent = "Password must be at least 8 characters and include an uppercase letter, a number, and a special character.";
    isValid = false;
  } else {
    password.classList.remove("error");
    password.classList.add("success");
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
