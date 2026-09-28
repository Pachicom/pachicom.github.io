const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

const savedTheme = localStorage.getItem('pachicom-theme');
if (savedTheme === 'light') body.classList.add('light');

function updateThemeIcon() {
  document.querySelector('.theme-icon').textContent = body.classList.contains('light') ? '☀' : '☾';
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('pachicom-theme', body.classList.contains('light') ? 'light' : 'dark');
  updateThemeIcon();
});

menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Плавное появление элементов при прокрутке.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ======================================================
// ССЫЛКИ: замени "#" на свои реальные ссылки.
// GitHub: элементы с data-placeholder="github"
// Telegram: элементы с data-placeholder="telegram"
// ======================================================

document.querySelectorAll('[data-placeholder]').forEach(link => {
  if (link.getAttribute('href') === '#') {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Здесь нужно вставить твою ссылку.');
    });
  }
});
