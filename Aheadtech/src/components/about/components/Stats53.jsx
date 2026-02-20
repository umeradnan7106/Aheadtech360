"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

// Counter Animation Hook
const useCountAnimation = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, elementRef, isVisible];
};

export function Stats53() {
  const [count1, ref1, visible1] = useCountAnimation(300, 2000, 0);
  const [count2, ref2, visible2] = useCountAnimation(40, 1800, 0);
  const [count3, ref3, visible3] = useCountAnimation(92, 2000, 0);

  return (
    <section id="relume" className="bg-gradient-to-br from-slate-50 to-blue-50/30 px-6 py-16 md:py-24 lg:py-28">
      <div className="container max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[14px] text-[#2db074]">
              Results
            </p>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.1]">
              What we've built together
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Since 2012, we've worked with over 300 SMBs across the US. Our
              clients see an average 40% increase in qualified leads within the
              first six months. We maintain a 92% client retention rate because
              we deliver.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#1f3a7a] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                See more
              </button>
              <button className="text-[#1f3a7a] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
                Arrow
                <RxChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Stat Card 1 - 300+ with Background Image */}
          <Fragment>
            <div 
              ref={ref1}
              className="group relative flex flex-col justify-center p-10 text-center rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Business Growth"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#000000a8]/90 via-[#000000a8]/80 to-[#000000a8]/80 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Content */}
              <div className="relative z-20">
                <p 
                  className={`mb-4 text-6xl font-black leading-[1.2] md:text-7xl lg:text-8xl text-white transition-all duration-700 ${
                    visible1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {count1}+
                </p>
                <h3 className="text-lg font-bold leading-[1.4] md:text-xl text-white/90">
                  Businesses served
                </h3>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#000000] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          </Fragment>

          {/* Image Card 1 */}
          <Fragment>
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                className="aspect-[3/2] size-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://www.officespacesoftware.com/wp-content/uploads/The-physical-office-1920.jpg"
                alt="Client Success"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000a8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Fragment>

          {/* Stat Card 2 - 40% with Background Image */}
          <Fragment>
            <div 
              ref={ref2}
              className="group relative flex flex-col justify-center p-10 text-center rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="Growth Chart"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br  to-[#000000]/99 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Content */}
              <div className="relative z-20">
                <p 
                  className={`mb-4 text-6xl font-black leading-[1.2] md:text-7xl lg:text-8xl text-white transition-all duration-700 ${
                    visible2 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {count2}%
                </p>
                <h3 className="text-lg font-bold leading-[1.4] md:text-xl text-white/90">
                  Lead increase
                </h3>
              </div>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#000000a8] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          </Fragment>

          {/* Stat Card 3 - 92% with Background Image */}
          <Fragment>
            <div 
              ref={ref3}
              className="group relative flex flex-col justify-center p-10 text-center rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Success"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br  via-[#000000e0]/85 to-[#000000e0]/85 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Content */}
              <div className="relative z-20">
                <p 
                  className={`mb-4 text-6xl font-black leading-[1.2] md:text-7xl lg:text-8xl text-white transition-all duration-700 ${
                    visible3 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {count3}%
                </p>
                <h3 className="text-lg font-bold leading-[1.4] md:text-xl text-white/90">
                  Client retention
                </h3>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#000000a8] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          </Fragment>

          {/* Image Card 2 */}
          <Fragment>
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                className="aspect-[3/2] size-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://cdn.sanity.io/images/uqxwe2qj/production/460ac1ee4f11ccd89ae38e0216ade7602210f702-1086x612.png?q=80&auto=format&fit=clip&dpr=2&w=1086"
                alt="Team Collaboration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000a8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Fragment>
          
        </div>
      </div>
    </section>
  );
}