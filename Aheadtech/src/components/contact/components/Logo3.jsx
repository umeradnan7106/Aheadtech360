"use client";

import React from "react";

export function Logo3() {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto mb-12 w-full max-w-3xl px-6 md:mb-16 lg:mb-20">
        <h2 className="text-4xl text-center md:text-6xl font-bold text-[#0f172a] mb-12 tracking-tight">
          Trusted by growing businesses across the US
        </h2>
      </div>
      
      {/* Wrapper with proper positioning */}
      <div className="relative flex items-center">
        
        {/* Animation Container - Multiple loops for seamless effect */}
        <div className="flex animate-loop-horizontally">
          
          {/* Loop 1 */}
          <div className="flex shrink-0 items-center">
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/Afapparel-logo.jpeg"
              alt="AF Apparel"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/stellar-logo.jpeg"
              alt="Stellar"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/macp-logo.jpeg"
              alt="MACP"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/ezdtfmaker-logo.jpeg"
              alt="EZ DTF Maker"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/eztmart-logo.jpeg"
              alt="EZT Mart"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/Passion_Logo-09.avif"
              alt="Passion"
            />
          </div>
          
          {/* Loop 2 - Duplicate */}
          <div className="flex shrink-0 items-center">
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/Afapparel-logo.jpeg"
              alt="AF Apparel"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/stellar-logo.jpeg"
              alt="Stellar"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/macp-logo.jpeg"
              alt="MACP"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/ezdtfmaker-logo.jpeg"
              alt="EZ DTF Maker"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/eztmart-logo.jpeg"
              alt="EZT Mart"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/Passion_Logo-09.avif"
              alt="Passion"
            />
          </div>

          {/* Loop 3 - Extra duplicate for buffer */}
          <div className="flex shrink-0 items-center">
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/Afapparel-logo.jpeg"
              alt="AF Apparel"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/stellar-logo.jpeg"
              alt="Stellar"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/macp-logo.jpeg"
              alt="MACP"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/ezdtfmaker-logo.jpeg"
              alt="EZ DTF Maker"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/eztmart-logo.jpeg"
              alt="EZT Mart"
            />
            <img
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 transition-all opacity-90 hover:opacity-100 hover:scale-105"
              src="/img/Passion_Logo-09.avif"
              alt="Passion"
            />
          </div>

        </div>
      </div>
    </section>
  );
}