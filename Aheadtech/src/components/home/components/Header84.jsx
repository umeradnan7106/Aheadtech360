"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header84() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Grow your business with proven strategies
            </h1>
            <p className="md:text-md">
              Generic Growth Partners helps US small and medium businesses
              generate more leads and sales through performance marketing, web
              development, and digital strategy. We're your long-term growth
              partner, not a low-cost agency.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Audit" variant="primary">
                Audit
              </Button>
              <Button title="Call" variant="secondary">
                Call
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
