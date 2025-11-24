"use strict";

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const seats = document.getElementById("seats").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const seatsError = document.getElementById("seatsError");
  const ticketDetails = document.getElementById("ticketDetails");

  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  seatsError.textContent = "";
  ticketDetails.innerHTML = "";

  // Name (alphabets only)
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "Name must contain only alphabets.";
    isValid = false;
  }

  // Email (proper format)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  }

  // Seats (1 to 10 only)
  const numSeats = parseInt(seats, 10);
  if (isNaN(numSeats) || numSeats < 1 || numSeats > 10) {
    seatsError.textContent = "Please select between 1 and 10 seats.";
    isValid = false;
  }

  if (isValid) {
    const bookingInfo = {
      name,
      email,
      seats: numSeats,
    };

    ticketDetails.innerHTML = `
      <h3>Booking Successful!</h3>
      <p><strong>Name:</strong> ${bookingInfo.name}</p>
      <p><strong>Email:</strong> ${bookingInfo.email}</p>
      <p><strong>Seats:</strong> ${bookingInfo.seats}</p>
    `;
    alert("Booking successful! Details are shown below the form.");
  }
});
