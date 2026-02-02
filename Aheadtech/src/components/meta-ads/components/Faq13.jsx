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
            Everything you need to know about Meta ads management and how we
            work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's the minimum budget?
            </h2>
            <p>
              We recommend starting with $2,500 per month to run effective
              campaigns with proper testing and optimization. This gives us room
              to test audiences, creative variations, and bidding strategies.
              Smaller budgets can work, but results take longer to validate.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long before we see results?
            </h2>
            <p>
              Most clients see meaningful data within two to three weeks. We
              need time to gather conversions, test audiences, and refine
              targeting. Expect optimization improvements throughout months one
              and two, with stronger results by month three.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's included in management?
            </h2>
            <p>
              We handle campaign strategy, audience research, ad creative
              testing, bid management, conversion tracking, and monthly
              optimization. You get a dedicated point of contact and monthly
              performance reports showing spend, conversions, and ROI.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do you measure success?
            </h2>
            <p>
              We track metrics that matter to your business—leads, sales, email
              signups, or website traffic. We set up conversion tracking from
              day one and report on ROAS, cost per conversion, and total revenue
              generated. Success is defined by your goals, not vanity metrics.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you work with existing campaigns?
            </h2>
            <p>
              Yes. We audit your current setup, identify what's working and
              what's not, then rebuild or optimize from there. Many clients come
              to us with underperforming campaigns, and we turn them around
              within 30 to 60 days.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you guarantee results?
            </h2>
            <p>
              We guarantee effort and expertise, not outcomes. Results depend on
              your product, pricing, market, and customer fit. What we do
              guarantee is transparency, regular optimization, and honest
              communication about what's working.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more clarity?
          </h4>
          <p className="md:text-md">
            Book a free consultation with our team to discuss your specific
            situation and goals.
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
