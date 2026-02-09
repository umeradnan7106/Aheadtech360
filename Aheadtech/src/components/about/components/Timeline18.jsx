// "use client";

// import {
//   Button,
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@relume_io/relume-ui";
// import React, { useEffect, useState } from "react";
// import { RxChevronRight } from "react-icons/rx";

// const useCarousel = () => {
//   const [api, setApi] = useState();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const carouselPreviousClass = (index) => {
//     return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
//   };

//   useEffect(() => {
//     if (!api) {
//       return;
//     }
//     setCurrentIndex(api.selectedScrollSnap() + 1);
//     api.on("select", () => {
//       setCurrentIndex(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   return {
//     api,
//     setApi,
//     carouselPreviousClass,
//     currentIndex,
//   };
// };

// export function Timeline18() {
//   const useActive = useCarousel();
//   return (
//     <section
//       id="relume"
//       className="overflow-hidden bg-white px-6 py-16 md:py-24 lg:py-28"
//     >
//       <div className="container max-w-7xl mx-auto">
//         <div className="mb-16 md:mb-20">
//           <div className="mx-auto w-full max-w-3xl text-center">
//             <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">Journey</p>
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
//               How we built this from the ground up
//             </h2>
//             <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
//               We started small. We stayed focused. We grew because our clients
//               grew. Every milestone here is built on real results and long-term
//               relationships.
//             </p>
//             <div className="mt-8 flex items-center justify-center gap-4">
//               <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1a2e5c] transition-all cursor-pointer">
//                 Explore
//               </button>
//               <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
//                 Arrow
//                 <RxChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//         <Carousel
//           setApi={useActive.setApi}
//           className="relative h-full overflow-hidden"
//         >
//           <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-background-primary to-transparent lg:w-16" />
//           <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-background-primary to-transparent lg:w-16" />
//           <CarouselContent className="ml-0">
//             <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
//               <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
//                 <div className="w-3/5 overflow-hidden rounded-[15px] shadow-lg">
//                   <img
//                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                     alt="Relume placeholder image 1"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="mb-4 mt-8 flex w-full items-center">
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                   <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#1f3a7a] shadow-[0_0_0_8px_white]" />
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                 </div>
//                 <div className="px-6 text-center">
//                   <h3 className="mb-3 text-2xl font-bold md:text-3xl text-[#0f172a]">2012</h3>
//                   <p className="text-slate-600 leading-relaxed">
//                     Michael Chen founded Generic Growth Partners with one
//                     principle: measure everything by revenue.
//                   </p>
//                 </div>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
//               <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
//                 <div className="w-3/5 overflow-hidden rounded-[15px] shadow-lg">
//                   <img
//                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                     alt="Relume placeholder image 2"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="mb-4 mt-8 flex w-full items-center">
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                   <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#1f3a7a] shadow-[0_0_0_8px_white]" />
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                 </div>
//                 <div className="px-6 text-center">
//                   <h3 className="mb-3 text-2xl font-bold md:text-3xl text-[#0f172a]">2014</h3>
//                   <p className="text-slate-600 leading-relaxed">
// Hired first full-time team. Focused exclusively on
//                     performance marketing for local services.
//                   </p>
//                 </div>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
//               <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
//                 <div className="w-3/5 overflow-hidden rounded-[15px] shadow-lg">
//                   <img
//                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                     alt="Relume placeholder image 3"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="mb-4 mt-8 flex w-full items-center">
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                   <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#1f3a7a] shadow-[0_0_0_8px_white]" />
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                 </div>
//                 <div className="px-6 text-center">
//                   <h3 className="mb-3 text-2xl font-bold md:text-3xl text-[#0f172a]">2016</h3>
//                   <p className="text-slate-600 leading-relaxed">
// Expanded into web development. Became Shopify Certified
//                     Partner. Served 50+ clients.
//                   </p>
//                 </div>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
//               <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
//                 <div className="w-3/5 overflow-hidden rounded-[15px] shadow-lg">
//                   <img
//                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                     alt="Relume placeholder image 4"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="mb-4 mt-8 flex w-full items-center">
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                   <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#1f3a7a] shadow-[0_0_0_8px_white]" />
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                 </div>
//                 <div className="px-6 text-center">
//                   <h3 className="mb-3 text-2xl font-bold md:text-3xl text-[#0f172a]">2018</h3>
//                   <p className="text-slate-600 leading-relaxed">
// Launched consulting division. Began working with ecommerce
//                     brands and enterprise clients.
//                   </p>
//                 </div>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
//               <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
//                 <div className="w-3/5 overflow-hidden rounded-[15px] shadow-lg">
//                   <img
//                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                     alt="Relume placeholder image 5"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="mb-4 mt-8 flex w-full items-center">
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                   <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#1f3a7a] shadow-[0_0_0_8px_white]" />
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                 </div>
//                 <div className="px-6 text-center">
//                   <h3 className="mb-3 text-2xl font-bold md:text-3xl text-[#0f172a]">2020</h3>
//                   <p className="text-slate-600 leading-relaxed">
// Scaled to 150+ active clients. Maintained 90%+ retention
//                     rate through pandemic.
//                   </p>
//                 </div>
//               </div>
//             </CarouselItem>
//             <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
//               <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
//                 <div className="w-3/5 overflow-hidden rounded-[15px] shadow-lg">
//                   <img
//                     src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                     alt="Relume placeholder image 6"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="mb-4 mt-8 flex w-full items-center">
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                   <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#1f3a7a] shadow-[0_0_0_8px_white]" />
//                   <div className="h-[3px] w-full bg-[#1f3a7a]" />
//                 </div>
//                 <div className="px-6 text-center">
//                   <h3 className="mb-3 text-2xl font-bold md:text-3xl text-[#0f172a]">2024</h3>
//                   <p className="text-slate-600 leading-relaxed">
// Now serving 300+ businesses. Recognized as top digital
//                     agency for SMB growth.
//                   </p>
//                 </div>
//               </div>
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious
//             className={useActive.carouselPreviousClass(useActive.currentIndex)}
//           />
//           <CarouselNext className="z-30 size-12" />
//         </Carousel>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentIndex(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return {
    api,
    setApi,
    carouselPreviousClass,
    currentIndex,
  };
};

