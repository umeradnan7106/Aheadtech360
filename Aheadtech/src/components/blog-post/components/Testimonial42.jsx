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
              Real results
            </h2>
            <p className="md:text-md">What our clients say</p>
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
                    "They took our SEO from nothing to ranking on page one
                    within six months."
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
                      <p>Owner, local services</p>
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
                    "Our Google Ads ROI improved by 340% after they restructured
                    our campaigns."
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
                      <p>Marketing director, ecommerce</p>
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
                    "The strategy work alone was worth more than we paid for the
                    entire engagement."
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
                      <p className="font-semibold">Lisa Chen</p>
                      <p>CEO, fitness brand</p>
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
                    "They didn't just deliver results. They taught us how to
                    think about growth differently."
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
                      <p>Founder, printing business</p>
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
                    "Our conversion rate went from 1.2% to 3.8% in four months.
                    That's real money."
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
                      <p className="font-semibold">Amanda Brooks</p>
                      <p>Operations manager, retail</p>
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
                    "They're not just vendors. They're partners who care about
                    our success."
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
                      <p>Owner, coaching practice</p>
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
                    "The email marketing sequences they built generated 28% of
                    our monthly revenue."
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
                      <p className="font-semibold">Rachel Foster</p>
                      <p>Founder, fashion brand</p>
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
