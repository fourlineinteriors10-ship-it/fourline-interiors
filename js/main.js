/**
 * FOURLINE INTERIORS - Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initStickyHeader();
  initMobileMenu();
  initProjectsGrid();
  initProjectModal();
  initBeforeAfterSliders();
  initCounters();
  initVisualJournal();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Custom Luxury Cursor
   ========================================================================== */
function initCustomCursor() {
  const cursorDot = document.querySelector('.custom-cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  if (!cursorDot || !cursorFollower) return;

  // Only enable on pointer-fine desktop devices
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('cursor-active');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth follower interpolation
    function renderCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .service-item, .concept-card, .calc-chip, .journal-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
}

/* ==========================================================================
   2. Sticky Header & Scroll Effects
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn-primary');

  if (!toggleBtn || !mobileDrawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.classList.toggle('open');
    mobileDrawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('open');
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   4. Dynamic Projects Rendering & Filtering
   ========================================================================== */
function initProjectsGrid() {
  const gridContainer = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!gridContainer || typeof FOURLINE_PROJECTS === 'undefined') return;

  function renderProjects(category = 'all') {
    gridContainer.innerHTML = '';
    
    const filtered = category === 'all' 
      ? FOURLINE_PROJECTS 
      : FOURLINE_PROJECTS.filter(p => p.category === category);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      card.innerHTML = `
        <div class="project-image-box">
          <img src="${project.thumbnail}" alt="${project.title} - Fourline Interiors" loading="lazy" />
          <div class="project-card-overlay"></div>
          <span class="project-badge-top">${project.categoryLabel}</span>
        </div>
        <div class="project-card-details">
          <div class="project-meta-line">
            <span>${project.location}</span>
            <span>•</span>
            <span>${project.year}</span>
          </div>
          <h3 class="project-card-title">${project.title}</h3>
          <span class="project-view-action">
            Explore Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectModal(project.id);
      });

      gridContainer.appendChild(card);
    });
  }

  // Initial render
  renderProjects('all');

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

/* ==========================================================================
   5. Project Quick-View Lightbox / Detail Modal
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => closeProjectModal());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const container = document.getElementById('modalContentBody');
  if (!modal || !container || typeof FOURLINE_PROJECTS === 'undefined') return;

  const project = FOURLINE_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  // Build materials HTML
  const materialsHtml = project.materials.map(m => `
    <div class="material-chip-item">
      <span class="material-color-swatch" style="background-color: ${m.hex}"></span>
      <div>
        <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF;">${m.name}</div>
        <div style="font-size: 0.6875rem; color: var(--text-light-muted); text-transform: uppercase;">${m.type}</div>
      </div>
    </div>
  `).join('');

  // Build gallery HTML
  const galleryHtml = project.gallery.map(imgSrc => `
    <img src="${imgSrc}" alt="${project.title} Detail" loading="lazy" />
  `).join('');

  // Build Modal Content
  container.innerHTML = `
    <img src="${project.heroImage}" alt="${project.title}" class="modal-hero-image" />
    <div class="modal-body-padding">
      <div class="modal-meta-chips">
        <span class="modal-chip">${project.categoryLabel}</span>
        <span class="modal-chip">${project.location}</span>
        <span class="modal-chip">${project.year}</span>
        <span class="modal-chip">${project.budgetTier}</span>
      </div>

      <h2 class="modal-project-title">${project.title}</h2>
      <p class="modal-project-tagline">${project.tagline}</p>

      <!-- Key Specifications -->
      <div class="modal-specs-grid">
        <div class="modal-spec-item">
          <div class="spec-lbl">Built-Up Area</div>
          <div class="spec-val">${project.area}</div>
        </div>
        <div class="modal-spec-item">
          <div class="spec-lbl">Execution Duration</div>
          <div class="spec-val">${project.duration}</div>
        </div>
        <div class="modal-spec-item">
          <div class="spec-lbl">Scope of Work</div>
          <div class="spec-val">${project.scope}</div>
        </div>
        <div class="modal-spec-item">
          <div class="spec-lbl">Location</div>
          <div class="spec-val">${project.location}</div>
        </div>
      </div>

      <!-- Narrative & Materials -->
      <div class="modal-narrative-grid">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.625rem; margin-bottom: 1rem; color: var(--gold-primary);">The Design Narrative</h3>
          <p style="color: var(--text-light-muted); line-height: 1.85; margin-bottom: 1.5rem; font-size: 1rem;">${project.description}</p>
          <h4 style="font-family: var(--font-serif); font-size: 1.375rem; margin-bottom: 0.75rem; color: #FFFFFF;">Spatial Concept</h4>
          <p style="color: var(--text-light-muted); line-height: 1.85; font-size: 0.9375rem;">${project.concept}</p>
        </div>

        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.625rem; margin-bottom: 1rem; color: var(--gold-primary);">Material Palette</h3>
          <div class="modal-materials-list">
            ${materialsHtml}
          </div>
        </div>
      </div>

      <!-- Before & After Comparison -->
      ${project.beforeAfter ? `
        <div style="margin: 3rem 0;">
          <h3 style="font-family: var(--font-serif); font-size: 1.625rem; margin-bottom: 1rem; color: var(--gold-primary);">Transformation (Before vs After)</h3>
          <div class="before-after-container" style="height: 440px; margin-top: 1rem;">
            <div class="ba-image-layer ba-before-wrapper">
              <img src="${project.beforeAfter.before}" alt="Before Renovation" />
              <span class="ba-badge badge-before">${project.beforeAfter.beforeLabel}</span>
            </div>
            <div class="ba-image-layer ba-after-wrapper">
              <img src="${project.beforeAfter.after}" alt="After Handover" />
              <span class="ba-badge badge-after">${project.beforeAfter.afterLabel}</span>
            </div>
            <div class="ba-handle">
              <div class="ba-handle-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8L22 12L18 16"/><path d="M6 8L2 12L6 16"/></svg>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Gallery Grid -->
      <h3 style="font-family: var(--font-serif); font-size: 1.625rem; margin-top: 3rem; margin-bottom: 1rem; color: var(--gold-primary);">Architectural Gallery</h3>
      <div class="modal-gallery-grid">
        ${galleryHtml}
      </div>

      <!-- Modal Footer CTA -->
      <div style="margin-top: 4rem; padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
        <h4 style="font-family: var(--font-serif); font-size: 1.875rem; margin-bottom: 1rem;">Envision a similar space for yourself?</h4>
        <a href="#contact" class="btn-primary" onclick="closeProjectModal()">Consult With Our Studio</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Initialize before/after slider inside modal
  const modalSlider = container.querySelector('.before-after-container');
  if (modalSlider) {
    new BeforeAfterSlider(modalSlider);
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   6. Animated Counter Numbers
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.stat-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(el.getAttribute('data-target'), 10);
        if (!isNaN(targetValue)) {
          animateCount(el, targetValue);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));

  function animateCount(element, target) {
    let current = 0;
    const duration = 1800;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, stepTime);
  }
}



/* ==========================================================================
   9. Visual Journal / Instagram Feed
   ========================================================================== */
function initVisualJournal() {
  const journalGrid = document.getElementById('journalGrid');
  if (!journalGrid || typeof FOURLINE_JOURNAL === 'undefined') return;

  journalGrid.innerHTML = FOURLINE_JOURNAL.map(item => `
    <div class="journal-item">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="journal-overlay">
        <div class="insta-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>
        <div class="journal-title">${item.title}</div>
        <div class="journal-handle">${item.tag}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. Consultation Inquiry Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('consultationForm');
  const statusMsg = document.getElementById('formStatusMsg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="clientName"]').value;
    const phone = form.querySelector('[name="clientPhone"]').value;
    const type = form.querySelector('[name="projectType"]').value;
    const budget = form.querySelector('[name="budgetTier"]').value;
    const notes = form.querySelector('[name="clientNotes"]').value;

    // Send formatted WhatsApp inquiry directly to the studio
    const whatsappMessage = encodeURIComponent(
      `Hello Fourline Interiors Team,\n\nI would like to inquire about an interior project:\n- Name: ${name}\n- Phone: ${phone}\n- Space Type: ${type}\n- Budget Range: ${budget}\n- Details: ${notes || 'Turnkey interior design inquiry'}`
    );

    if (statusMsg) {
      statusMsg.className = 'form-status-msg success';
      statusMsg.innerHTML = `✓ Thank you, ${name}! Your consultation request has been received. Redirecting you to our studio WhatsApp...`;
    }

    setTimeout(() => {
      window.open(`https://wa.me/918169316433?text=${whatsappMessage}`, '_blank');
      form.reset();
    }, 1200);
  });
}

/* ==========================================================================
   11. Smooth Navigation Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
