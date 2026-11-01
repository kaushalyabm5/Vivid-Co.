"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Hide loader after page render completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Instantly trigger loader visually on any Internal Link click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href) {
        const targetUrl = new URL(target.href);
        // If clicking a different internal route
        if (
          targetUrl.origin === window.location.origin &&
          targetUrl.pathname !== pathname &&
          !target.getAttribute("target")
        ) {
          const loaderEl = document.getElementById("vivid-loading-screen");
          if (loaderEl) {
            loaderEl.style.opacity = "1";
            loaderEl.style.pointerEvents = "auto";
          }
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
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
        id="vivid-loading-screen"
        style={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
        className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out"
      >
        <div className="flex flex-col items-center space-y-8 select-none px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-[0.25em] uppercase text-stone-900 leading-none pl-[0.25em]">
            Vivid.Co
          </h1>

          <div className="w-36 sm:w-48 h-[1px] bg-stone-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-stone-900 w-full luxury-bar-animation" />
          </div>
        </div>
      </div>
    </>
  );
}