function loadNav() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadNav);
document.addEventListener("DOMContentLoaded", loadFooter);

// Nav Controls
const sideNav = document.getElementById("sidenav");
const aboutNav = document.getElementById("about-nav");
const solutionsNav = document.getElementById("solutions-nav");

function closeNav() {
  sideNav.classList.add("translate-x-full");
}

function openNav() {
  sideNav.classList.remove("translate-x-full");
}

function slideIn() {
  aboutNav.classList.add("translate-y-[21rem]");
  aboutNav.classList.remove("opacity-0");
}

function slideOut() {
  aboutNav.classList.remove("translate-y-[21rem]");
  aboutNav.classList.add("opacity-0");
}

function slideSolutionsNavIn() {
  solutionsNav.classList.add("translate-y-[21rem]");
  solutionsNav.classList.remove("opacity-0");
}

function slideSolutionsNavOut() {
  solutionsNav.classList.remove("translate-y-[21rem]");
  solutionsNav.classList.add("opacity-0");
}

function joinNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById("emailInput").value;
  console.log("Email:", email);
  document.getElementById("newsletterForm").reset();
}

// Request a demo form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      businessEmail: document.getElementById("businessEmail").value,
      jobTitle: document.getElementById("jobTitle").value,
      country: document.getElementById("country").value,
      message: document.getElementById("message").value,
    };
    console.log("Form Data:", formData);
    document.getElementById("contactForm").reset();
  });
