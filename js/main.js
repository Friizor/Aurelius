/**
 * AURELIUS GENÈVE — HAUTE HORLOGERIE
 * Main Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Watch Catalog Data ---
  const watchCatalog = {
    'tourbillon-noire': {
      id: 'tourbillon-noire',
      name: 'Aurelius Tourbillon Noire',
      ref: 'Ref. AT-01',
      edition: 'Limited to 50 Pieces Worldwide',
      price: '$48,500 USD',
      image: './assets/images/watch_tourbillon_noire.jpg',
      specs: {
        'Calibre': 'In-House Calibre AT-900 (Manual Wind)',
        'Escapement': '60-Second Flying Tourbillon with Gold Cage',
        'Power Reserve': '72 Hours',
        'Case Diameter': '41.0 mm (Thickness: 11.2 mm)',
        'Case Material': 'Matte Black Ceramic & Grade 5 Titanium',
        'Dial': 'Deep Black Sunburst with 18k Rose Gold Indices',
        'Crystal': 'Cambered Glareproof Sapphire',
        'Strap': 'Hand-Stitched Alligator with DLC Titanium Deployant',
        'Water Resistance': '50 Metres (5 ATM)'
      },
      description: 'The Tourbillon Noire marries the absolute peak of Genevan chronometry with avant-garde stealth horology. Each flying tourbillon cage is hand-beveled across 48 internal angles, turning once every 60 seconds against a light-absorbing deep black canvas.'
    },
    'chronographe-royal': {
      id: 'chronographe-royal',
      name: 'Chronographe Royal Or',
      ref: 'Ref. CR-04',
      edition: 'Limited to 25 Pieces Worldwide',
      price: '$62,000 USD',
      image: './assets/images/watch_chronographe_royal.jpg',
      specs: {
        'Calibre': 'Calibre CR-1888 Column-Wheel Chronograph',
        'Escapement': 'Swiss Lever, 28,800 vph (4 Hz)',
        'Power Reserve': '65 Hours',
        'Case Diameter': '40.0 mm (Thickness: 12.4 mm)',
        'Case Material': 'Solid 18k Rose Gold with Hand-Fluted Bezel',
        'Dial': 'Satin Obsidian with Tri-Compax Snailed Counters',
        'Crystal': 'Box-Domed Sapphire Crystal with Dual AR Treatment',
        'Strap': 'Mississippiensis Alligator with 18k Gold Pin Buckle',
        'Water Resistance': '30 Metres (3 ATM)'
      },
      description: 'A tribute to classical Genevan grand complications. Featuring an integrated column-wheel chronograph with lateral coupling, visible through the exhibition sapphire caseback, decorated with hand-applied Côtes de Genève stripes and heat-blued screws.'
    },
    'squelette-eternel': {
      id: 'squelette-eternel',
      name: 'Squelette Éternel',
      ref: 'Ref. SE-09',
      edition: 'Limited to 15 Pieces Worldwide',
      price: '$85,000 USD',
      image: './assets/images/watch_squelette_eternel.jpg',
      specs: {
        'Calibre': 'Calibre SE-Openwork Skeleton Masterpiece',
        'Escapement': 'Free-Sprung Variable Inertia Balance',
        'Power Reserve': '100 Hours (Twin Mainspring Barrels)',
        'Case Diameter': '42.0 mm (Thickness: 10.8 mm)',
        'Case Material': 'Dual-Tone 18k Rose Gold and Micro-Blasted Ruthenium',
        'Dial': 'Fully Openworked Sapphire Dial with Roman Numerals',
        'Crystal': 'Double-Sided Anti-Reflective Scratchproof Sapphire',
        'Strap': 'Matte Black Nubuck Alligator with Quick-Release Gold Clasp',
        'Water Resistance': '100 Metres (10 ATM)'
      },
      description: 'Radical architectural transparency. The titanium and gold bridges have been openworked to the ultimate limit of structural rigidity, exposing the twin mainspring barrels and pulsating balance wheel in full three-dimensional horological choreography.'
    }
  };

  // --- Sticky Navigation & Active Link Spy ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let currentSection = '';
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // --- Mobile Drawer Menu ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    const isOpen = mobileDrawer.classList.toggle('open');
    mobileMenuBtn.classList.toggle('open', isOpen);
    mobileBackdrop.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileMenuBtn.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileBackdrop.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  // --- Interactive Hero Watch 3D Tilt Effect ---
  const heroStage = document.querySelector('.hero-visual-stage');
  const watchFrame = document.querySelector('.watch-frame-wrapper');

  if (heroStage && watchFrame) {
    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / (rect.height / 2)) * -9;
      const tiltY = (x / (rect.width / 2)) * 9;

      watchFrame.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroStage.addEventListener('mouseleave', () => {
      watchFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // --- Product Quick View Modal ---
  const modalOverlay = document.getElementById('watchDetailModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalImg = document.getElementById('modalWatchImg');
  const modalBadge = document.getElementById('modalWatchBadge');
  const modalTitle = document.getElementById('modalWatchTitle');
  const modalPrice = document.getElementById('modalWatchPrice');
  const modalDesc = document.getElementById('modalWatchDesc');
  const modalSpecsBody = document.getElementById('modalSpecsBody');
  const modalReserveBtn = document.getElementById('modalReserveBtn');

  let currentModalWatchId = null;

  function openModal(watchId) {
    const watch = watchCatalog[watchId];
    if (!watch) return;

    currentModalWatchId = watchId;
    modalImg.src = watch.image;
    modalImg.alt = watch.name;
    modalBadge.textContent = `${watch.ref} • ${watch.edition}`;
    modalTitle.textContent = watch.name;
    modalPrice.textContent = watch.price;
    modalDesc.textContent = watch.description;

    // Build specs table
    modalSpecsBody.innerHTML = '';
    Object.entries(watch.specs).forEach(([key, value]) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${key}</td><td>${value}</td>`;
      modalSpecsBody.appendChild(row);
    });

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const watchId = e.currentTarget.getAttribute('data-watch-id');
      openModal(watchId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  if (modalReserveBtn) {
    modalReserveBtn.addEventListener('click', () => {
      closeModal();
      if (currentModalWatchId) {
        const select = document.getElementById('orderTimepieceSelect');
        if (select) {
          select.value = currentModalWatchId;
          updateWhatsAppLink();
        }
      }
      const orderSec = document.getElementById('order');
      if (orderSec) {
        orderSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Order Form & Live Custom Engraving Preview ---
  const orderForm = document.getElementById('conciergeOrderForm');
  const timepieceSelect = document.getElementById('orderTimepieceSelect');
  const engravingInput = document.getElementById('orderEngravingInput');
  const engravingPreview = document.getElementById('engravingPreviewText');
  const clientNameInput = document.getElementById('orderClientName');
  const clientPhoneInput = document.getElementById('orderClientPhone');
  const btnWhatsAppOrder = document.getElementById('btnWhatsAppOrder');

  if (engravingInput && engravingPreview) {
    engravingInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      engravingPreview.textContent = val ? `"${val}"` : '— Optional inscription preview —';
      updateWhatsAppLink();
    });
  }

  function updateWhatsAppLink() {
    if (!btnWhatsAppOrder) return;
    const selectedWatchId = timepieceSelect ? timepieceSelect.value : 'tourbillon-noire';
    const watch = watchCatalog[selectedWatchId] || watchCatalog['tourbillon-noire'];
    const name = clientNameInput && clientNameInput.value.trim() ? clientNameInput.value.trim() : 'Esteemed Client';
    const engraving = engravingInput && engravingInput.value.trim() ? engravingInput.value.trim() : 'None requested';

    const message = `Hello Aurelius Genève Private Concierge,\n\nI am contacting you to reserve an allocation for the ${watch.name} (${watch.ref}).\n\nClient Name: ${name}\nEngraving Request: ${engraving}\n\nPlease confirm availability and arrange a private acquisition consultation.`;
    
    const waUrl = `https://wa.me/41228198000?text=${encodeURIComponent(message)}`;
    btnWhatsAppOrder.setAttribute('href', waUrl);
  }

  if (timepieceSelect) timepieceSelect.addEventListener('change', updateWhatsAppLink);
  if (clientNameInput) clientNameInput.addEventListener('input', updateWhatsAppLink);

  // Initialize WhatsApp link
  updateWhatsAppLink();

  // --- Order Form Submission & VIP Confirmation Toast ---
  const confirmationModal = document.getElementById('vipConfirmationModal');
  const confirmationClose = document.getElementById('confirmationCloseBtn');

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const selectedWatchId = timepieceSelect.value;
      const watch = watchCatalog[selectedWatchId];
      const clientName = clientNameInput.value || 'Collector';
      const token = `AUR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      // Update confirmation modal contents
      const tokenEl = document.getElementById('confirmedReservationToken');
      const watchEl = document.getElementById('confirmedWatchName');
      const clientEl = document.getElementById('confirmedClientName');

      if (tokenEl) tokenEl.textContent = token;
      if (watchEl) watchEl.textContent = watch ? `${watch.name} (${watch.ref})` : 'Aurelius Timepiece';
      if (clientEl) clientEl.textContent = clientName;

      // Show confirmation modal
      if (confirmationModal) {
        confirmationModal.classList.add('open');
      } else {
        showToast('Reservation Registered', `Token #${token} allocated to ${clientName}.`);
      }

      orderForm.reset();
      if (engravingPreview) engravingPreview.textContent = '— Optional inscription preview —';
      updateWhatsAppLink();
    });
  }

  if (confirmationClose) {
    confirmationClose.addEventListener('click', () => {
      confirmationModal.classList.remove('open');
    });
  }

  if (confirmationModal) {
    confirmationModal.addEventListener('click', (e) => {
      if (e.target === confirmationModal) confirmationModal.classList.remove('open');
    });
  }

  // --- Toast Notification Helper ---
  function showToast(title, message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div>
        <div class="toast-title">${title}</div>
        <div class="toast-sub">${message}</div>
      </div>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Newsletter form feedback
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        showToast('Welcome to the Aurelius Circle', 'You will receive private novelty previews in your inbox.');
        input.value = '';
      }
    });
  }

  // --- Web Audio Mechanical Ticking Sound (Subtle Luxury Touch) ---
  const audioBtn = document.querySelector('.audio-toggle-btn');
  let audioCtx = null;
  let isTicking = false;
  let tickTimer = null;

  function playTickSound() {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    // Escapement impulse 1: metal click
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.015);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(3, now);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
  }

  function toggleMechanicalAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isTicking) {
      isTicking = true;
      audioBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      audioBtn.setAttribute('title', 'Mute Mechanical Escapement');
      showToast('Horological Soundscape', 'Subtle 4Hz mechanical escapement ticking active.');

      // 4Hz = 28,800 beats per hour (250ms interval)
      tickTimer = setInterval(playTickSound, 250);
    } else {
      isTicking = false;
      clearInterval(tickTimer);
      audioBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
      audioBtn.setAttribute('title', 'Play Mechanical Escapement Sound');
    }
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', toggleMechanicalAudio);
  }

  // --- Scroll Reveal with IntersectionObserver ---
  const revealElements = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('in-view'));
  }
});
