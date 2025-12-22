"use client";
import { useEffect } from "react";

export default function PerformanceBoot() {
  useEffect(() => {
    // Optimize rendering performance
    if (typeof window !== 'undefined') {
      // Force a repaint after hydration
      requestAnimationFrame(() => {
        document.body.style.willChange = 'auto';
      });
    }
  }, []);

  return null;
}
