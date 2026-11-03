"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Mount Lenis once across the application lifecycle
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Handle Route Changes (Scroll to Top & Recalculate Page Height)
  useEffect(() => {
    // Browser එකේ native scroll එක මුලට යවනවා
    window.scrollTo(0, 0);

    if (lenisRef.current) {
      // Lenis scroll එකත් 0 position එකට immediate force කරනවා
      lenisRef.current.scrollTo(0, { immediate: true });

      // Page content එක fully render වීමට කුඩා timeout එකක් තබා Resize & Reset කරනවා
      const timer = setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
          lenisRef.current.scrollTo(0, { immediate: true });
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}