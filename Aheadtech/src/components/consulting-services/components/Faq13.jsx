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
            Everything you need to know about working with us
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What does consulting include?
            </h2>
            <p>
              We audit your current strategy, identify gaps, and build a roadmap
              for growth. This includes digital strategy, marketing automation,
              technology integration, and ongoing guidance to execute your plan.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does strategy take?
            </h2>
            <p>
              Initial strategy development takes two to four weeks. We then work
              with you on implementation, which varies based on complexity and
              your team's capacity.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with my industry?
            </h2>
            <p>
              We work with local services, ecommerce, clinics, gyms, coaches,
              printing, and fashion brands. If you're a US-based SMB with growth
              goals, we can help.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I need development too?
            </h2>
            <p>
              Our consulting pairs with our development services. We can build
              your website, set up your CMS, or integrate tools as part of your
              strategy execution.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How is pricing structured?
            </h2>
            <p>
              Consulting is custom based on scope and complexity. We work with
              businesses investing $2,000 to $5,000+ monthly in growth. Let's
              discuss your needs.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What happens after strategy?
            </h2>
            <p>
              You get a detailed roadmap and recommendations. Many clients work
              with us on implementation, but you can also execute independently
              with our guidance.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ready to talk?
          </h4>
          <p className="md:text-md">Book a free call or request an audit</p>
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
