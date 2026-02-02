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
            Everything you need to know before reaching out
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How fast do you respond?
            </h2>
            <p>
              We get back to every inquiry within 24 hours. Most responses come
              within a few hours during business days. We know your time
              matters, so we keep things moving.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's included in the free audit?
            </h2>
            <p>
              The audit covers your current marketing performance, website
              health, paid ad efficiency, and growth opportunities specific to
              your industry. You'll get a clear roadmap with no fluff.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there any obligation to work with you?
            </h2>
            <p>
              None. The audit and consultation are completely free with zero
              pressure to sign anything. We want you to make the right choice
              for your business.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with businesses like mine?
            </h2>
            <p>
              We specialize in US small and medium businesses across local
              services, ecommerce, clinics, gyms, coaching, printing, and
              retail. If you're between 1-50 employees with a serious growth
              mindset, we're a fit.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's your typical engagement length?
            </h2>
            <p>
              Most clients work with us for 6-12 months minimum. Growth takes
              time, and we're built for long-term partnerships, not quick fixes.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How much does it cost?
            </h2>
            <p>
              Pricing depends on your goals, current state, and the services you
              need. We typically work with budgets of $2,000-$5,000+ monthly.
              Let's talk about what makes sense for you.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Reach out directly and we'll walk you through everything
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Get in touch" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
