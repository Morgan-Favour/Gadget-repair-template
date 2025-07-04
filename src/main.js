// Navigation Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
});

menuClose.addEventListener('click', () => {
  menu.classList.add('translate-x-full');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
  });
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.add('translate-x-full');
  }
});

// Background Image Slider
const backgrounds = document.querySelectorAll('#bg-1, #bg-2, #bg-3');
let currentIndex = 0;

function changeBackground() {
  backgrounds.forEach(bg => bg.classList.add('opacity-0'));
  backgrounds[currentIndex].classList.remove('opacity-0');
  currentIndex = (currentIndex + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 5000);