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

export default function HorizontalGallery() {
  // All 24 images in a single array
  const allImages = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18,
    img19, img20, img21, img22, img23, img24
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 pt-32 pb-5 overflow-hidden border-b border-stone-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-3 mb-12 sm:mb-16">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
          Portfolio • Atmosphere
        </p>
        <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900">
          Visual Sanctuary
        </h2>
      </div>

      {/* Single Line Horizontal Marquee Container */}
      <div className="w-full flex overflow-hidden relative">
        <div className="flex gap-2 sm:gap-3 animate-marquee-left shrink-0">
          {/* Duplicated for seamless infinite loop */}
          {[...allImages, ...allImages].map((imgSrc, idx) => (
            <div
              key={`gallery-${idx}`}
              className="relative w-[180px] sm:w-[230px] lg:w-[280px] aspect-[9/16] overflow-hidden group border border-stone-200/40 shadow-sm shrink-0"
            >
              <Image
                src={imgSrc}
                alt={`Vivid Gallery ${idx}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for Single Line Slow Marquee Animation */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          /* Animation duration එක වැඩි කර ඇත (120s), මගින් ඉතා සෙමින් හා සිනිදුව ගමන් කරයි */
          animation: marqueeLeft 120s linear infinite;
        }
      `}</style>
    </section>
  );
}