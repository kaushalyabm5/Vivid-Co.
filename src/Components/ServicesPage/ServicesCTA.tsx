"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="w-full bg-[white] text-stone-900 pt-2 pb-30 px-6 sm:px-12 border-b border-stone-200/80">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
          The Philosophy Behind the Craft
        </h2>

        {/* Short Description */}
        <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed tracking-wide max-w-xl mx-auto">
          Discover how our fusion of dermal science, hair architecture, and uncompromising artistry defines every bespoke ritual at Vivid.Co.
        </p>

        {/* About Us Button */}
        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-100 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-800 transition-all duration-300 group"
          >
            <span>Explore Our Story</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}