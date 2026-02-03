"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27B170] border border-gray-200 text-[14px] font-bold tracking-widest uppercase text-white">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Connect with Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-8 max-w-4xl">
            Let's <span className="bg-gradient-to-r from-[#1e40af] via-[#107b61] to-[#22c55e] bg-clip-text text-transparent">grow together</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            Reach out today for a free consultation or marketing audit from our team. We're here to help your business thrive.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#1a2e5c] transition-all cursor-pointer">
              Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button className="bg-white border border-gray-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all cursor-pointer">
              Book a Call
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
