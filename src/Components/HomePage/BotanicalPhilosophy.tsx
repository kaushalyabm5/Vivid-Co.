"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/homepage/homeheroimg.png";

export default function BotanicalPhilosophy() {
  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 overflow-hidden border-b border-stone-200/60">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px] lg:min-h-[580px]">
        
        {/* Left Side: 100% Full Height & Width Image (Flush to Left Edge) */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-full min-h-[350px] lg:min-h-[580px]">
          <Image
            src={heroBg}
            alt="Vivid.Co Organic Botanical Formulations"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Clean Editorial Content */}
        <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 lg:py-20 space-y-6 text-left max-w-2xl">
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-[1.15]">
            Pure Organic Formulations
          </h2>

          {/* Description Paragraph */}
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed tracking-wide pt-1">
            We partner exclusively with certified organic, cruelty-free laboratories across Europe. Every shampoo, gloss, and treatment tincture is blended with cold-pressed botanical extracts designed to restore long-term cellular health and unnatural shine.
          </p>

          {/* Outlined Sharp Rectangle Button (Matching Becore Style) */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
            >
              Our Ingredients
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}