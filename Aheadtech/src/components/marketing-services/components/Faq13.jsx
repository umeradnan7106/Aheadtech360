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
            Everything you need to know about our marketing services
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long until results?
            </h2>
            <p>
              Most clients see meaningful results within 60 to 90 days. SEO
              takes longer but compounds over time. Paid ads can drive traffic
              immediately, but we focus on quality leads that actually convert,
              not just clicks.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's your minimum budget?
            </h2>
            <p>
              We work with businesses investing $2,000 to $5,000 monthly in
              marketing. Below that, the budget doesn't allow for proper testing
              and optimization. We'd rather be honest than take on work we can't
              deliver on.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you guarantee results?
            </h2>
            <p>
              We guarantee effort, strategy, and transparency. We can't
              guarantee results because no honest agency can. What we do is
              build systems, test constantly, and optimize based on data. If
              something isn't working, we change it.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you work with my budget?
            </h2>
            <p>
              We'll be straight with you. If your budget is too small for the
              work you need, we'll tell you. If it's workable, we'll show you
              exactly where every dollar goes and what to expect.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I'm not happy?
            </h2>
            <p>
              We work on contracts with clear expectations and milestones. If
              we're not delivering, we'll know it before you do because we track
              everything. We'd rather part ways professionally than keep a
              client who isn't seeing value.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do you measure success?
            </h2>
            <p>
              We measure what matters to your business. For ecommerce, that's
              revenue and profit. For services, it's qualified leads and
              conversion rate. We set targets upfront and report on them
              monthly.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Book a free consultation and we'll answer everything
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
