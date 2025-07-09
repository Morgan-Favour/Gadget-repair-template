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


document.querySelectorAll('.toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const iconContainer = btn.querySelector('.icon-toggle');
    const plusIcon = iconContainer.querySelector('.fa-plus');
    const minusIcon = iconContainer.querySelector('.fa-minus');

    // Determine if content is open
    const isOpen = !content.classList.contains('hidden');

    // Toggle content visibility
    content.classList.toggle('hidden');

    // Toggle icons using !hidden
    if (isOpen) {
      plusIcon.classList.remove('hidden', '!hidden');
      minusIcon.classList.add('hidden', '!hidden');
    } else {
      plusIcon.classList.add('hidden', '!hidden');
      minusIcon.classList.remove('hidden', '!hidden');
    }
  });
});

function openModal() {
    document.getElementById('contactModal').classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('contactModal').classList.add('hidden');
  }

  // Optional: close modal if you click outside the modal box
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
      closeModal();
    }
  }); 



  // document.
