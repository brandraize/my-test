"use client";
import { useEffect } from 'react';

export default function AsyncBootstrap() {
  useEffect(() => {
    // Load full Bootstrap CSS after critical content renders
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    
    // Small delay to prioritize critical render
    requestIdleCallback ? requestIdleCallback(() => {
      document.head.appendChild(link);
    }) : setTimeout(() => {
      document.head.appendChild(link);
    }, 50);
  }, []);
  
  return null;
}
