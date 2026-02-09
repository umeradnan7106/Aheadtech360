// "use client";

// import { Button } from "@relume_io/relume-ui";
// import React from "react";
// import { RxChevronRight } from "react-icons/rx";

// export function Logo4() {
//   return (
//     <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
//       <div className="container">
//         <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
//           <div>
//             <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
//               Recognized by the platforms that matter
//             </h2>
//             <p className="md:text-md">
//               We've earned certifications and partnerships with the tools our
//               clients depend on most
//             </p>
//             <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
//               <Button title="Learn" variant="secondary">
//                 Learn
//               </Button>
//               <Button
//                 title="Arrow"
//                 variant="link"
//                 size="link"
//                 iconRight={<RxChevronRight />}
//               >
//                 Arrow
//               </Button>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//             <div className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
//               <img
//                 src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
//                 alt="Relume placeholder image"
//                 className="max-h-12 md:max-h-14"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Logo4() {
  const logos = [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Google Partner" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Meta Business Partner" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "HubSpot Certified" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Shopify Partner" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "WordPress Expert" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Semrush Certified" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Mailchimp Partner" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Salesforce Certified" },
  ];

  return (
    <section className="bg-white px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24">
          
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                Recognized by the platforms that matter
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                We've earned certifications and partnerships with the tools our
                clients depend on most
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-gradient-to-r from-[#1f3a7a] to-[#2db074] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                Learn
              </button>
              <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                Arrow
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right - Logo Grid with Modern Design */}
          <div className="grid grid-cols-2 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-slate-100 hover:border-[#2db074]/30 overflow-hidden"
              >
                {/* Decorative Background Circle */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#2db074]/10 to-[#1f3a7a]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 md:max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f3a7a]/5 to-[#2db074]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}