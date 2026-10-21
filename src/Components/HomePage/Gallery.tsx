"use client";

import React from "react";
import Image from "next/image";
import heroBg from "@/assets/homepage/homeheroimg.png";

export default function Gallery() {
  // Demo images array using your local image asset
  const columnImages = [
    [heroBg, heroBg, heroBg],
    [heroBg, heroBg, heroBg],
    [heroBg, heroBg, heroBg],
    [heroBg, heroBg, heroBg],
    [heroBg, heroBg, heroBg],
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-16 lg:py-24 overflow-hidden border-b border-stone-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-3 mb-10 sm:mb-14">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
          Portfolio • Atmosphere
        </p>
        <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900">
          Visual Sanctuary
        </h2>
      </div>

      {/* 5-Column Parallax Collage Container */}
      <div className="w-full px-1 sm:px-2 lg:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 h-[650px] sm:h-[750px] overflow-hidden relative">
          
          {/* Top Mist Fade Mask 
          <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-10 pointer-events-none backdrop-blur-[2px]" />*/}
          
          {/* Bottom Mist Fade Mask 
          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-10 pointer-events-none backdrop-blur-[2px]" />*/}

          {columnImages.map((col, colIdx) => {
            const isEven = colIdx % 2 === 0;
            return (
              <div
                key={colIdx}
                className="flex flex-col gap-1 relative overflow-hidden"
              >
                <div
                  className={`flex flex-col gap-1 ${
                    isEven ? "animate-scroll-down" : "animate-scroll-up"
                  }`}
                >
                  {/* Duplicated for seamless infinite loop */}
                  {[...col, ...col].map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative w-full aspect-[3/4] overflow-hidden group border border-stone-200/30"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Vivid Gallery ${colIdx}-${imgIdx}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Global CSS for Continuous Slow Motion */}
      <style jsx global>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-down {
          animation: scrollDown 45s linear infinite;
        }

        .animate-scroll-up {
          animation: scrollUp 45s linear infinite;
        }
      `}</style>
    </section>
  );
}