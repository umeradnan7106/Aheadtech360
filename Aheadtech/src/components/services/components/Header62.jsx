"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section id="relume" className="bg-[#fcfcfc] px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-3xl text-center mx-auto">
        <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Growth</p>
        <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl text-[#0f172a] tracking-tight leading-[1.1]">
          Services that scale
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Marketing, development, and strategy built for businesses ready to
          grow
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all cursor-pointer">
            Audit
          </button>
          <button className="bg-white border border-gray-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all cursor-pointer">
            Consult
          </button>
        </div>
      </div>
    </section>
  );
}
