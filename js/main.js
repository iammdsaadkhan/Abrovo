document.addEventListener('DOMContentLoaded', () => {
  /* =====================================================
     1. NAVBAR SCROLL & HIDE LOGIC
  ===================================================== */
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Toggle glass effect
      navbar.classList.toggle('scrolled', currentScrollY > 60);

      // Hide/Show on scroll direction
      const mobileMenu = document.getElementById('mobileMenu');
      const isMobileMenuOpen = mobileMenu && mobileMenu.classList.contains('open');
      
      if (currentScrollY > lastScrollY && currentScrollY > 76 && !isMobileMenuOpen) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  /* =====================================================
     2. MOBILE MENU TOGGLE
  ===================================================== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      if (isOpen) {
        mobileMenu.style.display = 'block';
        requestAnimationFrame(() => mobileMenu.classList.add('open'));
      } else {
        mobileMenu.classList.remove('open');
        setTimeout(() => { mobileMenu.style.display = ''; }, 350);
      }
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        setTimeout(() => { mobileMenu.style.display = ''; }, 350);
      });
    });
  }

  /* =====================================================
     3. INTERSECTION OBSERVER (Fade-Up Animations)
  ===================================================== */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  /* =====================================================
     4. GLOBAL CONSULTATION MODAL LOGIC
  ===================================================== */
  const overlay = document.getElementById('globalConsultModal');
  const closeBtn = document.getElementById('closeConsultModal');
  const form = document.getElementById('consultForm');

  function openModal(e) {
    if(e) e.preventDefault();
    if(overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if(overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Bind all buttons with data-consult attribute
  document.querySelectorAll('[data-consult]').forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });
  }

  // Form Submission Mockup
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.cform-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        form.innerHTML = `
          <div style="text-align:center; padding: 20px 0;">
            <div style="font-size:3rem; margin-bottom:10px;">🎉</div>
            <h3 style="font-family:var(--font-display); font-size:1.5rem; margin-bottom:10px;">Request Received!</h3>
            <p style="color:var(--text-secondary); line-height:1.6;">Our expert counsellor will contact you within 2 hours. Keep an eye on your WhatsApp.</p>
          </div>
        `;
      }, 1500);
    });
  }
});