/* ============================================
   NOVA — WIRED Magazine Design System
   Main JavaScript
   ============================================ */

// ---------- Mobile Navigation Toggle ----------
const mastheadToggle = document.querySelector('.masthead-toggle');
const mastheadNav = document.querySelector('.masthead-nav');

if (mastheadToggle && mastheadNav) {
  mastheadToggle.addEventListener('click', () => {
    mastheadNav.classList.toggle('open');
    mastheadToggle.classList.toggle('active');
  });
}

// ---------- Smooth Scroll for Anchor Links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ---------- Dynamic Year ----------
const yearElements = document.querySelectorAll('.dynamic-year');
yearElements.forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ---------- Page Load Animation ----------
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
