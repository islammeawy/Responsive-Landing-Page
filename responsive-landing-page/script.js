// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//Sticky Header Shrink on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Dark/Light Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
// Change button icon based on theme
  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "☀️";
  } else {
    themeToggleBtn.textContent = "🌙";
  }


  //Make buttons in the hero section show a loading spinner or alert.
  const getFreeBtn = document.querySelector(".primary");
const demoBtn = document.querySelector(".secondary");

getFreeBtn.addEventListener("click", () => {
  alert("Thank you for choosing Taskify! Sign-up feature coming soon 🚀");
});

demoBtn.addEventListener("click", () => {
  alert("Demo request received! We'll contact you shortly 📨");
});


//Elements slide in when they appear in view.
const revealElements = document.querySelectorAll(".feature, .pricing-card, .review");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));


