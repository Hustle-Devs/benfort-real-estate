import Image from "next/image";
import React from "react";

import mapwhite from "@/../public/featured/mapwhite.svg";
import fbook from "@/../public/featured/fbooks.svg";

import FadeIn from "@/components/animations/FadeIn";
import StaggerWrapper from "@/components/animations/StaggerWrapper";
import { featuredData } from "@/constants/home/features-data";

const Featured = () => {
  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px] myContizer">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[28px] text-primary sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              <span>Featured Properties</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Explore highlighted properties.
            </p>
          </FadeIn>
        </div>

        <StaggerWrapper
          className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 mt-14 sm:mt-18 md:mt-20 lg:mt-26"
          stagger={0.5}
          duration={0.6}
        >
          {featuredData.map((feature) => (
            <div className="relative w-full" key={feature.id}>
              <div className="rounded-[12px] w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt="featuredimg"
                  className="w-full"
                />
              </div>

              <div className="bottom-0 left-0 absolute bg-gradient-to-b from-[#191a2000] to-[#191a20] p-2 sm:p-3 lg:p-4 pt-12 pb-[18px] w-full font-light text-sm">
                <h5 className="mb-2 lg:mb-3 font-normal text-[16px] text-white lg:text-[18px] leading-[27px]">
                  {feature.villa}
                </h5>
                <ul className="flex items-center gap-2 text-white">
                  <li className="flex items-center gap-1">
                    <Image src={mapwhite} alt="location" className="" />

                    <p className="text-[#f4f4f4] text-[14px] leading-[16px] sm:leading-[18px]">
                      {feature.locate}
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="bg-[#f5f5f5] rounded-full w-2.5 h-2.5"></span>
                  </li>
                  <li className="flex items-center gap-1">
                    <Image src={fbook} alt="fbook" />
                    <p className="text-[#f4f4f4] text-[14px] leading-[16px] sm:leading-[18px]">
                      {feature.vCount}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
};
export default Featured;
