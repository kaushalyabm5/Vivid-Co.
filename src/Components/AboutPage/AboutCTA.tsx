"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="w-full bg-white text-stone-900 pt-17 pb-30 relative overflow-hidden ">
      
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center relative z-10 space-y-8">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight leading-[1.1] text-stone-900">
         Enter the World of Vivid.Co
        </h2>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
          Step away from the clamor of the ordinary. Reserve your private session and let our master artisans tailor an undisturbed journey of personal refinement exclusively for you.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.25em] font-light hover:bg-stone-800 transition-all duration-300 group shadow-lg cursor-pointer"
          >
            <span>Begin Your Reservation</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}