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
            Everything you need to know about our SEO approach
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long until results?
            </h2>
            <p>
              Most clients see meaningful movement in three to six months.
              Competitive keywords take longer. We focus on sustainable growth,
              not quick fixes that fade.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What does SEO cost?
            </h2>
            <p>
              Our SEO packages start at $2,000 monthly and scale based on your
              goals and industry competition. We discuss pricing during your
              free audit call.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's included in your SEO?
            </h2>
            <p>
              Technical optimization, on-page content strategy, link building,
              keyword research, and monthly reporting. We handle everything
              needed to rank and convert.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you guarantee rankings?
            </h2>
            <p>
              No legitimate agency guarantees rankings. We guarantee effort,
              transparency, and measurable progress. We show you exactly what
              we're doing and why.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with my industry?
            </h2>
            <p>
              We specialize in local services, ecommerce, clinics, gyms,
              coaches, and retail. If you're a US SMB with growth goals, we can
              help.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I'm not ready yet?
            </h2>
            <p>
              Start with our free SEO audit. You'll get a clear picture of
              what's holding you back and what opportunities exist. No
              obligation.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ready to talk?
          </h4>
          <p className="md:text-md">
            Let's discuss your SEO goals and build your growth plan
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact us" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
