"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";



export function Layout522() {

  const services = [
    {
      title: "Drive traffic and conversions",
      description: "SEO, Google Ads, Meta Ads, and CRO to reach the right customers at the right time.",
      tag: "Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      isWide: true,
    },
    {
      title: "Build your digital foundation",
      description: "WordPress, Shopify, and custom development built for speed.",
      tag: "Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      isWide: false,
    },
    {
      title: "Chart your growth path",
      description: "Digital strategy and automation tailored to your goals.",
      tag: "Strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      isWide: false,
    }
  ];



  return (
    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container">
    //     <div className="mb-12 md:mb-18 lg:mb-20">
    //       <div className="mx-auto max-w-lg text-center">
    //         <p className="mb-3 font-semibold md:mb-4">Services</p>
    //         <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
    //           What we do for you
    //         </h2>
    //         <p className="md:text-md">
    //           Everything you need to scale your business
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
    //       <div className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
    //         <div className="absolute inset-0 z-0">
    //           <div className="absolute inset-0 bg-black/50" />
    //           <img
    //             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //             className="size-full object-cover"
    //             alt="Relume placeholder image"
    //           />
    //         </div>
    //         <div className="relative z-10">
    //           <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
    //             Marketing
    //           </p>
    //           <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
    //             Drive traffic and conversions
    //           </h3>
    //           <p className="text-text-alternative">
    //             SEO, Google Ads, Meta Ads, email marketing, and CRO to reach the
    //             right customers at the right time.
    //           </p>
    //           <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
    //             <Button variant="secondary-alt">Explore</Button>
    //             <Button
    //               iconRight={<RxChevronRight />}
    //               variant="link-alt"
    //               size="link"
    //             >
    //               Arrow
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
    //         <div className="absolute inset-0 z-0">
    //           <div className="absolute inset-0 bg-black/50" />
    //           <img
    //             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //             className="size-full object-cover"
    //             alt="Relume placeholder image"
    //           />
    //         </div>
    //         <div className="relative z-10 flex flex-1 flex-col justify-between">
    //           <div className="mb-3 md:mb-4">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
    //               className="size-12"
    //               alt="Relume logo"
    //             />
    //           </div>
    //           <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
    //             Build your digital foundation
    //           </h3>
    //           <p className="text-text-alternative">
    //             WordPress, Shopify, BigCommerce, and custom development built
    //             for growth.
    //           </p>
    //           <div className="mt-5 flex items-center md:mt-6">
    //             <Button
    //               iconRight={<RxChevronRight />}
    //               variant="link-alt"
    //               size="link"
    //             >
    //               Arrow
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
    //         <div className="absolute inset-0 z-0">
    //           <div className="absolute inset-0 bg-black/50" />
    //           <img
    //             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //             className="size-full object-cover"
    //             alt="Relume placeholder image"
    //           />
    //         </div>
    //         <div className="relative z-10 flex flex-1 flex-col justify-between">
    //           <div className="mb-3 md:mb-4">
    //             <img
    //               src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
    //               className="size-12"
    //               alt="Relume logo"
    //             />
    //           </div>
    //           <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
    //             Chart your growth path
    //           </h3>
    //           <p className="text-text-alternative">
    //             Digital strategy, marketing automation, and technology
    //             integration tailored to your goals.
    //           </p>
    //           <div className="mt-5 flex items-center md:mt-6">
    //             <Button
    //               iconRight={<RxChevronRight />}
    //               variant="link-alt"
    //               size="link"
    //             >
    //               Arrow
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>




    <section id="relume" className="bg-white px-6 py-20 lg:py-20 font-sans">
      <div className="container max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <p className="text-emerald-500 text-center font-bold uppercase tracking-[0.2em] text-[16px] mb-4">
            Services
          </p>
          <h2 className="text-4xl text-center md:text-6xl font-bold text-[#0f172a] tracking-tight">
            What we do for you
          </h2>
          <p className="text-center font-bold tracking-[0.2em] text-[16px] mb-4 pt-4">
            Everything you need to scale your business
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-[35px] h-100 flex flex-col justify-end p-8 md:p-8 transition-all duration-500 hover:shadow-2xl ${
                service.isWide ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content Area */}
              <div className="relative z-10">
                {/* Service Tag */}
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/30">
                  {service.tag}
                </span>

                <h3 className={`font-bold text-white leading-tight mb-4 ${service.isWide ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
                  {service.title}
                </h3>
                
                <p className="text-white/80 text-sm md:text-base mb-8 max-w-sm">
                  {service.description}
                </p>

                {/* Arrow Link - Inline SVG */}
                <a href="#" className="inline-flex items-center gap-2 text-white font-bold group/link">
                  <span className="text-sm uppercase tracking-wider">Explore</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all group-hover/link:bg-[#22c55e] group-hover/link:translate-x-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>





    // <section className="bg-white px-6 py-20 lg:py-32">
    //   <div className="container max-w-7xl mx-auto">
        
    //     {/* Header Section */}
    //     <div className="text-center mb-16 lg:mb-24">
    //       <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">
    //         Our Expertise
    //       </p>
    //       <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] mb-6">
    //         What we do for you
    //       </h2>
    //       <p className="text-slate-500 text-lg max-w-2xl mx-auto">
    //         Comprehensive growth solutions tailored to your business goals.
    //       </p>
    //     </div>

    //     {/* Services Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {services.map((service, index) => (
    //         <div 
    //           key={index} 
    //           className="group bg-white rounded-4xl p-8 lg:p-10 shadow-sm border border-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-start"
    //         >
    //           {/* Icon Container */}
    //           <div className={`w-14 h-14 ${service.iconBg} ${service.iconColor} rounded-2xl flex items-center justify-center mb-10`}>
    //             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               {service.icon}
    //             </svg>
    //           </div>

    //           {/* Text Content */}
    //           <h3 className="text-2xl font-bold text-[#0f172a] mb-4 leading-tight">
    //             {service.title}
    //           </h3>
    //           <p className="text-slate-500 mb-10 leading-relaxed text-[15px]">
    //             {service.description}
    //           </p>

    //           {/* Action Link */}
    //           <div className="mt-auto">
    //             <a 
    //               href="#" 
    //               className="inline-flex items-center gap-2 text-[#213a73] font-bold text-sm hover:gap-3 transition-all"
    //             >
    //               Learn more

    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //   </div>
    // </section>
  );
}
