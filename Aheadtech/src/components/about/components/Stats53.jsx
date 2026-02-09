"use client";

import React from "react";

export function Stats53() {
  return (
    <section className="bg-[#fcfcfc] py-20 lg:py-24 px-6">
      <div className="container max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="text-[#2db074] font-bold uppercase tracking-[0.2em] text-[14px] mb-4">
              Our Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight">
              What we've built together
            </h2>
          </div>
          <div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Since our inception, we've worked with businesses across multiple industries. Our clients see an average
              240% increase in qualified leads within the first year. We maintain exceptional client satisfaction because we deliver real, measurable results.
            </p>
            <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all cursor-pointer">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Stat 1 */}
          <div className="bg-white rounded-[15px] p-8 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1e40af] to-[#107b61] rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <p className="text-5xl font-bold text-[#0f172a] mb-2">50+</p>
            <h3 className="text-slate-600 font-semibold">Projects Delivered</h3>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-[15px] p-8 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#27b170] to-[#22c55e] rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
            </div>
            <p className="text-5xl font-bold text-[#0f172a] mb-2">240%</p>
            <h3 className="text-slate-600 font-semibold">Average ROI Growth</h3>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-[15px] p-8 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1e40af] to-[#107b61] rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <p className="text-5xl font-bold text-[#0f172a] mb-2">98%</p>
            <h3 className="text-slate-600 font-semibold">Client Satisfaction</h3>
          </div>

          {/* Stat 4 */}
          <div className="bg-white rounded-[15px] p-8 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#27b170] to-[#22c55e] rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <p className="text-5xl font-bold text-[#0f172a] mb-2">5+</p>
            <h3 className="text-slate-600 font-semibold">Years Experience</h3>
          </div>

        </div>

      </div>
    </section>
  );
}
