import Image from "next/image";
import React from "react";
import dream1 from "../../../public/explore/dreem1.svg";
import dream2 from "../../../public/explore/dream2.svg";
import dream3 from "../../../public/explore/dream3.svg";
import dream4 from "../../../public/explore/dream4.svg";
import dreamhouseimage from "../../../public/explore/dreamhouseimage.png";
import Background from "../../../public/explore/Background.png";

export default function Explore() {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="max-w-[1232px] px-4 mx-auto">
        {/* mobile heading */}
        <h2 className="text-center md:text-start font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px] block md:hidden text-foreground mb-4">
          Explore & Find <br className="hidden md:block" /> your{" "}
          <br className="md:hidden" />
          <span className="text-primary-foreground">
            Dream
            <br className="hidden md:block" /> home
          </span>
        </h2>
        <div className="max-w-[1088px] mx-auto flex flex-col sm:flex-row justify-between gap-2.5">
          <div className="dreamImage flex flex-col md:flex-row justify-between gap-2">
            <div className="dreamHeadingr">
              <h2 className="hidden md:block font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px] text-foreground mb-4">
                Explore & Find <br className="hidden lg:block" /> your{" "}
                <span className="text-primary-foreground">
                  Dream
                  <br className="hidden md:block" /> home
                </span>
              </h2>
              <div className="relative w-fit mx-auto">
                <Image
                  src={dreamhouseimage}
                  alt="dreamhouseimage"
                  className=""
                />
                <div className="absolute left-0 top-full -translate-y-1/2 px-[19px] py-3 rounded-[8px] sm:rounded-[16px] bg-background">
                  <div className="flex">
                    <div className="w-fit rounded-full border-[2px] border-[#fff] bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)]">
                      <Image src={dream1} alt="dream1" />
                    </div>
                    <div className="w-fit rounded-full border-[2px] border-[#fff] bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)]">
                      <Image src={dream2} alt="dream2" />
                    </div>
                    <div className="w-fit rounded-full border-[2px] border-[#fff] bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)]">
                      <Image src={dream3} alt="dream3" />
                    </div>
                    <div className="w-fit rounded-full border-[2px] border-[#fff] bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)]">
                      <Image src={dream4} alt="dream4" />
                    </div>
                  </div>
                  <h6 className="text-[14px] font-normal leading-[19px] sm:leading-[21px] text-center mt-1 sm:mt-2">
                    200+ Happy Client
                  </h6>
                </div>
              </div>
            </div>
            <div className="dreamImage mx-auto">
              <Image src={Background} alt="Background" className="" />
            </div>
          </div>
          {/* text */}
          <div className="content max-w-full shrink-2 sm:max-w-[429px] p-3 sm:p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] bg-[#fff8f4] mt-12 sm:mt-0">
            <p className="text-[16px] leading-[22px] sm:leading-[24px] font-normal mb-16 sm:mb-20 lg:mb-22">
              “We believe there&#39;s a perfect home for everybody, no matter
              the budget. That&#39;s why we always find the best homes for your
              budget.”
            </p>
            <div className="flex gap-12 lg:gap-19 py-4 lg:py-6 border-y border-black/4">
              <div>
                <h2 className="font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px] mb-1">
                  $200M+
                </h2>
                <h6 className="text-[14px] font-semibold leading-[19px] sm:leading-[21px]">
                  Sold in Real Estate
                </h6>
              </div>
              <div>
                <h2 className="font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px] mb-1">
                  100+
                </h2>
                <p className="text-[14px] font-semibold leading-[19px] sm:leading-[21px]">
                  Property Sold
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-1 sm:gap-2 my-4 md:my-6">
              <li className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="inline-block w-[10px] h-[10px] bg-[#191a20] rounded-full"></span>
                Over 100k+ property & update regularly
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="inline-block w-[10px] h-[10px] bg-[#191a20] rounded-full"></span>
                Expert agent consultation
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="inline-block w-[10px] h-[10px] bg-[#191a20] rounded-full"></span>
                Loan & low Interest facility
              </li>
            </ul>
            <button className="text-[14px] font-normal leading-[19px] sm:leading-[21px] py-1 md:py-2 px-2 md:px-3 bg-[#191a20] text-white rounded-[4px] cursor-pointer">
              Browse Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
