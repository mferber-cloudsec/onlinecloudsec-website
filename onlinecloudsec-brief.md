# OnlineCloudSec Website - Claude Code Brief

**Handoff Document for Claude Code**  
**Created:** January 2025

---

## 🎯 Project Overview

Build a new professional website for **onlinecloudsec.com** to replace the current WordPress site.

**Owner:** Moshe Ferber (Mo)  
**Domain:** onlinecloudsec.com  
**Hosting:** AWS Amplify (same as taise.guru)

---

## 📋 Requirements Summary

### Design
- **Theme:** Light/professional (NOT dark like taise.guru)
- **Colors:** Blue primary (#1a5fb4), Gold accent for TAISE (#c8a03e)
- **Style:** Clean, modern, lots of whitespace
- **Mobile:** Fully responsive

### Structure
```
onlinecloudsec.com/
├── index.html              # Home - Personal brand hub
├── about.html              # About Mo
├── speaking.html           # Speaking schedule
├── testimonials.html       # Client testimonials  
├── contact.html            # Contact form (Formspree)
│
├── taise/
│   └── index.html          # TAISE info page → links to taise.guru
│
├── cloud-security/
│   ├── index.html          # Cloud Security hub
│   ├── lectures.html       # Lecture topics
│   ├── classes.html        # Training classes
│   └── publications.html   # Publications
│
├── data/                   # JSON content (easy maintenance)
│   ├── site-config.json
│   ├── testimonials.json
│   ├── speaking-events.json
│   ├── publications.json
│   ├── lectures.json
│   └── classes.json
│
├── assets/
│   ├── images/
│   ├── css/
│   └── docs/
│
├── js/
│   └── main.js             # Load JSON, render content
│
└── _redirects              # Amplify redirects for old URLs
```

### Key Features
1. **TAISE prominent** - Gold CTA button on homepage
2. **JSON content** - All dynamic content in JSON files for easy editing
3. **Contact form** - Using Formspree (free)
4. **SEO redirects** - 301 redirects from old WordPress URLs

---

## 👤 About Mo (Content)

**Name:** Moshe Ferber  
**Title:** Cloud Security Evangelist & AI Safety Expert

**Credentials:**
- Chairman, Cloud Security Alliance Israel Chapter
- CCSP Founding Committee Member (ISC2)
- CCSK Contributor (CSA)
- TAISE Certified Expert
- Board Member, Machshava Tova (nonprofit)
- Angel Investor
- 30+ years cybersecurity experience

**Current Focus:**
- TAISE certification training
- Cloud security consulting
- Speaking & thought leadership
- Silverlining IL Podcast (6,000+ listeners)

---

## 🎨 Design Specifications

### Colors
```css
:root {
  /* Primary - Professional Blue */
  --primary: #1a5fb4;
  --primary-light: #3584e4;
  --primary-dark: #0d3b7a;
  
  /* TAISE Accent - Gold */
  --taise-gold: #c8a03e;
  --taise-gold-light: #e5c158;
  
  /* Backgrounds */
  --bg-white: #ffffff;
  --bg-light: #f8fafc;
  --bg-subtle: #f1f5f9;
  
  /* Text */
  --text-dark: #1e293b;
  --text-medium: #475569;
  --text-light: #64748b;
  
  /* Borders */
  --border-light: #e2e8f0;
}
```

### Typography
- **Headings:** Plus Jakarta Sans (Google Fonts)
- **Body:** System fonts for performance
- **Code:** JetBrains Mono (if needed)

### Homepage Layout
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                    About | Speaking | Contact       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│     [Professional Photo]                                    │
│                                                             │
│     MOSHE FERBER                                           │
│     Cloud Security Evangelist & AI Safety Expert           │
│                                                             │
│     ┌────────────────────┐  ┌────────────────────┐         │
│     │  🎓 TAISE Training │  │  ☁️ Cloud Security │         │
│     │   [GOLD BUTTON]    │  │   [BLUE BUTTON]    │         │
│     └────────────────────┘  └────────────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  CREDENTIALS (icon cards)                                   │
├─────────────────────────────────────────────────────────────┤
│  UPCOMING SPEAKING (from JSON)                              │
├─────────────────────────────────────────────────────────────┤
│  TESTIMONIALS (carousel from JSON)                          │
├─────────────────────────────────────────────────────────────┤
│  Footer | © 2025 | Social Links                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔗 External Links

| Link | URL |
|------|-----|
| TAISE Knowledge Hub | https://www.taise.guru |
| TAISE Official (CSA) | https://cloudsecurityalliance.org/education/taise |
| LinkedIn | (ask Mo) |
| Twitter | (ask Mo) |
| Podcast | (ask Mo for Silverlining IL link) |

---

## 📧 Contact Form

Use **Formspree** (free tier):
1. Mo creates account at formspree.io
2. Creates form, gets form ID
3. Form submissions go to his email

```html
<form action="https://formspree.io/f/FORM_ID" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

---

## 🔄 SEO Redirects

Create `_redirects` file for Amplify:

```
/about/              /about.html           301
/about/lectures/     /cloud-security/lectures.html  301
/about/classes/      /cloud-security/classes.html   301
/testimonials/       /testimonials.html    301
/speaking-schedule/  /speaking.html        301
/publications/       /cloud-security/publications.html  301
/gallery/            /about.html           301
/contact/            /contact.html         301
```

---

## 📁 Sample JSON Files

### data/site-config.json
```json
{
  "siteName": "Moshe Ferber",
  "tagline": "Cloud Security Evangelist & AI Safety Expert",
  "email": "contact@onlinecloudsec.com",
  "taiseHub": "https://www.taise.guru",
  "social": {
    "linkedin": "",
    "twitter": ""
  },
  "credentials": [
    { "title": "CSA Israel Chairman", "icon": "🏛️" },
    { "title": "CCSP Founding Member", "icon": "🎓" },
    { "title": "TAISE Expert", "icon": "⭐" },
    { "title": "30+ Years Experience", "icon": "🛡️" }
  ]
}
```

### data/testimonials.json
```json
{
  "testimonials": [
    {
      "quote": "Testimonial text here...",
      "author": "Name",
      "title": "Title",
      "company": "Company"
    }
  ]
}
```

### data/speaking-events.json
```json
{
  "events": [
    {
      "title": "Event Name",
      "date": "2025-03-15",
      "location": "City, Country",
      "topic": "Talk Title",
      "link": "https://..."
    }
  ]
}
```

---

## 🚀 Deployment

1. **GitHub repo:** `mferber-cloudsec/onlinecloudsec-website`
2. **Amplify:** Connect to repo, auto-deploy on push
3. **Domain:** Connect onlinecloudsec.com (DNS already on Route 53)

---

## ✅ Task Checklist for Claude Code

1. [ ] Create GitHub repository
2. [ ] Set up folder structure
3. [ ] Create base HTML template (header, footer, nav)
4. [ ] Build homepage (light theme)
5. [ ] Build TAISE landing page
6. [ ] Build Cloud Security section pages
7. [ ] Build About, Speaking, Testimonials, Contact pages
8. [ ] Create all JSON data files
9. [ ] Implement JSON loading in JavaScript
10. [ ] Add Formspree contact form
11. [ ] Create _redirects file
12. [ ] Test locally
13. [ ] Push to GitHub
14. [ ] Set up Amplify deployment

---

## 📞 Questions for Mo

Before starting, Claude Code should ask:
1. LinkedIn profile URL?
2. Twitter/X handle?
3. Silverlining IL podcast link?
4. Professional photo file location?
5. Current testimonials text?
6. Upcoming speaking events?

---

*This brief was prepared by Claude Desktop for handoff to Claude Code*
