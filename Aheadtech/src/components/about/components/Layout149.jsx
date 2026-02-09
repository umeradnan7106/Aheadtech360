// "use client";

// import { Button } from "@relume_io/relume-ui";
// import React from "react";
// import { RxChevronRight } from "react-icons/rx";

// export function Layout149() {
//   return (
//     <section id="relume" className="bg-white px-6 py-16 md:py-24 lg:py-28">
//       <div className="container max-w-7xl mx-auto">
//         <div className="flex flex-col items-center">
//           <div className="mb-12 md:mb-16 lg:mb-20">
//             <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
//               <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Foundation</p>
//               <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
//                 Built by marketers who understand what actually works
//               </h2>
//               <p className="mb-8 text-lg md:text-xl text-slate-600 leading-relaxed">
//                 Generic Growth Partners started because we were tired of
//                 watching businesses waste money on marketing that didn't move
//                 the needle. We built this agency on a simple principle: your
//                 growth matters more than our billable hours. Every strategy we
//                 develop, every campaign we run, every dollar you spend is
//                 measured against one thing—does it generate real leads and real
//                 revenue?
//               </p>
//               <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
//                   alt="Webflow logo 1"
//                   className="max-h-14"
//                 />
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
//                   alt="Relume logo 1"
//                   className="max-h-14"
//                 />
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
//                   alt="Webflow logo 2"
//                   className="max-h-14"
//                 />
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
//                   alt="Relume logo 2"
//                   className="max-h-14"
//                 />
//               </div>
//               <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//                 <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all cursor-pointer">
//                   Learn
//                 </button>
//                 <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
//                   Arrow
//                   <RxChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="rounded-[15px] overflow-hidden shadow-lg">
//           <img
//             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
//             className="w-full h-full object-cover"
//             alt="Relume placeholder image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout149() {
  return (
    <section id="relume" className="bg-[#f5f5f5] px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div>
            <div className="mb-8">
              <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">
                Foundation
              </p>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
                Built by marketers who understand what actually works
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Generic Growth Partners started because we were tired of
                watching businesses waste money on marketing that didn't move
                the needle. We built this agency on a simple principle: your
                growth matters more than our billable hours. Every strategy we
                develop, every campaign we run, every dollar you spend is
                measured against one thing—does it generate real leads and real
                revenue?
              </p>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 1"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume logo 1"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 2"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume logo 2"
                className="max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/20 cursor-pointer">
                Learn
              </button>
              <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                Arrow
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="rounded-[15px] overflow-hidden shadow-2xl">
              <img
                src="/img/Rushton-Marketing-blog-post-featured.png"
                className="w-full h-full object-cover"
                alt="Marketing Team"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}