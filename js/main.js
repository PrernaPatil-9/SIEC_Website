// main.js - Main application entry point with SIEC website integration

// ===== Global State =====
let currentProducts = [];
let currentPage = window.location.pathname;

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  
  // ===== Initialize Page Based on Current Path =====
  if (currentPage.includes('products.html') || currentPage.includes('/products/')) {
    initProductsPage();
  } else {
    initMainPage();
  }
  
  // ===== Lazy Loading Images =====
  initLazyLoading();
  
  // ===== Smooth Anchor Links =====
  initSmoothAnchors();
  
  // ===== Console Branding =====
  initConsoleBranding();
  
  // ===== Global Event Listeners =====
  initGlobalEvents();
});

// ===== PRODUCTS PAGE INITIALIZATION =====
function initProductsPage() {
  console.log('🛒 SIEC Products Page Loaded');
  
  // Load all product modules
  if (typeof Products !== 'undefined') {
    currentProducts = [...Products];
  }
  
  // Initialize modules in correct order
  if (typeof initCart === 'function') {
    initCart();
  }
  
  if (typeof initWishlist === 'function') {
    initWishlist();
  }
  
  if (typeof initFilters === 'function') {
    initFilters();
  }
  
  if (typeof initProductModal === 'function') {
    initProductModal();
  }
  
  // Render products
  if (typeof renderProducts === 'function') {
    renderProducts(currentProducts);
  }
  
  // Initialize GSAP animations for products
  initProductAnimations();
}

// ===== MAIN PAGE INITIALIZATION =====
function initMainPage() {
  console.log('🌱 SIEC Main Page Loaded');
  
  // Initialize main page features
  initHeroAnimations();
  initServiceCards();
  initCounterAnimation();
  initTestimonialSlider();
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

// ===== SMOOTH ANCHOR LINKS =====
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#products') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== CONSOLE BRANDING =====
function initConsoleBranding() {
  console.log(
    '%c 🌍 SIEC ',
    'background: #0b1a2f; color: #c9a84c; font-size: 24px; font-weight: bold; padding: 10px 16px; border-radius: 6px;'
  );
  console.log('%c Sustainable Integrated Environmental Consultants ', 'color: #0b1a2f; font-size: 14px; font-weight: 600;');
  console.log('%c Built with ❤️ using HTML, Tailwind CSS, and GSAP ', 'color: #666; font-size: 12px;');
  console.log('%c 📦 Products Catalog Active ', 'color: #c9a84c; font-size: 12px;');
}

// ===== GLOBAL EVENTS =====
function initGlobalEvents() {
  // Handle window resize for responsive adjustments
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Recalculate any responsive elements
      if (typeof updateResponsiveLayout === 'function') {
        updateResponsiveLayout();
      }
    }, 250);
  });

  // Handle scroll events for header effects
  let scrollTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      handleScrollEffects();
    }, 100);
  });

  // Handle page visibility change (for cart/wishlist sync)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      // Refresh cart and wishlist counts when tab becomes visible
      if (typeof updateCartCounters === 'function') {
        updateCartCounters();
      }
      if (typeof updateWishlistCounters === 'function') {
        updateWishlistCounters();
      }
    }
  });

  // Handle beforeunload to save any pending changes
  window.addEventListener('beforeunload', () => {
    if (typeof saveCart === 'function') {
      saveCart();
    }
    if (typeof saveWishlist === 'function') {
      saveWishlist();
    }
  });
}

// ===== PRODUCT ANIMATIONS =====
function initProductAnimations() {
  // Animate product cards on load
  gsap.from('.product-card', {
    opacity: 0,
    y: 30,
    stagger: 0.06,
    duration: 0.7,
    ease: 'power2.out',
    delay: 0.2
  });

  // Animate category chips
  gsap.from('.filter-chip', {
    opacity: 0,
    x: -15,
    stagger: 0.03,
    duration: 0.5,
    ease: 'power2.out',
    delay: 0.3
  });

  // Animate trust badges
  gsap.from('.trust-badge', {
    opacity: 0,
    scale: 0.9,
    stagger: 0.08,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay: 0.5,
    scrollTrigger: {
      trigger: '.trust-badge',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
}

// ===== HERO ANIMATIONS =====
function initHeroAnimations() {
  // Animate hero section elements
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButton = document.querySelector('.hero-button');

  if (heroTitle) {
    gsap.from(heroTitle, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    });
  }

  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }

  if (heroButton) {
    gsap.from(heroButton, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6,
      ease: 'power2.out'
    });
  }
}

