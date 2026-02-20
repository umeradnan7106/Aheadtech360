"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout370() {
  return (
    <section id="relume" className="bg-white px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Services</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
              Three pillars of growth
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Everything your business needs to compete and win
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="https://www.taboola.com/wp-content/uploads-neo/2025/04/best-performance-marketing-software-scaled.jpg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#2db074]">Marketing</p>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                    Performance marketing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">SEO, paid ads, email, and conversion optimization</p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                    Explore
                    <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="https://timpeter.com/wp-content/uploads/2020/08/svc-digitalmktg.jpg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#2db074]">Marketing</p>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                    Performance marketing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">SEO, paid ads, email, and conversion optimization</p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                    Explore
                    <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="https://i0.wp.com/execusense.org/wp-content/uploads/2023/02/What-Does-a-Digital-Strategy-Consultant-Do-1.png?fit=1200%2C1200&ssl=1"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#2db074]">Strategy</p>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                    Digital strategy and consulting
                  </h3>
                  <p className="text-slate-600 leading-relaxed">Roadmaps, automation, and technology integration</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                    Explore
                    <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
