// Hamburger toggle functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.onclick = function() {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
};

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
