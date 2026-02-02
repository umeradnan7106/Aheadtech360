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
            Find answers to common questions about our content and resources
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Who writes these articles?
            </h2>
            <p>
              Our team of strategists, developers, and marketers write every
              piece based on real client work and industry trends. We focus on
              practical tactics you can implement immediately, not theoretical
              fluff.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How often do you publish?
            </h2>
            <p>
              We publish new articles twice weekly covering SEO, paid ads,
              development, and strategy. Each piece is thoroughly researched and
              tested with our SMB clients.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I suggest a topic?
            </h2>
            <p>
              Absolutely. We take topic suggestions from our audience. If
              there's a growth challenge you're facing, reach out through our
              contact page and we'll consider it for future content.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are these guides free to use?
            </h2>
            <p>
              Yes. All blog posts, guides, and checklists are free. No email
              wall, no paywall. We believe in sharing knowledge that helps SMBs
              grow.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer consulting on these topics?
            </h2>
            <p>
              Yes. If you want personalized strategy based on your business,
              book a free consultation call with our team. We'll review your
              situation and recommend a path forward.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I share these articles?
            </h2>
            <p>
              Please do. Share with your team, your network, anyone who needs
              growth insights. Attribution is appreciated but not required.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Reach out to our team for a personalized conversation about your
            growth goals
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
