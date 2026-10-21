"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [londonTime, setLondonTime] = useState<string>("");

  // Live London Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setLondonTime(now.toLocaleTimeString("en-GB", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com",
      icon: (
        <svg
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.02 0 1.513.769 1.513 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#0A0A0A] text-stone-300 pt-20 pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden border-t border-stone-800/60 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[480px]">
        
        {/* Top Grid: Modern Clean Editorial UI (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-stone-800/60">
          
          {/* Brand Philosophy & Address */}
          <div className="md:col-span-5 space-y-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-medium">
              Vivid.Co • Mayfair Sanctuary
            </p>
            <h3 className="text-xl sm:text-2xl font-light text-stone-100 tracking-tight leading-snug">
              Precision Hair Architecture & <br /> Dermal Cellular Science.
            </h3>
            <p className="text-stone-500 text-xs font-light leading-relaxed max-w-sm pt-1">
              14 Mount Street, Mayfair, London W1K 2RH <br />
              concierge@vividcosalon.co.uk
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-medium">
              Navigation
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-[0.18em] font-light text-stone-300">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-600 transition-colors duration-300">
                  Signature Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors duration-300">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors duration-300">
                  Private Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Presence Column with SVG Icons */}
          <div className="md:col-span-4 space-y-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-medium">
              Social Channels
            </p>
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 border border-stone-800 bg-stone-900/60 text-stone-300 flex items-center justify-center hover:bg-stone-100 hover:text-stone-950 hover:border-white transition-all duration-300 group cursor-pointer"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-[10px] uppercase tracking-widest text-stone-600 pt-1 font-light">
              Follow our editorial stories & daily artistry
            </p>
          </div>

        </div>

        {/* Large Central Brand Title (Matching the Image Style) */}
        <div className="py-8 my-auto text-center overflow-hidden">
          <h1 className="text-[13vw] sm:text-[14vw] lg:text-[15.5vw]  font-light leading-none tracking-tight text-stone-100/95 select-none">
            Vivid.Co
          </h1>
        </div>

        {/* Bottom Metadata & Scroll To Top Row */}
        <div className="flex items-center justify-between pt-6 text-xs font-light text-stone-500 border-t border-stone-800/40">
          
          {/* Live London Time */}
          <div className="tracking-widest uppercase text-[10px] text-stone-400">
            {londonTime ? `${londonTime} (GMT London)` : "London Sanctuary"}
          </div>

          {/* Copyright */}
          <div className="hidden sm:block text-[10px] uppercase tracking-widest text-stone-600">
            © {new Date().getFullYear()} Vivid.Co Salon. All Rights Reserved.
          </div>

          {/* Minimalist Scroll-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 border border-stone-800 bg-stone-900 text-stone-200 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-sm font-light shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 stroke-[1.5]" />
          </button>

        </div>

      </div>
    </footer>
  );
}