# OnlineCloudSec Website - Project Brief

**Version:** 2.0
**Last Updated:** January 2025

---

## Project Overview

Rebuild **onlinecloudsec.com** to replace the current WordPress site, creating a cohesive brand experience with **taise.guru**.

**Owner:** Moshe Ferber (Mo)
**Domain:** onlinecloudsec.com
**Hosting:** AWS Amplify (same as taise.guru)

### Goals
1. **Unified brand** - Both sites share design DNA while having distinct personalities
2. **Growth platform** - Easy to add content, scale features
3. **Low maintenance** - Static site, JSON content, no WordPress updates
4. **Security-first** - No server-side vulnerabilities, CDN-delivered
5. **Analytics continuity** - Maintain Google Analytics tracking

---

## Design Philosophy

### Relationship to taise.guru

After reviewing both current sites:

| Aspect | taise.guru (Current) | onlinecloudsec.com (New) |
|--------|---------------------|--------------------------|
| Theme | Dark (#0f172a base) | Light (#ffffff base) |
| Purpose | Knowledge hub/tool | Personal brand/services |
| Tone | Technical, data-rich | Professional, approachable |
| Content | Dynamic JSON data | Mixed static + JSON |

**Key insight:** The sites should feel like siblings, not twins. Same design system, different moods.

### Unified Design System

Both sites should share:
- **Typography:** Plus Jakarta Sans (headings), Inter (body)
- **Component patterns:** Cards, buttons, navigation style
- **Spacing scale:** Consistent padding/margins
- **Interaction patterns:** Hover states, transitions
- **Tech stack:** Vanilla JS + Tailwind CSS + JSON data

### Color System

```css
:root {
  /* Shared Brand Colors */
  --brand-blue: #1e40af;
  --brand-blue-light: #3b82f6;
  --brand-blue-dark: #1e3a8a;
  --brand-cyan: #06b6d4;

  /* TAISE Gold Accent */
  --taise-gold: #c8a03e;
  --taise-gold-light: #d4af37;
  --taise-gold-dark: #b8860b;

  /* Light Theme (onlinecloudsec.com) */
  --light-bg: #ffffff;
  --light-bg-subtle: #f8fafc;
  --light-bg-muted: #f1f5f9;
  --light-text: #1e293b;
  --light-text-muted: #64748b;
  --light-border: #e2e8f0;

  /* Dark Theme (taise.guru) */
  --dark-bg: #0f172a;
  --dark-bg-card: #1e293b;
  --dark-text: #f8fafc;
  --dark-text-muted: #94a3b8;
  --dark-border: #334155;
}
```

### Navigation Between Sites

Include subtle cross-links:
- onlinecloudsec.com: "TAISE Training" button prominently links to taise.guru
- taise.guru: Footer link "About the Author" links to onlinecloudsec.com

---

## Technical Architecture

### Tech Stack (Matching taise.guru)
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling (same config as taise.guru)
- **Vanilla JavaScript** - No framework overhead
- **JSON data files** - Content management
- **AWS Amplify** - Hosting with CI/CD

### Why This Stack?
1. **Security:** No server-side code = no server vulnerabilities
2. **Performance:** Static files served from CDN edge locations
3. **Cost:** Amplify free tier handles significant traffic
4. **Maintenance:** No WordPress updates, plugin conflicts, or PHP issues
5. **Consistency:** Same patterns as taise.guru for easier maintenance

### Site Structure

```
onlinecloudsec.com/
├── index.html                 # Homepage - personal brand hub
├── about.html                 # Bio, credentials, philosophy
├── speaking.html              # Speaking schedule & topics
├── testimonials.html          # Client testimonials
├── contact.html               # Contact form
│
├── taise/
│   └── index.html             # TAISE overview → CTA to taise.guru
│
├── cloud-security/
│   ├── index.html             # Services hub
│   ├── lectures.html          # Available lecture topics
│   ├── classes.html           # Training offerings
│   └── publications.html      # Articles, papers, media
│
├── data/
│   ├── site-config.json       # Global settings, social links
│   ├── testimonials.json      # Testimonials content
│   ├── speaking-events.json   # Upcoming & past events
│   ├── publications.json      # Publications list
│   ├── lectures.json          # Lecture catalog
│   └── classes.json           # Training classes
│
├── assets/
│   ├── images/
│   │   ├── mo-portrait.jpg    # Professional headshot
│   │   ├── logos/             # CSA, ISC2, etc.
│   │   └── og-image.jpg       # Social sharing image
│   ├── css/
│   │   └── styles.css         # Compiled Tailwind + custom
│   └── docs/                   # Downloadable resources
│
├── js/
│   ├── main.js                # Core functionality
│   ├── components.js          # Reusable UI components
│   └── data-loader.js         # JSON fetching utilities
│
├── _redirects                 # Amplify URL redirects
└── favicon.ico
```

---

## Analytics Integration

### Google Analytics 4

Add to all pages in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Action required:** Get GA Measurement ID from Mo (format: G-XXXXXXXXXX)

### Event Tracking

Track key interactions:
```javascript
// Contact form submission
gtag('event', 'form_submit', { form_name: 'contact' });

// CTA clicks
gtag('event', 'cta_click', { cta_name: 'taise_training' });

// External links
gtag('event', 'outbound_click', { url: 'https://taise.guru' });
```

---

## Content: About Mo

**Name:** Moshe Ferber
**Title:** Cloud Security Evangelist & AI Safety Expert

### Credentials
- Chairman, Cloud Security Alliance (CSA) Israel Chapter
- Certification contributor: TAISE, CCSP, CCSK, CCAK
- Certified trainer for CSA and ISC2
- Board Member, Dona-Tech and Machshava Tova (nonprofit)
- Angel investor in cyber and enterprise applications
- 30+ years cybersecurity experience
- 20+ research publications

### Speaking History
DEFCON, Black Hat, RSA Conference, Cyberweek (2017-2025)

### Current Focus
- TAISE certification training
- Cloud security consulting
- Speaking & thought leadership
- Silverlining IL Podcast (6,000+ listeners)

---

## Page Specifications

### Homepage Layout

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                     │
│  [Logo]                    About | Speaking | Contact       │
│                                        [TAISE Hub →]        │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION (light gradient background)                   │
│                                                             │
│     [Professional Photo]                                    │
│                                                             │
│     MOSHE FERBER                                           │
│     Cloud Security Evangelist & AI Safety Expert           │
│                                                             │
│     Brief intro paragraph about expertise and mission       │
│                                                             │
│     ┌────────────────────┐  ┌────────────────────┐         │
│     │  TAISE Training    │  │  Cloud Security    │         │
│     │   [GOLD BUTTON]    │  │   [BLUE BUTTON]    │         │
│     └────────────────────┘  └────────────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  CREDENTIALS SECTION (subtle background)                    │
│  4-column grid of icon cards                                │
├─────────────────────────────────────────────────────────────┤
│  UPCOMING SPEAKING (loaded from JSON)                       │
│  3-card grid with date, event, topic                        │
├─────────────────────────────────────────────────────────────┤
│  TESTIMONIALS (carousel, loaded from JSON)                  │
│  Quote, author, company                                     │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                     │
│  Social links | © 2025 | Privacy                           │
└─────────────────────────────────────────────────────────────┘
```

### Component Patterns

**Cards:** Match taise.guru style
```html
<div class="bg-white rounded-lg border border-slate-200 p-6
            hover:shadow-lg hover:-translate-y-1 transition-all">
  <!-- content -->
</div>
```

**Primary Button (Blue):**
```html
<a class="inline-flex items-center px-6 py-3 bg-blue-700 text-white
          rounded-lg font-medium hover:bg-blue-800 transition-colors">
  Cloud Security Services
</a>
```

**TAISE Button (Gold):**
```html
<a class="inline-flex items-center px-6 py-3 bg-amber-600 text-white
          rounded-lg font-medium hover:bg-amber-700 transition-colors">
  TAISE Training →
</a>
```

---

## External Links

| Resource | URL | Notes |
|----------|-----|-------|
| TAISE Knowledge Hub | https://www.taise.guru | Primary cross-link |
| TAISE Official (CSA) | https://cloudsecurityalliance.org/education/taise | |
| LinkedIn | https://www.linkedin.com/in/mosheferber/ | |
| YouTube/Podcast | https://www.youtube.com/playlist?list=PLrsvn13Tgp7RJMEw5q3sy9tcvxOl1wvJi | Silverlining IL |

---

## Contact Form

### Option 1: Formspree (Recommended for simplicity)
- Free tier: 50 submissions/month
- No backend required
- Spam filtering included

```html
<form action="https://formspree.io/f/FORM_ID" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <select name="inquiry_type">
    <option>Speaking Engagement</option>
    <option>Training/Workshop</option>
    <option>Consulting</option>
    <option>Other</option>
  </select>
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

### Option 2: AWS SES + Lambda (For higher volume)
If form submissions exceed Formspree limits, can implement serverless backend.

---

## SEO & Redirects

### Meta Tags Template
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moshe Ferber | Cloud Security Evangelist</title>
  <meta name="description" content="Cloud security expert, TAISE trainer,
        and CSA Israel Chapter Chairman with 30+ years experience.">

  <!-- Open Graph -->
  <meta property="og:title" content="Moshe Ferber | Cloud Security">
  <meta property="og:description" content="...">
  <meta property="og:image" content="/assets/images/og-image.jpg">
  <meta property="og:url" content="https://onlinecloudsec.com">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
</head>
```

### WordPress URL Redirects

Create `_redirects` file for Amplify:

```
# Old WordPress URLs → New locations
/about/              /about.html           301
/about/lectures/     /cloud-security/lectures.html  301
/about/classes/      /cloud-security/classes.html   301
/testimonials/       /testimonials.html    301
/speaking-schedule/  /speaking.html        301
/publications/       /cloud-security/publications.html  301
/gallery/            /about.html           301
/contact/            /contact.html         301

# Clean URLs (no .html extension)
/about               /about.html           200
/speaking            /speaking.html        200
/contact             /contact.html         200
/testimonials        /testimonials.html    200

# TAISE section
/taise               /taise/index.html     200
/taise/              /taise/index.html     200

# Cloud security section
/cloud-security      /cloud-security/index.html  200
/cloud-security/     /cloud-security/index.html  200
```

---

## Sample JSON Data Files

### data/site-config.json
```json
{
  "siteName": "Moshe Ferber",
  "tagline": "Cloud Security Evangelist & AI Safety Expert",
  "email": "contact@onlinecloudsec.com",
  "links": {
    "taiseHub": "https://www.taise.guru",
    "taiseOfficial": "https://cloudsecurityalliance.org/education/taise",
    "linkedin": "https://www.linkedin.com/in/mosheferber/",
    "youtube": "https://www.youtube.com/playlist?list=PLrsvn13Tgp7RJMEw5q3sy9tcvxOl1wvJi"
  },
  "credentials": [
    {
      "title": "CSA Israel Chairman",
      "description": "Cloud Security Alliance",
      "icon": "shield"
    },
    {
      "title": "CCSP Founding Member",
      "description": "ISC2 Certification",
      "icon": "award"
    },
    {
      "title": "TAISE Expert",
      "description": "AI Security Certification",
      "icon": "brain"
    },
    {
      "title": "30+ Years Experience",
      "description": "Cybersecurity Professional",
      "icon": "clock"
    }
  ]
}
```

### data/speaking-events.json
```json
{
  "upcoming": [
    {
      "id": "event-001",
      "title": "Event Name",
      "date": "2025-03-15",
      "location": "City, Country",
      "topic": "Talk Title",
      "link": "https://...",
      "type": "conference"
    }
  ],
  "past": []
}
```

### data/testimonials.json
```json
{
  "testimonials": [
    {
      "id": "test-001",
      "quote": "Testimonial text here...",
      "author": "Name",
      "title": "Title",
      "company": "Company",
      "image": "/assets/images/testimonials/person.jpg"
    }
  ]
}
```

---

## Deployment

### AWS Amplify Setup
1. Connect GitHub repository to Amplify
2. Configure build settings (static site, no build step needed)
3. Add custom domain: onlinecloudsec.com
4. Enable HTTPS (automatic)
5. Configure redirects via `_redirects` file

### Build Configuration (amplify.yml)
```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "Static site - no build required"
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
  cache:
    paths: []
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Set up project structure
- [ ] Create shared Tailwind config (matching taise.guru patterns)
- [ ] Build base HTML template (header, footer, nav)
- [ ] Implement responsive navigation

### Phase 2: Core Pages
- [ ] Homepage with hero, credentials, CTAs
- [ ] About page
- [ ] Contact page with Formspree form
- [ ] TAISE landing page

### Phase 3: Content Pages
- [ ] Speaking schedule page
- [ ] Testimonials page
- [ ] Cloud Security hub
- [ ] Lectures catalog
- [ ] Classes catalog
- [ ] Publications page

### Phase 4: Data & Integration
- [ ] Create all JSON data files
- [ ] Implement JSON loading utilities
- [ ] Add Google Analytics
- [ ] Create _redirects file

### Phase 5: Polish & Deploy
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Deploy to Amplify
- [ ] Verify redirects work
- [ ] Test analytics tracking

---

## Information Needed from Mo

### Provided
- **LinkedIn:** https://www.linkedin.com/in/mosheferber/
- **YouTube/Podcast:** https://www.youtube.com/playlist?list=PLrsvn13Tgp7RJMEw5q3sy9tcvxOl1wvJi
- **Professional headshot:** Provided (black blazer, light blue shirt)

### Placeholders (to be filled in later)
- **Testimonials:** Content to be added to `data/testimonials.json`
- **Speaking events:** Content to be added to `data/speaking-events.json`

### Contact Form Setup
Create a Formspree account at https://formspree.io and get a form ID to replace `FORM_ID` in the contact form code. Alternatively, can implement AWS SES + Lambda for higher volume.

---

## Future Enhancements (Post-Launch)

These can be added incrementally:
- Blog/articles section
- Newsletter signup (integrate with email service)
- Speaking video embeds
- Downloadable resources section
- Multi-language support (Hebrew)

---

*Document maintained for Claude Code implementation*
