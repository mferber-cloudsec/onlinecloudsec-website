# OnlineCloudSec Website - Project Brief

**Version:** 3.0
**Last Updated:** January 2025

---

## IMPORTANT: Privacy & Security Guidelines

**NEVER upload or commit the following to this repository:**
- Personal email addresses or phone numbers
- Private credentials or API keys
- Any Personally Identifiable Information (PII)
- Passwords or secrets

Use the contact form on the website for inquiries. Public social links (LinkedIn, YouTube, etc.) are acceptable.

---

## Project Overview

Rebuild **onlinecloudsec.com** to replace the current WordPress site, creating a cohesive brand experience with **taise.guru**.

**Owner:** Moshe Ferber (Mo)
**Domain:** onlinecloudsec.com
**Hosting:** AWS Amplify (auto-deploy from GitHub)
**Repository:** mferber-cloudsec/onlinecloudsec-website
**Analytics:** Google Analytics 4 (G-91T1W4KTG6)

### Goals
1. **Unified brand** - Both sites share design DNA while having distinct personalities
2. **Growth platform** - Easy to add content, scale features
3. **Low maintenance** - Static site, JSON content, no WordPress updates
4. **Security-first** - No server-side vulnerabilities, CDN-delivered
5. **Analytics continuity** - Maintain Google Analytics tracking

---

## Current Site Structure

```
onlinecloudsec.com/
├── index.html                 # Homepage - personal brand hub
├── about.html                 # Bio, credentials, philosophy
├── testimonials.html          # Client testimonials
├── contact.html               # Contact form (Formspree)
│
├── cloud-security/
│   ├── classes.html           # Lectures & Classes (with upcoming events)
│   └── publications.html      # Publications & certifications
│
├── data/
│   ├── site-config.json       # Global settings, credentials
│   ├── testimonials.json      # Testimonials content
│   └── speaking-events.json   # Upcoming lectures/classes
│
├── assets/
│   ├── images/
│   │   ├── mo-portrait.jpg    # Professional headshot
│   │   ├── taise_logo.png     # TAISE certification logo
│   │   ├── ccsp.webp          # CCSP certification logo
│   │   ├── ccsk.webp          # CCSK certification logo
│   │   ├── ccak.png           # CCAK certification logo
│   │   └── [publication thumbnails]
│   └── css/
│       └── styles.css         # Main stylesheet
│
├── js/
│   └── main.js                # Core functionality, JSON loading
│
├── _redirects                 # Amplify URL redirects
└── favicon.ico
```

### Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Homepage | / | Personal brand hub with hero, credentials, publications, testimonials |
| About | /about | Bio, credentials, philosophy |
| Lectures & Classes | /cloud-security/classes | Training offerings with upcoming events |
| Publications | /cloud-security/publications | CSA research & certification contributions |
| Testimonials | /testimonials | Client testimonials |
| Contact | /contact | Contact form (Formspree) |

### Removed Pages (Redirected)
- `/speaking` -> `/cloud-security/classes`
- `/cloud-security` (hub page) -> `/cloud-security/classes`
- `/cloud-security/lectures` -> `/cloud-security/classes`
- `/taise` -> `https://www.taise.guru` (external)

---

## Navigation Structure

Main navigation links:
- About
- Lectures & Classes (`/cloud-security/classes`)
- Publications (`/cloud-security/publications`)
- Testimonials
- Contact
- TAISE Hub (external link to taise.guru)

---

## Design Philosophy

### Relationship to taise.guru

