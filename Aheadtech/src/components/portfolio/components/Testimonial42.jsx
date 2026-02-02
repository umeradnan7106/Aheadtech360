"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial42() {
  const useCarousel = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="w-full max-w-md lg:mb-24">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What clients say
            </h2>
            <p className="md:text-md">They delivered exactly what we needed</p>
          </div>
          <Carousel
            setApi={useCarousel.setApi}
            opts={{ loop: true, align: "start" }}
            className="overflow-hidden"
          >
            <CarouselContent>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Our revenue increased 40% in the first six months after
                    they rebuilt our site and launched our Google Ads strategy."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Mitchell</p>
                      <p>Owner, ecommerce brand</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They understood our business better than we did. The SEO
                    work alone brought us consistent leads every week."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">James Rodriguez</p>
                      <p>Manager, local services</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Professional, responsive, and they actually explain what
                    they're doing. No smoke and mirrors."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Patricia Chen</p>
                      <p>Director, fitness clinic</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "The email marketing campaigns they set up are still
                    generating sales on autopilot months later."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Michael Torres</p>
                      <p>Founder, coaching business</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They didn't just build us a website. They built us a lead
                    machine."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Amanda Foster</p>
                      <p>Owner, fashion retail</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "The ROI on their Meta Ads work paid for itself in the first
                    month. Worth every penny."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">David Kim</p>
                      <p>CEO, printing business</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-5 flex md:mb-6">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "They treated our business like it was their own. That kind
                    of partnership is rare."
                  </blockquote>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Lisa Hernandez</p>
                      <p>Owner, DTF business</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-12 flex items-center justify-between">
              <div className="mt-5 flex w-full items-start justify-start">
                <button
                  onClick={useCarousel.handleDotClick(0)}
                  className={useCarousel.dotClassName(0)}
                />
                <button
                  onClick={useCarousel.handleDotClick(1)}
                  className={useCarousel.dotClassName(1)}
                />
                <button
                  onClick={useCarousel.handleDotClick(2)}
                  className={useCarousel.dotClassName(2)}
                />
                <button
                  onClick={useCarousel.handleDotClick(3)}
                  className={useCarousel.dotClassName(3)}
                />
                <button
                  onClick={useCarousel.handleDotClick(4)}
                  className={useCarousel.dotClassName(4)}
                />
                <button
                  onClick={useCarousel.handleDotClick(5)}
                  className={useCarousel.dotClassName(5)}
                />
                <button
                  onClick={useCarousel.handleDotClick(6)}
                  className={useCarousel.dotClassName(6)}
                />
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
                <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
