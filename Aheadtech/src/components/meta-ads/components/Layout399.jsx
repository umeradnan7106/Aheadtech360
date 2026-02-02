"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout399() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our proven approach
            </h2>
            <p className="md:text-md">
              From audit to scale, we move methodically and measure everything
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">One</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Free audit of your current setup
                </h3>
                <p>We analyze what's working and what's costing you money</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Two</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Strategy session and campaign planning
                </h3>
                <p>
                  We present findings and build a roadmap aligned with your
                  revenue goals
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Three</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Campaign launch and initial testing
                </h3>
                <p>
                  We build, launch, and begin testing audiences and creative
                  variations immediately
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Four</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Weekly optimization and monthly reporting
                </h3>
                <p>
                  Continuous refinement based on data. You see results and
                  understand why
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
