// ELEMENTS 

// Navbar elements
const NAVBAR = document.getElementById("nav");
const TOGGLE_TEXT_AND_ICON = document.getElementById("toggle-icon");
const TOGGLE_SWITCH = document.querySelector('input[type=checkbox]');

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

// Dark Mode theme
function darkMode() {
    NAVBAR.style.backgroundColor = "rgb(0 0 0 / 50%)";
    PROJECT_TEXT.style.backgroundColor = "rgb(255 255 255 / 50%)";
    TOGGLE_TEXT_AND_ICON.children[0].textContent = "Dark Mode";
    TOGGLE_TEXT_AND_ICON.children[1].classList.replace("fa-sun", "fa-moon");

    changeImageColor("dark");
}

// Light Mode theme
function lightMode() {
    NAVBAR.style.backgroundColor = "rgb(255 255 255 / 50%)";
    PROJECT_TEXT.style.backgroundColor = "rgb(0 0 0 / 50%)";
    TOGGLE_TEXT_AND_ICON.children[0].textContent = "Light Mode";
    TOGGLE_TEXT_AND_ICON.children[1].classList.replace("fa-moon", "fa-sun");

    changeImageColor("light");
}

// Switch to Dark/Light Mode
function switchSiteTheme(event) {
   if (event.target.checked) {
       document.documentElement.setAttribute("data-theme", "dark");
       darkMode();
   } else {
       document.documentElement.setAttribute("data-theme", "light");
       lightMode();
   }
}

// Event Listener
TOGGLE_SWITCH.addEventListener("change", switchSiteTheme);