"use client";

import React from "react";

export function Logo3() {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto mb-12 w-full max-w-3xl px-6 md:mb-16 lg:mb-20">
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-[#0f172a]">
          Trusted by growing businesses across the US
        </h2>
      </div>
      
      <div className="flex items-center">
        {/* First Loop */}
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/Afapparel-logo.jpeg"
            alt="Webflow"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/stellar-logo.jpeg"
            alt="Relume"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/macp-logo.jpeg"
            alt="Webflow"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/ezdtfmaker-logo.jpeg"
            alt="Relume"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/eztmart-logo.jpeg"
            alt="Webflow"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/Passion_Logo-09.avif"
            alt="Relume"
          />
        </div>
        
        {/* Second Loop - Duplicate for seamless effect */}
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/Afapparel-logo.jpeg"
            alt="Webflow"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/stellar-logo.jpeg"
            alt="Relume"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/macp-logo.jpeg"
            alt="Webflow"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/ezdtfmaker-logo.jpeg"
            alt="Relume"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/eztmart-logo.jpeg"
            alt="Webflow"
          />
          <img
            className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale-0 transition-all opacity-100 hover:opacity-100"
            src="/img/Passion_Logo-09.avif"
            alt="Relume"
          />
        </div>
      </div>
    </section>
  );
}