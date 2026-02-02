"use client";
import { useState } from "react";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing7() {

    const [isYearly, setIsYearly] = useState(false);

  return (
    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container max-w-lg">
    //     <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
    //       <p className="mb-3 font-semibold md:mb-4">Investment</p>
    //       <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
    //         Simple pricing
    //       </h1>
    //       <p className="md:text-md">
    //         We work with businesses investing $2,000 to $5,000+ monthly in
    //         growth. No surprises, no hidden fees.
    //       </p>
    //     </div>
    //     <Tabs defaultValue="monthly">
    //       <TabsList className="mx-auto mb-12 w-fit">
    //         <TabsTrigger value="monthly">Monthly</TabsTrigger>
    //         <TabsTrigger value="yearly">Yearly</TabsTrigger>
    //       </TabsList>
    //       <TabsContent
    //         value="monthly"
    //         className="container max-w-md data-[state=active]:animate-tabs"
    //       >
    //         <div className="h-full border border-border-primary px-6 py-8 md:p-8">
    //           <div className="rb-4 mb-4 flex flex-col items-end justify-end">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //               alt="Relume icon 1"
    //               className="size-12"
    //             />
    //           </div>
    //           <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
    //             $2,500
    //           </h3>
    //           <div className="my-8 h-px w-full shrink-0 bg-border" />
    //           <p>Includes</p>
    //           <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>SEO strategy and optimization</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>One paid ad channel managed</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Monthly reporting and strategy</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Email marketing setup</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Quarterly strategy calls</p>
    //             </div>
    //           </div>
    //           <Button title="Book call" className="w-full">
    //             Book call
    //           </Button>
    //         </div>
    //       </TabsContent>
    //       <TabsContent
    //         value="yearly"
    //         className="container max-w-md data-[state=active]:animate-tabs"
    //       >
    //         <div className="h-full border border-border-primary px-6 py-8 md:p-8">
    //           <div className="rb-4 mb-4 flex flex-col items-end justify-end">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
    //               alt="Relume icon 2"
    //               className="size-12"
    //             />
    //           </div>
    //           <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
    //             $4,500
    //           </h3>
    //           <p className="mt-2 font-medium">
    //             Most popular for serious growth
    //           </p>
    //           <div className="my-8 h-px w-full shrink-0 bg-border" />
    //           <p>Includes</p>
    //           <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Full SEO and content strategy</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Two paid ad channels managed</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>CRO and conversion optimization</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Advanced email marketing</p>
    //             </div>
    //             <div className="flex self-start">
    //               <div className="mr-4 flex-none self-start">
    //                 <BiCheck className="size-6" />
    //               </div>
    //               <p>Bi-weekly strategy reviews</p>
    //             </div>
    //           </div>
    //           <Button title="Book call" className="w-full">
    //             Book call
    //           </Button>
    //         </div>
    //       </TabsContent>
    //     </Tabs>
    //   </div>
    // </section>


    <section className="bg-white py-20 px-6 flex flex-col items-center font-sans">
      {/* Header */}
      <h2 className="text-[12px] md:text-2xl font-extrabold text-[#0f172a] text-center mb-10 tracking-tight">
        Investment
      </h2>
      <h2 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] text-center mb-10 tracking-tight">
        Simple Pricing
      </h2>
      <p className="text-[20px] pb-6">We work with businesses investing $2,000 to 5,000+ monthly in growth. No surprises, no hidden fees.</p>

      {/* Toggle Switch */}
      <div className="bg-[#e9eff6] p-1.5 rounded-full flex items-center mb-16 shadow-inner w-fit">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-8 py-3 rounded-full text-[15px] font-bold transition-all duration-200 ${
            !isYearly
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-8 py-3 rounded-full text-[15px] font-bold transition-all duration-200 ${
            isYearly
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Yearly <span className="opacity-60 font-medium">(Save 15%)</span>
        </button>
      </div>

      {/* Pricing Card */}
      <div className="relative w-full max-w-[600px]">
        {/* Floating Badge */}
        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#213a73] text-white text-[11px] font-black tracking-widest uppercase px-7 py-2.5 rounded-full border-[4px] border-white">
            Most Popular
          </span>
        </div>

        {/* Card Body */}
        <div className="bg-white rounded-[15px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-10 md:p-14">
          
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-slate-400 font-bold text-md uppercase tracking-[0.15em] mb-3">
                Growth Plan
              </p>
              <div className="flex items-baseline">
                <span className="text-6xl md:text-7xl font-bold text-[#0f172a]">
                  ${isYearly ? '2,125' : '2,500'}
                </span>
                <span className="text-slate-400 font-medium ml-2 text-xl">/mo</span>
              </div>
            </div>
            
            {/* Rocket SVG Gradient Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2d7a6a] to-[#10b981] flex items-center justify-center shadow-lg shadow-emerald-100">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-white fill-current" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.13 2.188c4.688 0 8.359 3.671 8.359 8.359 0 1.25-.262 2.441-.734 3.516l-3.234-3.234a.75.75 0 00-1.06 0l-.532.532a.75.75 0 000 1.06l3.234 3.234a8.292 8.292 0 01-3.516.734c-4.688 0-8.359-3.671-8.359-8.359 0-1.25.262-2.441.734-3.516l3.234 3.234a.75.75 0 001.06 0l.532-.532a.75.75 0 000-1.06L9.613 5.704a8.292 8.292 0 013.516-.734zM7.5 11.25a.75.75 0 100-1.5.75.75 0 000 1.5z" opacity=".4"/>
                <path d="M21.662 15.11a10.09 10.09 0 01-1.375 2.188l-1.406-1.406a8.292 8.292 0 001.219-1.938l1.562 1.156zM17.297 18.662a10.09 10.09 0 01-2.188 1.375l-1.156-1.562a8.292 8.292 0 001.938-1.219l1.406 1.406zM8.89 21.662a10.09 10.09 0 01-2.188-1.375l1.406-1.406a8.292 8.292 0 001.938 1.219l-1.156 1.562zM5.338 17.297a10.09 10.09 0 01-1.375-2.188l1.562-1.156a8.292 8.292 0 001.219 1.938l-1.406 1.406zM2.338 8.89a10.09 10.09 0 011.375-2.188l1.406 1.406a8.292 8.292 0 00-1.219 1.938L2.338 8.89zM6.703 5.338a10.09 10.09 0 012.188-1.375l1.156 1.562a8.292 8.292 0 00-1.938 1.219L6.703 5.338z" opacity=".4"/>
                <path fillRule="evenodd" d="M16.53 7.47a.75.75 0 010 1.06L10.06 15l-3.53-3.53a.75.75 0 111.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 011.06 0z" clipRule="evenodd" />
                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 18a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
              </svg>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-6 mb-14">
            {[
              "SEO strategy and optimization",
              "One paid ad channel managed",
              "Monthly reporting and strategy",
              "Email marketing setup",
              "Quarterly strategy calls"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-700 font-semibold text-[20px]">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-[2.5px] border-emerald-500 flex items-center justify-center">
                  {/* Inline Check SVG */}
                  <svg 
                    width="12" height="10" viewBox="0 0 12 10" fill="none" 
                    className="text-emerald-500 stroke-current" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 5L4.5 8.5L11 1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button className="w-full bg-[#1f3a7a] hover:bg-[#1a2e5c] text-white font-bold py-6 rounded-[28px] text-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-900/10 cursor-pointer">
            Book your audit
          </button>

          <p className="text-center text-slate-400 text-[15px] mt-8 italic">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
