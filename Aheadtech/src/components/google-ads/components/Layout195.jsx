"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout195() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Targeting</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Precision targeting that reaches your ideal customers
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              We build campaigns around the keywords and audiences most likely
              to convert. Every dollar spent works harder through advanced
              segmentation and bid optimization.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Smart bidding
                </h6>
                <p>
                  Automated strategies that maximize conversions within your
                  budget constraints.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Conversion tracking
                </h6>
                <p>
                  Complete visibility into which ads drive actual sales and
                  leads for your business.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Learn</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Arrow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
