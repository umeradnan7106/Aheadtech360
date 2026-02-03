"use client";
import { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq13() {

   const [openIndex, setOpenIndex] = useState(0); // First one open by default like screenshot

  const faqs = [
    {
      question: "How long until we see results?",
      answer: "Most clients see meaningful results within 60 to 90 days. SEO takes longer but compounds over time. Paid ads and email marketing move faster. We track everything and adjust based on what works."
    },
    {
      question: "What's your minimum monthly investment?",
      answer: "We work with businesses investing $2,000 to $5,000+ monthly. This ensures we can dedicate real resources and deliver measurable growth. We're not a low-cost agency. We're a growth partner."
    },
    {
      question: "Do you work with my industry?",
      answer: "We specialize in local services, ecommerce, fitness, clinics, printing, and retail. If you're a US-based small or medium business with growth ambitions, we can help."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl text-center md:text-6xl font-bold text-[#0f172a] mb-12 tracking-tight">
          FAQs
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`group border border-slate-100 rounded-[15px] transition-all duration-300 ${
                  isOpen ? 'bg-white shadow-sm ring-1 ring-slate-200' : 'bg-transparent hover:bg-slate-50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-8 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-xl font-bold text-[#0f172a]">
                    {faq.question}
                  </span>
                  
                  {/* Chevron SVG */}
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" 
                      className="text-slate-900 stroke-current"
                    >
                      <path 
                        d="M19 9L12 16L5 9" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Area */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-slate-500 leading-relaxed max-w-4xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions? Section */}
        <div className="mt-16 p-10 bg-[aliceblue] rounded-[15px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#0f172a] mb-2">Still have questions?</h4>
            <p className="text-slate-500">Book a free consultation and let's talk about your growth.</p>
          </div>
          <button className="bg-[#1f3a7a] hover:bg-[#1a2e5c] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-900/10 cursor-pointer">
            Contact
          </button>
        </div>

      </div>
    </section>
  );
}
