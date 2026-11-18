/**
 * ============================================================================
 * HAIR EXPRESSO SALON — MAIN INTERACTIVE CONTROLLER
 * ============================================================================
 * Handles:
 * - Dynamic rendering from `js/data.js` (Services, Real Pricing Menu & Starting
 *   Prices Card, Stats, Gallery, Testimonials, Instagram 6-Tile Feed, Hours)
 * - Sticky Navbar + Full-Screen Mobile Menu + Scrollspy
 * - Subtle Hero Parallax (respecting `prefers-reduced-motion`)
 * - Scroll-Reveal (IntersectionObserver) + Animated Number Counters
 * - Interactive Pricing Category Tabs (Hair, Beauty, Treatments & Colour)
 * - Filterable Masonry Gallery + Accessible Lightbox (Esc, Arrows, Touch Swipe)
 * - Testimonials Carousel (Prev/Next, Pagination Dots, Touch Swipe, Resize)
 * - WhatsApp Instant Booking Form with client-side validation & pre-select
 */

import {
  BUSINESS_INFO,
  IMAGES,
  SERVICES,
  PRICING_DATA,
  ABOUT_STATS,
  GALLERY_ITEMS,
  INSTAGRAM_TILES,
  TESTIMONIALS
} from "./data.js";

const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);
const isReducedMotion = () => reducedMotionQuery.matches;

// ============================================================================
// 1. INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("is-loading");

  // Set dynamic copyright year
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Render data-driven sections
  renderServices();
  renderPricing();
  renderStats();
  renderGallery();
  renderTestimonials();
  renderInstagramFeed();
  renderOpeningHours();

  // Initialize interactive behaviors across micro-frames to keep TBT near 0ms
  initNavbarAndMobileMenu();
  initHeroParallax();
  requestAnimationFrame(() => {
    initScrollRevealAndCounters();
    initGalleryFilterAndLightbox();
    initTestimonialsCarousel();
    initBookingForm();
    initImageFallbacks();
  });
});

// ============================================================================
// 2. RENDER SERVICES GRID (10 Real In-Store Menu Services)
// ============================================================================
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = SERVICES.map(
    (service, idx) => `
      <article
        class="service-card reveal-up"
        style="--stagger-delay: ${(idx % 4) * 80}ms"
      >
        <div>
          <div class="service-icon-box">
            ${service.iconSvg}
          </div>
          <span class="service-tag">${escapeHtml(service.tag)}</span>
          <h3 class="service-title">${escapeHtml(service.title)}</h3>
          <p class="service-desc">${escapeHtml(service.description)}</p>
        </div>
        <a
          href="#book"
          class="service-book-link"
          data-preselect="${escapeHtml(service.title)}"
          aria-label="Book ${escapeHtml(service.title)}"
        >
          Book Service <span aria-hidden="true">→</span>
        </a>
      </article>
    `
  ).join("");
}

