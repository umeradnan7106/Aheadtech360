"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Investment</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Simple pricing
          </h1>
          <p className="md:text-md">
            We work with businesses investing $2,000 to $5,000+ monthly in
            growth. No surprises, no hidden fees.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="container max-w-md data-[state=active]:animate-tabs"
          >
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume icon 1"
                  className="size-12"
                />
              </div>
              <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                $2,500
              </h3>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>SEO strategy and optimization</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>One paid ad channel managed</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Monthly reporting and strategy</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Email marketing setup</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Quarterly strategy calls</p>
                </div>
              </div>
              <Button title="Book call" className="w-full">
                Book call
              </Button>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="container max-w-md data-[state=active]:animate-tabs"
          >
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume icon 2"
                  className="size-12"
                />
              </div>
              <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                $4,500
              </h3>
              <p className="mt-2 font-medium">
                Most popular for serious growth
              </p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Full SEO and content strategy</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Two paid ad channels managed</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>CRO and conversion optimization</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced email marketing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Bi-weekly strategy reviews</p>
                </div>
              </div>
              <Button title="Book call" className="w-full">
                Book call
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
