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
            Common questions about growth strategy and digital marketing
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long until results?
            </h2>
            <p>
              Most clients see measurable improvements within 60 to 90 days. SEO
              takes longer, usually 4 to 6 months for page one rankings. Paid
              ads and email marketing show faster returns.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's included in an audit?
            </h2>
            <p>
              We analyze your website, current marketing efforts, competitor
              landscape, and conversion funnel. You get a detailed report with
              actionable recommendations and a roadmap for growth.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with my industry?
            </h2>
            <p>
              We specialize in local services, ecommerce, fitness, clinics,
              coaching, printing, and retail. If you're a US-based business with
              a real growth budget, we can help.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if we're new to digital marketing?
            </h2>
            <p>
              That's fine. We've worked with businesses at every stage. We'll
              educate you, build the strategy, and handle execution. You'll
              understand what's happening and why.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How much does it cost?
            </h2>
            <p>
              It depends on your goals and scope. We work with businesses
              investing $2,000 to $5,000+ monthly. Let's talk about your
              situation on a free call.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you guarantee results?
            </h2>
            <p>
              No legitimate agency can guarantee specific rankings or revenue.
              We guarantee effort, transparency, and a strategy built on data.
              Results come from execution and time.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions
          </h4>
          <p className="md:text-md">
            Reach out and let's talk about your growth
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
