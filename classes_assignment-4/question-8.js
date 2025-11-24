"use strict";

const user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const userDetailsDiv = document.getElementById("userDetails");

function displayUser() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;

  userDetailsDiv.innerHTML = `
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Age:</strong> ${user.age}</p>
  `;
}

document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = parseInt(ageInput.value, 10);
  displayUser();
  alert("User object updated!");
});

// Initial display
displayUser();
