"use client";
import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Mark when page is ready
    const markPageLoaded = () => {
      document.body.classList.add('page-loaded');
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      const fontLink = document.createElement('link');
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap';
      fontLink.rel = 'stylesheet';
      fontLink.media = 'print';
      fontLink.onload = () => {
        fontLink.media = 'all';
      };
      document.head.appendChild(fontLink);
    };

    // Load after page is interactive
    if (document.readyState === 'complete') {
      markPageLoaded();
      optimizeFonts();
    } else {
      window.addEventListener('load', () => {
        markPageLoaded();
        optimizeFonts();
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', markPageLoaded);
    };
  }, []);

  return null;
}