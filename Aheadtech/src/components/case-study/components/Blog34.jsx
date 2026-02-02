"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Case studies</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              More results to explore
            </h1>
            <p className="md:text-md">
              Discover how we've helped similar businesses reach their goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Ecommerce
              </p>
              <p className="inline text-sm font-semibold">8 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                How an online retailer tripled revenue in six months
              </h2>
            </a>
            <p>
              Strategic paid ads and conversion optimization drove sustainable
              growth.
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
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Services
              </p>
              <p className="inline text-sm font-semibold">7 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Local gym increased bookings by 180 percent with SEO
              </h2>
            </a>
            <p>
              Organic search became their strongest lead generation channel.
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
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Development
              </p>
              <p className="inline text-sm font-semibold">6 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Fashion brand rebuilt on Shopify for 45 percent more sales
              </h2>
            </a>
            <p>
              A modern platform and streamlined checkout reduced cart
              abandonment.
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
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
