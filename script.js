/* =============================================
   JAVASCRIPT – DINESH PORTFOLIO
   Interactions, Animations & Form Handling
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ===========================
  // NAVBAR SCROLL BEHAVIOR
  // ===========================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ===========================
  // ACTIVE NAV LINK HIGHLIGHTING
  // ===========================
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  const updateActiveNav = () => {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.style.color = 'var(--purple-300)';
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav);

  // ===========================
  // SCROLL REVEAL ANIMATION
  // ===========================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the reveal for grid items
        const siblings = [...entry.target.parentElement.children].filter(el => el.classList.contains('reveal'));
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===========================
  // COUNTER ANIMATION (STATS)
  // ===========================
  const statNumbers = document.querySelectorAll('.stat-number[data-target], .dsa-number[data-target]');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  // ===========================
  // SKILL BAR ANIMATION
  // ===========================
  const skillCards = document.querySelectorAll('.skill-card');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillCards.forEach(card => skillObserver.observe(card));

  // ===========================
  // TYPING EFFECT (Hero tagline)
  // ===========================
  const tagline = document.querySelector('.hero-tagline');
  if (tagline) {
    const originalText = tagline.textContent;
    tagline.textContent = '';
    let charIndex = 0;
    let started = false;

    const startTyping = () => {
      if (started) return;
      started = true;
      const typeTimer = setInterval(() => {
        tagline.textContent += originalText[charIndex];
        charIndex++;
        if (charIndex >= originalText.length) clearInterval(typeTimer);
      }, 60);
    };

    // Start after a small delay
    setTimeout(startTyping, 800);
  }

  // ===========================
  // HERO CONTENT STAGGER
  // ===========================
  const heroItems = [
    '.hero-badge',
    '.hero-name',
    '.hero-title',
    '.hero-tagline',
    '.hero-tags',
    '.hero-cta',
    '.hero-social',
  ];

  heroItems.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 120);
    }
  });

  const heroImage = document.querySelector('.hero-image-wrapper');
  if (heroImage) {
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(40px)';
    heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'translateX(0)';
    }, 500);
  }

  // ===========================
  // CONTACT FORM HANDLING
  // ===========================
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('contactSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        // Shake invalid fields
        [document.getElementById('formName'), document.getElementById('formEmail'), document.getElementById('formMessage')].forEach(field => {
          if (!field.value.trim()) {
            field.style.borderColor = '#f87171';
            field.style.animation = 'shake 0.4s ease';
            setTimeout(() => {
              field.style.borderColor = '';
              field.style.animation = '';
            }, 500);
          }
        });
        return;
      }

      // Simulate form submission
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Sending...';

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1500);
    });
  }

  // ===========================
  // SMOOTH PARALLAX ORBS
  // ===========================
  const orbs = document.querySelectorAll('.hero-orb');

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / centerX;
    const moveY = (clientY - centerY) / centerY;

    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 15;
      orb.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
  });

  // ===========================
  // COLLEGE CARD HOVER RIPPLE
  // ===========================
  document.querySelectorAll('.college-card, .skill-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  // ===========================
  // RESUME DOWNLOAD TRACKING
  // ===========================
  const downloadBtn = document.getElementById('heroDownloadResume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      console.log('Resume download initiated');
    });
  }

  // ===========================
  // ADD SHAKE KEYFRAME DYNAMICALLY
  // ===========================
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-6px); }
      80% { transform: translateX(6px); }
    }
  `;
  document.head.appendChild(shakeStyle);

});

// ===========================
// POSTER MODAL � ESC TO CLOSE
// ===========================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('posterModal').classList.remove('open');
  }
});

// ===========================
// SKILLS � TAB FILTER + BAR ANIMATION
// ===========================
(function() {
  const tabs = document.querySelectorAll('.skill-tab');
  const cards = document.querySelectorAll('.sk-card');

  // Animate bars when card enters viewport
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bar-animated');
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => barObserver.observe(card));

  // Tab filtering
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.tab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide cards
      cards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('sk-hidden');
          // Re-trigger bar animation
          card.classList.remove('bar-animated');
          setTimeout(() => card.classList.add('bar-animated'), 50);
        } else {
          card.classList.add('sk-hidden');
        }
      });
    });
  });
})();

// ============================================
// CERTIFICATE MODAL LIGHTBOX
// ============================================
window.openCertModal = function(src, title, subtitle) {
  const modal = document.getElementById('certModal');
  const img = document.getElementById('certModalImg');
  const t = document.getElementById('certModalTitle');
  const s = document.getElementById('certModalSubtitle');
  if (modal && img) {
    img.src = src;
    if (t) t.textContent = title;
    if (s) s.textContent = subtitle;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCertModal = function() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeCertModal();
  }
});
