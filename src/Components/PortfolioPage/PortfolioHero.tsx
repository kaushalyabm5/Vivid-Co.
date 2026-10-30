"use client";

import React from "react";
import Image from "next/image";
import heroBg from "@/assets/aboutpage/about-hero.png";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen w-full bg-[#0A0A0A] text-stone-100 flex items-center justify-center overflow-hidden border-b border-stone-800/60">
      
      {/* Background Image with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src={heroBg}
          alt="Vivid.Co Services Hero"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/10 via-[#0A0A0A]/0 to-[#0A0A0A]/5" />
      </div>

      {/* Content Container (Perfectly Centered) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center space-y-6 py-20">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-stone-100 leading-[1.1]">
          Our Portfolio 
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-stone-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide pt-2">
          A curated visual archive showcasing precision hair architecture, dermal rejuvenation, and bespoke styling crafted within our private sanctuaries.
        </p>

      </div>
    </section>
  );
}