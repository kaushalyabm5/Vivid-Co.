"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Lenis scroll event එක හරහා real-time position ලබා ගැනීම
    const handleScroll = (e: { scroll: number; limit: number }) => {
      if (e.limit > 0) {
        const progress = (e.scroll / e.limit) * 100;
        setScrollProgress(progress);
      }
    };

    // Lenis instance එක window එක හරහා හෝ scroll event එක හරහා 
    // මඟපෙන්වීම සඳහා window scroll fallback එකක්ද සමඟ සකස් කිරීම
    const updateProgressFallback = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", updateProgressFallback);

    return () => {
      window.removeEventListener("scroll", updateProgressFallback);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-stone-900 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}