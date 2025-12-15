// lib/performance.js
// Deferred execution for non-critical code

export function deferToIdleCallback(callback) {
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      const start = Date.now();
      setTimeout(() => {
        if (performance.now() - start < 50) {
          callback();
        }
      }, 1);
    }
  }
}

export function deferToNextPaint(callback) {
  if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(callback);
    });
  }
}

// Lazy load components on interaction
export function observeElementInteraction(selector, callback) {
  if (typeof window === 'undefined') return;
  
  const element = document.querySelector(selector);
  if (!element) return;
  
  // Load on intersection (element becomes visible)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '50px' });
  
  observer.observe(element);
}

// Defer heavy initializations
export function loadHeavyScripts() {
  deferToIdleCallback(() => {
    // Initialize heavy features after main render
    if (typeof window !== 'undefined') {
      // Lazy initialize smooth scroll
      try {
        document.addEventListener('click', handleSmoothScroll);
      } catch (e) {
        console.warn('Smooth scroll init failed:', e);
      }
    }
  });
}

function handleSmoothScroll(e) {
  const href = e.target.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
