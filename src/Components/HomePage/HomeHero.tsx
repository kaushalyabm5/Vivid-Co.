"use client";

import React from "react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#FAFAFA] text-stone-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Box */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8 pt-20 pb-12 my-auto">
        
        {/* Minimal Sub-Badge */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-stone-400 font-medium">
          London • Sanctuary & Beauty Salon
        </p>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-stone-900 tracking-tight leading-[1.15] sm:leading-[1.12]">
          Effortless beauty. <br />
          <span className="font-serif italic font-normal text-stone-800">
            Timeless elegance.
          </span>
        </h1>

        {/* Small Description */}
        <p className="text-stone-500 text-xs sm:text-sm md:text-base font-light max-w-md sm:max-w-lg mx-auto leading-relaxed tracking-wide px-2">
          Bespoke hair styling, radiant skin therapies, and artisan beauty care tailored to highlight your natural essence.
        </p>

        {/* Two Buttons in the Middle (Sharp Edges) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-2 sm:pt-4 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/booking"
            className="w-full sm:w-auto min-w-[170px] sm:min-w-[190px] px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-light text-xs tracking-[0.2em] uppercase border border-stone-900 transition-all duration-300 text-center"
          >
            Book Now
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto min-w-[170px] sm:min-w-[190px] px-8 py-3.5 bg-white hover:bg-stone-100 text-stone-900 font-light text-xs tracking-[0.2em] uppercase border border-stone-200 transition-all duration-300 text-center"
          >
            View Services
          </Link>
        </div>

      </div>
    </section>
  );
}