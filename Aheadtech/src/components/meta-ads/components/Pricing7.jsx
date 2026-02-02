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
            Meta ads packages
          </h1>
          <p className="md:text-md">
            Choose the right starting point for your business. All packages
            include strategy, setup, and optimization.
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
                  <p>Campaign setup and optimization</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Audience research and targeting</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Monthly performance reporting</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Ad creative testing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Conversion tracking setup</p>
                </div>
              </div>
              <Button title="Get started" className="w-full">
                Get started
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
                $27,500
              </h3>
              <p className="mt-2 font-medium">Save 8% with annual commitment</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Campaign setup and optimization</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Audience research and targeting</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Monthly performance reporting</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Ad creative testing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Conversion tracking setup</p>
                </div>
              </div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
