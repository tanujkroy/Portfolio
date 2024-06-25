function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the joining date and current date
var joiningDate = new Date('2020-12-14');
var currentDate = new Date();

// Calculate the difference in milliseconds
var differenceMs = currentDate - joiningDate;

// Convert milliseconds to years
var years = differenceMs / (1000 * 60 * 60 * 24 * 365.25);

// Simplify the years of experience
var simplifiedYears = Math.round(years * 10) / 10;

// Display the simplified years of experience
document.getElementById('experienceDt').innerHTML = simplifiedYears + '+ years <br />Android Developer';