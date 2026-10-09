/* ============================================
   NOVA — Homepage Specific JavaScript
   ============================================ */

// ---------- Color Picker Interaction ----------
const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
  });
});

// ---------- Smooth Scroll to Sections ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ---------- Intersection Observer for Staggered Reveals ----------
const staggerElements = document.querySelectorAll('.product-card, .feature-card, .testimonial-card, .value-card');

const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      staggerObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

staggerElements.forEach(el => staggerObserver.observe(el));

// ---------- Phone Mockup Parallax ----------
const phoneMockup = document.querySelector('.phone-mockup');

if (phoneMockup) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    phoneMockup.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  });

  document.addEventListener('mouseleave', () => {
    phoneMockup.style.transform = '';
  });
}

// ---------- Lazy Load Images with Fade-in ----------
const images = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.6s ease';

      img.onload = () => {
        img.style.opacity = '1';
      };

      if (img.complete) {
        img.style.opacity = '1';
      }

      imageObserver.unobserve(img);
    }
  });
}, {
  rootMargin: '100px 0px'
});

images.forEach(img => imageObserver.observe(img));
