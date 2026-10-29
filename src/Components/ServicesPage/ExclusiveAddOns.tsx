"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Importing sample images (you can replace these with your actual enhancement images)
import addOn1 from "@/assets/homepage/home-gallery/2.jpg";
import addOn2 from "@/assets/homepage/home-gallery/5.jpg";
import addOn3 from "@/assets/homepage/home-gallery/8.jpg";
import addOn4 from "@/assets/homepage/home-gallery/11.jpg";

export default function ExclusiveAddOns() {
  const addOns = [
    {
      id: "01",
      badge: "Sanctuary Elixir",
      name: "Organic Scalp Elixir Infusion",
      duration: "+20 Mins",
      price: "£45",
      description:
        "A warm, cold-pressed botanical tincture ritual designed to stimulate follicles, relieve tension, and rebalance scalp micro-flora.",
      image: addOn1,
    },
    {
      id: "02",
      badge: "Cellular Therapy",
      name: "Cold Laser Eye Therapy",
      duration: "+15 Mins",
      price: "£55",
      description:
        "Targeted low-level light therapy paired with active peptide serums to reduce micro-puffiness and instantly refresh the ocular contour.",
      image: addOn2,
    },
    {
      id: "03",
      badge: "Deep Relaxation",
      name: "Cranial Tension Release Ritual",
      duration: "+25 Mins",
      price: "£65",
      description:
        "An intensive pressure-point massage focusing on stress points along the neck, shoulders, and scalp to deepen absolute relaxation.",
      image: addOn3,
    },
    {
      id: "04",
      badge: "Surface Armor",
      name: "Cellular Gloss Sealant Boost",
      duration: "+15 Mins",
      price: "£40",
      description:
        "An ultra-light liquid protein armor applied post-cut or color to lock in maximum light reflection and humidity resistance.",
      image: addOn4,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Section Header (Without Eyebrow Title) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-10">
          <div className="space-y-3 max-w-xl text-left">
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
              Privileges & Infusions
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-light">
              Seamlessly Integrated into Any Ritual
            </p>
          </div>
        </div>

        {/* Add-Ons Grid Layout with Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className="group flex flex-col justify-between border border-stone-200/80 bg-white overflow-hidden hover:border-stone-400 transition-all duration-500 shadow-sm"
            >
              {/* Image Section with Overlay Badge */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={addon.image}
                  alt={addon.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimalist Top Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/90 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 font-light backdrop-blur-sm">
                  {addon.badge}
                </div>
              </div>

              {/* Add-On Details Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow space-y-8">
                
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center text-xs tracking-[0.2em] uppercase text-amber-800 font-medium">
                    <span className="text-[10px] tracking-[0.25em]">Enhancement {addon.id}</span>
                    <span className="text-stone-900 font-light">{addon.duration}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors duration-300">
                    {addon.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                {/* Offer Price & CTA Footer Strip */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-3 text-left">
                    <span className="text-2xl sm:text-3xl font-light text-stone-900">
                      {addon.price}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block px-7 py-3 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
                  >
                    Request
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