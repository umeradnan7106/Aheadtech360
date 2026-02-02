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
              className={`relative group overflow-hidden rounded-[15px] h-100 flex flex-col justify-end p-8 md:p-8 transition-all duration-500 hover:shadow-2xl ${
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
                
                {/* Black Overlay with 0.5 opacity */}
                <div className="absolute inset-0 bg-black opacity-50" />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content Area */}
              <div className="relative z-10">
                {/* Service Tag */}
                <span className="inline-block bg-[#27B170] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border ">
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
  );
}