| Aspect | taise.guru (Current) | onlinecloudsec.com |
|--------|---------------------|--------------------------|
| Theme | Dark (#0f172a base) | Light (#ffffff base) |
| Purpose | Knowledge hub/tool | Personal brand/services |
| Tone | Technical, data-rich | Professional, approachable |
| Content | Dynamic JSON data | Mixed static + JSON |

### Color System

```css
:root {
  /* Primary - Professional Blue */
  --primary: #1a5fb4;
  --primary-light: #3584e4;
  --primary-dark: #0d3b7a;

  /* TAISE Accent - Gold */
  --taise-gold: #c8a03e;
  --taise-gold-light: #e5c158;
  --taise-gold-dark: #b8860b;

  /* Backgrounds */
  --bg-white: #ffffff;
  --bg-light: #f8fafc;
  --bg-subtle: #f1f5f9;

  /* Text */
  --text-dark: #1e293b;
  --text-medium: #475569;
  --text-light: #64748b;
}
```

### Typography
- **Headings:** Plus Jakarta Sans (Google Fonts)
- **Body:** Inter (Google Fonts)

---

## Technical Architecture

### Tech Stack
- **HTML5** - Semantic markup
- **CSS** - Custom styles with CSS variables
- **Vanilla JavaScript** - No framework overhead
- **JSON data files** - Content management
- **AWS Amplify** - Hosting with CI/CD from GitHub

### Dynamic Content Loading

The site uses JSON files for dynamic content, loaded via `main.js`:

- `site-config.json` - Credentials displayed on homepage
- `speaking-events.json` - Upcoming lectures/classes
- `testimonials.json` - Testimonials carousel

### Key JavaScript Functions (main.js)

| Function | Purpose |
|----------|---------|
| `initHomepage()` | Load credentials, events, testimonials on homepage |
| `initClassesPage()` | Load upcoming events on classes page |
| `initTestimonialsPage()` | Load all testimonials |
| `renderUpcomingEvents()` | Render event cards |
| `renderTestimonialsCarousel()` | Render testimonial carousel with auto-rotation |

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

### Current Focus
- TAISE certification training
- Cloud security consulting
- Speaking & thought leadership
- Silverlining IL Podcast (6,000+ listeners)

---

## External Links

| Resource | URL |
|----------|-----|
| TAISE Knowledge Hub | https://www.taise.guru |
| TAISE Official (CSA) | https://cloudsecurityalliance.org/education/taise |
| LinkedIn | https://www.linkedin.com/in/mosheferber/ |
| YouTube/Podcast | https://www.youtube.com/playlist?list=PLrsvn13Tgp7RJMEw5q3sy9tcvxOl1wvJi |
| Podcast (Castos) | https://silverlining-il.castos.com/ |

---

## JSON Data Files

### data/site-config.json
Contains global settings and credentials for homepage display.

### data/speaking-events.json
```json
{
  "upcoming": [
    {
      "date": "YYYY-MM-DD",
      "title": "Event Name",
      "location": "Location",
      "topic": "Topic Description",
      "link": "https://...",
      "type": "training|conference|workshop"
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
      "quote": "Testimonial text...",
      "name": "Author Name",
      "title": "Title",
      "company": "Company",
      "image": "/assets/images/testimonials/person.jpg"
    }
  ]
}
```

---

## URL Redirects (_redirects)

The `_redirects` file handles:
1. Old WordPress URLs (301 redirects)
2. Clean URLs without .html extension (200 rewrites)
3. Removed pages redirecting to appropriate destinations
4. External redirect for /taise to taise.guru

---

## Deployment

### Workflow
1. Make changes locally
2. Test locally
3. `git add .` and `git commit`
4. `git push` to GitHub
5. AWS Amplify auto-deploys

### GitHub Repository
- Org: mferber-cloudsec
- Repo: onlinecloudsec-website

---

## Image Assets

### Certification Logos
- `taise_logo.png` - TAISE certification (horizontal, ~120px width)
- `ccsp.webp` - CCSP certification (square, ~80px)
- `ccsk.webp` - CCSK certification (square, ~80px)
- `ccak.png` - CCAK certification (square, ~80px)

### Publication Thumbnails
- `Cloud-Security-for-Startups-Thumbnail.png`
- `cloud-attack-vectors.jpg`
- `security-guidance-for-providing-consuming-api.png`
- `cloud-security-for-startups-2017.png`

---

## Future Enhancements (Post-Launch)

- Blog/articles section
- Newsletter signup
- Speaking video embeds
- Downloadable resources section
- Multi-language support (Hebrew)

---

*Document maintained for Claude Code implementation*