// ===== SERVICE CARDS =====
// ===== SERVICE CARDS - UPDATED =====
function initServiceCards() {
  console.log('🔍 Initializing service card animations...');
  
  const serviceCards = document.querySelectorAll('.service-card');
  
  if (serviceCards.length === 0) {
    console.log('⚠️ No service cards found, retrying...');
    // Retry after a short delay
    setTimeout(() => {
      const retryCards = document.querySelectorAll('.service-card');
      if (retryCards.length > 0) {
        animateServiceCards(retryCards);
      }
    }, 300);
    return;
  }
  
  animateServiceCards(serviceCards);
}

function animateServiceCards(cards) {
  // Animate each card individually based on its position
  cards.forEach((card, index) => {
    // Get the card's transform values from inline styles
    let xValue = -60;
    let yValue = 0;
    
    // Check if the card has translate-y class
    if (card.style.transform && card.style.transform.includes('translateY')) {
      xValue = 0;
      yValue = -60;
    } 
    // Check if the card has translate-x-[60px] (right movement)
    else if (card.style.transform && card.style.transform.includes('translateX(60px)')) {
      xValue = 60;
      yValue = 0;
    } 
    // Default is left movement
    else {
      xValue = -60;
      yValue = 0;
    }
    
    // Animate with GSAP
    gsap.fromTo(card,
      {
        opacity: 0,
        x: xValue,
        y: yValue
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.9,
        delay: index * 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

// ===== COUNTER ANIMATION =====
function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target')) || 0;
    const duration = 2000;
    const startTime = Date.now();
    
    function updateCounter() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      
      counter.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }
    
    // Trigger counter animation when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// ===== TESTIMONIAL SLIDER =====
function initTestimonialSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;
  
  let currentSlide = 0;
  const slides = slider.querySelectorAll('.testimonial-item');
  const totalSlides = slides.length;
  
  if (totalSlides === 0) return;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
      slide.style.opacity = i === index ? '1' : '0.5';
    });
  }
  
  // Auto-slide
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000);
  
  // Initialize
  showSlide(0);
}

// ===== SCROLL EFFECTS =====
function handleScrollEffects() {
  const header = document.querySelector('header');
  if (header) {
    const scrollY = window.pageYOffset;
    if (scrollY > 100) {
      header.classList.add('header-scrolled');
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
      header.classList.remove('header-scrolled');
      header.style.boxShadow = 'none';
    }
  }
}

// ===== RESPONSIVE LAYOUT =====
function updateResponsiveLayout() {
  const productGrid = document.querySelector('#productGrid');
  if (productGrid) {
    const width = window.innerWidth;
    let columns = 'grid-cols-1';
    
    if (width >= 1280) columns = 'grid-cols-4';
    else if (width >= 1024) columns = 'grid-cols-3';
    else if (width >= 640) columns = 'grid-cols-2';
    
    productGrid.className = productGrid.className.replace(/grid-cols-\d/g, columns);
  }
}

// ===== EXPORT FOR OTHER MODULES =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initProductsPage,
    initMainPage,
    initLazyLoading,
    initSmoothAnchors,
    initConsoleBranding,
    initGlobalEvents,
    initProductAnimations,
    initHeroAnimations,
    initServiceCards,
    initCounterAnimation,
    initTestimonialSlider,
    handleScrollEffects,
    updateResponsiveLayout
  };
}

// ===== ADDITIONAL UTILITY FUNCTIONS =====

// Check if we're on the products page
function isProductsPage() {
  return window.location.pathname.includes('products.html') || 
         window.location.pathname.includes('/products/');
}

// Global function to refresh product display
function refreshProducts() {
  if (isProductsPage() && typeof applyFilters === 'function') {
    applyFilters();
  }
}

// Handle product search from any page
function searchProducts(query) {
  if (isProductsPage()) {
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
      searchInput.value = query;
      const event = new Event('input');
      searchInput.dispatchEvent(event);
    }
  } else {
    // Redirect to products page with search query
    window.location.href = `/pages/products/products.html?search=${encodeURIComponent(query)}`;
  }
}

// Handle URL parameters on load
function handleURLParams() {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search');
  
  if (searchQuery && isProductsPage()) {
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
      searchInput.value = searchQuery;
      const event = new Event('input');
      searchInput.dispatchEvent(event);
    }
  }
}

// Initialize URL parameter handling
document.addEventListener('DOMContentLoaded', handleURLParams);