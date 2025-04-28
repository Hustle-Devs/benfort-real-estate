"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import dream1 from "@/../public/explore/dreem1.svg";
import dream2 from "@/../public/explore/dream2.svg";
import dream3 from "@/../public/explore/dream3.svg";
import dream4 from "@/../public/explore/dream4.svg";
import dreamhouseimage from "@/../public/explore/dreamhouseimage.png";
import Background from "@/../public/explore/Background.png";
import FadeIn from "@/components/animations/FadeIn";
import HappyClientsPopup from "./HappyClientPopup";

// Data arrays for DSA-driven rendering
const dreamIcons: { src: StaticImageData; alt: string }[] = [
  { src: dream1, alt: "dream1" },
  { src: dream2, alt: "dream2" },
  { src: dream3, alt: "dream3" },
  { src: dream4, alt: "dream4" },
];

const Explore: FC = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-2.5 mx-auto max-w-[1088px]">
          <div className="flex sm:flex-row flex-col justify-between gap-2 mx-auto max-w-fit">
            <div>
              <FadeIn delay={0.2}>
                <h2 className="mb-4 font-medium leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                  Explore & Find <br /> your{" "}
                  <span className="text-primary">
                    Dream
                    <br className="hidden sm:block" /> home
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="relative w-fit">
                  <Image src={dreamhouseimage} alt="Dream House" />
                  <HappyClientsPopup icons={dreamIcons} />
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div>
                <Image src={Background} alt="Background" />
              </div>
            </FadeIn>
          </div>

          {/* text section */}
          <FadeIn delay={0.5}>
            <div className="bg-card mx-auto sm:mt-12 lg:mt-0 p-3 sm:p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] max-w-[520px] sm:max-w-[644px] lg:max-w-[429px] shrink-0">
              <p className="mb-16 sm:mb-20 lg:mb-22 font-normal text-[16px] leading-[22px] sm:leading-[24px]">
                “We believe there&apos;s a perfect home for everybody, no matter
                the budget. That&apos;s why we always find the best homes for
                your budget.”
              </p>

              <div className="flex gap-12 lg:gap-19 py-4 lg:py-6 border-y border-border">
                <div>
                  <h2 className="mb-1 font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    $200M+
                  </h2>
                  <h6 className="font-semibold text-[14px] leading-[19px] sm:leading-[21px]">
                    Sold in Real Estate
                  </h6>
                </div>

                <div>
                  <h2 className="mb-1 font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    100+
                  </h2>
                  <p className="font-semibold text-[14px] leading-[19px] sm:leading-[21px]">
                    Property Sold
                  </p>
                </div>
              </div>

              <ul className="flex flex-col gap-1 sm:gap-2 my-4 md:my-6">
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-foreground rounded-full w-[10px] h-[10px]"></span>
                  Over 100k+ property & update regularly
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-foreground rounded-full w-[10px] h-[10px]"></span>
                  Expert agent consultation
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-foreground rounded-full w-[10px] h-[10px]"></span>
                  Loan & low Interest facility
                </li>
              </ul>

              <button className="bg-foreground hover:bg-primary rounded-md text-background dark:hover:text-foreground cursor-pointer btn">
                Browse Listings
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Explore;
