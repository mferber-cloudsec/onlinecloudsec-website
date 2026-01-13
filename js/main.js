/**
 * OnlineCloudSec - Main JavaScript
 * Handles navigation, JSON loading, and dynamic content rendering
 */

// ============================================
// Navigation
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Navbar scroll effect
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Initialize page content
  initPage();
});

// ============================================
// Data Loading
// ============================================

async function loadJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error loading JSON:', url, error);
    return null;
  }
}

// ============================================
// Page Initialization
// ============================================

async function initPage() {
  const path = window.location.pathname;

  // Load site config
  const config = await loadJSON('/data/site-config.json');

  // Homepage
  if (path === '/' || path === '/index.html') {
    await initHomepage(config);
  }

  // Speaking page
  if (path === '/speaking' || path === '/speaking.html') {
    await initSpeakingPage();
  }

  // Testimonials page
  if (path === '/testimonials' || path === '/testimonials.html') {
    await initTestimonialsPage();
  }
}

// ============================================
// Homepage
// ============================================

async function initHomepage(config) {
  // Load credentials
  if (config && config.credentials) {
    renderCredentials(config.credentials);
  }

  // Load upcoming events
  const eventsData = await loadJSON('/data/speaking-events.json');
  if (eventsData && eventsData.upcoming) {
    renderUpcomingEvents(eventsData.upcoming.slice(0, 3));
  }

  // Load testimonials
  const testimonialsData = await loadJSON('/data/testimonials.json');
  if (testimonialsData && testimonialsData.testimonials) {
    renderTestimonialsCarousel(testimonialsData.testimonials);
  }
}

function renderCredentials(credentials) {
  const container = document.getElementById('credentialsGrid');
  if (!container || !credentials.length) return;

  const icons = {
    shield: '<svg class="icon-lg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
    award: '<svg class="icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
    brain: '<svg class="icon-lg" viewBox="0 0 24 24"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 22v-7M8 15h8" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
    clock: '<svg class="icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" fill="none"/></svg>'
  };

  container.innerHTML = credentials.map(cred => `
    <div class="card">
      <div class="card-icon">
        ${icons[cred.icon] || icons.shield}
      </div>
      <h3 class="card-title">${cred.title}</h3>
      <p class="card-description">${cred.description}</p>
    </div>
  `).join('');
}

function renderUpcomingEvents(events) {
  const container = document.getElementById('eventsGrid');
  if (!container) return;

  if (!events || events.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <p>No upcoming events scheduled. Check back soon!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(event => {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return `
      <div class="event-card">
        <div class="event-date">${formattedDate}</div>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-location">${event.location}</p>
        <p class="event-topic">${event.topic}</p>
        ${event.link ? `<a href="${event.link}" target="_blank" class="btn btn-outline" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.875rem;">Learn More</a>` : ''}
      </div>
    `;
  }).join('');
}

function renderTestimonialsCarousel(testimonials) {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  if (!testimonials || testimonials.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Testimonials coming soon!</p>
      </div>
    `;
    return;
  }

  let currentIndex = 0;

  function renderTestimonial(index) {
    const t = testimonials[index];
    return `
      <div class="testimonial-card">
        <p class="testimonial-quote">${t.quote}</p>
        <p class="testimonial-author">${t.author}</p>
        <p class="testimonial-role">${t.title}${t.company ? `, ${t.company}` : ''}</p>
      </div>
      ${testimonials.length > 1 ? `
        <div class="testimonial-nav">
          ${testimonials.map((_, i) => `
            <button class="testimonial-dot ${i === index ? 'active' : ''}" data-index="${i}"></button>
          `).join('')}
        </div>
      ` : ''}
    `;
  }

  container.innerHTML = renderTestimonial(currentIndex);

  // Add click handlers for navigation dots
  container.querySelectorAll('.testimonial-dot').forEach(dot => {
    dot.addEventListener('click', function() {
      currentIndex = parseInt(this.dataset.index);
      container.innerHTML = renderTestimonial(currentIndex);
      // Re-attach event listeners
      attachDotListeners();
    });
  });

  function attachDotListeners() {
    container.querySelectorAll('.testimonial-dot').forEach(dot => {
      dot.addEventListener('click', function() {
        currentIndex = parseInt(this.dataset.index);
        container.innerHTML = renderTestimonial(currentIndex);
        attachDotListeners();
      });
    });
  }

  // Auto-rotate testimonials
  if (testimonials.length > 1) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      container.innerHTML = renderTestimonial(currentIndex);
      attachDotListeners();
    }, 8000);
  }
}

// ============================================
// Speaking Page
// ============================================

async function initSpeakingPage() {
  const eventsData = await loadJSON('/data/speaking-events.json');
  const container = document.getElementById('upcomingEvents');

  if (!container) return;

  if (!eventsData || !eventsData.upcoming || eventsData.upcoming.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No upcoming events scheduled at this time.</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem;">
          Check back soon or <a href="/contact">contact me</a> for booking inquiries.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="events-grid">
      ${eventsData.upcoming.map(event => {
        const date = new Date(event.date);
        const formattedDate = date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });

        return `
          <div class="event-card">
            <div class="event-date">${formattedDate}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-location">${event.location}</p>
            <p class="event-topic">${event.topic}</p>
            ${event.link ? `<a href="${event.link}" target="_blank" class="btn btn-outline" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.875rem;">Event Details</a>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ============================================
// Testimonials Page
// ============================================

async function initTestimonialsPage() {
  const testimonialsData = await loadJSON('/data/testimonials.json');
  const container = document.getElementById('testimonialsList');

  if (!container) return;

  if (!testimonialsData || !testimonialsData.testimonials || testimonialsData.testimonials.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <p>Testimonials coming soon!</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem;">
          Check back later for feedback from clients, students, and conference attendees.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = testimonialsData.testimonials.map(t => `
    <div class="testimonial-card" style="margin-bottom: 2rem; text-align: left;">
      <p class="testimonial-quote" style="font-size: 1.125rem;">${t.quote}</p>
      <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem;">
        ${t.image ? `<img src="${t.image}" alt="${t.author}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">` : ''}
        <div>
          <p class="testimonial-author">${t.author}</p>
          <p class="testimonial-role">${t.title}${t.company ? `, ${t.company}` : ''}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================
// Utility Functions
// ============================================

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
