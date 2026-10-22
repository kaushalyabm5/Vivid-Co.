"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/homepage/homeheroimg6.jpg";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-screen text-white flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Image using Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Vivid.Co Salon Sanctuary"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean, premium dark tint so white text is crisp and the background image is fully vibrant */}
        <div className="absolute inset-0 bg-stone-950/60" />
      </div>

      {/* Main Content Container (Max Width 7xl, Center Aligned) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20 my-auto flex flex-col items-center text-center">
        
        <div className="max-w-2xl space-y-6 sm:space-y-8 flex flex-col items-center">
          
          

          {/* Shorter & Minimalist Main Title (Centered, Pure White for clarity) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] drop-shadow-md">
            Pure luxury. <br />
            <span className="font-light text-stone-200">
              Refined beauty.
            </span>
          </h1>

          {/* Shorter & Minimalist Description */}
          <p className="text-stone-200 text-sm sm:text-base font-light leading-relaxed tracking-wide max-w-lg drop-shadow-sm">
            Bespoke hair styling and artisan skin therapies designed for the modern aesthetic.
          </p>

          {/* Two Buttons Centered (Sharp Edges) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="/booking"
              className="w-full sm:w-auto min-w-[170px] px-8 py-3.5 bg-white hover:bg-stone-100 text-stone-900 font-light text-xs tracking-[0.2em] uppercase border border-white transition-all duration-300 text-center shadow-lg"
            >
              Book Now
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto min-w-[170px] px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-light text-xs tracking-[0.2em] uppercase border border-white/80 transition-all duration-300 text-center backdrop-blur-sm"
            >
              View Services
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}