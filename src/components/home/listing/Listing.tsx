import React from "react";
import Cards from "./Cards";
import FadeIn from "@/components/animations/FadeIn";

const Listing = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="text-center listHeading">
          <FadeIn delay={0.2}>
            <h2 className="mb-1 sm:mb-2 lg:mb-4 text-primary leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              <span>New Listing</span>
            </h2>{" "}
          </FadeIn>{" "}
          <FadeIn delay={0.5}>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Explore latest & featured properties for sale.
            </p>{" "}
          </FadeIn>
        </div>
        <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 sm:mt-18 md:mt-20 lg:mt-26">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Listing;
