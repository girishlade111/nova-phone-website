/* ============================================
   NOVA — Homepage Specific JavaScript
   ============================================ */

// ---------- Color Picker Interaction ----------
const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(o => o.classList.remove('active'));
    option.classList.add('active');

    // Update phone mockup gradient based on color
    const phoneInner = document.querySelector('.product-card-image-inner');
    if (phoneInner) {
      const bg = option.style.background;
      phoneInner.style.background = bg;
    }
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
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    phoneMockup.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  });

  document.addEventListener('mouseleave', () => {
    phoneMockup.style.transform = '';
  });
}

// ---------- Dynamic Time on Phone Screen ----------
const timeElement = document.querySelector('.phone-screen-time');
const dateElement = document.querySelector('.phone-screen-date');

function updatePhoneTime() {
  if (!timeElement || !dateElement) return;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}`;

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
}

updatePhoneTime();
setInterval(updatePhoneTime, 1000);

// ---------- Showcase Control Buttons ----------
const controlBtns = document.querySelectorAll('.showcase-control-btn');

controlBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    controlBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
