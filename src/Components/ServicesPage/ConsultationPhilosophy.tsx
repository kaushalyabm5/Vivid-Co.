"use client";

import React from "react";
import Image from "next/image";
// ඔබට අවශ්‍ය නම් මෙයට අදාළව වෙනත් රූපයක්ද යොදාගත හැක
import philosophyImg from "@/assets/homepage/homeheroimg.png"; 

export default function ConsultationPhilosophy() {
  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-24 lg:pt-10 lg:pb-5 border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Grid Container: Split Layout (Text & Atmospheric Image/Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content & Description */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
           

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
              The Bespoke Diagnostic Approach
            </h2>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed tracking-wide pt-2">
              Every service at Vivid.Co begins with a personal 15-minute structural consultation and scalp health diagnostic. We believe true architectural styling cannot exist without understanding your unique facial geometry, hair texture, and daily lifestyle rhythm—ensuring absolute perfection from the first touch.
            </p>

            {/* Key Diagnostic Pillars / Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200/80">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium block">
                  Step 01
                </span>
                <h4 className="text-sm font-normal text-stone-900 tracking-wide">
                  Structural Mapping
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Analyzing cranial bone structure and natural growth vectors for precision cutting.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium block">
                  Step 02
                </span>
                <h4 className="text-sm font-normal text-stone-900 tracking-wide">
                  Cellular Diagnostics
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Micro-scopic scalp evaluation to tailor organic botanical infusions precisely.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Minimalist Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-stone-200/80 bg-stone-100 shadow-sm">
              <Image
                src={philosophyImg}
                alt="Vivid.Co Consultation Philosophy"
                fill
                className="object-cover object-center contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              
           
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}