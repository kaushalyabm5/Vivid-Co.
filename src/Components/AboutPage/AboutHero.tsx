"use client";

import React from "react";
import Image from "next/image";
import heroBg from "@/assets/aboutpage/about-hero.png";

export default function AboutHero() {
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
          Architects of Timeless Refinement
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-stone-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide pt-2">
          Founded on the principles of absolute architectural precision and uncompromising organic purity, Vivid.Co emerged as a sanctuary away from the transient noise of modern grooming—redefining luxury through quiet mastery, bespoke cellular science, and intentional care.
        </p>

      </div>
    </section>
  );
}