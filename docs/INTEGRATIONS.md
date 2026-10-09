# NOVA — Third-Party Integrations

This document covers all third-party services, APIs, and external dependencies used in the NOVA smartphone brand website.

---

## Table of Contents

- [Google Fonts](#google-fonts)
- [GitHub Pages](#github-pages)
- [Google Analytics](#google-analytics)
- [Google Tag Manager](#google-tag-manager)
- [Social Media](#social-media)
- [Content Delivery Network](#content-delivery-network)
- [Future Integrations](#future-integrations)

---

## Google Fonts

### Overview

Google Fonts is the primary typography source for the NOVA website. Three font families are loaded via the Google Fonts CDN.

### Configuration

**Current Implementation (CDN):**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&font=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Loaded Fonts

| Family | Weights | Format | CSS Variable |
|--------|---------|--------|--------------|
| Space Grotesk | 400, 500, 600, 700 | woff2 | `--font-display` |
| Inter | 400, 500, 600, 700 | woff2 | `--font-body` |
| JetBrains Mono | 400, 500, 600 | woff2 | `--font-mono` |

### Usage in CSS

```css
body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

.section-label {
  font-family: var(--font-mono);
}
```

### Performance Considerations

- `preconnect` hints reduce connection latency
- `font-display: swap` prevents FOIT (Flash of Invisible Text)
- Only required weights are loaded
- woff2 format for modern browsers (30% smaller than woff)

### Fallback Fonts

```css
--font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
```

### Self-Hosting Alternative

For full control and GDPR compliance:

1. Download fonts from [Google Fonts](https://fonts.google.com/) (Family > Download)
2. Place `.woff2` files in `assets/fonts/`
3. Add `@font-face` rules in `style.css`:

```css
@font-face {
  font-family: 'Space Grotesk';
  src: url('../fonts/space-grotesk-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Space Grotesk';
  src: url('../fonts/space-grotesk-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

4. Remove the Google Fonts CDN `<link>` tags from all HTML files

### API Integration (Advanced)

To dynamically load fonts via the Google Fonts API:

```javascript
const apiKey = 'YOUR_GOOGLE_FONTS_API_KEY';
const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Available fonts:', data.items.length);
  });
```

---

## GitHub Pages

### Overview

GitHub Pages hosts the static website for free directly from the repository.

### Configuration

**Settings:**
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

### Custom Domain Setup

1. Create a `CNAME` file in the project root:

```
www.yourdomain.com
```

2. Add DNS records at your registrar:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | girishlade111.github.io | 3600 |

### Automated Deployment Workflow

`.github/workflows/deploy.yml`:

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
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v4

      - name: Upload build artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Cache Configuration

`_headers` file for optimal caching:

```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=3600, must-revalidate

/sw.js
  Cache-Control: no-cache

/
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Environment Variables in GitHub Actions

Set in **Settings > Secrets and variables > Actions**:

| Variable | Value |
|----------|-------|
| `SITE_URL` | `https://girishlade111.github.io/nova-phone-website` |
| `ENABLE_ANALYTICS` | `true` |
| `GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` |

---

## Google Analytics

### Overview

Google Analytics 4 (GA4) can be added for visitor analytics. Currently disabled by default.

### Integration

Add before `</head>` in all HTML files:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX', {
    send_page_view: true,
    anonymize_ip: true
  });
</script>
```

### Configuration via Environment Variable

```javascript
// Load GA ID from config
const gaId = window.NOVA_CONFIG?.gaId || 'G-XXXXXXXXXX';

if (gaId && window.NOVA_CONFIG?.analyticsEnabled) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gaId);
}
```

### Custom Events

```javascript
// Track product card clicks
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    gtag('event', 'product_click', {
      product_name: card.querySelector('.product-card-name').textContent,
      product_price: card.querySelector('.product-card-price').textContent
    });
  });
});

// Track color picker changes
document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', () => {
    gtag('event', 'color_select', {
      color: option.getAttribute('data-color')
    });
  });
});
```

### Privacy Compliance

```javascript
// GDPR-compliant consent mode
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'wait_for_update': 500
});

// Enable after user consent
function enableAnalytics() {
  gtag('consent', 'update', {
    'analytics_storage': 'granted',
    'ad_storage': 'granted'
  });
}
```

---

## Google Tag Manager

### Overview

Google Tag Manager (GTM) provides centralized management of marketing tags without code changes.

### Integration

Add after `<body>` opening tag:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

### Data Layer Configuration

```javascript
// Initialize data layer
window.dataLayer = window.dataLayer || {};

