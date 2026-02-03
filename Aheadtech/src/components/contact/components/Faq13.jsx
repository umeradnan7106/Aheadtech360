// "use client";

// import { Button } from "@relume_io/relume-ui";
// import React from "react";

// export function Faq13() {
//   return (
//     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
//       <div className="container">
//         <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
//           <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
//             Questions
//           </h2>
//           <p className="md:text-md">
//             Everything you need to know before reaching out
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
//           <div>
//             <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
//               How fast do you respond?
//             </h2>
//             <p>
//               We get back to every inquiry within 24 hours. Most responses come
//               within a few hours during business days. We know your time
//               matters, so we keep things moving.
//             </p>
//           </div>
//           <div>
//             <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
//               What's included in the free audit?
//             </h2>
//             <p>
//               The audit covers your current marketing performance, website
//               health, paid ad efficiency, and growth opportunities specific to
//               your industry. You'll get a clear roadmap with no fluff.
//             </p>
//           </div>
//           <div>
//             <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
//               Is there any obligation to work with you?
//             </h2>
//             <p>
//               None. The audit and consultation are completely free with zero
//               pressure to sign anything. We want you to make the right choice
//               for your business.
//             </p>
//           </div>
//           <div>
//             <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
//               Do you work with businesses like mine?
//             </h2>
//             <p>
//               We specialize in US small and medium businesses across local
//               services, ecommerce, clinics, gyms, coaching, printing, and
//               retail. If you're between 1-50 employees with a serious growth
//               mindset, we're a fit.
//             </p>
//           </div>
//           <div>
//             <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
//               What's your typical engagement length?
//             </h2>
//             <p>
//               Most clients work with us for 6-12 months minimum. Growth takes
//               time, and we're built for long-term partnerships, not quick fixes.
//             </p>
//           </div>
//           <div>
//             <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
//               How much does it cost?
//             </h2>
//             <p>
//               Pricing depends on your goals, current state, and the services you
//               need. We typically work with budgets of $2,000-$5,000+ monthly.
//               Let's talk about what makes sense for you.
//             </p>
//           </div>
//         </div>
//         <div className="mt-12 md:mt-18 lg:mt-20">
//           <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
//             Still have questions?
//           </h4>
//           <p className="md:text-md">
//             Reach out directly and we'll walk you through everything
//           </p>
//           <div className="mt-6 md:mt-8">
//             <Button title="Get in touch" variant="secondary">
//               Get in touch
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



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
