# NOVA — Developer Guide

This guide provides comprehensive information for developers who want to understand, modify, or extend the NOVA smartphone brand website.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [HTML Structure](#html-structure)
- [CSS Architecture](#css-architecture)
- [JavaScript Architecture](#javascript-architecture)
- [Adding a New Page](#adding-a-new-page)
- [Modifying the Design System](#modifying-the-design-system)
- [Adding New Animations](#adding-new-animations)
- [Working with the Phone Mockup](#working-with-the-phone-mockup)
- [Responsive Design](#responsive-design)
- [Performance Optimization](#performance-optimization)
- [Debugging](#debugging)
- [Testing](#testing)
- [Deployment](#deployment)
- [Git Workflow](#git-workflow)

---

## Architecture Overview

The NOVA website follows a **static multi-page architecture** with shared assets:

```
Request Flow:
  Browser → HTML Page → Shared CSS → Shared JS → Page-Specific JS
```

**Key Principles:**
- No build step required
- No framework dependencies
- Shared CSS custom properties for theming
- Modular JavaScript with page-specific enhancements
- Progressive enhancement (works without JS, better with JS)

---

## File Structure

```
nova-phone-website/
├── index.html                  # Homepage
├── products.html               # Product listing
├── product-detail.html         # Single product page
├── about.html                  # Company information
├── contact.html                # Contact form & info
├── .gitignore                  # Git ignore rules
├── README.md                   # Project overview
├── _headers                    # GitHub Pages headers (optional)
├── CNAME                       # Custom domain (optional)
├── docs/
│   ├── CONFIGURATION.md        # Configuration guide
│   ├── INTEGRATIONS.md         # Third-party services
│   └── DEVELOPER_GUIDE.md      # This file
└── assets/
    ├── css/
    │   └── style.css           # Complete design system
    ├── js/
    │   ├── main.js             # Shared functionality
    │   └── home.js             # Homepage-specific code
    ├── fonts/                  # Self-hosted fonts (optional)
    └── images/                 # Image assets (optional)
```

---

## HTML Structure

### Page Template

Every page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title — NOVA</title>
  <meta name="description" content="Page description for SEO.">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <!-- Navigation (copy from index.html) -->
  <nav class="nav">...</nav>

  <!-- Page Content -->
  <main>
    <!-- Page-specific sections -->
  </main>

  <!-- Footer (copy from index.html) -->
  <footer class="footer">...</footer>

  <!-- Scripts -->
  <script src="assets/js/main.js"></script>
  <!-- Page-specific script (if needed) -->
</body>
</html>
```

### Semantic HTML Elements

| Element | Usage |
|---------|-------|
| `<nav>` | Main navigation |
| `<main>` | Primary content wrapper |
| `<section>` | Thematic content grouping |
| `<article>` | Self-contained content (cards) |
| `<header>` | Page/section headers |
| `<footer>` | Site footer |
| `<h1>`-`<h6>` | Heading hierarchy |
| `<ul>`/ `<ol>` | Navigation links, lists |

### Accessibility Requirements

All pages must include:

```html
<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">Skip to main content</main>

<!-- ARIA labels on interactive elements -->
<button aria-label="Toggle navigation menu">
<nav aria-label="Main navigation">

<!-- Alt text on images -->
<img src="..." alt="Descriptive text">

<!-- Focus indicators -->
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

## CSS Architecture

### Design Tokens (Custom Properties)

All design values are defined as CSS custom properties in `:root`:

```css
:root {
  /* Colors */
  --color-bg: #06060b;
  --color-accent: #7c5cff;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --space-sm: 1rem;
  --space-md: 1.5rem;

  /* Shadows */
  --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);

  /* Transitions */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### CSS Organization

The stylesheet is organized in this order:

1. **Design Tokens** — CSS custom properties
2. **Reset & Base** — Universal reset, body styles
3. **Typography** — Heading and paragraph styles
4. **Utility Classes** — Container, section, text helpers
5. **Buttons** — All button variants
6. **Navigation** — Nav bar styles
7. **Hero Section** — Homepage hero
8. **Stats Bar** — Animated counters
9. **Product Cards** — Product grid cards
10. **Feature Highlights** — Feature cards
11. **Showcase** — Camera showcase
12. **Testimonials** — Review cards
13. **CTA Section** — Call-to-action
14. **Footer** — Site footer
15. **Page Hero** — Inner page headers
16. **Product Detail** — Detail page styles
17. **Specs Table** — Specification tables
18. **About Page** — Story and values
19. **Contact Page** — Form styles
20. **Animations** — Keyframe definitions
21. **Scroll Reveal** — Intersection Observer classes
22. **Responsive** — Media queries
23. **Reduced Motion** — Accessibility overrides

### Adding New CSS

When adding new styles:

1. Place them in the appropriate section
2. Use existing custom properties
3. Follow BEM-like naming: `.block__element--modifier`
4. Add responsive variants in the media query section

```css
/* Example: New component */
.new-component {
  padding: var(--space-md);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out-expo);
}

.new-component:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

### Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }
```

---

## JavaScript Architecture

### Module Pattern

JavaScript uses an IIFE-like pattern with DOM-ready initialization:

```javascript
// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initCounters();
});
```

### main.js — Shared Functions

| Function | Purpose |
|----------|---------|
| Navigation scroll effect | Adds `.scrolled` class on scroll |
| Mobile menu toggle | Opens/closes mobile nav |
| Scroll reveal | Intersection Observer for `.reveal` elements |
| Animated counters | Counts up when visible |
| Parallax effect | Moves elements on scroll |
| Tilt effect | 3D card tilt on mouse move |
| Dynamic year | Updates copyright year |
| Toast notifications | Shows temporary messages |

### home.js — Homepage Functions

| Function | Purpose |
|----------|---------|
| Color picker | Updates phone gradient on selection |
| Phone parallax | 3D rotation following mouse |
| Dynamic clock | Updates phone screen time |
| Staggered reveals | Delayed card animations |
| Showcase controls | Camera mode button toggling |

### Adding New JavaScript

Create a new file in `assets/js/` and include it in the HTML:

```html
<script src="assets/js/main.js"></script>
<script src="assets/js/your-page.js"></script>
```

Pattern for page-specific code:

```javascript
// Wrap in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if elements exist on this page
  const element = document.querySelector('.your-selector');
  if (!element) return;

  // Your code here
});
```

---

## Adding a New Page

### Step-by-Step

1. **Create the HTML file:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Page — NOVA</title>
  <meta name="description" content="Description of the new page.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <!-- Copy nav from index.html, update active link -->
  <nav class="nav">...</nav>

  <!-- Page hero -->
  <section class="page-hero">
    <div class="container page-hero-content">
      <div class="section-label" style="justify-content: center;">Section</div>
      <h1>Page <span class="text-gradient">Title</span></h1>
      <p>Page description goes here.</p>
    </div>
  </section>

  <!-- Page content -->
  <section class="section">
    <div class="container">
      <!-- Your content -->
    </div>
  </section>

  <!-- Copy footer from index.html -->
  <footer class="footer">...</footer>

  <script src="assets/js/main.js"></script>
</body>
</html>
```

2. **Update navigation links** in all existing pages:

```html
<li><a href="new-page.html" class="nav-link">New Page</a></li>
```

3. **Add footer link** in all pages:

```html
<li><a href="new-page.html" class="footer-link">New Page</a></li>
```

4. **Test the page** locally before committing

---

## Modifying the Design System

### Changing Colors

Edit the custom properties in `:root`:

```css
:root {
  --color-accent: #7c5cff;        /* Change primary accent */
  --color-accent-cyan: #4ae3ff;   /* Change secondary accent */
  --color-bg: #06060b;            /* Change background */
}
```

### Changing Fonts

1. Update the Google Fonts URL in all HTML files
2. Update the CSS custom properties:

```css
:root {
  --font-display: 'New Font', sans-serif;
  --font-body: 'Another Font', sans-serif;
}
```

### Changing Spacing

```css
:root {
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
}
```

### Changing Border Radius

```css
:root {
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-xl: 36px;
}
```

### Changing Animations

```css
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.8s;
}
```

---

## Adding New Animations

### CSS Keyframe Animation

```css
/* Define keyframes */
@keyframes yourAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply to element */
.your-element {
  animation: yourAnimation 0.6s var(--ease-out-expo) both;
}
```

### Scroll-Triggered Animation

Add the `.reveal` class to any element:

```html
<div class="reveal">Content</div>
<div class="reveal reveal-delay-1">Delayed content</div>
```

### JavaScript-Triggered Animation

```javascript
function animateElement(element) {
  element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
}
```

---

## Working with the Phone Mockup

### Structure

```html
<div class="phone-mockup">
  <div class="phone-screen">
    <div class="phone-screen-content">
      <div class="phone-screen-time">9:41</div>
      <div class="phone-screen-date">Friday, October 9</div>
      <div class="phone-screen-icons">
        <div class="phone-icon">Camera</div>
        <!-- More icons -->
      </div>
    </div>
  </div>
</div>
```

### Customizing the Screen

Edit the `.phone-screen` background gradient:

```css
.phone-screen {
  background: linear-gradient(180deg, #1a1040 0%, #0d0d1f 100%);
}
```

### Adding Screen Content

```html
<div class="phone-screen-content">
  <div class="phone-screen-time" id="phoneTime">9:41</div>
  <div class="phone-screen-date" id="phoneDate">Friday, October 9</div>
  <!-- Add your custom content below -->
  <div class="custom-screen-element">
    <!-- Content -->
  </div>
</div>
```

### Parallax Effect

The phone mockup responds to mouse movement via `home.js`:

```javascript
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  phoneMockup.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
});
```

---

## Responsive Design

### Breakpoint Strategy

| Breakpoint | Target | Layout Changes |
|------------|--------|----------------|
| > 1024px | Desktop | Full multi-column grids |
| <= 1024px | Tablet | 2-column grids, stacked hero |
| <= 768px | Mobile | Single column, hamburger nav |

### Testing Responsiveness

```javascript
// Add to console for debugging
window.addEventListener('resize', () => {
  console.log('Viewport:', window.innerWidth, 'x', window.innerHeight);
});
```

### Mobile-First Approach

When adding new styles, start with mobile and enhance for desktop:

```css
/* Base (mobile) */
.new-component {
  padding: var(--space-sm);
}

/* Tablet and up */
@media (min-width: 768px) {
  .new-component {
    padding: var(--space-md);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .new-component {
    padding: var(--space-lg);
  }
}
```

---

## Performance Optimization

### Current Optimizations

- Single CSS file (no extra requests)
- Two JS files (minimal overhead)
- `font-display: swap` for fonts
- `preconnect` for Google Fonts
- CSS animations (GPU-accelerated)
- Intersection Observer (no scroll listeners)

### Further Optimizations

```html
<!-- Preload critical resources -->
<link rel="preload" href="assets/css/style.css" as="style">
<link rel="preload" href="assets/js/main.js" as="script">

<!-- Lazy load images -->
<img src="..." loading="lazy" alt="...">

<!-- Defer non-critical JS -->
<script src="assets/js/home.js" defer></script>
```

### Minification

For production, minify CSS and JS:

```bash
# Using npx
npx clean-css-cli assets/css/style.css -o assets/css/style.min.css
npx terser assets/js/main.js -o assets/js/main.min.js
```

---

## Debugging

### Browser DevTools

```javascript
// Add debug logging
const DEBUG = true;

function log(...args) {
  if (DEBUG) console.log('[NOVA]', ...args);
}

// Usage
log('Navigation initialized');
log('Scroll position:', window.pageYOffset);
```

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Styles not loading | Wrong file path | Check `href` in `<link>` |
| JS not executing | Script order | Ensure `main.js` loads first |
| Animations not working | Reduced motion | Check OS accessibility settings |
| Fonts not loading | No internet | Google Fonts requires CDN |
| Mobile menu broken | Missing class | Verify `nav-toggle` exists |

### Debug CSS

```css
/* Add to temporarily visualize layout */
* {
  outline: 1px solid rgba(255, 0, 0, 0.3);
}
```

---

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] Mobile menu opens/closes
- [ ] Scroll animations trigger
- [ ] Counters animate on scroll
- [ ] Tilt effect works on cards
- [ ] Color picker updates phone
- [ ] Contact form submits
- [ ] Responsive at 320px, 768px, 1024px, 1920px
- [ ] No console errors
- [ ] Fonts load correctly

### Cross-Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Performance Testing

```bash
# Lighthouse CLI
npx lighthouse https://girishlade111.github.io/nova-phone-website --view

# WebPageTest
# https://www.webpagetest.org/
```

---

## Deployment

### GitHub Pages

```bash
# Push to main branch
git add .
git commit -m "Description of changes"
git push origin main

# Enable in repo settings: Settings > Pages > Source: main branch
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

Upload all files to any static hosting:
- Shared hosting (cPanel, Plesk)
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages

---

## Git Workflow

### Branching Strategy

```
main          → Production (deployed)
├── develop   → Integration branch
├── feature/* → New features
├── fix/*     → Bug fixes
└── hotfix/*  → Urgent production fixes
```

### Commit Convention

```
feat: Add new product card animation
fix: Resolve mobile menu z-index issue
docs: Update README with deployment steps
style: Adjust hero section spacing
refactor: Extract shared animation logic
perf: Optimize image loading
test: Add responsive breakpoint tests
chore: Update .gitignore
```

### Pull Request Process

1. Create feature branch from `main`
2. Make changes with clear commits
3. Push branch to GitHub
4. Open Pull Request with description
5. Request review
6. Merge after approval
7. Delete feature branch

---

## Code Style Guide

### HTML

- Use semantic elements
- Indent with 2 spaces
- Quote all attribute values
- Include `alt` on all images
- Use `aria-label` on icon-only buttons

### CSS

- Use custom properties for all values
- Indent with 2 spaces
- Group related properties
- Comment complex selectors
- Mobile-first media queries

### JavaScript

- Use `const` and `let` (no `var`)
- Arrow functions for callbacks
- Template literals for strings
- Early returns over nesting
- Comment complex logic

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Can I Use](https://caniuse.com/)
- [Web.dev](https://web.dev/)

---

*Last updated: October 2026*