// Page view event
dataLayer.push({
  'event': 'page_view',
  'page_title': document.title,
  'page_location': window.location.href
});

// Product interaction events
dataLayer.push({
  'event': 'product_view',
  'product_id': 'nova-x1-pro',
  'product_name': 'NOVA X1 Pro',
  'product_price': 999,
  'product_category': 'Flagship'
});
```

---

## Social Media

### Current Integration

Social links are configured in the footer of each page:

```html
<div class="footer-social">
  <a href="https://twitter.com/novatech" class="footer-social-link" aria-label="Twitter">X</a>
  <a href="https://instagram.com/novatech" class="footer-social-link" aria-label="Instagram">IG</a>
  <a href="https://youtube.com/@novatech" class="footer-social-link" aria-label="YouTube">YT</a>
  <a href="https://linkedin.com/company/novatech" class="footer-social-link" aria-label="LinkedIn">LI</a>
</div>
```

### Open Graph Tags

Add to `<head>` for social sharing:

```html
<!-- Open Graph -->
<meta property="og:title" content="NOVA — Future in Your Hands">
<meta property="og:description" content="Experience the future of mobile technology with NOVA smartphones.">
<meta property="og:image" content="https://girishlade111.github.io/nova-phone-website/assets/images/og-image.jpg">
<meta property="og:url" content="https://girishlade111.github.io/nova-phone-website">
<meta property="og:type" content="website">
<meta property="og:site_name" content="NOVA">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="NOVA — Future in Your Hands">
<meta name="twitter:description" content="Experience the future of mobile technology with NOVA smartphones.">
<meta name="twitter:image" content="https://girishlade111.github.io/nova-phone-website/assets/images/og-image.jpg">
```

### Social Sharing Widgets

```javascript
// Share on Twitter
function shareOnTwitter(text, url) {
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(shareUrl, '_blank', 'width=550,height=420');
}

// Share on LinkedIn
function shareOnLinkedIn(url) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  window.open(shareUrl, '_blank', 'width=550,height=420');
}
```

---

## Content Delivery Network

### Current CDN Usage

| Resource | CDN | Purpose |
|----------|-----|---------|
| Google Fonts | `fonts.googleapis.com` | Typography delivery |
| Polyfills | `polyfill.io` | Browser compatibility |

### Optional: Cloudflare CDN

For improved global performance:

1. Sign up at [Cloudflare](https://www.cloudflare.com/)
2. Add your domain
3. Enable **Auto Minify** (CSS, JS, HTML)
4. Enable **Brotli** compression
5. Set **Browser Cache TTL** to 1 month

### Optional: jsDelivr CDN

Serve static assets via jsDelivr (free for open source):

```html
<!-- Direct GitHub file serving -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/girishlade111/nova-phone-website@main/assets/css/style.css">
<script src="https://cdn.jsdelivr.net/gh/girishlade111/nova-phone-website@main/assets/js/main.js"></script>
```

---

## Future Integrations

### Planned Services

| Service | Purpose | Status |
|---------|---------|--------|
| Stripe | E-commerce checkout | Planned |
| Mailchimp | Newsletter signup | Planned |
| Intercom | Customer support chat | Planned |
| Sentry | Error tracking | Planned |
| Hotjar | Heatmaps & recordings | Planned |
| Algolia | Site search | Planned |
| Disqus | Comments section | Planned |

### Stripe Integration (Preview)

```javascript
// Load Stripe.js
const stripe = Stripe('pk_live_xxxxxxxxxxxxxxxx');

// Create checkout session
async function createCheckout(productId) {
  const response = await fetch('/.netlify/functions/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId })
  });
  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
}
```

### Mailchimp Integration (Preview)

```html
<form action="https://nova.us1.list-manage.com/subscribe/post?u=xxx&amp;id=xxx" method="post" target="_blank">
  <input type="email" name="EMAIL" placeholder="Your email address" required>
  <button type="submit">Subscribe</button>
</form>
```

### Service Worker (PWA)

```javascript
// Register service worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}
```

`sw.js`:

```javascript
const CACHE_NAME = 'nova-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/js/home.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

---

## Dependency Summary

| Dependency | Type | Required | CDN |
|------------|------|----------|-----|
| Google Fonts | Fonts | Yes | fonts.googleapis.com |
| Intersection Observer | Browser API | Yes | Native |
| CSS Custom Properties | Browser API | Yes | Native |
| CSS Grid | Browser API | Yes | Native |
| CSS Flexbox | Browser API | Yes | Native |
| backdrop-filter | Browser API | Optional | Native |

**Zero npm dependencies. Zero build tools required.**

---

*Last updated: October 2026*
