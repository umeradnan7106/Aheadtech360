"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog34() {


  const stories = [
    {
      category: "Ecommerce",
      readTime: "8 min read",
      title: "How a fashion brand tripled online revenue",
      description: "From struggling with ad spend to building a predictable sales machine through SEO and paid ads.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "Local services",
      readTime: "6 min read",
      title: "Local service business booked 40 new clients",
      description: "We rebuilt their website and optimized their Google Ads. The results came fast and stayed consistent.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    },
    {
      category: "Fitness",
      readTime: "7 min read",
      title: "Fitness coach scaled to multiple locations",
      description: "Digital strategy and email marketing helped them grow from one location to three in under a year.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (


    <section id="relume" className="bg-[#0000000a] py-20 lg:py-20 px-6 font-sans">
      <div className="container max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-16">
          <p className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[14px] mb-4">
            Stories
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
            How we drive <br className="hidden md:block" /> real growth
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See what's possible when data-driven strategy meets relentless execution.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[45px] p-4 pb-12 border border-slate-50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-[32px] aspect-[4/3] mb-8">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Meta */}
              <div className="px-6">
                <div className="flex items-center gap-4 mb-5">
                  <span className="bg-slate-50 border border-slate-100 text-[#0f172a] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-slate-400 text-[11px] font-bold tracking-tight">
                    {story.readTime}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 leading-tight group-hover:text-[#1f3a7a] transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
                  {story.description}
                </p>

                {/* Arrow Link */}
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-[#1f3a7a] font-bold text-xs uppercase tracking-widest group/link">
                    Read more
                    <svg 
                      width="18" height="14" viewBox="0 0 18 14" fill="none" 
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-[#213a73] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/10">
            View all stories
          </button>
        </div>

      </div>
    </section>

    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container">
    //     <div className="mb-12 md:mb-18 lg:mb-20">
    //       <div className="mx-auto w-full max-w-lg text-center">
    //         <p className="mb-3 font-semibold md:mb-4">Stories</p>
    //         <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
    //           How we drive real growth
    //         </h1>
    //         <p className="md:text-md">
    //           See what's possible when strategy meets execution
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
    //       <div className="flex size-full flex-col items-start justify-start text-start">
    //         <a href="#" className="mb-6 w-full">
    //           <img
    //             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
    //             alt="Relume placeholder image 1"
    //             className="aspect-[3/2] size-full object-cover"
    //           />
    //         </a>
    //         <div className="rb-4 mb-4 flex w-full items-center justify-start">
    //           <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
    //             Ecommerce
    //           </p>
    //           <p className="inline text-sm font-semibold">8 min read</p>
    //         </div>
    //         <a className="mb-2 flex justify-start text-start" href="#">
    //           <h2 className="text-xl font-bold md:text-2xl">
    //             How a fashion brand tripled online revenue
    //           </h2>
    //         </a>
    //         <p>
    //           From struggling with ad spend to building a predictable sales
    //           machine through SEO and paid ads.
    //         </p>
    //         <Button
    //           title="Read more"
    //           variant="link"
    //           size="link"
    //           iconRight={<RxChevronRight />}
    //           className="mt-6 flex items-center justify-center gap-x-2"
    //         >
    //           Read more
    //         </Button>
    //       </div>
    //       <div className="flex size-full flex-col items-start justify-start text-start">
    //         <a href="#" className="mb-6 w-full">
    //           <img
    //             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
    //             alt="Relume placeholder image 1"
    //             className="aspect-[3/2] size-full object-cover"
    //           />
    //         </a>
    //         <div className="rb-4 mb-4 flex w-full items-center justify-start">
    //           <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
    //             Local services
    //           </p>
    //           <p className="inline text-sm font-semibold">6 min read</p>
    //         </div>
    //         <a className="mb-2 flex justify-start text-start" href="#">
    //           <h2 className="text-xl font-bold md:text-2xl">
    //             Local service business booked 40 new clients
    //           </h2>
    //         </a>
    //         <p>
    //           We rebuilt their website and optimized their Google Ads. The
    //           results came fast and stayed consistent.
    //         </p>
    //         <Button
    //           title="Read more"
    //           variant="link"
    //           size="link"
    //           iconRight={<RxChevronRight />}
    //           className="mt-6 flex items-center justify-center gap-x-2"
    //         >
    //           Read more
    //         </Button>
    //       </div>
    //       <div className="flex size-full flex-col items-start justify-start text-start">
    //         <a href="#" className="mb-6 w-full">
    //           <img
    //             src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
    //             alt="Relume placeholder image 1"
    //             className="aspect-[3/2] size-full object-cover"
    //           />
    //         </a>
    //         <div className="rb-4 mb-4 flex w-full items-center justify-start">
    //           <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
    //             Fitness
    //           </p>
    //           <p className="inline text-sm font-semibold">7 min read</p>
    //         </div>
    //         <a className="mb-2 flex justify-start text-start" href="#">
    //           <h2 className="text-xl font-bold md:text-2xl">
    //             Fitness coach scaled to multiple locations
    //           </h2>
    //         </a>
    //         <p>
    //           Digital strategy and email marketing helped them grow from one
    //           location to three in under a year.
    //         </p>
    //         <Button
    //           title="Read more"
    //           variant="link"
    //           size="link"
    //           iconRight={<RxChevronRight />}
    //           className="mt-6 flex items-center justify-center gap-x-2"
    //         >
    //           Read more
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <Button
    //         title="View all"
    //         variant="secondary"
    //         className="mt-10 md:mt-14 lg:mt-16"
    //       >
    //         View all
    //       </Button>
    //     </div>
    //   </div>
    // </section>
  );
}
