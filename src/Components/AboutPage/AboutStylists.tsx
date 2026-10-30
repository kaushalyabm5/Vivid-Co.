"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import stylist1 from "@/assets/homepage/artisian/1.jpg";
import stylist2 from "@/assets/homepage/artisian/2.jpg";
import stylist3 from "@/assets/homepage/artisian/3.jpg";
import stylist4 from "@/assets/homepage/artisian/4.jpg";

export default function AboutStylists() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1); // 1 = right, -1 = left

  const stylists = [
    {
      id: "01",
      role: "Master Coorist",
      name: "Sienna Miller",
      specialty: "European Balayage & Dimensional Tones",
      description:
        "Mastering the delicate balance of light and shadow, Sienna crafts seamless, sun-kissed dimensional tones and European balayage tailored exclusively to enhance individual complexion and natural movement.",
      image: stylist1,
    },
    {
      id: "02",
      role: "Hair Sculptor",
      name: "Julian Thorne",
      specialty: "Precision Dry Cuts & Architecture",
      description:
        "Focusing on cranial geometry and natural growth vectors, Julian engineers precision dry cuts that fall effortlessly into place, ensuring absolute grace and low-maintenance everyday wearability.",
      image: stylist2,
    },
    {
      id: "03",
      role: "Dermal Lead",
      name: "Amara Chen",
      specialty: "Botanical Cellular Rejuvenation",
      description:
        "Specializing in holistic scalp health and active organic botanical infusions, Amara restores hair vitality and cellular micro-flora from the deepest root levels for lasting resilience.",
      image: stylist3,
    },
    {
      id: "04",
      role: "Texture Artist",
      name: "Lucas Wright",
      specialty: "Organic Keratin & Wave Infusions",
      description:
        "Pioneering formaldehyde-free smoothing and bespoke wave architecture, Lucas transforms unmanageable textures into silk-like fluidity while preserving natural bounce and structural integrity.",
      image: stylist4,
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stylists.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stylists.length) % stylists.length);
  };

  const currentStylist = stylists[currentIndex];

  // Framer Motion Slide Variants with 'as const' fix
  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="w-full bg-white text-stone-900 py-20 sm:py-24 lg:py-32 border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto px-2">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-800 font-medium">
            Expertise & Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
            The Hands Behind the Artistry
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
            International mastery and precision design, dedicated to absolute individual refinement.
          </p>
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Stylist"
            className="absolute left-1 sm:left-2 lg:-left-6 z-30 p-2.5 sm:p-3.5 bg-white/90 hover:bg-stone-900 hover:text-white border border-stone-300 text-stone-900 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer rounded-full"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
          </button>

          {/* Wide Landscape Card Container */}
          <div className="relative w-full max-w-5xl bg-[#FAFAFA] border border-stone-200 shadow-2xl overflow-hidden min-h-[500px] sm:min-h-[440px] lg:min-h-[480px] flex items-center mx-8 sm:mx-12 lg:mx-0">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-12 bg-[#FAFAFA]"
              >
                {/* Left Side: Image Container */}
                <div className="lg:col-span-5 relative w-full h-72 sm:h-80 lg:h-full bg-stone-200 overflow-hidden">
                  <Image
                    src={currentStylist.image}
                    alt={currentStylist.name}
                    fill
                    priority
                    className="object-cover object-center contrast-105 transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4 bg-stone-900/90 text-white text-[10px] uppercase tracking-[0.25em] px-3.5 py-1.5 font-light backdrop-blur-sm">
                    {currentStylist.role}
                  </div>
                </div>

                {/* Right Side: Details Content */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between space-y-4 lg:space-y-6">
                  
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-amber-800 font-medium">
                        {currentStylist.specialty}
                      </span>
                      <span className="text-stone-400 text-xs tracking-[0.2em] font-light">
                        {currentStylist.id} / 04
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight">
                      {currentStylist.name}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                      {currentStylist.description}
                    </p>
                  </div>

                  {/* Card Footer / Action */}
                  <div className="pt-4 sm:pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-stone-400 font-light">
                      Bespoke Sanctuary
                    </span>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-stone-900 text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-800 transition-all duration-300 group/btn w-full sm:w-auto justify-center"
                    >
                      <span>Reserve Consultation</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[1.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Stylist"
            className="absolute right-1 sm:right-2 lg:-right-6 z-30 p-2.5 sm:p-3.5 bg-white/90 hover:bg-stone-900 hover:text-white border border-stone-300 text-stone-900 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer rounded-full"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
          </button>

        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {stylists.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 transition-all duration-500 cursor-pointer ${
                currentIndex === index ? "w-8 bg-stone-900" : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}