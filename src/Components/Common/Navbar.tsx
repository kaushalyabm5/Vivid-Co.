"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when full screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Left Corner: Logo */}
          <Link href="/" className="z-50">
            <span className="font-serif text-2xl font-normal tracking-wider text-stone-900">
              Vivid<span className="text-amber-800 font-sans text-xl">.Co</span>
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 transition-colors duration-200 font-light"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Corner: Desktop Contact Us Button (Sharp Edges) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-7 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-light transition-all duration-300 inline-block border border-stone-900"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile / Tablet / iPad: Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            className="lg:hidden text-xs uppercase tracking-widest text-stone-900 font-light flex items-center gap-2 p-2 focus:outline-none"
          >
            <span>Menu</span>
            <div className="flex flex-col gap-1 w-5">
              <span className="w-full h-[1px] bg-stone-900" />
              <span className="w-3/4 h-[1px] bg-stone-900 self-end" />
            </div>
          </button>

        </div>
      </header>

      {/* Fullscreen Mobile & Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#FAFAFA] text-stone-900 flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Top Header inside Overlay */}
        <div className="flex items-center justify-between w-full">
          <span className="font-serif text-2xl font-normal tracking-wider text-stone-900">
            Vivid<span className="text-amber-800 font-sans text-xl">.Co</span>
          </span>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="text-xs uppercase tracking-widest text-stone-900 font-light flex items-center gap-2 p-2 focus:outline-none hover:opacity-70 transition-opacity"
          >
            <span>Close</span>
            <span className="text-lg font-extralight leading-none">✕</span>
          </button>
        </div>

        {/* Center Links - Perfectly Centered Vertically & Horizontally */}
        <div className="my-auto py-8 w-full flex justify-center items-center">
          <nav className="flex flex-col items-center justify-center gap-6 sm:gap-8 text-center max-w-xl mx-auto w-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-3xl sm:text-5xl font-light text-stone-900 hover:text-amber-900 transition-all duration-300 tracking-wide transform ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${isMenuOpen ? 150 + index * 70 : 0}ms`,
                }}
              >
                {link.name}
              </Link>
            ))}

            <div
              className={`pt-4 w-full flex justify-center transform transition-all duration-300 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${isMenuOpen ? 150 + navLinks.length * 70 : 0}ms`,
              }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block min-w-[200px] text-center px-10 py-4 bg-stone-900 text-white text-xs uppercase tracking-widest font-light border border-stone-900 mt-2"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>

        {/* Footer Details inside Menu */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs tracking-wider text-stone-400 border-t border-stone-200/80 pt-6 gap-4">
          <p>© Vivid.Co • London Sanctuary</p>
          <div className="flex gap-6 text-stone-600">
            <span className="hover:text-stone-900 cursor-pointer">Instagram</span>
            <span className="hover:text-stone-900 cursor-pointer">WhatsApp</span>
          </div>
        </div>
      </div>
    </>
  );
}