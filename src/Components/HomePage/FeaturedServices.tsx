"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@/assets/homepage/home-img-6.jpg";
import Img2 from "@/assets/homepage/home-img-7.jpg";
import Img3 from "@/assets/homepage/home-img-8.jpg";

export default function FeaturedServices() {
  const services = [
    {
      id: "01",
      category: "Hair Artistry",
      title: "Signature Couture Cut & Sculpt",
      description:
        "Precision dry cutting and architectural styling tailored to your facial symmetry and organic hair movement.",
      duration: "75 Min",
      price: "From £140",
      image: Img1,
    },
    {
      id: "02",
      category: "Skin Therapy",
      title: "Botanical Radiance Facial",
      description:
        "Deep cellular rejuvenation utilizing active organic serums, lymphatic drainage massage, and cold laser therapy.",
      duration: "60 Min",
      price: "From £165",
      image: Img2,
    },
    {
      id: "03",
      category: "Color & Dimension",
      title: "Artisan Balayage & Glossing",
      description:
        "Hand-painted multidimensional highlights finished with a custom peptide-infused gloss for glass-like shine.",
      duration: "120 Min",
      price: "From £220",
      image: Img3,
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
              Curated Menu • High Artistry
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
              Featured Treatments
            </h2>
          </div>

          <div className="text-left md:text-right">
            <Link
              href="/services"
              className="inline-block px-7 py-3 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between border border-stone-200/80 bg-white overflow-hidden hover:border-stone-400 transition-all duration-500"
            >
              <div className="space-y-6">
                
                {/* Service Image Container: Full Width, No Padding (Flush to card edges) */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Container (Padding applied only to text & details below image) */}
                <div className="px-6 sm:px-8 space-y-6">
                  {/* Number & Category Strip */}
                  <div className="flex justify-between items-center text-xs tracking-[0.2em] uppercase text-stone-400 pt-1">
                    <span>{item.category}</span>
                    
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-light text-stone-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>

              {/* Card Footer: Duration, Price & CTA */}
              <div className="mx-6 sm:mx-8 pt-6 mt-6 border-t border-stone-100 pb-6 sm:pb-8 flex items-center justify-between">
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest text-stone-400">
                    {item.duration}
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-stone-900 tracking-wide">
                    {item.price}
                  </span>
                </div>

                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 text-stone-900 text-xs uppercase tracking-[0.2em] font-light border-b border-stone-900 pb-0.5 hover:text-amber-800 hover:border-amber-800 transition-colors duration-300"
                >
                  <span>Reserve</span>
                  <span className="text-sm font-extralight">→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}