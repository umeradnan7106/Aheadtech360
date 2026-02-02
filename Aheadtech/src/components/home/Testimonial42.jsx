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
      quote: "They didn't just run ads—they understood our business and built a system that actually works.",
      author: "Sarah Mitchell",
      role: "Owner, local services",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "Our sales doubled in six months. The transparency and communication made all the difference.",
      author: "James Rodriguez",
      role: "CEO, ecommerce brand",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "We finally have a partner who treats our budget like their own. The results speak for themselves.",
      author: "Michelle Chen",
      role: "Founder, fitness coaching",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
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
              <blockquote className="text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight mb-10 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                <div className="relative">
                   {/* Modern Rounded Avatar */}
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    alt={testimonials[activeIndex].author}
                  />
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


    // <section
    //   id="relume"
    //   className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    // >
    //   <div className="container">
    //     <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
    //       <div className="w-full max-w-md lg:mb-24">
    //         <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
    //           Real results
    //         </h2>
    //         <p className="md:text-md">From businesses like yours</p>
    //       </div>
    //       <Carousel
    //         setApi={carousel.setApi}
    //         opts={{ loop: true, align: "start" }}
    //         className="overflow-hidden"
    //       >
    //         <CarouselContent>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "They didn't just run ads—they understood our business and
    //                 built a system that actually works."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">Sarah Mitchell</p>
    //                   <p>Owner, local services</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "Our sales doubled in six months. The transparency and
    //                 communication made all the difference."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">James Rodriguez</p>
    //                   <p>CEO, ecommerce brand</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "We finally have a partner who treats our budget like their
    //                 own. The results speak for themselves."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">Michelle Chen</p>
    //                   <p>Founder, fitness coaching</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "They built our website and ran our campaigns. Everything
    //                 works together seamlessly."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">David Thompson</p>
    //                   <p>Owner, print business</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "The audit alone was worth it. They showed us exactly where
    //                 we were losing money."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">Lisa Anderson</p>
    //                   <p>Manager, retail brand</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "Working with them feels like having an in-house marketing
    //                 team without the overhead."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">Marcus Johnson</p>
    //                   <p>Director, clinic network</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //           <CarouselItem className="basis-full">
    //             <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    //               <div className="mb-5 flex md:mb-6">
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //                 <BiSolidStar className="size-6" />
    //               </div>
    //               <blockquote className="md:text-md">
    //                 "They ask the right questions and deliver results. No fluff,
    //                 just real growth."
    //               </blockquote>
    //               <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
    //                 <div>
    //                   <img
    //                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    //                     alt="Testimonial avatar 1"
    //                     className="size-12 min-h-12 min-w-12 rounded-full object-cover"
    //                   />
    //                 </div>
    //                 <div>
    //                   <p className="font-semibold">Rachel Green</p>
    //                   <p>Owner, fashion brand</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </CarouselItem>
    //         </CarouselContent>
    //         <div className="mt-12 flex items-center justify-between">
    //           <div className="mt-5 flex w-full items-start justify-start">
    //             <button
    //               onClick={carousel.handleDotClick(0)}
    //               className={carousel.dotClassName(0)}
    //             />
    //             <button
    //               onClick={carousel.handleDotClick(1)}
    //               className={carousel.dotClassName(1)}
    //             />
    //             <button
    //               onClick={carousel.handleDotClick(2)}
    //               className={carousel.dotClassName(2)}
    //             />
    //             <button
    //               onClick={carousel.handleDotClick(3)}
    //               className={carousel.dotClassName(3)}
    //             />
    //             <button
    //               onClick={carousel.handleDotClick(4)}
    //               className={carousel.dotClassName(4)}
    //             />
    //             <button
    //               onClick={carousel.handleDotClick(5)}
    //               className={carousel.dotClassName(5)}
    //             />
    //             <button
    //               onClick={carousel.handleDotClick(6)}
    //               className={carousel.dotClassName(6)}
    //             />
    //           </div>
    //           <div className="flex items-end justify-end gap-2 md:gap-4">
    //             <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
    //             <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
    //           </div>
    //         </div>
    //       </Carousel>
    //     </div>
    //   </div>
    // </section>
  );
}
