"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
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
            <p className="mb-3 font-semibold md:mb-4">Expertise</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              We know Meta ads inside out
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Our team stays current with platform changes and algorithm shifts.
              We're certified, we're tested, and we focus on what matters—your
              return on ad spend.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Platform mastery across all Meta networks</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Real-time campaign optimization and testing</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Transparent reporting tied to your business goals</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
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
        </div>
      </div>
    </section>
  );
}
