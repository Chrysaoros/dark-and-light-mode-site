// ELEMENTS

// Navbar elements
const NAVBAR = document.getElementById("nav");
const TOGGLE_TEXT_AND_ICON = document.getElementById("toggle-icon");
const TOGGLE_SWITCH = document.querySelector("input[type=checkbox]");

// About Section images
const CODER_IMAGE = document.getElementById("coder-image");
const PROBLEM_IMAGE = document.getElementById("problem-image");
const IDEA_IMAGE = document.getElementById("idea-image");

// Project Section textbox
const PROJECT_TEXT = document.getElementById("text-box");

//--------------------------------------------------------------------------

// Change image colors depending on the site theme
function changeImageColor(color) {
  CODER_IMAGE.src = `img/undraw_proud_coder_${color}.svg`;
  PROBLEM_IMAGE.src = `img/undraw_feeling_proud_${color}.svg`;
  IDEA_IMAGE.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Toggle Dark/Light theme
function toggleDarkLightTheme(isThemeDark) {
  NAVBAR.style.backgroundColor =
    isThemeDark === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  PROJECT_TEXT.style.backgroundColor =
    isThemeDark === "dark" ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  TOGGLE_TEXT_AND_ICON.children[0].textContent =
    isThemeDark === "dark" ? "Dark Mode" : "Light Mode";
  isThemeDark === "dark"
    ? TOGGLE_TEXT_AND_ICON.children[1].classList.replace("fa-sun", "fa-moon")
    : TOGGLE_TEXT_AND_ICON.children[1].classList.replace("fa-moon", "fa-sun");

  changeImageColor(isThemeDark);
}

// Dark/Light Mode switch
function siteThemeSwitch(event) {
  let theme = "light";

  if (event.target.checked) theme = "dark";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleDarkLightTheme(theme);
}

// Event Listener
TOGGLE_SWITCH.addEventListener("change", siteThemeSwitch);

// Save current theme to Local Storage
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    TOGGLE_SWITCH.checked = true;
    toggleDarkLightTheme(currentTheme);
  }
}
