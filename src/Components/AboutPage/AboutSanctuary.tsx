"use client";

import React from "react";
import Image from "next/image";

// ආයතනයේ පින්තූර 6 (inside1.jpg සිට inside6.jpg දක්වා)
import inside1 from "@/assets/aboutpage/inside1.jpg";
import inside2 from "@/assets/aboutpage/inside2.jpg";
import inside3 from "@/assets/aboutpage/inside3.jpg";
import inside4 from "@/assets/aboutpage/inside4.jpg";
import inside5 from "@/assets/aboutpage/inside5.jpg";
import inside6 from "@/assets/aboutpage/inside6.jpg";

export default function AboutSanctuary() {
  return (
    <section className="w-full bg-white text-stone-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
            Designed for Absolute Solitude
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed tracking-wide pt-2">
            Every square foot of our sanctuary is engineered to strip away transient noise, merging brutalist architectural minimalism with serene organic textures for undisturbed personal restoration.
          </p>
        </div>

        {/* 9:16 Bento Grid Layout with Minimal Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          
          {/* Bento Item 1: Tall / Standard 9:16 */}
          <div className="relative w-full aspect-[9/16] bg-stone-100 overflow-hidden group shadow-sm">
            <Image
              src={inside1}
              alt="Vivid.Co Sanctuary Interior 1"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />

          </div>

          {/* Bento Item 2: Offset Up for Bento Flow */}
          <div className="relative w-full aspect-[9/16] bg-stone-100 overflow-hidden group shadow-sm lg:-translate-y-8">
            <Image
              src={inside2}
              alt="Vivid.Co Sanctuary Interior 2"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />
            
          </div>

          {/* Bento Item 3: Standard 9:16 */}
          <div className="relative w-full aspect-[9/16] bg-stone-100 overflow-hidden group shadow-sm">
            <Image
              src={inside3}
              alt="Vivid.Co Sanctuary Interior 3"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />
           
          </div>

          {/* Bento Item 4: Standard 9:16 */}
          <div className="relative w-full aspect-[9/16] bg-stone-100 overflow-hidden group shadow-sm">
            <Image
              src={inside4}
              alt="Vivid.Co Sanctuary Interior 4"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />
           
          </div>

          {/* Bento Item 5: Offset Up for Bento Flow */}
          <div className="relative w-full aspect-[9/16] bg-stone-100 overflow-hidden group shadow-sm lg:-translate-y-8">
            <Image
              src={inside5}
              alt="Vivid.Co Sanctuary Interior 5"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />
           
          </div>

          {/* Bento Item 6: Standard 9:16 */}
          <div className="relative w-full aspect-[9/16] bg-stone-100 overflow-hidden group shadow-sm">
            <Image
              src={inside6}
              alt="Vivid.Co Sanctuary Interior 6"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />
          
          </div>

        </div>

      </div>
    </section>
  );
}