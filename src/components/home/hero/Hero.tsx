import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-background text-center">
      <div className="mx-auto px-4 container">
        <div className="relative flex flex-col items-center pt-8 md:pt-12 lg:pt-[71px]">
          {/* Image Top for sm/md */}
          <FadeIn delay={0.1}>
            <div className="lg:hidden block mb-4">
              <Image
                src="/5.png"
                alt="Hero Icon"
                width={107}
                height={56}
                className="mx-auto w-[107px] h-[56px]"
              />
            </div>
          </FadeIn>

          {/* h1 + Positioned Image */}
          <FadeIn delay={0.2}>
            <div className="inline-block relative text-center">
              <h1 className="lg:-ml-[100px] h1">
                Find the <span className="text-primary">perfect</span>
              </h1>
              <h1 className="text-primary h1">
                property <span className="text-foreground">with Benfort</span>
              </h1>

              {/* Absolute image inside h1 for lg */}
              <div className="hidden lg:block top-10 -right-0 absolute hover:scale-105 transition-all -translate-y-1/2 duration-700 ease-in-out transform">
                <Image
                  src="/5.png"
                  alt="Hero Icon"
                  width={107}
                  height={56}
                  className="w-[107px] h-[56px]"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-[26px] max-w-[561px] text-secondary-foreground para">
            We believe there’s a perfect home for everybody, no matter the
            budget. That’s why we always find the best homes for your budget.
          </p>
        </FadeIn>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-6 mx-auto py-8 md:py-12 lg:py-[88px]">
          <FadeIn delay={0.5} noViewport>
            <Image
              src="/6.png"
              alt="Testimonial 1"
              width={643}
              height={522}
              className="shadow-md rounded-xl w-full md:w-[645px]"
            />
          </FadeIn>
          <FadeIn delay={0.7} noViewport>
            <Image
              src="/7.png"
              alt="Testimonial 2"
              width={421}
              height={522}
              className="hidden lg:block shadow-md rounded-xl w-full lg:w-[425px]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
