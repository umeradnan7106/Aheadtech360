"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentIndex(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return {
    api,
    setApi,
    carouselPreviousClass,
    currentIndex,
  };
};

export function Timeline18() {
  const useActive = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we built this from the ground up
            </h2>
            <p className="md:text-md">
              We started small. We stayed focused. We grew because our clients
              grew. Every milestone here is built on real results and long-term
              relationships.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
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
        <Carousel
          setApi={useActive.setApi}
          className="relative h-full overflow-hidden"
        >
          <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-background-primary to-transparent lg:w-16" />
          <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-background-primary to-transparent lg:w-16" />
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2012</h3>
                  <p>
                    Michael Chen founded Generic Growth Partners with one
                    principle: measure everything by revenue.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2014</h3>
                  <p>
                    Hired first full-time team. Focused exclusively on
                    performance marketing for local services.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2016</h3>
                  <p>
                    Expanded into web development. Became Shopify Certified
                    Partner. Served 50+ clients.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2018</h3>
                  <p>
                    Launched consulting division. Began working with ecommerce
                    brands and enterprise clients.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 5"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2020</h3>
                  <p>
                    Scaled to 150+ active clients. Maintained 90%+ retention
                    rate through pandemic.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 6"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
                  <p>
                    Now serving 300+ businesses. Recognized as top digital
                    agency for SMB growth.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={useActive.carouselPreviousClass(useActive.currentIndex)}
          />
          <CarouselNext className="z-30 size-12" />
        </Carousel>
      </div>
    </section>
  );
}
