"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/homepage/homeheroimg.png";

export default function SpecialOffers() {
  const offers = [
    {
      id: "01",
      badge: "Autumn Exclusive Ritual",
      title: "The Autumn Restoration Suite",
      description:
        "An immersive 90-minute treatment combining bespoke scalp therapy, cold-pressed botanical glossing, and a full structural cut.",
      validity: "Valid through November 30",
      originalPrice: "£240",
      offerPrice: "£180",
      image: heroBg,
    },
    {
      id: "02",
      badge: "Signature Privileges",
      title: "Dermal Radiance & Sculpt Package",
      description:
        "Pair our Signature Couture Cut with the Botanical Radiance Facial for a complete dual-artistry transformation.",
      validity: "Limited to 15 Guests / Month",
      originalPrice: "£305",
      offerPrice: "£235",
      image: heroBg,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div className="space-y-3 text-left max-w-xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
              Limited Invitations • Curated Packages
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
              Seasonal Privileges
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-light">
              Updated Monthly for Discerning Guests
            </p>
          </div>
        </div>

        {/* Offers Asymmetric / Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group flex flex-col justify-between border border-stone-200/80 bg-white overflow-hidden hover:border-stone-400 transition-all duration-500"
            >
              {/* Image Section with Overlay Badge */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimalist Top Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/90 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 font-light backdrop-blur-sm">
                  {offer.badge}
                </div>
              </div>

              {/* Offer Details Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow space-y-8">
                
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center text-xs tracking-[0.2em] uppercase text-amber-800 font-medium">
                    <span>{offer.validity}</span>
                    
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight leading-snug">
                    {offer.title}
                  </h3>

                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Offer Price & CTA Footer Strip */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-3 text-left">
                    <span className="text-2xl sm:text-3xl font-light text-stone-900">
                      {offer.offerPrice}
                    </span>
                    <span className="text-xs text-stone-400 line-through font-light">
                      {offer.originalPrice}
                    </span>
                  </div>

                  <Link
                    href="/booking"
                    className="inline-block px-7 py-3 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
                  >
                    Reserve Offer
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