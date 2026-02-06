"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial42() {
  const carousel = useCarousel();


  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Ikrash built TrashedPunk.com from a napkin doodle into a live store that doesn't glitch when it matters. Flux theme, Printful hooks, custom camo uploads-check. SEO bones so Google sees us, CRO heatmaps so customers actually buy, plus every tweak, audit, and 3 a.m. emergency fix without whining. He's got the whole stack: store setup, theme tweaks, SEO, CRO, performance, integrations, troubleshooting-you name it, he shipped it. Fast, no fluff, 100% ownership. If your site needs to crawl out of the code and wear web traffic, this guy's the dev. 10/10-hire him yesterday.",
      author: " Donnie Todd",
      role: "Owner",
      // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "I had an excellent experience working with Aheadtech360. Their team is professional, knowledgeable, and truly dedicated to providing top-quality service. Communication was clear and consistent throughout, and they made the process easy to understand from start to finish. I especially appreciated their attention to detail and their commitment to making sure everything was done the right way. Highly recommend Aheadtech360 to anyone looking for reliable and innovative tech solutions.",
      author: "The MACP Store",
      role: "Ecommerce brand",
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "There are 2 things that I see in any organization that I work with 1) work ethics 2) Quality of work . Ahead tech360 excels in both . They created my 2 websites and I highly recommend them.",
      author: "Ahmed Amin",
      role: "Founder",
      // avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "These guys are really good at their work! They handled our website development smoothly and even provided valuable consultations to improve our original idea. I’m very satisfied with their service, and all my future websites will definitely be developed by them",
      author: "Maniyas",
      role: "CEO & Founder",
      // avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "Excellent service from team AheadTech360, these guys are really clued on and know their stuff, if I was to give them more than 5 stars, I would, these guys deserve at least 10 stars, would highly reccomend them",
      author: "Khuram Ahmed",
      role: "Entrepreneur",
      // avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (


    <section className="bg-[#fcfcfc] py-20 lg:py-32 px-6 font-sans overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Header Section */}
          <div className="max-w-md">
            <p className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[14px] mb-4">
              Results
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
              Real growth <br /> from real <br /> businesses
            </h2>
            <p className="text-slate-500 text-lg">
              We're more than an agency. We're a long-term growth partner for US-based small and medium businesses.
            </p>
            
            {/* Custom Navigation Controls */}
            <div className="mt-12 flex gap-4">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-[#213a73] hover:text-white hover:border-[#213a73] transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-[#213a73] hover:text-white hover:border-[#213a73] transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="bg-white rounded-[15px] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-50 transition-all duration-500">
              {/* Star Rating SVG */}
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[20px] md:text-[20px] font-bold text-[#0f172a] leading-tight mb-10 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                <div className="relative">
                   {/* Modern Rounded Avatar */}
                  {/* <img 
                    src={testimonials[activeIndex].avatar} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    alt={testimonials[activeIndex].author}
                  /> */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#0f172a]">{testimonials[activeIndex].author}</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}