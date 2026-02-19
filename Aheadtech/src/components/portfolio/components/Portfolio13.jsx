"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio13() {
  return (
    <section id="relume" className="bg-white px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Portfolio</p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
            Work we're proud of
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Campaigns and websites built for real growth across every industry
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
            <div className="overflow-hidden">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-6 py-6">
              <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                <a href="#" className="hover:text-[#1f3a7a] transition-colors">Coastal Apparel Co</a>
              </h3>
              <p className="text-slate-600 leading-relaxed">Rebuilt their Shopify store and launched Meta Ads strategy</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Ecommerce
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Paid ads
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Web design
                  </a>
                </li>
              </ul>
              <a href="#" className="mt-6 text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                View project
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
          <article className="border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
            <div className="overflow-hidden">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-6 py-6">
              <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                <a href="#" className="hover:text-[#1f3a7a] transition-colors">Premier Plumbing</a>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                SEO and local optimization brought consistent qualified leads
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Local services
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    SEO
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Web design
                  </a>
                </li>
              </ul>
              <a href="#" className="mt-6 text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                View project
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
          <article className="border border-slate-200 rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
            <div className="overflow-hidden">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-6 py-6">
              <h3 className="mb-3 text-xl font-bold md:text-2xl text-[#0f172a]">
                <a href="#" className="hover:text-[#1f3a7a] transition-colors">Zenith Fitness</a>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Email marketing and CRO doubled their membership conversions
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Fitness
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    Email marketing
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-[#1f3a7a] hover:text-white transition-all"
                  >
                    CRO
                  </a>
                </li>
              </ul>
              <a href="#" className="mt-6 text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                View project
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        </div>
        <div className="mt-16 flex justify-center md:mt-20">
          <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/20 cursor-pointer">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
