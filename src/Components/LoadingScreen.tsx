"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const isFirstMount = useRef(true);
  const [isLoading, setIsLoading] = useState(true);

  const startLoader = () => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms luxury display time

    return () => clearTimeout(timer);
  };

  // 1. Initial Page Load Animation
  useEffect(() => {
    const cleanup = startLoader();
    const timeout = setTimeout(() => {
      isFirstMount.current = false;
    }, 1000);

    return () => {
      cleanup();
      clearTimeout(timeout);
    };
  }, []);

  // 2. Handle Route/Page Changes Smoothly
  useEffect(() => {
    if (isFirstMount.current) return;
    const cleanup = startLoader();
    return () => cleanup();
  }, [pathname]);

  // 3. Intercept Link Clicks instantly
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");

        if (href) {
          if (href.startsWith("#")) return;
          if (href.startsWith(pathname + "#") || href === pathname) return;

          if (href.startsWith("/") && href !== pathname) {
            startLoader();
          }
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  // ප්‍රධාන රහස: Loading නැති අවස්ථාවක DOM එකෙන් සම්පූර්ණයෙන්ම ඉවත් වේ (No Flashing!)
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden">
      <style jsx>{`
        @keyframes luxurySlide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .luxury-bar-animation {
          animation: luxurySlide 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>

      <div className="flex flex-col items-center space-y-8 select-none px-6">
        {/* Main Brand Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-[0.25em] uppercase text-stone-900 leading-none pl-[0.25em]">
          Vivid.Co
        </h1>

        {/* High-End Minimalist Loading Bar */}
        <div className="w-36 sm:w-48 h-[1px] bg-stone-200 overflow-hidden relative">
          <div className="absolute inset-0 bg-stone-900 w-full luxury-bar-animation" />
        </div>

        {/* Minimal Subtext */}
       
      </div>
    </div>
  );
}