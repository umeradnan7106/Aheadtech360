"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
  return (
    <section id="relume" className="bg-white px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Why</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
              What sets us apart
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We're built for businesses serious about growth
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#2db074]">Growth</p>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                    Results-driven approach
                  </h3>
                  <p className="text-slate-600 leading-relaxed">Every decision tied to revenue and measurable outcomes</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                    Learn
                    <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/683db14b158de878953aef5c/e7c9d090-5dc8-4d3b-a94b-3cfe6c60683a/is-adr-a-result-driven-approach-for-business-disputes.png"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#2db074]">Custom</p>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                    Tailored solutions
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    No templates, no shortcuts—strategy built for your business
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                    Learn
                    <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#2db074]">Custom</p>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                    Tailored solutions
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    No templates, no shortcuts—strategy built for your business
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                    Learn
                    <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
