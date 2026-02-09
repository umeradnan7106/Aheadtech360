"use client";

import React from "react";

export function Header64() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27B170] border border-gray-200 text-[14px] font-bold tracking-widest uppercase text-white">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                About AheadTech360
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-8">
              Growth built <span className="bg-gradient-to-r from-[#1e40af] via-[#107b61] to-[#22c55e] bg-clip-text text-transparent">right,<br /> every time.</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 max-w-md leading-relaxed mb-10">
              We partner with businesses to generate real leads and sustainable revenue growth through proven digital strategies and cutting-edge technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#1a2e5c] transition-all cursor-pointer">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="bg-white border border-gray-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image/Card Section */}
          <div className="relative">
            <div className="rounded-[15px] overflow-hidden bg-[#e5e7eb] aspect-[4/5] lg:aspect-square flex items-end justify-center relative shadow-sm">
              {/* Main Image */}
              <img
                src="/img/hero_image.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              />

              {/* Glassmorphism Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-3xl flex items-center gap-4">
                <div className="bg-[#1f3a7a] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">50+ Projects</h4>
                  <p className="text-white/80 text-sm">Successfully delivered worldwide</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
