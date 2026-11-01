"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // 1. Trigger loader instantly whenever pathname changes
  useEffect(() => {
    setIsLoading(true);

    // Keep loader visible just long enough for the new page to render completely behind it
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700); // 700ms luxury reveal time

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
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

      <div
        className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
          isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
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
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-light text-stone-400 pl-[0.4em]">
            Bespoke Atelier
          </p>
        </div>
      </div>
    </>
  );
}