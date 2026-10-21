"use client";

import React from "react";
import Image from "next/image";
import heroBg from "@/assets/homepage/homeheroimg.png";

export default function TeamSection() {
  const teamMembers = [
    {
      id: "01",
      name: "Sienna Miller",
      role: "Master Colorist & Stylist",
      specialty: "European Balayage & Dimensional Tones",
      image: heroBg,
    },
    {
      id: "02",
      name: "Julian Thorne",
      role: "Senior Hair Sculptor",
      specialty: "Precision Dry Cuts & Architectural Styling",
      image: heroBg,
    },
    {
      id: "03",
      name: "Amara Chen",
      role: "Lead Dermal & Skin Specialist",
      specialty: "Botanical Cellular Rejuvenation & Facials",
      image: heroBg,
    },
    {
      id: "04",
      name: "Lucas Wright",
      role: "Creative Texture Artist",
      specialty: "Organic Keratin Treatments & Waves",
      image: heroBg,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6 text-left">
          <div className="space-y-3 max-w-xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
              The Artisans • Mastery in Practice
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight font-serif text-stone-900 leading-[1.15]">
              Our Creative Collective
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
              A curated house of visionary stylists and skin therapists dedicated to the art of subtle refinement and bespoke care.
            </p>
          </div>
        </div>

        {/* Team Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between border border-stone-200/80 bg-white overflow-hidden hover:border-stone-400 transition-all duration-500"
            >
              {/* Member Portrait Image (Flush Edge-to-Edge) */}
              <div className="relative w-full aspect-[3/4] overflow-hidden border-b border-stone-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Member Info Content */}
              <div className="p-6 space-y-3 text-left">
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-amber-800 font-medium">
                  <span>{member.role}</span>
                  <span className="font-serif text-stone-400 font-normal">
                    {member.id}
                  </span>
                </div>

                <h3 className="text-xl font-light text-stone-900 tracking-tight font-serif">
                  {member.name}
                </h3>

                <p className="text-stone-500 text-xs font-light leading-relaxed pt-1">
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