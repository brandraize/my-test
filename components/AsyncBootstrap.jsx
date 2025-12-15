"use client";
import { useEffect } from 'react';

export default function AsyncBootstrap() {
  useEffect(() => {
    // Defer Bootstrap loading until after LCP
    const loadBootstrap = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    };
    
    // Wait for LCP before loading Bootstrap
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadBootstrap, { timeout: 1000 });
    } else {
      // Use triple RAF for better timing
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(loadBootstrap);
        });
      });
    }
  }, []);
  
  return null;
}
