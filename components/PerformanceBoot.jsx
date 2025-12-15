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
      // Give the browser a little time to render
      requestIdleCallback(enable, { timeout: 2000 });
    } else {
      setTimeout(enable, 1500);
    }
  }, []);

  return null;
}
