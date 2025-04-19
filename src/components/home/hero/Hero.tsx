"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-background text-center">
      <div className="mx-auto px-4 container">
        {/* Heading + Logo */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-0 pt-[71px]">
          {/* ✅ Mobile/Tablet: Logo উপরে */}
          <div className="md:hidden block">
            <Image
              src="/5.png"
              alt="Hero Icon"
              width={107}
              height={56}
              className="mx-auto"
            />
          </div>

          <h1 className="h1">
            Find the <span className="text-primary">perfect</span>
            <br />
            <span className="text-primary">property</span> with{" "}
            <span className="text-foreground">Benfort</span>
          </h1>

          {/* ✅ Desktop: Logo পাশে */}
          <div className="hidden md:block">
            <Image
              src="/5.png"
              alt="Hero Icon"
              width={107}
              height={56}
              className="transition-transform md:-translate-x-10 md:-translate-y-10 duration-500 transform"
            />
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-[26px] text-secondary-foreground para">
          We believe there’s a perfect home for everybody, no matter the budget.
          <br />
          That’s why we always find the best homes for your budget.
        </p>

        {/* Images Section */}
        <div className="flex lg:flex-row flex-col justify-center items-center gap-6 mx-auto py-[88px]">
          <Image
            src="/6.png"
            alt="Testimonial 1"
            width={643}
            height={522}
            className="shadow-md rounded-xl w-full md:w-auto"
          />
          {/* ✅ Hide second image on mobile */}
          <Image
            src="/7.png"
            alt="Testimonial 2"
            width={421}
            height={522}
            className="hidden sm:block shadow-md rounded-xl w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
