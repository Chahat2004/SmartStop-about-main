// script.js
AOS.init({
  duration: 1000,
  once: true,
});
const text = "HELLO , WELCOME TO SMART PARKING SPOT! ";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // typing speed (in ms)
  }
}

type();
const toggleButton = document.getElementById("toggle-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Save preference
  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // Update icon
  toggleButton.textContent = isLight ? "☀️" : "🌙";
});

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});

