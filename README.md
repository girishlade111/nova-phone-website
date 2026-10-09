# NOVA — Smartphone Brand Website

A premium, multi-page smartphone brand website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, modern web technologies.

![NOVA](https://img.shields.io/badge/NOVA-Future%20in%20Your%20Hands-7c5cff)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Animations](#animations)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

NOVA is a fictional smartphone brand website showcasing a complete product lineup — from flagship powerhouses to compact essentials. The site features a dark, premium aesthetic with rich gradients, smooth animations, and modern design patterns.

**Live Demo:** [https://girishlade111.github.io/nova-phone-website](https://girishlade111.github.io/nova-phone-website)

---

## Features

### Design
- Dark premium theme with mesh gradient backgrounds
- Glassmorphism cards with backdrop blur
- Rich color palette — electric violet, cyan, pink, gold accents
- Space Grotesk display font + Inter body font
- Layered shadows and glow effects
- Gradient text and border accents

### Animations & Interactions
- Scroll-triggered reveal animations with staggered delays
- 3D tilt effect on product cards (mouse tracking)
- Floating phone mockup with parallax
- Animated stat counters
- Pulsing indicators and floating spec cards
- Smooth cubic-bezier easing throughout
- `prefers-reduced-motion` accessibility support

### Multi-Page
- Fixed navigation with scroll-triggered glass blur
- Active page indicator with animated underline
- Mobile-responsive hamburger menu
- Smooth scroll between sections

### Interactive Elements
- Color picker that updates phone mockup gradient
- Live clock on phone screen mockup
- Working contact form with submit animation
- Camera mode selector on showcase phone
- Product comparison table

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero with animated phone, stats, products, features, showcase, testimonials |
| Products | `products.html` | Full product lineup with comparison table |
| Product Detail | `product-detail.html` | X1 Pro specs, color picker, detailed spec table |
| About | `about.html` | Company story, values, leadership team |
| Contact | `contact.html` | Contact info, working form, FAQ, map |

---

## Tech Stack

- **HTML5** — Semantic markup, accessibility-friendly
- **CSS3** — Custom properties, Grid, Flexbox, animations, backdrop-filter
- **JavaScript (Vanilla)** — Intersection Observer, mouse tracking, dynamic content
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono
- **GitHub Pages** — Free static hosting

No build tools, no frameworks, no dependencies.

---

## Project Structure

```
nova-phone-website/
├── index.html              — Homepage
├── products.html           — Product lineup & comparison
├── product-detail.html     — X1 Pro detail page
├── about.html              — Company story & team
├── contact.html            — Contact form & FAQ
├── .gitignore              — Git ignore rules
├── README.md               — This file
└── assets/
    ├── css/
    │   └── style.css       — Full design system (1,200+ lines)
    └── js/
        ├── main.js         — Nav, scroll reveal, counters, tilt, parallax
        └── home.js         — Color picker, phone parallax, dynamic clock
```

---

## Getting Started

### Prerequisites
- A modern web browser
- [Git](https://git-scm.com/) installed
- (Optional) [GitHub CLI](https://cli.github.com/) for repo management

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/girishlade111/nova-phone-website.git
   cd nova-phone-website
   ```

2. **Open in browser**
   ```bash
   # macOS
   open index.html

   # Windows
   start index.html

   # Linux
   xdg-open index.html
   ```

3. **Or use a local server**
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve .
   ```

   Then visit `http://localhost:8000`

### Deploy to GitHub Pages

1. Push to GitHub
2. Go to **Settings > Pages**
3. Select source: **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Your site will be live at `https://<username>.github.io/nova-phone-website`

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#06060b` | Page background |
| `--color-surface` | `#12121f` | Card backgrounds |
| `--color-accent` | `#7c5cff` | Primary accent (violet) |
| `--color-accent-cyan` | `#4ae3ff` | Secondary accent |
| `--color-accent-pink` | `#ff4a8d` | Tertiary accent |
| `--color-accent-gold` | `#ffb347` | Stars, highlights |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| Space Grotesk | 700 | Headings, logo, buttons |
| Inter | 400-600 | Body text, descriptions |
| JetBrains Mono | 400-600 | Labels, tags, specs |

### Spacing Scale

`0.5rem` → `1rem` → `1.5rem` → `2.5rem` → `4rem` → `6rem`

### Border Radius

`12px` → `20px` → `28px` → `36px` → `9999px` (pill)

---

## Animations

| Animation | Trigger | Duration |
|-----------|---------|----------|
| `fadeInUp` | Page load, scroll reveal | 0.8s |
| `slideUp` | Hero title lines | 0.8s |
| `phoneFloat` | Continuous | 6s loop |
| `orbFloat` | Continuous | 20s loop |
| `floatElement` | Continuous | 4s loop |
| `pulse` | Continuous | 2s loop |
| Scroll reveal | Intersection Observer | 0.8s |
| Card tilt | Mouse move | Real-time |
| Counter | Intersection Observer | 2s |

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

**Note:** `backdrop-filter` requires Safari 15.4+ for full support. Older browsers will show a solid background fallback.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**NOVA Technologies**
- Website: [nova.tech](https://nova.tech)
- Email: hello@nova.tech
- Twitter: [@novatech](https://twitter.com/novatech)

---

*Future in Your Hands.*
