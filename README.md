# NOVA — Smartphone Brand Website

A premium, multi-page smartphone brand website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies — just clean, modern web technologies crafted with precision.

**Live Demo:** [https://girishlade111.github.io/nova-phone-website](https://girishlade111.github.io/nova-phone-website)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Design System](#design-system)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

NOVA is a fictional smartphone brand website showcasing a complete product lineup — from flagship powerhouses to compact essentials. The site demonstrates modern web development practices with a dark, premium aesthetic featuring rich gradients, smooth animations, and thoughtful interaction design.

### Highlights

- **5 fully-designed pages** with consistent navigation and footer
- **Zero dependencies** — no npm packages, no frameworks, no build step
- **CSS custom properties** design system for easy theming
- **Vanilla JavaScript** with Intersection Observer, mouse tracking, and dynamic content
- **Fully responsive** from 320px mobile to 4K desktop
- **Accessible** with ARIA labels, focus indicators, and reduced motion support
- **Performance optimized** with minimal requests and GPU-accelerated animations

---

## Features

### Visual Design

- Dark premium theme with mesh gradient backgrounds and floating orbs
- Glassmorphism cards with backdrop blur and subtle borders
- Rich color palette — electric violet, cyan, pink, and gold accents on deep space black
- Space Grotesk display font paired with Inter body text and JetBrains Mono labels
- Layered shadows creating depth and dimension
- Gradient text, gradient borders, and gradient buttons
- Custom scrollbar styling

### Animations and Motion

- Scroll-triggered reveal animations with configurable stagger delays
- 3D tilt effect on product cards that follows the mouse cursor
- Floating phone mockup with continuous gentle bob animation
- Mouse-tracking parallax on the hero phone mockup
- Animated stat counters that count up when scrolled into view
- Pulsing live indicator dot on the hero badge
- Floating spec cards orbiting the phone mockup
- Smooth cubic-bezier easing on all transitions
- `prefers-reduced-motion` media query disables all animation for users who prefer it

### Interactive Elements

- Color picker that dynamically updates the phone mockup gradient
- Live clock on the phone screen mockup that updates every second
- Camera mode selector buttons on the showcase phone
- Working contact form with loading and success states
- Product comparison table on the products page
- Mobile hamburger menu with smooth open/close animation
- Navigation bar that transitions to glass blur on scroll

### Multi-Page Architecture

- Fixed navigation with active page indicator and animated underline
- Consistent header and footer across all pages
- Smooth scroll to anchor links
- Page-specific hero sections with gradient backgrounds
- Shared CSS and JavaScript with page-specific enhancements

---

## Pages

| Page | File | Route | Description |
|------|------|-------|-------------|
| Home | `index.html` | `/` | Hero with animated phone, stats bar, product cards, features, camera showcase, testimonials, CTA |
| Products | `products.html` | `/products.html` | Full 6-product grid with comparison table |
| Product Detail | `product-detail.html` | `/product-detail.html` | X1 Pro deep-dive with specs, color picker, and full spec table |
| About | `about.html` | `/about.html` | Company story, values, and leadership team profiles |
| Contact | `contact.html` | `/contact.html` | Contact info cards, working form, FAQ section, map placeholder |

### Page Details

#### Home
- Animated hero with floating phone mockup and floating spec cards
- Stats bar with animated counters (50M+ users, 120 countries, 48hr battery, 200MP camera)
- 3 featured product cards with tilt-on-hover effect
- 4 feature highlight cards (camera, charging, AI, durability)
- Camera showcase with interactive phone mockup and color picker
- 3 testimonial cards with star ratings
- Call-to-action section

#### Products
- 6 product cards (X1 Pro, X1, Mini, X1 Pro Max, Watch, Buds Pro)
- Full comparison table with specs side-by-side
- "Talk to an Expert" CTA section

#### Product Detail
- Large phone mockup with floating animation
- Product description and key specs grid
- Interactive color picker (4 colors)
- Complete 14-row specification table
- Buy Now and Compare CTAs

#### About
- Company mission and story section
- 3 value cards (Simplicity, Privacy, Sustainability)
- 3 leadership team profiles with quotes
- Join the Family CTA

#### Contact
- 4 contact info cards (Email, Phone, Address, Live Chat)
- Working contact form with validation and submit animation
- Map placeholder with location label
- 4 FAQ cards (Shipping, Returns, Warranty, Payment)

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Markup | HTML5 | — |
| Styling | CSS3 | Custom Properties, Grid, Flexbox |
| Scripting | JavaScript (ES6+) | Vanilla, no libraries |
| Fonts | Google Fonts | Space Grotesk, Inter, JetBrains Mono |
| Hosting | GitHub Pages | Free static hosting |
| Version Control | Git + GitHub | — |

### Why No Framework?

This project intentionally uses zero frameworks and zero build tools to demonstrate:

- Mastery of fundamental web technologies
- Minimal payload (no framework overhead)
- Instant deployment to any static host
- Easy to understand and modify
- No dependency updates or security patches needed

---

## Project Structure

```
nova-phone-website/
├── index.html                  # Homepage
├── products.html               # Product lineup & comparison
├── product-detail.html         # X1 Pro detail page
├── about.html                  # Company story & team
├── contact.html                # Contact form & FAQ
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
├── _headers                    # GitHub Pages cache/security headers
├── CNAME                       # Custom domain (optional)
├── docs/
│   ├── CONFIGURATION.md        # Environment & configuration guide
│   ├── INTEGRATIONS.md         # Third-party services documentation
│   └── DEVELOPER_GUIDE.md      # Complete developer reference
└── assets/
    ├── css/
    │   └── style.css           # Complete design system (1,200+ lines)
    ├── js/
    │   ├── main.js             # Shared: nav, reveal, counters, tilt, parallax
    │   └── home.js             # Homepage: color picker, clock, parallax
    ├── fonts/                  # Self-hosted fonts (optional)
    └── images/                 # Image assets (optional)
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- [Git](https://git-scm.com/) installed
- A code editor (VS Code recommended)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/girishlade111/nova-phone-website.git

# Navigate to project
cd nova-phone-website

# Open in browser
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Local Development Server

```bash
# Python 3 (simplest)
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000

# VS Code: Install "Live Server" extension, right-click index.html
```

Then visit `http://localhost:8000` in your browser.

### Docker

```bash
docker build -t nova-website .
docker run -p 8080:80 nova-website
```

---

## Documentation

Comprehensive documentation is available in the `docs/` directory:

| Document | Description |
|----------|-------------|
| [CONFIGURATION.md](docs/CONFIGURATION.md) | Environment variables, Google Fonts, GitHub Pages, local servers, browser config, performance, accessibility, security |
| [INTEGRATIONS.md](docs/INTEGRATIONS.md) | Google Fonts, GitHub Pages, Google Analytics, GTM, Social Media, CDN, future integrations |
| [DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md) | Architecture, file structure, HTML/CSS/JS patterns, adding pages, modifying design system, animations, responsive design, debugging, testing, deployment, git workflow |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#06060b` | Page background |
| `--color-bg-elevated` | `#0d0d17` | Elevated sections |
| `--color-surface` | `#12121f` | Card backgrounds |
| `--color-accent` | `#7c5cff` | Primary accent (violet) |
| `--color-accent-warm` | `#ff6b4a` | Warm accent (coral) |
| `--color-accent-gold` | `#ffb347` | Stars, highlights |
| `--color-accent-cyan` | `#4ae3ff` | Secondary accent |
| `--color-accent-pink` | `#ff4a8d` | Tertiary accent |
| `--color-text-primary` | `#f4f4f8` | Headings, body text |
| `--color-text-secondary` | `#a0a0b8` | Descriptions |
| `--color-text-muted` | `#6a6a80` | Captions, labels |

### Typography Scale

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Space Grotesk | 700 | clamp(2.5rem, 6vw, 5rem) |
| H2 | Space Grotesk | 700 | clamp(2rem, 4vw, 3.5rem) |
| H3 | Space Grotesk | 700 | clamp(1.5rem, 3vw, 2.25rem) |
| H4 | Space Grotesk | 700 | clamp(1.25rem, 2vw, 1.5rem) |
| Body | Inter | 400 | 1.0625rem |
| Small | Inter | 400 | 0.875rem |
| Label | JetBrains Mono | 600 | 0.75rem |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 0.5rem | Tight gaps |
| `--space-sm` | 1rem | Default gaps |
| `--space-md` | 1.5rem | Section padding |
| `--space-lg` | 2.5rem | Large gaps |
| `--space-xl` | 4rem | Section spacing |
| `--space-2xl` | 6rem | Page sections |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 12px | Inputs, small cards |
| `--radius-md` | 20px | Cards, buttons |
| `--radius-lg` | 28px | Large cards |
| `--radius-xl` | 36px | Phone mockup |
| `--radius-full` | 9999px | Pills, tags |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | 0 2px 8px rgba(0,0,0,0.3) | Subtle elevation |
| `--shadow-md` | 0 8px 32px rgba(0,0,0,0.4) | Cards |
| `--shadow-lg` | 0 16px 64px rgba(0,0,0,0.5) | Modals, overlays |
| `--shadow-glow` | 0 0 40px rgba(124,92,255,0.45) | Accent glow |

---

## Animations

### Animation Library

| Name | Type | Duration | Easing |
|------|------|----------|--------|
| `fadeIn` | Opacity | 0.8s | ease-out-expo |
| `fadeInUp` | Opacity + Translate Y | 0.8s | ease-out-expo |
| `slideUp` | Translate Y | 0.8s | ease-out-expo |
| `phoneFloat` | Translate Y + Rotate | 6s loop | ease-in-out |
| `orbFloat` | Translate + Scale | 20s loop | ease-in-out |
| `floatElement` | Translate Y | 4s loop | ease-in-out |
| `pulse` | Opacity + Scale | 2s loop | ease-in-out |
| Scroll Reveal | Opacity + Translate Y | 0.8s | ease-out-expo |
| Card Tilt | Rotate X/Y | Real-time | — |
| Counter | Number increment | 2s | linear |

### Easing Functions

```css
/* Primary easing — smooth deceleration */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

/* Bouncy easing — for playful interactions */
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Adding New Animations

```css
@keyframes yourAnimation {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.your-element {
  animation: yourAnimation 0.6s var(--ease-out-expo) both;
}
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single column, hamburger nav |
| Tablet | 768px – 1024px | 2-column grids, stacked hero |
| Desktop | > 1024px | Full multi-column layouts |

### Tested Viewports

- 320px (iPhone SE)
- 375px (iPhone 14)
- 768px (iPad)
- 1024px (iPad Pro)
- 1280px (Laptop)
- 1440px (Desktop)
- 1920px (Full HD)
- 2560px (QHD)

---

## Browser Support

| Browser | Minimum | Notes |
|---------|---------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | backdrop-filter needs 15.4+ |
| Edge | 90+ | Full support |
| Opera | 76+ | Full support |
| Chrome Android | 90+ | Full support |
| Safari iOS | 14+ | backdrop-filter needs 15.4+ |

### Feature Detection

```javascript
// Check for backdrop-filter support
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)');

// Check for Intersection Observer
const supportsIO = 'IntersectionObserver' in window;

// Check for CSS Grid
const supportsGrid = CSS.supports('display', 'grid');
```

---

## Performance

### Current Metrics

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.0s | Pass |
| Largest Contentful Paint | < 2.5s | Pass |
| Cumulative Layout Shift | < 0.1 | Pass |
| Total Blocking Time | < 200ms | Pass |
| Performance Score | > 90 | Pass |

### Optimization Techniques

- Single CSS file (1 request)
- Two JS files (2 requests)
- `font-display: swap` prevents FOIT
- `preconnect` hints for Google Fonts
- CSS animations (GPU-composited)
- Intersection Observer (no scroll event listeners)
- No render-blocking resources
- Semantic HTML (less DOM manipulation)

### Bundle Size

| Asset | Size (approx) |
|-------|---------------|
| style.css | ~35 KB |
| main.js | ~5 KB |
| home.js | ~3 KB |
| **Total** | **~43 KB** |

---

## Accessibility

### WCAG 2.2 Compliance

- All text meets AA contrast ratio (4.5:1 minimum)
- Focus indicators visible on all interactive elements
- ARIA labels on icon-only buttons
- Semantic HTML structure
- Skip navigation link
- `prefers-reduced-motion` support
- Touch targets minimum 44x44px

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Navigate forward |
| Shift+Tab | Navigate backward |
| Enter/Space | Activate button/link |
| Escape | Close mobile menu |

---

## Deployment

### GitHub Pages (Recommended)

1. Push code to `main` branch
2. Go to **Settings > Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Save — site live at `https://username.github.io/nova-phone-website`

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Cloudflare Pages

1. Connect GitHub repo in Cloudflare dashboard
2. Build command: (none)
3. Output directory: `/`
4. Deploy

### Any Static Host

Upload all files to:
- Shared hosting (cPanel, Plesk)
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean Spaces
- Azure Static Web Apps

---

## Contributing

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/nova-phone-website.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Commit: `git commit -m "feat: add your feature"`
6. Push: `git push origin feature/your-feature`
7. Open a Pull Request

### Commit Convention

```
feat: New feature
fix: Bug fix
docs: Documentation changes
style: Code style changes (formatting, no logic change)
refactor: Code restructuring
perf: Performance improvement
test: Adding or updating tests
chore: Maintenance tasks
```

### Code Style

- HTML: 2-space indent, semantic elements, quoted attributes
- CSS: 2-space indent, custom properties, BEM-like naming
- JavaScript: ES6+, const/let, arrow functions, template literals

---

## License

This project is open source and available under the MIT License.

```
MIT License

Copyright (c) 2026 NOVA Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## Contact

**NOVA Technologies**

- Website: [nova.tech](https://nova.tech)
- Email: hello@nova.tech
- Twitter: [@novatech](https://twitter.com/novatech)
- Instagram: [@novatech](https://instagram.com/novatech)
- LinkedIn: [NOVA Technologies](https://linkedin.com/company/novatech)

---

*Future in Your Hands.*
