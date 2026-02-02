"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">
            Common questions about our services, process, and results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long until we see results?
            </h2>
            <p>
              Most clients see meaningful results within 60 to 90 days. SEO
              takes longer but compounds over time. Paid ads and email marketing
              move faster. We track everything and adjust based on what works.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's your minimum monthly investment?
            </h2>
            <p>
              We work with businesses investing $2,000 to $5,000+ monthly. This
              ensures we can dedicate real resources and deliver measurable
              growth. We're not a low-cost agency. We're a growth partner.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with my industry?
            </h2>
            <p>
              We specialize in local services, ecommerce, fitness, clinics,
              printing, and retail. If you're a US-based small or medium
              business with growth ambitions, we can help. Book a call and we'll
              discuss your specific situation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you manage multiple channels?
            </h2>
            <p>
              Yes. Our Scale plan includes two paid ad channels, SEO, email
              marketing, and CRO. We can also build your website, set up
              automation, and integrate your tech stack. Everything works
              together.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if we're not happy?
            </h2>
            <p>
              We focus on results, not contracts. If we're not delivering, we
              talk about it. Most clients stay because they see growth. We're
              transparent about what's working and what needs adjustment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do you report on progress?
            </h2>
            <p>
              Monthly reports with clear metrics. Quarterly strategy calls to
              review what's working. Bi-weekly check-ins on the Scale plan. You
              always know where you stand and what comes next.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Book a free consultation and let's talk about your growth.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