// ============================================================================
// 3. RENDER PRICING TABS & "STARTING PRICES" HIGHLIGHT CARD
// ============================================================================
function renderPricing() {
  const tabsContainer = document.getElementById("pricing-tabs");
  const listContainer = document.getElementById("pricing-list-container");
  const disclaimerEl = document.getElementById("pricing-disclaimer");
  const featuredContainer = document.getElementById("pricing-featured-card");

  if (!tabsContainer || !listContainer || !featuredContainer) return;

  // Render 3 category tab buttons: Hair, Beauty, Treatments & Colour
  tabsContainer.innerHTML = PRICING_DATA.categories
    .map(
      (cat, index) => `
        <button
          type="button"
          class="pricing-tab-btn ${index === 0 ? "active" : ""}"
          role="tab"
          id="tab-${cat.id}"
          aria-selected="${index === 0 ? "true" : "false"}"
          aria-controls="pricing-list-container"
          data-cat-id="${cat.id}"
        >
          ${escapeHtml(cat.label)}
        </button>
      `
    )
    .join("");

  // Function to render selected category items (Real prices — no placeholder badges)
  const renderCategoryItems = (catId) => {
    const category =
      PRICING_DATA.categories.find((c) => c.id === catId) ||
      PRICING_DATA.categories[0];

    listContainer.setAttribute("aria-labelledby", `tab-${category.id}`);
    listContainer.innerHTML = `
      <ul class="pricing-items-list">
        ${category.items
          .map(
            (item) => `
              <li class="pricing-item">
                <div class="pricing-item-info">
                  <h3 class="pricing-item-name">${escapeHtml(item.name)}</h3>
                  <p class="pricing-item-detail">${escapeHtml(item.detail)}</p>
                </div>
                <div class="pricing-item-price-box">
                  <span class="pricing-item-price">${escapeHtml(item.price)}</span>
                </div>
              </li>
            `
          )
          .join("")}
      </ul>
    `;
  };

  // Initial category render
  renderCategoryItems(PRICING_DATA.categories[0].id);

  // Tab click events
  tabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".pricing-tab-btn");
    if (!btn) return;

    const selectedId = btn.dataset.catId;
    tabsContainer.querySelectorAll(".pricing-tab-btn").forEach((b) => {
      const isMatch = b === btn;
      b.classList.toggle("active", isMatch);
      b.setAttribute("aria-selected", isMatch ? "true" : "false");
    });

    renderCategoryItems(selectedId);
  });

  if (disclaimerEl) {
    disclaimerEl.textContent = `* ${PRICING_DATA.disclaimer}`;
  }

  // Render "Starting Prices" Highlight Card
  const hi = PRICING_DATA.startingPricesHighlight;
  featuredContainer.innerHTML = `
    <span class="featured-badge">✦ ${escapeHtml(hi.badge)}</span>
    <h3 class="featured-title">${escapeHtml(hi.title)}</h3>
    <p class="featured-summary-pill">${escapeHtml(hi.summaryLine)}</p>
    <p class="featured-desc">${escapeHtml(hi.description)}</p>

    <ul class="starting-prices-list">
      ${hi.quickList
        .map(
          (row) => `
            <li class="starting-price-row">
              <span class="sp-label">${escapeHtml(row.label)}</span>
              <span class="sp-price">${escapeHtml(row.price)}</span>
            </li>
          `
        )
        .join("")}
    </ul>

    <div class="featured-cta-stack">
      <a href="#book" class="btn btn-gold btn-block">
        <span>Book Appointment</span>
      </a>
      <a href="${BUSINESS_INFO.phoneHref}" class="btn btn-outline-gold btn-block">
        <span>Call ${escapeHtml(BUSINESS_INFO.phoneDisplay)}</span>
      </a>
    </div>
  `;
}

// ============================================================================
// 4. RENDER ABOUT STATS BAR
// ============================================================================
function renderStats() {
  const statsBar = document.getElementById("stats-bar");
  if (!statsBar) return;

  statsBar.innerHTML = ABOUT_STATS.map(
    (stat) => `
      <div class="stat-item">
        <div class="stat-number-wrap">
          ${stat.prefix ? `<span>${escapeHtml(stat.prefix)}</span>` : ""}<span
            class="stat-counter"
            data-target="${stat.value}"
            data-decimals="${stat.decimals}"
          >${isReducedMotion() ? stat.value.toFixed(stat.decimals) : "0"}</span><span>${escapeHtml(stat.suffix)}</span>
        </div>
        <p class="stat-label">${escapeHtml(stat.label)}</p>
      </div>
    `
  ).join("");
}

// ============================================================================
// 5. RENDER MASONRY GALLERY (Hair, Colour, Beauty, Salon)
// ============================================================================
function renderGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = GALLERY_ITEMS.map(
    (item, index) => `
      <figure
        class="gallery-item ${item.aspect === "tall" ? "aspect-tall" : ""} reveal-up"
        data-category="${escapeHtml(item.category)}"
        data-index="${index}"
        tabindex="0"
        role="button"
        aria-label="View ${escapeHtml(item.title)} in full-screen lightbox"
        style="--stagger-delay: ${(index % 4) * 80}ms"
      >
        <img
          src="${escapeHtml(item.image)}"
          alt="${escapeHtml(item.alt)}"
          class="gallery-img"
          width="600"
          height="${item.aspect === "tall" ? "820" : "520"}"
          loading="lazy"
        />
        <span class="gallery-overlay">
          <span class="gallery-cat-tag">${escapeHtml(item.categoryLabel)}</span>
          <span class="gallery-item-title">${escapeHtml(item.title)}</span>
          <span class="gallery-item-zoom">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            View Fullscreen
          </span>
        </span>
      </figure>
    `
  ).join("");
}

