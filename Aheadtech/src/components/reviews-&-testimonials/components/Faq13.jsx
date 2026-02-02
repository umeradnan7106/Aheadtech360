"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about our process and results
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are these real testimonials?
            </h2>
            <p>
              Every testimonial comes from actual clients we've worked with. We
              don't use stock quotes or fake reviews. You can request case
              studies and speak directly with references.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What industries do you serve?
            </h2>
            <p>
              We work with local services, ecommerce brands, clinics, gyms,
              coaches, printing businesses, and fashion retailers. If you're a
              US-based business with $2K-$5K+ monthly marketing budget, we can
              help.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long before we see results?
            </h2>
            <p>
              SEO typically shows traction in three to six months. Paid ads and
              email marketing generate faster results, often within weeks. We
              set realistic timelines during your free consultation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with small budgets?
            </h2>
            <p>
              We focus on businesses with $2K+ monthly budgets. Below that, the
              overhead makes it hard to deliver real results. We're built for
              sustainable growth, not quick fixes.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if we're not happy?
            </h2>
            <p>
              We work on performance metrics you define upfront. If we're not
              delivering, we'll tell you directly. Most clients stay because
              they see the numbers.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can we see a case study?
            </h2>
            <p>
              Yes. Visit our portfolio page to browse case studies by industry.
              We also share detailed results during your free audit and
              consultation call.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ready to talk?
          </h4>
          <p className="md:text-md">
            Get answers to your specific questions on a free call
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
