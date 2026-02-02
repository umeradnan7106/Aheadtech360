"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header84() {
  return (
    
    // Gemini
    <section className="bg-[#fcfcfc] py-16 lg:py-16 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[14px] font-bold tracking-widest uppercase text-slate-800">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                High-Performance Marketing
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-8">
              Grow your <br /> 
              business <br /> 
              with <span className="bg-gradient-to-r from-[#1e40af] via-[#107b61] to-[#22c55e] bg-clip-text text-transparent">proven <br /> strategies.</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 max-w-md leading-relaxed mb-10">
              We help small and medium businesses generate more leads and sales through performance marketing, web development, and digital strategy.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#1a2e5c] transition-all cursor-pointer">
                Free Audit 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="bg-white border border-gray-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all cursor-pointer">
                Book a Call
              </button>
            </div>
          </div>

          {/* Right Image/Card Section */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden bg-[#e5e7eb] aspect-[4/5] lg:aspect-square flex items-end justify-center relative shadow-sm">
              {/* Main Illustration Placeholder */}
              <img 
                src="/img/hero_image.jpg" 
                alt="Team working"
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              />
              
              {/* Glassmorphism Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-3xl flex items-center gap-4">
                <div className="bg-[#1f3a7a] p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">240% Growth</h4>
                  <p className="text-white/80 text-sm">Average client ROI in Year 1</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  

  // CLAUDE
    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 w-full bg-gray-50">
    //   <div className="container max-w-7xl mx-auto">
    //     <div className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    //       <div className="flex flex-col justify-center p-8 md:p-12">
    //         {/* Badge */}
    //         <div className="inline-flex items-center gap-2 mb-6 w-fit">
    //           <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
    //           <span className="text-xs font-semibold tracking-wider uppercase text-gray-700">
    //             HIGH-PERFORMANCE MARKETING
    //           </span>
    //         </div>

    //         {/* Heading with gradient */}
    //         <h1 className="mb-5 text-5xl font-bold leading-tight md:mb-6 md:text-6xl lg:text-7xl">
    //           Grow your business with{" "}
    //           <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-600 bg-clip-text text-transparent">
    //             proven strategies.
    //           </span>
    //         </h1>

    //         <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    //           Generic Growth Partners helps US small and medium businesses
    //           generate more leads and sales through performance marketing, web
    //           development, and digital strategy. We're your long-term growth
    //           partner, not a low-cost agency.
    //         </p>

    //         <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
    //           <Button 
    //             title="Audit" 
    //             variant="primary"
    //             className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
    //           >
    //             Free Audit
    //             <svg 
    //               xmlns="http://www.w3.org/2000/svg" 
    //               width="16" 
    //               height="16" 
    //               viewBox="0 0 24 24" 
    //               fill="none" 
    //               stroke="currentColor" 
    //               strokeWidth="2" 
    //               strokeLinecap="round" 
    //               strokeLinejoin="round"
    //             >
    //               <line x1="5" y1="12" x2="19" y2="12"></line>
    //               <polyline points="12 5 19 12 12 19"></polyline>
    //             </svg>
    //           </Button>
    //           <Button 
    //             title="Call" 
    //             variant="secondary"
    //             className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300"
    //           >
    //             Book a Call
    //           </Button>
    //         </div>
    //       </div>

    //       <div className="flex items-center justify-center p-8 md:p-12 lg:p-0">
    //         {/* Image container with rounded corners and shadow */}
    //         <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
    //           {/* Background gradient placeholder */}
    //           <div className="aspect-[4/3] w-full bg-gradient-to-br from-gray-300 via-gray-200 to-blue-100 flex items-center justify-center relative">
                
    //             {/* Meeting illustration - simplified silhouettes */}
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <div className="w-4/5 h-3/5 relative">
    //                 {/* Table */}
    //                 <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gray-400/40 rounded-full"></div>
                    
    //                 {/* Person 1 - Left */}
    //                 <div className="absolute bottom-1/3 left-[15%] flex flex-col items-center">
    //                   <div className="w-12 h-16 bg-gray-600 rounded-t-full"></div>
    //                   <div className="w-16 h-20 bg-gray-500 rounded-b-3xl -mt-2"></div>
    //                 </div>
                    
    //                 {/* Person 2 - Left Center */}
    //                 <div className="absolute bottom-1/3 left-[35%] flex flex-col items-center">
    //                   <div className="w-12 h-16 bg-blue-900 rounded-t-full"></div>
    //                   <div className="w-16 h-20 bg-blue-800 rounded-b-3xl -mt-2"></div>
    //                 </div>
                    
    //                 {/* Person 3 - Right Center */}
    //                 <div className="absolute bottom-1/3 right-[35%] flex flex-col items-center">
    //                   <div className="w-12 h-16 bg-gray-600 rounded-t-full"></div>
    //                   <div className="w-16 h-20 bg-gray-500 rounded-b-3xl -mt-2"></div>
    //                 </div>
                    
    //                 {/* Person 4 - Right */}
    //                 <div className="absolute bottom-1/3 right-[15%] flex flex-col items-center">
    //                   <div className="w-12 h-16 bg-blue-900 rounded-t-full"></div>
    //                   <div className="w-16 h-20 bg-blue-800 rounded-b-3xl -mt-2"></div>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Stats Badge - positioned at bottom left */}
    //             <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[280px]">
    //               <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
    //                 <svg 
    //                   xmlns="http://www.w3.org/2000/svg" 
    //                   width="24" 
    //                   height="24" 
    //                   viewBox="0 0 24 24" 
    //                   fill="none" 
    //                   stroke="white" 
    //                   strokeWidth="2.5" 
    //                   strokeLinecap="round" 
    //                   strokeLinejoin="round"
    //                 >
    //                   <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    //                   <polyline points="16 7 22 7 22 13"></polyline>
    //                 </svg>
    //               </div>
    //               <div>
    //                 <div className="text-xl font-bold text-gray-900">240% Growth</div>
    //                 <div className="text-sm text-gray-600">Average client ROI in Year 1</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>



    

  );
}
