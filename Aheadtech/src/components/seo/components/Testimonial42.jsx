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
            <p className="md:text-md">See what our clients achieved</p>
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
                    "Their SEO strategy took us from page three to the first
                    position in six months. We're getting qualified leads every
                    week now."
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
                      <p className="font-semibold">Marcus Chen</p>
                      <p>Owner, Local Services</p>
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
                    "We tripled our organic traffic in eight months. The team
                    understood our business and delivered exactly what we
                    needed."
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
                      <p>Founder, Ecommerce Brand</p>
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
                    "Generic Growth Partners didn't just optimize our site. They
                    built a system that keeps generating leads month after
                    month."
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
                      <p className="font-semibold">David Torres</p>
                      <p>Manager, Fitness Clinic</p>
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
                    "The difference between us and our competitors is now
                    visible in search results. Our phone rings more than it ever
                    has."
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
                      <p className="font-semibold">Jennifer Walsh</p>
                      <p>Director, Retail Brand</p>
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
                    "They took the guesswork out of SEO. We know exactly what's
                    working and why our rankings improved."
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
                      <p className="font-semibold">Robert Kim</p>
                      <p>CEO, Printing Business</p>
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
                    "Our conversion rate went up because the traffic they
                    brought was actually qualified. That's the difference."
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
                      <p>Owner, Fashion Boutique</p>
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
                    "We've worked with other agencies before. Generic Growth
                    Partners is the only one that treated us like a real
                    partner."
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
                      <p className="font-semibold">Thomas Wright</p>
                      <p>Founder, Coaching Business</p>
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
