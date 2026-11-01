"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // 1. Initial Page Load & Route Change Cleanup
  useEffect(() => {
    // Hide loader smoothly after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 2. Global Link Click Interceptor with Smooth Route Delay
  useEffect(() => {
    const handleGlobalLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      
      // Check if it's a valid internal link and not the same page
      if (
        href &&
        href.startsWith("/") &&
        href !== pathname &&
        !target.getAttribute("target") &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        // Prevent instant Next.js navigation (Stops flashing!)
        e.preventDefault();
        
        // Show Loading Screen Instantly
        setIsLoading(true);

        // Wait briefly for white screen fade-in, then perform actual navigation
        setTimeout(() => {
          router.push(href);
        }, 250);
      }
    };

    document.addEventListener("click", handleGlobalLinkClick, true);
    return () => document.removeEventListener("click", handleGlobalLinkClick, true);
  }, [pathname, router]);

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
        className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
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