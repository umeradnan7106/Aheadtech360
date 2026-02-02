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
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we build your SEO
            </h2>
            <p className="md:text-md">Five steps from audit to results</p>
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
                <p className="mb-2 text-sm font-semibold">One</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Free SEO audit reveals your opportunities
                </h3>
                <p>We analyze your site, keywords, and competition.</p>
              </div>
              <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Two</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Strategy proposal built on audit findings
                </h3>
                <p>Clear roadmap with timeline and expected outcomes.</p>
              </div>
              <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Three</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Onboarding and implementation begins
                </h3>
                <p>We integrate with your team and start execution.</p>
              </div>
              <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Four</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Monthly reporting shows progress and results
                </h3>
                <p>Transparent metrics you understand and trust.</p>
              </div>
              <div className="mt-5 md:mt-6">
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
        </div>
      </div>
    </section>
  );
}
