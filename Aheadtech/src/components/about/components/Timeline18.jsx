"use client";

import React from "react";

export function Timeline18() {
  const timelineData = [
    {
      year: "2020",
      title: "The Beginning",
      description: "AheadTech360 was founded with one mission: deliver exceptional digital solutions that drive real business growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      year: "2021",
      title: "First Clients",
      description: "Launched our first projects and built a foundation of trust with early clients who believed in our vision.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description: "Expanded our services and team. Delivered 30+ successful projects across multiple industries and platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      )
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Integrated cutting-edge AI and automation tools, helping clients achieve 240% average ROI growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      year: "2026",
      title: "Today",
      description: "Serving 50+ businesses worldwide with a 98% client satisfaction rate. Building the future of digital excellence.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-24 px-6">
      <div className="container max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#2db074] font-bold uppercase tracking-[0.2em] text-[14px] mb-4">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight max-w-3xl mx-auto">
            How we built this from the ground up
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We started small. We stayed focused. We grew because our clients grew. Every milestone here is built on real results and lasting relationships.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1e40af] via-[#107b61] to-[#27b170]"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-[15px] p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1e40af] to-[#27b170] rounded-2xl flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-[#1f3a7a]">{item.year}</h3>
                    </div>
                    <h4 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#1f3a7a] rounded-full z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
