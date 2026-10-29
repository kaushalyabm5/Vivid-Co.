"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Force native browser window scroll
    window.scrollTo(0, 0);

    // 2. Lenis smooth scroll instance එකක් තිබේ නම් එය ද Top (0) කරන්න
    if (typeof window !== "undefined") {
      // Lenis instance එක window object එකට හෝ custom lenis element එකට බැඳී තිබේ නම්
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: { immediate: boolean }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  return null;
}