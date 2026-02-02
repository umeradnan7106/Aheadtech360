"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              What's working now
            </h1>
            <p className="md:text-md">
              Our most-read articles on growth and strategy
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Featured posts
          </h2>
          <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 sm:gap-y-14 md:mb-16 lg:mb-20 lg:grid-cols-2">
            <div>
              <div className="flex h-full flex-col items-start justify-center">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="mb-6 aspect-[3/2] size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    SEO
                  </p>
                  <p className="inline text-sm font-semibold">12 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    How to rank higher without paid ads
                  </h3>
                </a>
                <p>
                  Organic search drives qualified leads. Here's the exact
                  process we use.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 lg:gap-y-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Paid Ads
                    </p>
                    <p className="inline text-sm font-semibold">8 min read</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Why your Google Ads aren't converting
                    </h3>
                  </a>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Strategy
                    </p>
                    <p className="inline text-sm font-semibold">10 min read</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      The marketing audit framework we use
                    </h3>
                  </a>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Email
                    </p>
                    <p className="inline text-sm font-semibold">7 min read</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Building email lists that actually sell
                    </h3>
                  </a>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Latest posts
          </h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16">
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  CRO
                </p>
                <p className="inline text-sm font-semibold">9 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Five conversion killers on your website
                </h2>
              </a>
              <p>
                Small changes to your site can mean big revenue gains. We show
                you where to look.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Analytics
                </p>
                <p className="inline text-sm font-semibold">6 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  The metrics that actually matter for growth
                </h2>
              </a>
              <p>
                Stop tracking vanity metrics. Focus on what drives revenue and
                scale.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Development
                </p>
                <p className="inline text-sm font-semibold">11 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Choosing the right platform for your store
                </h2>
              </a>
              <p>
                WordPress, Shopify, or BigCommerce. We break down what works for
                each business type.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Trends
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  What's changing in digital marketing this quarter
                </h2>
              </a>
              <p>
                Platform updates, algorithm shifts, and what you need to know to
                stay competitive.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
