"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Sample images
import s1 from "@/assets/homepage/packages/p1.jpg";
import s2 from "@/assets/homepage/packages/p2.jpg";
import s3 from "@/assets/homepage/home-gallery/1.jpg";
import s4 from "@/assets/homepage/home-gallery/4.jpg";
import s5 from "@/assets/homepage/home-gallery/7.jpg";
import s6 from "@/assets/homepage/home-gallery/10.jpg";
import s7 from "@/assets/homepage/home-gallery/13.jpg";
import s8 from "@/assets/homepage/home-gallery/16.jpg";

export default function ServiceCategories() {
  const [activeCategory, setActiveCategory] = useState("All Rituals");
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    "All Rituals",
    "Hair Architecture",
    "Color & Balayage",
    "Organic Botanical Care",
    "Dermal & Facial Science",
  ];

  const servicesData = [
    {
      id: 1,
      category: "Hair Architecture",
      badge: "Signature Ritual",
      name: "The Mayfair Signature Couture Cut",
      duration: "90 Mins",
      price: "£180",
      description:
        "Bespoke dry-cutting tailored precisely to your facial bone structure and daily lifestyle rhythm. Includes diagnostic scalp mapping and organic infusion wash.",
      image: s1,
    },
    {
      id: 2,
      category: "Hair Architecture",
      badge: "Precision Care",
      name: "Architectural Precision Trim",
      duration: "60 Mins",
      price: "£120",
      description:
        "Meticulous reshaping focusing on structural integrity and movement, finished with our signature botanical blowout.",
      image: s2,
    },
    {
      id: 3,
      category: "Color & Balayage",
      badge: "Master Artistry",
      name: "Artisan Sun-Kissed Balayage",
      duration: "180 Mins",
      price: "£280",
      description:
        "Hand-painted dimensional lighting designed to mimic natural sun exposure, using ammonia-free organic lighteners and gloss sealants.",
      image: s3,
    },
    {
      id: 4,
      category: "Color & Balayage",
      badge: "Cellular Gloss",
      name: "Seamless Glossing Ritual",
      duration: "75 Mins",
      price: "£140",
      description:
        "Intensive liquid gloss treatment that seals the cuticle, enhances mirror-like reflection, and neutralizes unwanted undertones.",
      image: s4,
    },
    {
      id: 5,
      category: "Organic Botanical Care",
      badge: "Sanctuary Care",
      name: "Botanical Hair & Scalp Therapy",
      duration: "75 Mins",
      price: "£150",
      description:
        "A restorative sanctuary ritual utilizing cold-pressed botanical tinctures to repair micro-damages and rebalance cellular scalp health.",
      image: s5,
    },
    {
      id: 6,
      category: "Organic Botanical Care",
      badge: "Deep Restoration",
      name: "Full Restoration Ritual",
      duration: "120 Mins",
      price: "£220",
      description:
        "Deep conditioning cellular infusion combined with a cranial pressure-point massage to release tension and revitalize lifeless strands.",
      image: s6,
    },
    {
      id: 7,
      category: "Dermal & Facial Science",
      badge: "Advanced Science",
      name: "Dermal Cellular Radiance Facial",
      duration: "90 Mins",
      price: "£195",
      description:
        "Advanced active serum infusion paired with cold laser therapy to stimulate collagen production and reveal deep cellular luminosity.",
      image: s7,
    },
    {
      id: 8,
      category: "Dermal & Facial Science",
      badge: "Cellular Firming",
      name: "Bespoke Anti-Aging Infusion",
      duration: "105 Mins",
      price: "£240",
      description:
        "Targeted peptide delivery and micro-current firming architecture designed to lift, smooth, and restore youthful skin contours.",
      image: s8,
    },
  ];

  // Handle smooth tab change without layout shift
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

  // Filter services based on active category
  const filteredServices =
    activeCategory === "All Rituals"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Centered Header & Centered White Category Navigation Bar */}
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Main Title & Subtitle (Centered) */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-800 font-medium">
              Curated Repertoire
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900">
              The Sanctuary Menu
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed pt-1">
              Explore our bespoke offerings designed for absolute refinement, precision hair architecture, and cellular skin wellness.
            </p>
          </div>

          {/* Category List Bar (White Background, Border & Shadow, Centered) */}
          <div className="bg-white border border-stone-200/90 p-2 sm:p-2.5 rounded-none flex items-center justify-center flex-wrap gap-2 shadow-sm">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 sm:px-5 py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer rounded-none border ${
                    isActive
                      ? "bg-stone-900 text-white border-stone-900 font-normal shadow-sm scale-[1.02]"
                      : "bg-transparent text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>

        {/* Services Grid with Image Cards Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 min-h-[600px] transition-all duration-300 ease-out ${
            isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between border border-stone-200/80 bg-white overflow-hidden hover:border-stone-400 transition-all duration-500 shadow-sm"
            >
              {/* Image Section with Overlay Badge */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimalist Top Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/90 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 font-light backdrop-blur-sm">
                  {service.badge}
                </div>
              </div>

              {/* Service Details Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow space-y-8">
                
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center text-xs tracking-[0.2em] uppercase text-amber-800 font-medium">
                    <span className="text-[10px] tracking-[0.25em]">{service.category}</span>
                    <span className="text-stone-900 font-light">{service.duration}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Offer Price & CTA Footer Strip */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-3 text-left">
                    <span className="text-2xl sm:text-3xl font-light text-stone-900">
                      {service.price}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block px-7 py-3 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
                  >
                    Inquire
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