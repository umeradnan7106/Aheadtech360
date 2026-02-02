"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout32() {

  const benefits = [
    {
      title: "More qualified leads",
      description: "We attract the right customers, not just traffic. Your pipeline gets stronger every month.",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      iconImage: "/img/qualifying.png" // Aap apni image ka naam yahan dalein
    },
    {
      title: "Sales that scale",
      description: "Growth isn't guesswork. We optimize every step of your funnel to turn visitors into paying customers.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      iconImage: "/img/increase.png" // Aap apni image ka naam yahan dalein
    },
    {
      title: "Peace of mind",
      description: "You get transparent reporting, clear communication, and a partner who actually cares about your success.",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      iconImage: "/img/zone.png" // Aap apni image ka naam yahan dalein
    }
  ];

  return (
    <section id="relume" className="bg-white py-20 lg:py-20 px-6 font-sans">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div>
            <div className="mb-10">
              <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[14px]">
                Our Outcomes
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-4 mb-6 tracking-tight leading-[1.1]">
                Real growth for <br /> ambitious businesses
              </h2>
            </div>

            <div className="space-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className={`shrink-0 w-14 h-14 ${benefit.iconBg} rounded-[5px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <img 
                      src={benefit.iconImage} 
                      alt={benefit.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed max-w-md">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button className="bg-[#213a73] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/10">
                Free Audit
              </button>
              <a href="#" className="inline-flex items-center gap-2 text-[#213a73] font-bold group">
                How we work
                <svg 
                    width="18" height="14" viewBox="0 0 18 14" fill="none" 
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-0 rounded-[15px] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Growth Strategy Meeting"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


  // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container">
    //     <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
    //       <div>
    //         <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
    //           <div className="flex self-start">
    //             <div className="mr-6 flex-none self-start">
    //               <img
    //                 src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //                 className="size-12"
    //                 alt="Relume logo 1"
    //               />
    //             </div>
    //             <div>
    //               <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
    //                 More qualified leads
    //               </h1>
    //               <p>
    //                 We attract the right customers, not just traffic. Your
    //                 pipeline gets stronger every month.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex self-start">
    //             <div className="mr-6 flex-none self-start">
    //               <img
    //                 src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //                 className="size-12"
    //                 alt="Relume logo 1"
    //               />
    //             </div>
    //             <div>
    //               <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
    //                 Sales that scale
    //               </h1>
    //               <p>
    //                 Growth isn't guesswork. We optimize every step of your
    //                 funnel to turn visitors into paying customers.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex self-start">
    //             <div className="mr-6 flex-none self-start">
    //               <img
    //                 src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //                 className="size-12"
    //                 alt="Relume logo 1"
    //               />
    //             </div>
    //             <div>
    //               <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
    //                 Peace of mind
    //               </h1>
    //               <p>
    //                 You get transparent reporting, clear communication, and a
    //                 partner who actually cares about your success.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
    //           <Button title="Audit" variant="secondary">
    //             Audit
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
    //       <div>
    //         <img
    //           src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //           className="w-full object-cover"
    //           alt="Relume placeholder image"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
//   );
// }