// ============================================================================
// 6. RENDER TESTIMONIALS CAROUSEL
// ============================================================================
function renderTestimonials() {
  const track = document.getElementById("carousel-track");
  if (!track) return;

  track.innerHTML = TESTIMONIALS.map(
    (rev) => `
      <article class="testimonial-card" aria-label="Review by ${escapeHtml(rev.author)}">
        <div>
          <div class="testimonial-stars" aria-label="${rev.rating} out of 5 stars">
            ${"★".repeat(rev.rating)}
          </div>
          <blockquote class="testimonial-quote">
            “${escapeHtml(rev.quote)}”
          </blockquote>
        </div>
        <div class="testimonial-footer">
          <div>
            <strong class="testimonial-author">${escapeHtml(rev.author)}</strong>
            <span class="testimonial-service">${escapeHtml(rev.service)}</span>
          </div>
          <span class="badge-placeholder">${escapeHtml(rev.date)}</span>
        </div>
      </article>
    `
  ).join("");
}

// ============================================================================
// 7. RENDER STATIC 6-TILE INSTAGRAM FEED (@hairexpresso_salon)
// ============================================================================
function renderInstagramFeed() {
  const igGrid = document.getElementById("instagram-grid");
  if (!igGrid) return;

  igGrid.innerHTML = INSTAGRAM_TILES.map(
    (tile) => `
      <a
        href="${escapeHtml(BUSINESS_INFO.instagramUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        class="ig-tile"
        aria-label="${escapeHtml(tile.caption)} — View @hairexpresso_salon on Instagram"
      >
        <img
          src="${escapeHtml(tile.image)}"
          alt="${escapeHtml(tile.alt)}"
          class="ig-tile-img"
          width="360"
          height="360"
          loading="lazy"
        />
        <span class="ig-tile-overlay">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span class="ig-tile-handle">${escapeHtml(BUSINESS_INFO.instagramHandle)}</span>
        </span>
      </a>
    `
  ).join("");
}

// ============================================================================
// 8. RENDER OPENING HOURS
// ============================================================================
function renderOpeningHours() {
  const list = document.getElementById("opening-hours-list");
  if (!list) return;

  list.innerHTML = BUSINESS_INFO.openingHours
    .map(
      (row) => `
        <li class="hours-row">
          <span class="hours-days">${escapeHtml(row.days)}</span>
          <span class="hours-time">${escapeHtml(row.hours)}</span>
        </li>
      `
    )
    .join("");
}

// ============================================================================
// 9. STICKY NAVBAR, SCROLLSPY & FULL-SCREEN MOBILE MENU
// ============================================================================
function initNavbarAndMobileMenu() {
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky navbar state on scroll
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  requestAnimationFrame(handleScroll);

  // Mobile Menu open/close
  const setMobileMenuOpen = (isOpen) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    mobileMenu.classList.toggle("is-open", isOpen);
    mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
    document.body.classList.toggle("menu-open", isOpen);
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!expanded);
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });

  // Close mobile menu on Escape
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      mobileMenu &&
      mobileMenu.classList.contains("is-open")
    ) {
      setMobileMenuOpen(false);
      menuToggle?.focus();
    }
  });

  // Active nav link scrollspy
  const sections = document.querySelectorAll("main section[id]");
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((sec) => spyObserver.observe(sec));
}

