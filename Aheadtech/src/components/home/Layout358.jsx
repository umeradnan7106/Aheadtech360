"use client";
import { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout358() {
  return (
    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container">
    //     <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
    //       <div className="mx-auto max-w-lg text-center">
    //         <p className="mb-3 font-semibold md:mb-4">Certified</p>
    //         <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
    //           Built on proven expertise
    //         </h2>
    //         <p className="md:text-md">
    //           Shopify Certified Partner with deep expertise across the platforms
    //           that matter
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid auto-cols-fr grid-cols-1 border border-border-primary md:grid-cols-2">
    //       <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
    //         <div>
    //           <p className="mb-2 text-sm font-semibold">Trust</p>
    //           <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
    //             Meta and Google Ads mastery
    //           </h3>
    //           <p>
    //             We run paid campaigns that convert. Our team knows the
    //             algorithms, the audiences, and the strategies that drive real
    //             results.
    //           </p>
    //         </div>
    //         <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
    //           <Button title="Learn" variant="secondary">
    //             Learn
    //           </Button>
    //           <Button
    //             title="Arrow"
    //             variant="link"
    //             size="link"
    //             iconRight={<RxChevronRight />}
    //           >
    //             Arrow
    //           </Button>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center">
    //         <img
    //           src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //           className="size-full object-cover"
    //           alt="Relume placeholder image"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section is="relume" className="bg-[#fcfcfc] py-20 lg:py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-16">
          <p className="text-[#2db074] font-bold uppercase tracking-[0.2em] text-[16px] mb-4">
            Certified
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
            Built on proven expertise
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Shopify Certified Partner with deep expertise across the platforms that matter most for your growth.
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="bg-white rounded-[45px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Content Side */}
            <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 bg-[aliceblue]">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[14px] font-bold uppercase tracking-widest text-slate-400">
                  Trust & Performance
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-[#0f172a] leading-[1.1] mb-6">
                Meta and Google <br /> Ads mastery
              </h3>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
                We run paid campaigns that convert. Our team knows the algorithms, the audiences, and the creative strategies that drive real, measurable ROI.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/10 cursor-pointer">
                  Learn more
                </button>
                <a href="#" className="inline-flex items-center gap-2 text-[#1f3a7a] font-bold group cursor-pointer">
                  View Case Studies
                  <svg 
                    width="18" height="14" viewBox="0 0 18 14" fill="none" 
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Marketing Analytics Dashboard"
              />
              
              {/* Floating Certification Badge (Glassmorphism) */}
               <div className="absolute top-8 right-8 bg-white/30 backdrop-blur-xl border border-white/40 p-5 rounded-3xl shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-[#107b61] rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-80">Certified</p>
                  <p className="text-white font-bold text-sm">Shopify Plus Partner</p>
                </div>
              </div> 

              {/* Bottom Decorative Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
