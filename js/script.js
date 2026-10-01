const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent =
    'Thank you! This demo form is ready to connect to WhatsApp, email, Formspree, or your own backend.';
  form.reset();
});
