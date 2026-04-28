const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.innerText = "");

  // Name validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email validation
  if (!validateEmail(email.value)) {
    showError(email, "Enter valid email");
    isValid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.innerText = "Form submitted successfully!";
    form.reset();
  }
});

// Show error
function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
}

// Email validation function
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}