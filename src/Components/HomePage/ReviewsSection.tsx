"use client";

import React from "react";
import Image from "next/image";
import r1 from "@/assets/homepage/reviews/1.jpg";
import r2 from "@/assets/homepage/reviews/2.jpg";
import r3 from "@/assets/homepage/reviews/3.jpg";
import r4 from "@/assets/homepage/reviews/4.jpg";
import r5 from "@/assets/homepage/reviews/5.jpg";
import r6 from "@/assets/homepage/reviews/6.jpg";
import r7 from "@/assets/homepage/reviews/7.jpg";
import r8 from "@/assets/homepage/reviews/8.jpg";
import r9 from "@/assets/homepage/reviews/9.jpg";
import r10 from "@/assets/homepage/reviews/10.jpg";
import r11 from "@/assets/homepage/reviews/11.jpg";
import r12 from "@/assets/homepage/reviews/12.jpg";

export default function ReviewsSection() {
  const row1 = [
    {
      quote:
        "The couture cut transformed my daily routine completely. Meticulous precision and an atmosphere of pure tranquility.",
      author: "Lady Charlotte Hastings",
      service: "Signature Couture Cut",
      rating: "★★★★★",
      avatar: r1,
    },
    {
      quote:
        "Vivid.Co is London's best kept secret. The organic botanical treatment restored my hair's texture like nothing else.",
      author: "Sophia Kensington",
      service: "Botanical Hair Therapy",
      rating: "★★★★★",
      avatar: r2,
    },
    {
      quote:
        "An exquisite sanctuary. The attention to detail from the moment you step in until you leave is unparalleled.",
      author: "Amelia Sterling",
      service: "Dermal Radiance Facial",
      rating: "★★★★★",
      avatar: r3,
    },
    {
      quote:
        "Subtle refinement at its highest level. My balayage looks naturally sun-kissed even after months.",
      author: "Elena Rostova",
      service: "Artisan Balayage",
      rating: "★★★★★",
      avatar: r4,
    },
  ];

  const row2 = [
    {
      quote:
        "Restraint and perfection. Elena and her team understand organic beauty better than any salon in Mayfair.",
      author: "Victoria Vance",
      service: "Full Restoration Ritual",
      rating: "★★★★★",
      avatar: r5,
    },
    {
      quote:
        "The private suite experience ensures absolute peace. No rush, no noise—just high artistry.",
      author: "Clara De Witt",
      service: "Private Suite Session",
      rating: "★★★★★",
      avatar: r6,
    },
    {
      quote:
        "Cold laser therapy paired with their active botanical serums left my skin glowing for weeks.",
      author: "Isabella Mercer",
      service: "Cellular Rejuvenation",
      rating: "★★★★★",
      avatar: r7,
    },
    {
      quote:
        "Architectural dry cutting that moves naturally with your facial structure. Truly transformative.",
      author: "Hannah Montgomery",
      service: "Architectural Cut",
      rating: "★★★★★",
      avatar: r8,
    },
  ];

  const row3 = [
    {
      quote:
        "No harsh chemical smells, only soothing organic tinctures. A masterclass in luxury hair care.",
      author: "Camilla Beauchamp",
      service: "Organic Glossing",
      rating: "★★★★★",
      avatar: r9,
    },
    {
      quote:
        "Every visit feels like an intentional wellness retreat. Highly recommended for discerning guests.",
      author: "Genevieve Thorne",
      service: "Seasonal Privileges",
      rating: "★★★★★",
      avatar: r10,
    },
    {
      quote:
        "The bespoke diagnostic analysis opened my eyes to proper scalp health. Exceptional results.",
      author: "Sienna Fitzgerald",
      service: "Scalp Diagnostic Ritual",
      rating: "★★★★★",
      avatar: r11,
    },
    {
      quote:
        "Impeccable taste, sharp geometry, and timeless styling. Vivid.Co sets a new standard.",
      author: "Olivia Pemberton",
      service: "Signature Styling",
      rating: "★★★★★",
      avatar: r12,
    },
  ];

  // Duplicating cards multiple times for endless uninterrupted track
  const infiniteRow1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];
  const infiniteRow3 = [...row3, ...row3, ...row3, ...row3, ...row3, ...row3];

  return (
    <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative">
      
      {/* Centered Section Header */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-4 mb-16 sm:mb-20">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
          Words of Affirmation • Client Stories
        </p>
        <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
          Client Chronicles
        </h2>
        <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed tracking-wide pt-1">
          Reflections from guests who have experienced our sanctuary of subtle perfection and architectural artistry.
        </p>
      </div>

      {/* Marquee Rows Container */}
      <div className="relative w-full space-y-4 overflow-hidden">
        
        {/* Row 1: Left to Right */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-4 animate-scroll-right shrink-0">
            {infiniteRow1.map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-4 animate-scroll-left shrink-0">
            {infiniteRow2.map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-4 animate-scroll-right shrink-0">
            {infiniteRow3.map((review, idx) => (
              <ReviewCard key={`row3-${idx}`} review={review} />
            ))}
          </div>
        </div>

      </div>

      {/* Infinite Seamless CSS Animations */}
      <style jsx global>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 80s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left {
          animation: scrollLeft 80s linear infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .animate-scroll-right {
            animation: scrollRight 150s linear infinite;
          }
          .animate-scroll-left {
            animation: scrollLeft 150s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}

{/* Individual Minimalist Review Card */}
function ReviewCard({
  review,
}: {
  review: {
    quote: string;
    author: string;
    service: string;
    rating: string;
    avatar: any;
  };
}) {
  return (
    <div className="w-[300px] sm:w-[380px] bg-stone-50/90 border border-stone-300/80 p-6 flex flex-col justify-between shrink-0 whitespace-normal text-left shadow-sm">
      <div className="space-y-4">
        {/* Rating & Service Badge */}
        <div className="flex justify-between items-center text-amber-900 text-xs tracking-widest font-medium">
          <span>{review.rating}</span>
          <span className="text-[10px] uppercase text-stone-500 tracking-[0.2em] font-medium">
            {review.service}
          </span>
        </div>

        {/* Review Quote */}
        <p className="text-stone-900 text-xs sm:text-sm font-normal leading-relaxed italic">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Card Footer: Rounded Avatar & Author Info */}
      <div className="pt-4 mt-5 border-t border-stone-200/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Client Avatar (Rounded) */}
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-stone-300 shrink-0">
            <Image
              src={review.avatar}
              alt={review.author}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs text-stone-950 font-medium tracking-wide">
              {review.author}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">
              Verified Guest
            </span>
          </div>
        </div>

        <span className="text-[10px] uppercase tracking-widest text-amber-900 font-semibold">
          Verified
        </span>
      </div>
    </div>
  );
}