/* ===== PAGE NAVIGATION ===== */
function showBuilder() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("builderPage").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showHome() {
  document.getElementById("builderPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function navigateTo(id) {
  showHome();
  setTimeout(() => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }, 100);
}

/* ===== BUILDER STEPS ===== */
let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressBar");

function showStep(index) {
  steps.forEach((step, i) =>
    step.classList.toggle("active", i === index)
  );
  progressBar.style.width = ((index + 1) / steps.length) * 100 + "%";
}

function nextStep() {
  if (currentStep < steps.length - 1) currentStep++;
  showStep(currentStep);
}

function prevStep() {
  if (currentStep > 0) currentStep--;
  showStep(currentStep);
}

showStep(currentStep);

/* ===== THEME TOGGLE ===== */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.querySelector(".theme-toggle").innerText = isDark ? "🌞" : "🌙";
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".theme-toggle").innerText = "🌞";
  }
});
