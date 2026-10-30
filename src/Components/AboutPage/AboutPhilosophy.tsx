"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Importing images for the 3 pillars
import pillar1Img from "@/assets/aboutpage/philosophy1.jpg"; // ඔබේ path එකට අනුව සකස් කර ගන්න
import pillar2Img from "@/assets/aboutpage/philosophy2.jpg";
import pillar3Img from "@/assets/aboutpage/philosophy3.jpg";

export default function AboutPhilosophy() {
  const pillars = [
    {
      number: "01",
      badge: "Organic Purity",
      title: "Cellular & Organic Purity",
      description:
        "We reject synthetic additives in favor of cold-pressed botanical tinctures and active organic compounds that heal hair and skin from the cellular level.",
      image: pillar1Img,
    },
    {
      number: "02",
      badge: "Precision Craft",
      title: "Architectural Precision",
      description:
        "Every cut, color, and treatment is engineered precisely to your unique cranial geometry and natural growth vectors, ensuring effortless everyday grace.",
      image: pillar2Img,
    },
    {
      number: "03",
      badge: "Absolute Sanctuary",
      title: "Absolute Solitude & Privacy",
      description:
        "A quiet sanctuary stripped of transient rush and crowded noise. Your time here is dedicated entirely to undisturbed restoration and individual artistry.",
      image: pillar3Img,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 pt-22 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
            An Uncompromising Philosophy of Care
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed tracking-wide pt-2">
            Unlike conventional salons driven by high-turnover schedules, we operate on a paradigm of intentionality—where every element of your ritual is curated for absolute wellbeing and timeless elegance.
          </p>
        </div>

        {/* Apple Style Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-stone-200/90 overflow-hidden flex flex-col justify-between group hover:border-stone-400 transition-all duration-500 shadow-sm"
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimalist Badge on Top of Image */}
                <div className="absolute top-4 left-4 bg-stone-900/90 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 font-light backdrop-blur-sm">
                  {pillar.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-4 text-left">
                 

                  <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Explore Standard
                  </span>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-stone-900 group-hover:text-amber-800 transition-colors duration-300"
                  >
                    <span>Discover</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}