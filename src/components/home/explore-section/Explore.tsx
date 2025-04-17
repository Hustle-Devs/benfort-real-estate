import Image from "next/image";
import React from "react";
import dream1 from "@/../public/explore/dreem1.svg";
import dream2 from "@/../public/explore/dream2.svg";
import dream3 from "@/../public/explore/dream3.svg";
import dream4 from "@/../public/explore/dream4.svg";
import dreamhouseimage from "@/../public/explore/dreamhouseimage.png";
import Background from "@/../public/explore/Background.png";

const Explore = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        {/* mobile heading */}
        <h2 className="md:hidden block mb-4 font-medium text-[26px] text-foreground sm:text-[32px] lg:text-[40px] text-center md:text-start leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
          Explore & Find <br className="hidden md:block" /> your{" "}
          <br className="md:hidden" />
          <span className="text-primary-foreground">
            Dream
            <br className="hidden md:block" /> home
          </span>
        </h2>
        <div className="flex sm:flex-row flex-col justify-between gap-2.5 mx-auto max-w-[1088px]">
          <div className="flex md:flex-row flex-col justify-between gap-2 dreamImage">
            <div className="dreamHeadingr">
              <h2 className="hidden md:block mb-4 font-medium text-[26px] text-foreground sm:text-[32px] lg:text-[40px] leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                Explore & Find <br className="hidden lg:block" /> your{" "}
                <span className="text-primary-foreground">
                  Dream
                  <br className="hidden md:block" /> home
                </span>
              </h2>
              <div className="relative mx-auto w-fit">
                <Image
                  src={dreamhouseimage}
                  alt="dreamhouseimage"
                  className=""
                />
                <div className="top-full left-0 absolute bg-background px-[19px] py-3 rounded-[8px] sm:rounded-[16px] -translate-y-1/2">
                  <div className="flex">
                    <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[#fff] border-[2px] rounded-full w-fit">
                      <Image src={dream1} alt="dream1" />
                    </div>
                    <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[#fff] border-[2px] rounded-full w-fit">
                      <Image src={dream2} alt="dream2" />
                    </div>
                    <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[#fff] border-[2px] rounded-full w-fit">
                      <Image src={dream3} alt="dream3" />
                    </div>
                    <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[#fff] border-[2px] rounded-full w-fit">
                      <Image src={dream4} alt="dream4" />
                    </div>
                  </div>
                  <h6 className="mt-1 sm:mt-2 font-normal text-[14px] text-center leading-[19px] sm:leading-[21px]">
                    200+ Happy Client
                  </h6>
                </div>
              </div>
            </div>
            <div className="mx-auto dreamImage">
              <Image src={Background} alt="Background" className="" />
            </div>
          </div>
          {/* text */}
          <div className="bg-card mt-12 sm:mt-0 p-3 sm:p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] max-w-full sm:max-w-[429px] content shrink-2">
            <p className="mb-16 sm:mb-20 lg:mb-22 font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              “We believe there&#39;s a perfect home for everybody, no matter
              the budget. That&#39;s why we always find the best homes for your
              budget.”
            </p>
            <div className="flex gap-12 lg:gap-19 py-4 lg:py-6 border-y border-black/4">
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
                <span className="inline-block rounded-full w-[10px] h-[10px] bg-text-foreground"></span>
                Over 100k+ property & update regularly
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="inline-block rounded-full w-[10px] h-[10px] bg-text-foreground"></span>
                Expert agent consultation
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="inline-block rounded-full w-[10px] h-[10px] bg-text-foreground"></span>
                Loan & low Interest facility
              </li>
            </ul>
            <button className="bg-foreground hover:bg-primary rounded-md text-background dark:hover:text-foreground btn">
              Browse Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
