"use client";

import React from "react";
import Link from "next/link";

export default function BrandIntro() {
  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900">
          Glow with us
        </h2>

        {/* Primary Description Paragraph */}
        <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
          Vivid.Co is a London-inspired boutique beauty and hair sanctuary, bringing together artisan styling, radiant skin therapies, and mindful self-care rituals. Experience Vivid.Co at our private studio or discover our curated collection of botanical care products.
        </p>

        {/* Secondary Detail Paragraph */}
        <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto tracking-wide">
          Located in central Mayfair, open six days a week from early morning to late evening. Experience our Signature Styling, dynamic Skin Therapies, and Custom Color Sculpting—all designed to highlight your natural elegance.
        </p>

        {/* Solid Dark CTA Button (Sharp Edges) */}
        <div className="pt-4">
          <Link
            href="/booking"
            className="inline-block px-9 py-4 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.25em] font-light border border-stone-900 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>

        
      </div>
    </section>
  );
}