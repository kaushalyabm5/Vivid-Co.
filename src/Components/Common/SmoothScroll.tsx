"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Whenever pathname changes, scroll to top and resize lenis
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });
    lenis.resize();

    return () => {
      lenis.destroy();
    };
  }, [pathname]); // pathname එක දමන ලද නිසා සෑම page change එකකදීම lenis එක අලුතින් සහ නිවැරදිව load වේ

  return <>{children}</>;
}