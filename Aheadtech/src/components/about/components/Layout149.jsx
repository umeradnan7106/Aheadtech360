"use client";

import React from "react";

export function Layout149() {
  return (
    <section className="bg-white py-20 lg:py-24 px-6">
      <div className="container max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#2db074] font-bold uppercase tracking-[0.2em] text-[14px] mb-4">
            Our Foundation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight max-w-3xl mx-auto">
            Built by experts who understand what actually works
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            AheadTech360 started with a simple mission: help businesses succeed online without wasting time or money.
            We built this agency on one principle—your growth matters more than anything else. Every strategy we develop,
            every campaign we run, every solution we build is measured against one thing: does it generate real results?
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[15px] p-8 border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#1f3a7a] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Results-Driven</h3>
            <p className="text-slate-600 leading-relaxed">
              We focus on measurable outcomes that directly impact your bottom line—more leads, more sales, more growth.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[15px] p-8 border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#27b170] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Fast Execution</h3>
            <p className="text-slate-600 leading-relaxed">
              Speed matters. We deliver projects quickly without compromising quality, so you can start seeing results sooner.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[15px] p-8 border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#1f3a7a] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Transparent Pricing</h3>
            <p className="text-slate-600 leading-relaxed">
              No hidden fees, no surprises. You'll know exactly what you're paying for and why it's worth every penny.
            </p>
          </div>

        </div>

        {/* Bottom Image */}
        <div className="rounded-[15px] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-[400px] object-cover"
            alt="Team collaboration"
          />
        </div>

      </div>
    </section>
  );
}