// ============================================================================
// 10. SUBTLE HERO PARALLAX (GPU transform only)
// ============================================================================
function initHeroParallax() {
  const heroImg = document.getElementById("hero-parallax-img");
  if (!heroImg) return;

  reducedMotionQuery.addEventListener("change", (e) => {
    if (e.matches) {
      heroImg.style.transform = "none";
    }
  });

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (isReducedMotion()) {
        heroImg.style.transform = "none";
        return;
      }
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (scrolled < window.innerHeight * 1.2) {
            const offset = Math.min(scrolled * 0.14, 90);
            heroImg.style.transform = `scale(1.04) translate3d(0, ${offset}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

// ============================================================================
// 11. SCROLL-REVEAL & ANIMATED NUMBER COUNTERS
// ============================================================================
function initScrollRevealAndCounters() {
  const revealElements = document.querySelectorAll(".reveal-up");

  const setAllRevealedImmediately = () => {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    document.querySelectorAll(".stat-counter").forEach((counter) => {
      const target = parseFloat(counter.dataset.target || "0");
      const decimals = parseInt(counter.dataset.decimals || "0", 10);
      counter.textContent = target.toFixed(decimals);
    });
  };

  reducedMotionQuery.addEventListener("change", (e) => {
    if (e.matches) {
      setAllRevealedImmediately();
    }
  });

  if (isReducedMotion()) {
    setAllRevealedImmediately();
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Animated Counters
  const statsBar = document.getElementById("stats-bar");
  if (!statsBar) return;

  let countersStarted = false;
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          if (isReducedMotion()) {
            setAllRevealedImmediately();
          } else {
            animateAllCounters();
          }
          counterObserver.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  counterObserver.observe(statsBar);
}

function animateAllCounters() {
  const counters = document.querySelectorAll(".stat-counter");
  const duration = 1600;

  counters.forEach((counter) => {
    const target = parseFloat(counter.dataset.target || "0");
    const decimals = parseInt(counter.dataset.decimals || "0", 10);
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      counter.textContent = current.toFixed(decimals);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = target.toFixed(decimals);
      }
    };

    requestAnimationFrame(tick);
  });
}

// ============================================================================
// 12. GALLERY CATEGORY FILTER & ACCESSIBLE LIGHTBOX (Esc / Arrows / Swipe)
// ============================================================================
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryGrid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lightbox-image");
  const lbCat = document.getElementById("lightbox-cat");
  const lbTitle = document.getElementById("lightbox-title");
  const lbDesc = document.getElementById("lightbox-desc");
  const lbCounter = document.getElementById("lightbox-counter");
  const lbClose = document.getElementById("lightbox-close");
  const lbPrev = document.getElementById("lightbox-prev");
  const lbNext = document.getElementById("lightbox-next");
  const lbBackdrop = document.getElementById("lightbox-backdrop");

  if (!galleryGrid || !lightbox) return;

  let activeCategory = "all";
  let currentFilteredList = [...GALLERY_ITEMS];
  let currentLightboxIndex = 0;
  let lastFocusedTrigger = null;

  // Category Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.filter || "all";

      filterBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      currentFilteredList =
        activeCategory === "all"
          ? [...GALLERY_ITEMS]
          : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

      const figures = galleryGrid.querySelectorAll(".gallery-item");
      figures.forEach((fig) => {
        const itemCat = fig.dataset.category;
        const shouldShow =
          activeCategory === "all" || itemCat === activeCategory;
        fig.hidden = !shouldShow;
      });
    });
  });

  // Open Lightbox
  const openLightbox = (globalIdx, triggerEl) => {
    const clickedItem = GALLERY_ITEMS[globalIdx];
    if (!clickedItem) return;

    lastFocusedTrigger = triggerEl || document.activeElement;

    const indexInFiltered = currentFilteredList.findIndex(
      (i) => i.id === clickedItem.id
    );
    currentLightboxIndex = indexInFiltered >= 0 ? indexInFiltered : 0;

    updateLightboxSlide();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    lbClose?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  };

  const updateLightboxSlide = () => {
    const item = currentFilteredList[currentLightboxIndex];
    if (!item || !lbImage) return;

    lbImage.src = item.image;
    lbImage.alt = item.alt;
    if (lbCat) lbCat.textContent = item.categoryLabel;
    if (lbTitle) lbTitle.textContent = item.title;
    if (lbDesc) lbDesc.textContent = item.caption;
    if (lbCounter) {
      lbCounter.textContent = `${currentLightboxIndex + 1} / ${currentFilteredList.length}`;
    }
  };

  const stepLightbox = (dir) => {
    if (!currentFilteredList.length) return;
    currentLightboxIndex =
      (currentLightboxIndex + dir + currentFilteredList.length) %
      currentFilteredList.length;
    updateLightboxSlide();
  };

  // Click or Enter/Space on gallery card
  galleryGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".gallery-item");
    if (!card) return;
    const idx = parseInt(card.dataset.index || "0", 10);
    openLightbox(idx, card);
  });

  galleryGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".gallery-item");
      if (!card) return;
      e.preventDefault();
      const idx = parseInt(card.dataset.index || "0", 10);
      openLightbox(idx, card);
    }
  });

  lbClose?.addEventListener("click", closeLightbox);
  lbBackdrop?.addEventListener("click", closeLightbox);
  lbPrev?.addEventListener("click", () => stepLightbox(-1));
  lbNext?.addEventListener("click", () => stepLightbox(1));

  // Keyboard support inside Lightbox
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  // Touch swipe support inside Lightbox
  let touchStartX = 0;
  lightbox.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      const deltaX = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(deltaX) > 45) {
        stepLightbox(deltaX < 0 ? 1 : -1);
      }
    },
    { passive: true }
  );
}

// ============================================================================
// 13. TESTIMONIALS CAROUSEL (Responsive Multi-Card Slider + Swipe)
// ============================================================================
function initTestimonialsCarousel() {
  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const dotsWrap = document.getElementById("carousel-dots");
  const viewport = document.getElementById("carousel-viewport");

  if (!track || !dotsWrap || !viewport) return;

  let currentIndex = 0;

  const desktopMedia = window.matchMedia("(min-width: 1120px)");
  const tabletMedia = window.matchMedia("(min-width: 768px)");

  const getVisibleCardsCount = () => {
    if (desktopMedia.matches) return 3;
    if (tabletMedia.matches) return 2;
    return 1;
  };

  const getMaxIndex = () => {
    return Math.max(0, TESTIMONIALS.length - getVisibleCardsCount());
  };

  const renderDots = () => {
    const totalStops = getMaxIndex() + 1;
    dotsWrap.innerHTML = Array.from({ length: totalStops })
      .map(
        (_, i) => `
          <button
            type="button"
            class="carousel-dot ${i === currentIndex ? "active" : ""}"
            aria-current="${i === currentIndex ? "true" : "false"}"
            aria-label="Go to review slide ${i + 1}"
            data-slide="${i}"
          ></button>
        `
      )
      .join("");
  };

  const updateCarouselPosition = () => {
    const cards = track.querySelectorAll(".testimonial-card");
    if (!cards.length) return;

    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;

    const firstCard = cards[0];
    const gap = 24;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translate3d(-${offset}px, 0, 0)`;

    dotsWrap.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      const active = i === currentIndex;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  };

  prevBtn?.addEventListener("click", () => {
    const maxIdx = getMaxIndex();
    currentIndex = currentIndex <= 0 ? maxIdx : currentIndex - 1;
    updateCarouselPosition();
  });

  nextBtn?.addEventListener("click", () => {
    const maxIdx = getMaxIndex();
    currentIndex = currentIndex >= maxIdx ? 0 : currentIndex + 1;
    updateCarouselPosition();
  });

  dotsWrap.addEventListener("click", (e) => {
    const dot = e.target.closest(".carousel-dot");
    if (!dot) return;
    currentIndex = parseInt(dot.dataset.slide || "0", 10);
    updateCarouselPosition();
  });

  // Touch swipe on carousel
  let startX = 0;
  viewport.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].screenX - startX;
      if (Math.abs(diff) > 40) {
        const maxIdx = getMaxIndex();
        if (diff < 0) {
          currentIndex = currentIndex >= maxIdx ? 0 : currentIndex + 1;
        } else {
          currentIndex = currentIndex <= 0 ? maxIdx : currentIndex - 1;
        }
        updateCarouselPosition();
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    renderDots();
    updateCarouselPosition();
  });

  renderDots();
  requestAnimationFrame(updateCarouselPosition);
}

