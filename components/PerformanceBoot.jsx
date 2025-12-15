"use client";
import { useEffect } from "react";

export default function PerformanceBoot() {
  useEffect(() => {
    const root = document.documentElement;
    // Add preload class ASAP to stop costly animations on initial paint
    root.classList.add("preload");

    const enable = () => {
      root.classList.remove("preload");
    };

    if ("requestIdleCallback" in window) {
      // Reduce timeout for faster interactivity
      requestIdleCallback(enable, { timeout: 1000 });
    } else {
      setTimeout(enable, 800);
    }
  }, []);

  return null;
}
