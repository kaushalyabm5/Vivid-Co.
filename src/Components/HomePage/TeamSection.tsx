"use client";

import React from "react";
import Image from "next/image";
import artisian1 from "@/assets/homepage/artisian/1.jpg";
import artisian2 from "@/assets/homepage/artisian/2.jpg";
import artisian3 from "@/assets/homepage/artisian/3.jpg";
import artisian4 from "@/assets/homepage/artisian/4.jpg";

export default function TeamSection() {
  const teamMembers = [
    {
      id: "01",
      name: "Sienna Miller",
      role: "Master Colorist",
      specialty: "European Balayage & Dimensional Tones",
      image: artisian1,
    },
    {
      id: "02",
      name: "Julian Thorne",
      role: "Hair Sculptor",
      specialty: "Precision Dry Cuts & Architecture",
      image: artisian2,
    },
    {
      id: "03",
      name: "Amara Chen",
      role: "Dermal Lead",
      specialty: "Botanical Cellular Rejuvenation",
      image: artisian3,
    },
    {
      id: "04",
      name: "Lucas Wright",
      role: "Texture Artist",
      specialty: "Organic Keratin & Wave Infusions",
      image: artisian4,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="space-y-3 max-w-xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
              The Collective • Artistry in Practice
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
              Meet Our Artisans
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
              A curated house of visionary stylists and dermal therapists dedicated to bespoke refinement and individual beauty.
            </p>
          </div>
        </div>

        {/* Single Frame Unified Layout (All 4 Members side-by-side in one sharp box) */}
        <div className="w-full border border-stone-200/80 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80 overflow-hidden shadow-sm">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative flex flex-col justify-between h-[450px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-white hover:bg-stone-50 transition-colors duration-500"
            >
              {/* Image Container (Takes Full Top Section of Column) */}
              <div className="relative w-full h-[68%] overflow-hidden bg-stone-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* ID Number Overlay */}
              
              </div>

              {/* Text Info Section (Aligned Bottom Portion of Column) */}
              <div className="p-6 h-[32%] flex flex-col justify-between text-left border-t border-stone-100">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-amber-800 font-medium">
                    {member.role}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight">
                    {member.name}
                  </h3>
                </div>

                <p className="text-stone-500 text-xs font-light leading-relaxed line-clamp-2">
                  {member.specialty}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}