"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/homepage/home-img-2.jpg";

export default function OurSanctuary() {
  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 overflow-hidden border-b border-stone-200/60">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px] lg:min-h-[580px]">
        
        {/* Left Side: Clean Editorial Content */}
        <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 lg:py-20 space-y-6 text-left max-w-2xl order-2 lg:order-1">
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-[1.15]">
            Artisan Hair & Dermal Science
          </h2>

          {/* Description Paragraph */}
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed tracking-wide pt-1">
            Every creation at Vivid.Co begins with bespoke diagnostic scalp and skin care. We merge organic botanical actives with advanced European styling techniques to reveal individual radiance without compromising natural health.
          </p>

          {/* Outlined Sharp Rectangle Button (Matching Becore Style) */}
          <div className="pt-4">
            <Link
              href="/services"
              className="inline-block px-8 py-3.5 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
            >
              Explore Menu
            </Link>
          </div>

        </div>

        {/* Right Side: 100% Full Height & Width Image (Flush to Right Edge) */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-full min-h-[350px] lg:min-h-[580px] order-1 lg:order-2">
          <Image
            src={heroBg}
            alt="Vivid.Co Dermal Science"
            fill
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}