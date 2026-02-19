"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout204() {
  return (
    <section id="relume" className="bg-[#fcfcfc] px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div className="rounded-[15px] overflow-hidden shadow-lg">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Integrated</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
              One partner, complete solutions
            </h2>
            <p className="mb-8 text-lg md:text-xl text-slate-600 leading-relaxed">
              We don't hand off projects or disappear after launch. Strategy,
              execution, and optimization happen together. You get measurable
              results and a partner who stays invested in your growth.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 1"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume logo 1"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 2"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume logo 2"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/20 cursor-pointer">
                Learn
              </button>
              <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                Explore
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
