"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout400() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Build</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What we develop
            </h2>
            <p className="md:text-md">
              Custom sites and platforms engineered for your business
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Development</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Full-stack website development
                </h3>
                <p>Custom builds from the ground up, built for scale</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">
                  WordPress, Shopify, and BigCommerce
                </p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Proven platforms configured for your growth and margins
                </h3>
                <p>Learn</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="App and software development"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  App and software development
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">
                  Native and web applications that solve real business problems
                </p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Learn
                </h3>
                <p>ERP and CRM implementation</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Systems integration that connects your entire operation"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Systems integration that connects your entire operation
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Learn</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  API integration and automation
                </h3>
                <p>Connect your tools and eliminate manual work</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
