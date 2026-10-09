# NOVA — Configuration Guide

This document covers all configuration options for the NOVA smartphone brand website, including environment variables, build settings, and deployment configurations.

---

## Table of Contents

- [Environment Variables](#environment-variables)
- [Google Fonts Configuration](#google-fonts-configuration)
- [GitHub Pages Configuration](#github-pages-configuration)
- [Local Development Server](#local-development-server)
- [Browser Configuration](#browser-configuration)
- [Performance Configuration](#performance-configuration)
- [Accessibility Configuration](#accessibility-configuration)

---

## Environment Variables

While this project is a static website with no backend, the following environment variables can be used for advanced configurations and future extensions.

### `.env` File Structure

Create a `.env` file in the project root for local development:

```bash
# ============================================
# NOVA Website — Environment Configuration
# ============================================

# Site Configuration
SITE_URL=http://localhost:8000
SITE_NAME=NOVA
SITE_DESCRIPTION=Premium smartphone brand website

# Google Fonts API (optional — for self-hosting)
GOOGLE_FONTS_API_KEY=your_api_key_here

# Analytics (optional)
GA_MEASUREMENT_ID=G-XXXXXXXXXX
GTM_CONTAINER_ID=GTM-XXXXXXX

# Social Media Links
SOCIAL_TWITTER=https://twitter.com/novatech
SOCIAL_INSTAGRAM=https://instagram.com/novatech
SOCIAL_YOUTUBE=https://youtube.com/@novatech
SOCIAL_LINKEDIN=https://linkedin.com/company/novatech

# Contact Information
CONTACT_EMAIL=hello@nova.tech
CONTACT_PHONE=1-800-NOVA-TECH
CONTACT_ADDRESS=100 Innovation Drive, San Francisco, CA 94105

# Feature Flags
ENABLE_ANALYTICS=false
ENABLE_COOKIE_BANNER=false
ENABLE_SERVICE_WORKER=false
```

### Environment Variable Reference

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `SITE_URL` | string | `http://localhost:8000` | Base URL for the website |
| `SITE_NAME` | string | `NOVA` | Brand name used in meta tags |
| `SITE_DESCRIPTION` | string | — | Meta description for SEO |
| `GOOGLE_FONTS_API_KEY` | string | — | API key for Google Fonts (optional) |
| `GA_MEASUREMENT_ID` | string | — | Google Analytics 4 measurement ID |
| `GTM_CONTAINER_ID` | string | — | Google Tag Manager container ID |
| `SOCIAL_TWITTER` | string | — | Twitter/X profile URL |
| `SOCIAL_INSTAGRAM` | string | — | Instagram profile URL |
| `SOCIAL_YOUTUBE` | string | — | YouTube channel URL |
| `SOCIAL_LINKEDIN` | string | — | LinkedIn company URL |
| `CONTACT_EMAIL` | string | — | Primary contact email |
| `CONTACT_PHONE` | string | — | Primary contact phone |
| `CONTACT_ADDRESS` | string | — | Physical address |
| `ENABLE_ANALYTICS` | boolean | `false` | Enable/disable analytics tracking |
| `ENABLE_COOKIE_BANNER` | boolean | `false` | Enable/disable cookie consent banner |
| `ENABLE_SERVICE_WORKER` | boolean | `false` | Enable/disable PWA service worker |

### Loading Environment Variables

For a static site, you can load `.env` values using a simple script:

```html
<script>
  // Load configuration from a JSON file generated from .env
  fetch('config.json')
    .then(response => response.json())
    .then(config => {
      window.NOVA_CONFIG = config;
      console.log('Configuration loaded:', config);
    });
</script>
```

Create a `config.json` in the project root:

```json
{
  "siteUrl": "http://localhost:8000",
  "siteName": "NOVA",
  "analyticsEnabled": false,
  "socialLinks": {
    "twitter": "https://twitter.com/novatech",
    "instagram": "https://instagram.com/novatech"
  }
}
```

---

## Google Fonts Configuration

The project uses three Google Fonts families. They are loaded via CDN in the `<head>` of each HTML file.

### Current Font Configuration

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Font Families

| Family | Weights | CSS Variable | Usage |
|--------|---------|--------------|-------|
| Space Grotesk | 400, 500, 600, 700 | `--font-display` | Headings, logo, buttons |
| Inter | 400, 500, 600, 700 | `--font-body` | Body text, descriptions |
| JetBrains Mono | 400, 500, 600 | `--font-mono` | Labels, tags, specs |

### Self-Hosting Fonts

To self-host fonts for better performance and privacy:

1. Download font files from [Google Fonts](https://fonts.google.com/)
2. Place them in `assets/fonts/`
3. Add `@font-face` declarations in `style.css`:

```css
@font-face {
  font-family: 'Space Grotesk';
  src: url('../fonts/SpaceGrotesk-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Space Grotesk';
  src: url('../fonts/SpaceGrotesk-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

4. Remove the Google Fonts CDN link from HTML files

### Font Display Strategy

All fonts use `font-display: swap` to ensure text remains visible during font loading, preventing FOIT (Flash of Invisible Text).

---

## GitHub Pages Configuration

### Deployment Setup

1. Push code to GitHub
2. Navigate to **Settings > Pages**
3. Configure:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**

### Custom Domain

To use a custom domain with GitHub Pages:

1. Go to **Settings > Pages > Custom domain**
2. Enter your domain (e.g., `nova.example.com`)
3. Add a `CNAME` file in the project root:

```
nova.example.com
```

4. Configure DNS records with your domain provider:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | username.github.io |

### GitHub Pages Configuration File

Create `.github/workflows/deploy.yml` for automated deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Environment-Specific Configuration

```yaml
# .github/workflows/deploy.yml (extended)
- name: Create config.json
  run: |
    echo '{
      "siteUrl": "${{ vars.SITE_URL }}",
      "analyticsEnabled": ${{ vars.ENABLE_ANALYTICS }},
      "gaId": "${{ secrets.GA_MEASUREMENT_ID }}"
    }' > config.json
```

---

## Local Development Server

### Python (Built-in)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Node.js

```bash
# Using npx (no install needed)
npx serve .

# Using http-server
npx http-server -p 8000

# Using live-server (auto-reload)
npx live-server --port=8000
```

### PHP

```bash
php -S localhost:8000
```

### VS Code Live Server

1. Install the "Live Server" extension
2. Right-click `index.html` > "Open with Live Server"
3. Site opens at `http://localhost:5500`

### Docker

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

```bash
docker build -t nova-website .
docker run -p 8080:80 nova-website
```

### Vite (for development with HMR)

```bash
npm create vite@latest nova-dev -- --template vanilla
cd nova-dev
npm install
npm run dev
```

---

## Browser Configuration

### Supported Browsers

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | `backdrop-filter` requires 15.4+ |
| Edge | 90+ | Full support |
| Opera | 76+ | Full support |
| Chrome Android | 90+ | Full support |
| Safari iOS | 14+ | `backdrop-filter` requires 15.4+ |

### Polyfills

For older browsers, add these polyfills:

```html
<!-- Intersection Observer Polyfill -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>

<!-- CSS Custom Properties Polyfill -->
<script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
<script>
  cssVars({ onlyLegacy: true });
</script>
```

### Browser Feature Detection

```javascript
// Check for backdrop-filter support
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)');

// Check for Intersection Observer support
const supportsIO = 'IntersectionObserver' in window;

// Check for CSS Grid support
const supportsGrid = CSS.supports('display', 'grid');

// Apply fallbacks
if (!supportsBackdropFilter) {
  document.querySelectorAll('.glass').forEach(el => {
    el.style.background = 'rgba(13, 13, 23, 0.95)';
  });
}
```

---

## Performance Configuration

### Image Optimization

```html
<!-- Use responsive images -->
<picture>
  <source srcset="assets/images/hero-400.avif" media="(max-width: 400px)" type="image/avif">
  <source srcset="assets/images/hero-800.avif" media="(max-width: 800px)" type="image/avif">
  <source srcset="assets/images/hero-1200.avif" type="image/avif">
  <img src="assets/images/hero-1200.jpg" alt="NOVA Hero" loading="lazy">
</picture>
```

### Resource Hints

```html
<!-- Preconnect to external resources -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preload critical resources -->
<link rel="preload" href="assets/css/style.css" as="style">
<link rel="preload" href="assets/js/main.js" as="script">
```

### Caching Headers

For GitHub Pages, create a `_headers` file:

```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=3600

/
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### Lighthouse Optimization Checklist

- [x] All images have `alt` attributes
- [x] Fonts use `font-display: swap`
- [x] CSS is minified (single file)
- [x] JavaScript is deferred
- [x] No render-blocking resources
- [x] Semantic HTML structure
- [x] ARIA labels on interactive elements
- [x] Color contrast ratio >= 4.5:1
- [x] Touch targets >= 44x44px

---

## Accessibility Configuration

### ARIA Labels

All interactive elements include proper ARIA attributes:

```html
<nav aria-label="Main navigation">
  <button aria-label="Toggle menu" aria-expanded="false">
  <a href="products.html" aria-current="page">
</nav>
```

### Focus Management

```css
/* Visible focus indicators */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 1rem;
  background: var(--color-accent);
  color: white;
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}
```

### Reduced Motion

The site respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}
```

### Color Contrast

All text meets WCAG 2.2 AA contrast requirements:

| Element | Background | Contrast Ratio |
|---------|-----------|----------------|
| Body text | `#06060b` | 15.2:1 |
| Secondary text | `#06060b` | 8.1:1 |
| Muted text | `#06060b` | 5.3:1 |
| Accent text | `#06060b` | 6.8:1 |

---

## Security Configuration

### Content Security Policy

Add to `_headers` file:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;
```

### Security Headers

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Fonts not loading | Check internet connection; Google Fonts requires CDN access |
| Styles not applying | Clear browser cache; verify CSS file path |
| Animations not working | Check `prefers-reduced-motion` setting in OS |
| Mobile menu not opening | Verify JavaScript is enabled; check console for errors |
| GitHub Pages 404 | Ensure `index.html` is in root; check branch settings |

### Debug Mode

Add `?debug=1` to URL for debugging:

```javascript
if (new URLSearchParams(window.location.search).has('debug')) {
  document.body.classList.add('debug');
  console.log('Debug mode enabled');
  console.log('Config:', window.NOVA_CONFIG);
}
```

---

*Last updated: October 2026*