// Timeline Animation Component
const TimelineAnimation = ({ totalItems = 6 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const cycleDuration = 3000; // 3 seconds per item
    const fillDuration = 1000; // 1 second to fill line
    const pauseDuration = 2000; // 2 seconds pause on dot

    let animationFrame;
    let startTime;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      
      const currentCycle = Math.floor(elapsed / cycleDuration);
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration;
      
      const currentActive = currentCycle % totalItems;
      setActiveIndex(currentActive);

      if (cycleProgress < fillDuration / cycleDuration) {
        setProgress((cycleProgress * cycleDuration) / fillDuration);
      } else {
        setProgress(1);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [totalItems]);

  return { activeIndex, progress };
};

export function Timeline18() {
  const useActive = useCarousel();
  const { activeIndex, progress } = TimelineAnimation({ totalItems: 6 });

  const timelineItems = [
    {
      year: "2012",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      description: "Michael Chen founded Generic Growth Partners with one principle: measure everything by revenue.",
    },
    {
      year: "2014",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      description: "Hired first full-time team. Focused exclusively on performance marketing for local services.",
    },
    {
      year: "2016",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      description: "Expanded into web development. Became Shopify Certified Partner. Served 50+ clients.",
    },
    {
      year: "2018",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      description: "Launched consulting division. Began working with ecommerce brands and enterprise clients.",
    },
    {
      year: "2020",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      description: "Scaled to 150+ active clients. Maintained 90%+ retention rate through pandemic.",
    },
    {
      year: "2024",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      description: "Now serving 300+ businesses. Recognized as top digital agency for SMB growth.",
    },
  ];

  return (
    <section
      id="relume"
      className="overflow-hidden bg-white px-6 py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">
              Journey
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
              How we built this from the ground up
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We started small. We stayed focused. We grew because our clients
              grew. Every milestone here is built on real results and long-term
              relationships.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-[#1f3a7a] to-[#2db074] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                Explore
              </button>
              <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                Arrow
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <Carousel
          setApi={useActive.setApi}
          className="relative h-full overflow-hidden"
        >
          <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-white to-transparent lg:w-16" />
          <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-white to-transparent lg:w-16" />
          
          <CarouselContent className="ml-0">
            {timelineItems.map((item, index) => (
              <CarouselItem key={index} className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
                <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                  
                  {/* Image Container - Fixed height to prevent layout shift */}
                  <div className="w-3/5 mb-8 mt-3.5">
                    <div 
                      className={`overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 ease-in-out ${
                        activeIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={`Timeline ${item.year}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Timeline Container - Fixed position */}
                  <div className="w-full relative" style={{ height: '3px' }}>
                    <div className="absolute inset-0 flex items-center">
                      
                      {/* Left Line */}
                      <div className="flex-1 relative h-[3px]">
                        {/* Background (Gray) */}
                        <div className="absolute inset-0 bg-slate-300" />
                        
                        {/* Animated Fill (Green) - Only if not first item and previous items are done */}
                        {index > 0 && (
                          <div 
                            className="absolute inset-0 bg-[#2db074] transition-all duration-1000 ease-linear origin-left"
                            style={{
                              transform: `scaleX(${
                                activeIndex > index 
                                  ? 1 
                                  : activeIndex === index 
                                  ? progress 
                                  : 0
                              })`
                            }}
                          />
                        )}
                      </div>

                      {/* Center Dot - Fixed size, no layout shift */}
                      <div className="relative flex items-center justify-center" style={{ width: '24px', height: '24px', margin: '0 -12px' }}>
                        <div 
                          className={`absolute rounded-full transition-all duration-300 ease-in-out ${
                            activeIndex === index 
                              ? 'w-5 h-5 bg-[#2db074]' 
                              : activeIndex > index
                              ? 'w-4 h-4 bg-[#2db074]'
                              : 'w-4 h-4 bg-slate-300'
                          }`}
                          style={{
                            boxShadow: activeIndex === index 
                              ? '0 0 0 8px white, 0 0 0 12px rgba(45, 176, 116, 0.2)' 
                              : '0 0 0 8px white'
                          }}
                        />
                      </div>

                      {/* Right Line */}
                      <div className="flex-1 relative h-[3px]">
                        {/* Background (Gray) */}
                        <div className="absolute inset-0 bg-slate-300" />
                        
                        {/* Animated Fill (Green) - Only if current or past */}
                        {index < timelineItems.length - 1 && (
                          <div 
                            className="absolute inset-0 bg-[#2db074] transition-all duration-1000 ease-linear origin-left"
                            style={{
                              transform: `scaleX(${activeIndex > index ? 1 : 0})`
                            }}
                          />
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Content - Fixed margin top */}
                  <div className="px-6 text-center mt-8">
                    <h3 className={`mb-3 text-2xl font-bold md:text-3xl transition-colors duration-500 ${
                      activeIndex === index ? 'text-[#2db074]' : 'text-[#0f172a]'
                    }`}>
                      {item.year}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={useActive.carouselPreviousClass(useActive.currentIndex)}
          />
          <CarouselNext className="z-30 size-12" />
        </Carousel>
      </div>
    </section>
  );
}