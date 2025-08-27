// ========================================
// PART 1: JAVASCRIPT BASICS
// Variables, conditionals, user interaction
// ========================================

// Simulate greeting user
const userName = prompt("Welcome to Cliff Airlines! What's your name?");
if (userName) {
  console.log("Hello, " + userName + "! Let's help you book your flight.");
} else {
  console.log("User did not enter a name.");
}

// Sample data for destinations and prices
const prices = {
  NBO: 450, // Nairobi
  JNB: 520, // Johannesburg
  ADD: 600  // Addis Ababa
};

// ========================================
// PART 2: FUNCTIONS
// Reusable logic blocks
// ========================================

// Function 1: Calculate total price
function calculatePrice(destination, numPassengers) {
  const basePrice = prices[destination];
  if (!basePrice) {
    return 0;
  }
  return basePrice * numPassengers;
}

// Function 2: Format flight destination
function formatFlightInfo(destinationCode) {
  const names = {
    NBO: "Nairobi (NBO)",
    JNB: "Johannesburg (JNB)",
    ADD: "Addis Ababa (ADD)"
  };
  return names[destinationCode] || "Unknown Destination";
}

// ========================================
// PART 3: LOOPS
// Repeat tasks efficiently
// ========================================

// Example 1: Log all available flights using a for...in loop
console.log("Available Flights:");
for (let code in prices) {
  console.log(`Flight to ${formatFlightInfo(code)}: $${prices[code]}`);
}

// Example 2: Create a list of messages using forEach
const tips = [
  "Pack your passport!",
  "Arrive 2 hours early.",
  "Check baggage limits.",
  "Stay hydrated during flight."
];
console.log("Travel Tips:");
tips.forEach(tip => console.log("💡 " + tip));

// ========================================
// PART 4: DOM MANIPULATION
// Make the page interactive
// ========================================

// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

  // DOM: Select form and confirmation area
  const form = document.getElementById("booking-form");
  const confirmationDiv = document.getElementById("confirmation");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value || "Not provided";
    const dest = document.getElementById("dest").value;
    const date = document.getElementById("date").value;
    const passengers = parseInt(document.getElementById("passengers").value);

    // Validate destination
    if (!dest) {
      alert("Please select a destination.");
      return;
    }

    // Use function to calculate price
    const totalPrice = calculatePrice(dest, passengers);

    // Use function to format destination
    const flightName = formatFlightInfo(dest);

    // DOM: Create and insert confirmation message
    confirmationDiv.innerHTML = `
      <h3>✅ Booking Confirmed!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Flight:</strong> ${flightName}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Passengers:</strong> ${passengers}</p>
      <p><strong>Total:</strong> $${totalPrice}</p>
      <p>Thank you for choosing Cliff Airlines!</p>
    `;
    confirmationDiv.style.padding = "15px";
    confirmationDiv.style.backgroundColor = "#e6ffed";
    confirmationDiv.style.border = "1px solid #a3cfbb";
    confirmationDiv.style.borderRadius = "6px";
    confirmationDiv.style.marginTop = "15px";

    // Scroll to confirmation
    confirmationDiv.scrollIntoView({ behavior: "smooth" });
  });

  // DOM: Toggle special offer visibility
  const offerButton = document.getElementById("toggle-offer");
  const promoBox = document.querySelector(".promo-box");
  let isHidden = false;

  offerButton.addEventListener("click", function () {
    if (isHidden) {
      promoBox.style.display = "block";
      offerButton.textContent = "Hide Offer";
      isHidden = false;
    } else {
      promoBox.style.display = "none";
      offerButton.textContent = "Show Offer";
      isHidden = true;
    }
  });
});