// ============================================================================
// 14. WHATSAPP BOOKING FORM & SERVICE PRE-SELECTION
// ============================================================================
function getLocalTodayIso() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeIndianMobile(raw) {
  const cleaned = String(raw).replace(/[\s\-()]/g, "");
  const match = cleaned.match(/^(?:\+91|91|0)?([6-9]\d{9})$/);
  return match ? match[1] : null;
}

function initBookingForm() {
  const form = document.getElementById("booking-form");
  const nameInput = document.getElementById("client-name");
  const phoneInput = document.getElementById("client-phone");
  const serviceSelect = document.getElementById("client-service");
  const dateInput = document.getElementById("client-date");
  const timeSelect = document.getElementById("client-time");
  const notesInput = document.getElementById("client-notes");
  const successBanner = document.getElementById("booking-success");

  // Set minimum selectable date to local today & block past dates
  const todayIso = getLocalTodayIso();
  if (dateInput) {
    dateInput.setAttribute("min", todayIso);
    if (!dateInput.value || dateInput.value < todayIso) {
      dateInput.value = todayIso;
    }
  }

  // Handle "Book Service" pre-selection links
  document.addEventListener("click", (e) => {
    const preselectTrigger = e.target.closest("[data-preselect]");
    if (!preselectTrigger || !serviceSelect) return;

    const targetService = preselectTrigger.getAttribute("data-preselect");
    if (targetService) {
      serviceSelect.value = targetService;
    }
  });

  if (!form) return;

  const setFieldError = (inputEl, errorId, message) => {
    const errEl = document.getElementById(errorId);
    if (inputEl) {
      inputEl.classList.toggle("is-invalid", Boolean(message));
      inputEl.setAttribute("aria-invalid", message ? "true" : "false");
    }
    if (errEl) {
      errEl.textContent = message || "";
    }
  };

  dateInput?.addEventListener("change", () => {
    const currentMin = getLocalTodayIso();
    if (dateInput.value && dateInput.value < currentMin) {
      setFieldError(
        dateInput,
        "error-date",
        "Past dates cannot be booked. Please choose today or a future date."
      );
    } else {
      setFieldError(dateInput, "error-date", "");
    }
  });

  phoneInput?.addEventListener("input", () => {
    if (normalizeIndianMobile(phoneInput.value)) {
      setFieldError(phoneInput, "error-phone", "");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = nameInput?.value.trim() || "";
    const phoneVal = phoneInput?.value.trim() || "";
    const serviceVal = serviceSelect?.value || "";
    const dateVal = dateInput?.value || "";
    const timeVal = timeSelect?.value || "";
    const notesVal = notesInput?.value.trim() || "";
    const currentToday = getLocalTodayIso();

    let isValid = true;

    if (nameVal.length < 2) {
      setFieldError(nameInput, "error-name", "Please enter your full name.");
      isValid = false;
    } else {
      setFieldError(nameInput, "error-name", "");
    }

    const validMobile = normalizeIndianMobile(phoneVal);
    if (!validMobile) {
      setFieldError(
        phoneInput,
        "error-phone",
        "Please enter a valid 10-digit Indian mobile number (starting with 6–9)."
      );
      isValid = false;
    } else {
      setFieldError(phoneInput, "error-phone", "");
    }

    if (!serviceVal) {
      setFieldError(
        serviceSelect,
        "error-service",
        "Please choose a service from the menu."
      );
      isValid = false;
    } else {
      setFieldError(serviceSelect, "error-service", "");
    }

    if (!dateVal) {
      setFieldError(dateInput, "error-date", "Please select a preferred date.");
      isValid = false;
    } else if (dateVal < currentToday) {
      setFieldError(
        dateInput,
        "error-date",
        "Past dates cannot be booked. Please select today or an upcoming date."
      );
      isValid = false;
    } else {
      setFieldError(dateInput, "error-date", "");
    }

    if (!timeVal) {
      setFieldError(
        timeSelect,
        "error-time",
        "Please select a preferred time slot."
      );
      isValid = false;
    } else {
      setFieldError(timeSelect, "error-time", "");
    }

    if (!isValid) return;

    // Show instant confirmation micro-interaction
    if (successBanner) {
      successBanner.hidden = false;
    }

    // Build pre-filled WhatsApp message to wa.me/919219311495
    const whatsappLines = [
      `✨ *New Appointment Request — ${BUSINESS_INFO.name}* ✨`,
      ``,
      `*Guest Name:* ${nameVal}`,
      `*Mobile:* +91 ${validMobile}`,
      `*Service:* ${serviceVal}`,
      `*Preferred Date:* ${dateVal}`,
      `*Preferred Time:* ${timeVal}`,
      notesVal ? `*Notes:* ${notesVal}` : null,
      ``,
      `📍 _Location: ${BUSINESS_INFO.addressShort}_`
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
      whatsappLines
    )}`;

    // Open WhatsApp in a new tab after brief micro-interaction feedback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 350);
  });
}

// ============================================================================
// 15. GRACEFUL IMAGE FALLBACK HANDLER
// ============================================================================
function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        if (!img.dataset.fallbackApplied) {
          img.dataset.fallbackApplied = "true";
          img.src = IMAGES.fallback;
        }
      },
      { once: true }
    );
  });
}

// ============================================================================
// 16. HTML ESCAPE HELPER
// ============================================================================
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
