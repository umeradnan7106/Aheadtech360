"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {

  const steps = [
    {
      number: "01",
      title: "Understand your business",
      description:
        "We dig into your market, your competitors, and your goals. No shortcuts, no assumptions.",
      iconBg: "bg-slate-100",
      image: "/img/cooperation.png", // png / jpg
      alt: "Business research",
    },
    {
      number: "02",
      title: "Build your strategy",
      description:
        "Based on what we learn, we create a focused plan that targets your ideal customers and maximizes ROI.",
      iconBg: "bg-emerald-50",
      image: "/img/brand-strategy.png",
      alt: "Strategy planning",
    },
    {
      number: "03",
      title: "Execute with precision",
      description:
        "Our team launches campaigns and builds assets. You see real results, not just activity.",
      iconBg: "bg-blue-50",
      image: "/img/process.png",
      alt: "Execution process",
    },
    {
      number: "04",
      title: "Optimize and scale",
      description:
        "We track everything and refine your approach. Growth compounds when you know what works.",
      iconBg: "bg-indigo-50",
      image: "/img/web-management.png",
      alt: "Growth optimization",
    },
  ];

  return (


    <section id="relume" className="bg-[#0000000a] py-20 lg:py-20 px-6 font-sans">
      <div className="container max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[14px] mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
            How we build your <br className="hidden md:block" /> growth engine
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We start with a clear picture of where you are, then build a roadmap to get you where you need to be.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-[#1f3a7a] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Icon Container */}
                <div
                  className={`relative w-20 h-20 ${step.iconBg} rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-white`}
                >
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={36}
                    height={36}
                    className="object-contain"
                  />

                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#0f172a] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {step.number}
                  </span>
                </div>


                <h3 className="text-xl font-bold text-[#0f172a] mb-4 leading-snug px-4">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
          <button className="bg-[#1f3a7a] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/10">
            Book a Call
          </button>
          <a href="#" className="inline-flex items-center gap-2 text-[#1f3a7a] font-bold group">
            Free Audit
            <svg
              width="18" height="14" viewBox="0 0 18 14" fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>


    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container">
    //     <div className="flex flex-col items-start">
    //       <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
    //         <div>
    //           <p className="mb-3 text-center font-semibold md:mb-4">Process</p>
    //           <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
    //             How we build your growth engine
    //           </h2>
    //           <p className="text-center md:text-md">
    //             We start with a clear picture of where you are. Then we build a
    //             roadmap to get you where you need to be.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
    //         <div className="w-full">
    //           <div className="mb-5 flex justify-center md:mb-6">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //               className="size-12"
    //               alt="Relume logo 1"
    //             />
    //           </div>
    //           <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
    //             Step one: understand your business
    //           </h3>
    //           <p className="text-center">
    //             We dig into your market, your competitors, and your goals. No
    //             shortcuts, no assumptions.
    //           </p>
    //         </div>
    //         <div className="w-full">
    //           <div className="mb-5 flex justify-center md:mb-6">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //               className="size-12"
    //               alt="Relume logo 1"
    //             />
    //           </div>
    //           <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
    //             Step two: build your strategy
    //           </h3>
    //           <p className="text-center">
    //             Based on what we learn, we create a focused plan that targets
    //             your ideal customers and maximizes ROI.
    //           </p>
    //         </div>
    //         <div className="w-full">
    //           <div className="mb-5 flex justify-center md:mb-6">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //               className="size-12"
    //               alt="Relume logo 1"
    //             />
    //           </div>
    //           <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
    //             Step three: execute with precision
    //           </h3>
    //           <p className="text-center">
    //             Our team launches campaigns, builds assets, and optimizes every
    //             channel. You see results, not just activity.
    //           </p>
    //         </div>
    //         <div className="w-full">
    //           <div className="mb-5 flex justify-center md:mb-6">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //               className="size-12"
    //               alt="Relume logo 1"
    //             />
    //           </div>
    //           <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
    //             Step four: optimize and scale
    //           </h3>
    //           <p className="text-center">
    //             We track everything, test constantly, and refine your approach.
    //             Growth compounds when you know what works.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
    //         <Button title="Call" variant="secondary">
    //           Call
    //         </Button>
    //         <Button
    //           title="Arrow"
    //           variant="link"
    //           size="link"
    //           iconRight={<RxChevronRight />}
    //         >
    //           Arrow
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
