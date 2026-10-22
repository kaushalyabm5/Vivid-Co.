"use client";

import React from "react";
import Image from "next/image";
import heroBg from "@/assets/homepage/home-img-10.jpg";

export default function OwnerSection() {
  return (
    <section className="w-full bg-white text-stone-900 border-y border-stone-200/80 overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
        
        {/* Left Side: Full-height Portrait Image (Flush to Left Edge) */}
        <div className="md:col-span-4 lg:col-span-5 relative w-full h-[280px] sm:h-[320px] md:h-full min-h-[280px] md:min-h-[360px]">
          <Image
            src={heroBg}
            alt="Elena Vance - Founder & Chief Creative Director"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Editorial Banner Text (Centered Vertically) */}
        <div className="md:col-span-8 lg:col-span-7 px-8 sm:px-14 lg:px-20 py-10 md:py-8 flex flex-col justify-center space-y-3 text-left">
          
          {/* Role Badge */}
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-800 font-medium">
            Founder & Chief Creative Director
          </p>

          {/* Owner Name */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight">
            Elena Vance
          </h2>

          {/* Short Statement */}
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed tracking-wide max-w-2xl pt-1">
            &ldquo;Beauty at Vivid.Co is not about changing who you are, but honoring your individuality through precision hair architecture, organic purity, and effortless sophistication.&rdquo;
          </p>

          {/* Sub Detail */}
          <div className="pt-2">
            <span className="font-serif italic text-xs text-stone-400 tracking-wider">
              — London Sanctuary Aesthetics
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}