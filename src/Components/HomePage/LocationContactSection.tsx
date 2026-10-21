"use client";

import React, { useState, useEffect } from "react";

export default function LocationContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Smooth open animation handling
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  // Smooth close animation handling
  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 400);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Main Location & Hours Section */}
      <section className="w-full bg-[#FAFAFA] text-stone-900 py-20 lg:py-28 border-b border-stone-200/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="space-y-3 text-left max-w-xl mb-14 sm:mb-20">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium">
              Sanctuary Access • Visit Us
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
              Location & Hours
            </h2>
          </div>

          {/* Grid Layout: Location & Map (Left) vs Opening Hours (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left Column Card: Location, Direct Details & Google Map */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 flex flex-col justify-between space-y-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
              <div className="space-y-6">
                <div className="space-y-2 border-b border-stone-100 pb-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-amber-800 font-medium">
                    London Flagship Sanctuary
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
                    Mayfair, London
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-600 text-xs font-light leading-relaxed tracking-wide">
                  <div>
                    <span className="text-stone-400 uppercase tracking-widest text-[9px] block mb-1">
                      Address
                    </span>
                    14 Mount Street, Mayfair <br />
                    London W1K 2RH, UK
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase tracking-widest text-[9px] block mb-1">
                      Direct Concierge
                    </span>
                    +44 (0) 20 7946 0912 <br />
                    concierge@vividcosalon.co.uk
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-[220px] sm:h-[250px] relative overflow-hidden shadow-inner">
                <iframe
                  title="Vivid.Co Mayfair Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.218519412175!2d-0.15132262338104866!3d51.50920400989069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052f82161f31%3A0xb3a2779774d0926!2s14%20Mount%20St%2C%20London%20W1K%202RH%2C%20UK!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0%) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column Card: Opening Hours & CTA Button */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 flex flex-col justify-between text-left shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
              <div className="space-y-6">
                <div className="space-y-2 border-b border-stone-100 pb-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-amber-800 font-medium">
                    Sanctuary Schedule
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
                    Opening Hours
                  </h3>
                </div>

                {/* Hours Table */}
                <div className="space-y-4 text-xs sm:text-sm font-light text-stone-700">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-3">
                    <span className="text-stone-500">Tuesday – Friday</span>
                    <span className=" text-stone-900">09:00 – 19:30</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-3">
                    <span className="text-stone-500">Saturday</span>
                    <span className=" text-stone-900">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-3">
                    <span className="text-stone-500">Sunday</span>
                    <span className=" text-stone-900">10:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-stone-400">Monday & Bank Holidays</span>
                    <span className="text-stone-400">Closed for Rest</span>
                  </div>
                </div>
              </div>

              {/* Action Button to Open Modal */}
              <div className="pt-8 sm:pt-10 border-t border-stone-100">
                <button
                  onClick={handleOpenModal}
                  className="w-full py-4 border border-stone-900 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-800 transition-all duration-300 text-center cursor-pointer"
                >
                  Send a Message
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Slide-Over Modal with Fixed Height & No Scrollbar */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end p-4 sm:p-6 lg:p-8">
          
          {/* Smooth Fade Backdrop (Clicking closes modal) */}
          <div
            onClick={handleCloseModal}
            className={`fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity duration-500 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Floating Compact Card Modal (No Scrollbar, Precise Fits) */}
          <div
            className={`relative z-10 w-full max-w-md bg-white shadow-2xl p-6 sm:p-7 flex flex-col justify-between h-auto overflow-hidden transform transition-all duration-500 ease-out ${
              isAnimating
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-12 opacity-0 scale-95"
            }`}
          >
            {/* Modal Header */}
            <div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-3.5 mb-4">
                <div className="space-y-0.5 text-left">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-amber-800 font-medium">
                    Direct Concierge
                  </p>
                  <h3 className="text-xl font-light text-stone-900 tracking-tight">
                    Send a Message
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors text-lg font-light leading-none cursor-pointer"
                  aria-label="Close form"
                >
                  ✕
                </button>
              </div>

              {/* Compact Contact Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you. Your message has been received.");
                  handleCloseModal();
                }}
                className="space-y-3.5 text-left"
              >
                {/* Enter Name */}
                <div className="space-y-1">
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    className="w-full bg-[#FAFAFA] border border-stone-200 px-3.5 py-2 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors rounded-none"
                  />
                </div>

                {/* Enter Email */}
                <div className="space-y-1">
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    className="w-full bg-[#FAFAFA] border border-stone-200 px-3.5 py-2 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors rounded-none"
                  />
                </div>

                {/* Enter Message */}
                <div className="space-y-1">
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Enter message"
                    className="w-full bg-[#FAFAFA] border border-stone-200 px-3.5 py-2 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors resize-none rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 border border-stone-900 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-light hover:bg-stone-800 transition-all duration-300 text-center cursor-pointer rounded-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Modal Footer Note */}
            <div className="pt-3 mt-3 border-t border-stone-100 text-center">
              <p className="text-[9px] text-stone-400 uppercase tracking-widest">
                Vivid.Co Private Concierge
              </p>
            </div>

          </div>

        </div>
      )}
    </>
  );
}