"use client";

import React from "react";
import Image from "next/image";

// Importing images 1 to 24 from src/assets/homepage/home-gallery/
import img1 from "@/assets/homepage/home-gallery/1.jpg";
import img2 from "@/assets/homepage/home-gallery/2.jpg";
import img3 from "@/assets/homepage/home-gallery/3.jpg";
import img4 from "@/assets/homepage/home-gallery/4.jpg";
import img5 from "@/assets/homepage/home-gallery/5.jpg";
import img6 from "@/assets/homepage/home-gallery/6.jpg";
import img7 from "@/assets/homepage/home-gallery/7.jpg";
import img8 from "@/assets/homepage/home-gallery/8.jpg";
import img9 from "@/assets/homepage/home-gallery/9.jpg";
import img10 from "@/assets/homepage/home-gallery/10.jpg";
import img11 from "@/assets/homepage/home-gallery/11.jpg";
import img12 from "@/assets/homepage/home-gallery/12.jpg";
import img13 from "@/assets/homepage/home-gallery/13.jpg";
import img14 from "@/assets/homepage/home-gallery/14.jpg";
import img15 from "@/assets/homepage/home-gallery/15.jpg";
import img16 from "@/assets/homepage/home-gallery/16.jpg";
import img17 from "@/assets/homepage/home-gallery/17.jpg";
import img18 from "@/assets/homepage/home-gallery/18.jpg";
import img19 from "@/assets/homepage/home-gallery/19.jpg";
import img20 from "@/assets/homepage/home-gallery/20.jpg";
import img21 from "@/assets/homepage/home-gallery/21.jpg";
import img22 from "@/assets/homepage/home-gallery/22.jpg";
import img23 from "@/assets/homepage/home-gallery/23.jpg";
import img24 from "@/assets/homepage/home-gallery/24.jpg";

export default function Gallery() {
  // Distributing 24 images across 4 columns (6 images per column)
  const columnImages = [
    [img1, img2, img3, img4, img5, img6],       // Column 1: Images 1 to 6
    [img7, img8, img9, img10, img11, img12],    // Column 2: Images 7 to 12
    [img13, img14, img15, img16, img17, img18], // Column 3: Images 13 to 18
    [img19, img20, img21, img22, img23, img24], // Column 4: Images 19 to 24
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

      {/* 4-Column Parallax Collage Container with Increased Height */}
      <div className="w-full px-3 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 h-[650px] sm:h-[820px] overflow-hidden relative">
          
          {columnImages.map((col, colIdx) => {
            const isEven = colIdx % 2 === 0;
            return (
              <div
                key={colIdx}
                className="flex flex-col gap-2.5 sm:gap-4 relative overflow-hidden"
              >
                <div
                  className={`flex flex-col gap-2.5 sm:gap-4 ${
                    isEven ? "animate-scroll-down" : "animate-scroll-up"
                  }`}
                >
                  {/* Duplicated for seamless infinite loop */}
                  {[...col, ...col].map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative w-full aspect-[9/16] overflow-hidden group border border-stone-200/40 shadow-sm"
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
          animation: scrollDown 55s linear infinite;
        }

        .animate-scroll-up {
          animation: scrollUp 55s linear infinite;
        }
      `}</style>
    </section>
  );
}