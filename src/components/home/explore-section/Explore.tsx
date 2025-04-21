import Image from "next/image";
import React from "react";
import dream1 from "@/../public/explore/dreem1.svg";
import dream2 from "@/../public/explore/dream2.svg";
import dream3 from "@/../public/explore/dream3.svg";
import dream4 from "@/../public/explore/dream4.svg";
import dreamhouseimage from "@/../public/explore/dreamhouseimage.png";
import Background from "@/../public/explore/Background.png";
import FadeIn from "@/components/animations/FadeIn";

const Explore = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="flex lg:flex-row flex-col justify-between gap-2.5 mx-auto max-w-[1088px]">
          <div className="flex sm:flex-row flex-col justify-between gap-2 mx-auto max-w-fit dreamImage">
            <div className="dreamHeadingr">
              <FadeIn delay={0.2}>
                <h2 className="mb-4 font-medium text-[26px] text-foreground sm:text-[32px] lg:text-[40px] leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                  Explore & Find <br className="" /> your{" "}
                  <span className="text-primary">
                    Dream
                    <br className="hidden sm:block" /> home
                  </span>
                </h2>{" "}
              </FadeIn>
              <div className="relative w-fit">
                <FadeIn delay={0.8}>
                  <Image
                    src={dreamhouseimage}
                    alt="dreamhouseimage"
                    className=""
                  />
                </FadeIn>
                <div className="top-full left-0 absolute bg-card px-[19px] py-3 rounded-[8px] sm:rounded-[16px] -translate-y-1/2">
                  <div className="flex">
                    <div className="shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-white rounded-full w-fit">
                      <FadeIn delay={0.8}>
                        <Image src={dream1} alt="dream1" />
                      </FadeIn>
                    </div>
                    <div className="shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-white rounded-full w-fit">
                      <FadeIn delay={0.8}>
                        <Image src={dream2} alt="dream2" />
                      </FadeIn>
                    </div>
                    <div className="shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-white rounded-full w-fit">
                      <FadeIn delay={0.8}>
                        <Image src={dream3} alt="dream3" />
                      </FadeIn>
                    </div>
                    <div className="shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-white rounded-full w-fit">
                      <FadeIn delay={0.8}>
                        <Image src={dream4} alt="dream4" />
                      </FadeIn>
                    </div>
                  </div>
                  <FadeIn delay={0.2}>
                    <h6 className="mt-1 sm:mt-2 font-normal text-[14px] text-center leading-[19px] sm:leading-[21px]">
                      300+ Happy Client
                    </h6>
                  </FadeIn>
                </div>
              </div>
            </div>
            <div className="dreamImage">
              {" "}
              <FadeIn delay={0.8}>
                <Image src={Background} alt="Background" className="" />
              </FadeIn>
            </div>
          </div>
          {/* text */}
          <div className="bg-card mx-auto sm:mt-12 lg:mt-0 p-3 sm:p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] max-w-[520px] sm:max-w-[644px] lg:max-w-[429px] content shrink-3">
            <FadeIn delay={0.5}>
              {" "}
              <p className="mb-16 sm:mb-20 lg:mb-22 font-normal text-[16px] leading-[22px] sm:leading-[24px]">
                “We believe there&#39;s a perfect home for everybody, no matter
                the budget. That&#39;s why we always find the best homes for
                your budget.”
              </p>
            </FadeIn>
            <div className="flex gap-12 lg:gap-19 py-4 lg:py-6 border-y border-black/4">
              <div>
                <FadeIn delay={0.2}>
                  <h2 className="mb-1 font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    $200M+
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h6 className="font-semibold text-[14px] leading-[19px] sm:leading-[21px]">
                    Sold in Real Estate
                  </h6>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.2}>
                  <h2 className="mb-1 font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    100+
                  </h2>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p className="font-semibold text-[14px] leading-[19px] sm:leading-[21px]">
                    Property Sold
                  </p>
                </FadeIn>
              </div>
            </div>
            <ul className="flex flex-col gap-1 sm:gap-2 my-4 md:my-6">
              <FadeIn delay={0.8}>
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
              </FadeIn>
            </ul>{" "}
            <FadeIn delay={0.8}>
              <button className="bg-foreground hover:bg-primary rounded-md text-background dark:hover:text-foreground cursor-pointer btn">
                Browse Listings
              </button>{" "}
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
