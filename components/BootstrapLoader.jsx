"use client";
import { useEffect } from 'react';

export default function BootstrapLoader() {
  useEffect(() => {
    // Async-load Bootstrap CSS to avoid render-blocking (730ms savings)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.media = 'print'; // Load as print first (non-blocking)
    link.onload = () => {
      link.media = 'all'; // Switch to all after loaded
    };
    document.head.appendChild(link);
  }, []);
  return null;
}
