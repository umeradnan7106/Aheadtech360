"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">Process</p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                How we build your growth engine
              </h2>
              <p className="text-center md:text-md">
                We start with a clear picture of where you are. Then we build a
                roadmap to get you where you need to be.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Step one: understand your business
              </h3>
              <p className="text-center">
                We dig into your market, your competitors, and your goals. No
                shortcuts, no assumptions.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Step two: build your strategy
              </h3>
              <p className="text-center">
                Based on what we learn, we create a focused plan that targets
                your ideal customers and maximizes ROI.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Step three: execute with precision
              </h3>
              <p className="text-center">
                Our team launches campaigns, builds assets, and optimizes every
                channel. You see results, not just activity.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Step four: optimize and scale
              </h3>
              <p className="text-center">
                We track everything, test constantly, and refine your approach.
                Growth compounds when you know what works.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Call" variant="secondary">
              Call
            </Button>
            <Button
              title="Arrow"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Arrow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
