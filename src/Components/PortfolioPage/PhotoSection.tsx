"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import work1 from "@/assets/homepage/home-gallery/1.jpg";
import work2 from "@/assets/homepage/home-gallery/2.jpg";
import work3 from "@/assets/homepage/home-gallery/3.jpg";
import work4 from "@/assets/homepage/home-gallery/4.jpg";
import work5 from "@/assets/homepage/home-gallery/5.jpg";
import work6 from "@/assets/homepage/home-gallery/6.jpg";
import work7 from "@/assets/homepage/home-gallery/7.jpg";
import work8 from "@/assets/homepage/home-gallery/8.jpg";
import work9 from "@/assets/homepage/home-gallery/9.jpg";
import work10 from "@/assets/homepage/home-gallery/10.jpg";

export default function PhotoSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hair Architecture", "Dermal Care", "Bridal & Editorial"];

  const portfolioItems = [
    {
      id: "01",
      title: "European Balayage Transformation",
      category: "Hair Architecture",
      client: "Private Collection",
      image: work1,
    },
    {
      id: "02",
      title: "Botanical Scalp & Cellular Infusion",
      category: "Dermal Care",
      client: "Bespoke Sanctuary",
      image: work2,
    },
    {
      id: "03",
      title: "Avant-Garde Editorial Styling",
      category: "Bridal & Editorial",
      client: "Vivid Showcase",
      image: work3,
    },
    {
      id: "04",
      title: "Precision Dry Cutting & Shape",
      category: "Hair Architecture",
      client: "Private Collection",
      image: work4,
    },
    {
      id: "05",
      title: "Organic Keratin & Fluidity",
      category: "Hair Architecture",
      client: "Bespoke Sanctuary",
      image: work5,
    },
    {
      id: "06",
      title: "Solitude Bridal Masterclass",
      category: "Bridal & Editorial",
      client: "Editorial Series",
      image: work6,
    },
    {
      id: "07",
      title: "Monochrome Minimalist Texture",
      category: "Hair Architecture",
      client: "Private Collection",
      image: work7,
    },
    {
      id: "08",
      title: "Deep Dermal Micro-Infusion",
      category: "Dermal Care",
      client: "Bespoke Sanctuary",
      image: work8,
    },
    {
      id: "09",
      title: "Runway Silhouette Design",
      category: "Bridal & Editorial",
      client: "Vivid Showcase",
      image: work9,
    },
    {
      id: "10",
      title: "Solitude Restoration Ritual",
      category: "Dermal Care",
      client: "Private Collection",
      image: work10,
    },
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full bg-white text-stone-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 border-b border-stone-200 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-stone-950 text-white shadow-md"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid (Uniform Image Sizes using fixed aspect-[4/5] or aspect-square) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative bg-[#FAFAFA] border border-stone-200/80 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              {/* Image Container with Fixed Uniform Size (aspect-[4/5]) */}
              <div className="relative w-full aspect-[4/5] bg-stone-200 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500" />
                
                {/* ID & Category Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="bg-stone-950/80 backdrop-blur-md text-white text-[9px] uppercase tracking-[0.25em] px-3.5 py-1 font-light">
                    {item.category}
                  </span>
                  <span className="text-white/90 text-xs tracking-[0.2em] font-light bg-black/40 px-2.5 py-0.5 backdrop-blur-sm">
                    {item.id} / 10
                  </span>
                </div>
              </div>

              {/* Card Details Underneath */}
              <div className="p-6 sm:p-8 bg-white border-t border-stone-200 flex items-center justify-between">
                <div className="space-y-1.5 text-left">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-amber-800 font-medium">
                    {item.client}
                  </p>
                  <h3 className="text-lg sm:text-xl font-light text-stone-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <Link
                  href="/contact"
                  aria-label="View Details"
                  className="p-3 bg-stone-100 text-stone-900 hover:bg-stone-950 hover:text-white transition-all duration-300 rounded-full group/btn shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[1.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}