"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { BedDouble, SquareChevronRight } from "lucide-react";
import property1 from "@/../public/property/Property1.png";
import property2 from "@/../public/property/Property2.png";
import property3 from "@/../public/property/Property3.png";
import property4 from "@/../public/property/Property4.png";
import property5 from "@/../public/property/Property5.png";
import agents from "@/../public/property/agentFml.png";
import florediagram from "@/../public/property/florediagram.png";
import { listingData } from "@/constants/home/listing-data";

const properties = [
  {
    id: 1,
    agent: "Jessy King",
    image: property1,
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    title: "Luxury Loft",
    details: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering...`,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,
    roomType: ["Apartment", "Sales", "Joursy City"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "1",
    bathCount: "2",
    squareFit: "600 ft",
    price: 950000,
    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
];

const Properties = () => {
  const [activePlane, setActivePlane] = useState(1);
  const [filter, setFilter] = useState(false);
  // video
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="">
      <div className="mx-auto px-4 w-fit lg:max-w-[1456px]">
        <div className="flex gap-2 my-2">
          {/* sidebar toggle */}
          <button
            className="md:hidden top-1/2 left-0 fixed cursor-pointer"
            onClick={() => setFilter(!filter)}
          >
            <SquareChevronRight size={16} />
          </button>
          {/* pagination & profile */}
          <div
            className={`top-24 sticky flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-4 p-1 md:p-2 lg:p-3 xl:p-5 border border-border rounded-[8px] lg:rounded-[12px] w-fit max-h-[86vh] ${
              filter ? "" : "hidden md:flex"
            }`}
          >
            <Link
              href="/"
              className="group place-items-center grid hover:bg-foreground rounded-[8px] lg:rounded-[12px] w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"
            >
              <svg
                className="w-5 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999975 12.77 0.939975 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="group place-items-center grid hover:bg-foreground active:bg-foreground rounded-[8px] lg:rounded-[12px] w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"
            >
              <svg
                className="w-5 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_1860)">
                  <path
                    d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                    fill=""
                    className="fill-foreground group-hover:fill-background"
                  />
                  <path
                    d="M20.16 22.79C20.08 22.79 20 22.78 19.93 22.77C19.46 22.71 18.61 22.39 18.13 20.96C17.88 20.21 17.97 19.46 18.38 18.89C18.79 18.32 19.48 18 20.27 18C21.29 18 22.09 18.39 22.45 19.08C22.81 19.77 22.71 20.65 22.14 21.5C21.43 22.57 20.66 22.79 20.16 22.79ZM19.56 20.49C19.73 21.01 19.97 21.27 20.13 21.29C20.29 21.31 20.59 21.12 20.9 20.67C21.19 20.24 21.21 19.93 21.14 19.79C21.07 19.65 20.79 19.5 20.27 19.5C19.96 19.5 19.73 19.6 19.6 19.77C19.48 19.94 19.46 20.2 19.56 20.49Z"
                    fill=""
                    className="fill-foreground group-hover:fill-background"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1860">
                    <rect
                      width="24"
                      height="24"
                      fill=""
                      className="fill-foreground group-hover:fill-background"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              href="/"
              className="group place-items-center grid hover:bg-foreground rounded-[8px] lg:rounded-[12px] w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"
            >
              <svg
                className="w-5 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0003 7.91002C17.9703 7.91002 17.9503 7.91002 17.9203 7.91002H17.8703C15.9803 7.85002 14.5703 6.39001 14.5703 4.59001C14.5703 2.75001 16.0703 1.26001 17.9003 1.26001C19.7303 1.26001 21.2303 2.76001 21.2303 4.59001C21.2203 6.40001 19.8103 7.86001 18.0103 7.92001C18.0103 7.91001 18.0103 7.91002 18.0003 7.91002ZM17.9003 2.75002C16.8903 2.75002 16.0703 3.57002 16.0703 4.58002C16.0703 5.57002 16.8403 6.37002 17.8303 6.41002C17.8403 6.40002 17.9203 6.40002 18.0103 6.41002C18.9803 6.36002 19.7303 5.56002 19.7403 4.58002C19.7403 3.57002 18.9203 2.75002 17.9003 2.75002Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M18.0105 15.2801C17.6205 15.2801 17.2305 15.2501 16.8405 15.1801C16.4305 15.1101 16.1605 14.7201 16.2305 14.3101C16.3005 13.9001 16.6905 13.6301 17.1005 13.7001C18.3305 13.9101 19.6305 13.6802 20.5005 13.1002C20.9705 12.7902 21.2205 12.4001 21.2205 12.0101C21.2205 11.6201 20.9605 11.2401 20.5005 10.9301C19.6305 10.3501 18.3105 10.1201 17.0705 10.3401C16.6605 10.4201 16.2705 10.1401 16.2005 9.73015C16.1305 9.32015 16.4005 8.93015 16.8105 8.86015C18.4405 8.57015 20.1305 8.88014 21.3305 9.68014C22.2105 10.2701 22.7205 11.1101 22.7205 12.0101C22.7205 12.9001 22.2205 13.7502 21.3305 14.3502C20.4205 14.9502 19.2405 15.2801 18.0105 15.2801Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M5.97047 7.91C5.96047 7.91 5.95047 7.91 5.95047 7.91C4.15047 7.85 2.74047 6.39 2.73047 4.59C2.73047 2.75 4.23047 1.25 6.06047 1.25C7.89047 1.25 9.39047 2.75 9.39047 4.58C9.39047 6.39 7.98047 7.85 6.18047 7.91L5.97047 7.16L6.04047 7.91C6.02047 7.91 5.99047 7.91 5.97047 7.91ZM6.07047 6.41C6.13047 6.41 6.18047 6.41 6.24047 6.42C7.13047 6.38 7.91047 5.58 7.91047 4.59C7.91047 3.58 7.09047 2.75999 6.08047 2.75999C5.07047 2.75999 4.25047 3.58 4.25047 4.59C4.25047 5.57 5.01047 6.36 5.98047 6.42C5.99047 6.41 6.03047 6.41 6.07047 6.41Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M5.96 15.2801C4.73 15.2801 3.55 14.9502 2.64 14.3502C1.76 13.7602 1.25 12.9101 1.25 12.0101C1.25 11.1201 1.76 10.2701 2.64 9.68014C3.84 8.88014 5.53 8.57015 7.16 8.86015C7.57 8.93015 7.84 9.32015 7.77 9.73015C7.7 10.1401 7.31 10.4201 6.9 10.3401C5.66 10.1201 4.35 10.3501 3.47 10.9301C3 11.2401 2.75 11.6201 2.75 12.0101C2.75 12.4001 3.01 12.7902 3.47 13.1002C4.34 13.6802 5.64 13.9101 6.87 13.7001C7.28 13.6301 7.67 13.9101 7.74 14.3101C7.81 14.7201 7.54 15.1101 7.13 15.1801C6.74 15.2501 6.35 15.2801 5.96 15.2801Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M12.0003 15.38C11.9703 15.38 11.9503 15.38 11.9203 15.38H11.8703C9.98031 15.32 8.57031 13.86 8.57031 12.06C8.57031 10.22 10.0703 8.72998 11.9003 8.72998C13.7303 8.72998 15.2303 10.23 15.2303 12.06C15.2203 13.87 13.8103 15.33 12.0103 15.39C12.0103 15.38 12.0103 15.38 12.0003 15.38ZM11.9003 10.22C10.8903 10.22 10.0703 11.04 10.0703 12.05C10.0703 13.04 10.8403 13.84 11.8303 13.88C11.8403 13.87 11.9203 13.87 12.0103 13.88C12.9803 13.83 13.7303 13.03 13.7403 12.05C13.7403 11.05 12.9203 10.22 11.9003 10.22Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M11.9993 22.76C10.7993 22.76 9.5993 22.45 8.6693 21.82C7.7893 21.23 7.2793 20.39 7.2793 19.49C7.2793 18.6 7.7793 17.74 8.6693 17.15C10.5393 15.91 13.4693 15.91 15.3293 17.15C16.2093 17.74 16.7193 18.58 16.7193 19.48C16.7193 20.37 16.2193 21.23 15.3293 21.82C14.3993 22.44 13.1993 22.76 11.9993 22.76ZM9.4993 18.41C9.0293 18.72 8.7793 19.11 8.7793 19.5C8.7793 19.89 9.0393 20.27 9.4993 20.58C10.8493 21.49 13.1393 21.49 14.4893 20.58C14.9593 20.27 15.2093 19.88 15.2093 19.49C15.2093 19.1 14.9493 18.72 14.4893 18.41C13.1493 17.5 10.8593 17.51 9.4993 18.41Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="group place-items-center grid hover:bg-foreground mb-12 rounded-[8px] lg:rounded-[12px] w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"
            >
              <svg
                className="w-5 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9998 10.2801C10.9798 10.2801 9.95976 10.1001 8.98976 9.75005C8.59976 9.61005 8.39976 9.18005 8.53976 8.79005C8.68976 8.40005 9.11976 8.20005 9.50976 8.34005C11.1198 8.92005 12.8898 8.92005 14.4998 8.34005C14.8898 8.20005 15.3198 8.40005 15.4598 8.79005C15.5998 9.18005 15.3998 9.61005 15.0098 9.75005C14.0398 10.1001 13.0198 10.2801 11.9998 10.2801Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M19.0703 22.75C18.5603 22.75 18.0003 22.6 17.4603 22.29L12.5803 19.58C12.2903 19.42 11.7203 19.42 11.4303 19.58L6.55031 22.29C5.56031 22.84 4.55031 22.9 3.78031 22.44C3.01031 21.99 2.57031 21.08 2.57031 19.95V5.86C2.57031 3.32 4.64031 1.25 7.18031 1.25H16.8303C19.3703 1.25 21.4403 3.32 21.4403 5.86V19.95C21.4403 21.08 21.0003 21.99 20.2303 22.44C19.8803 22.65 19.4803 22.75 19.0703 22.75ZM12.0003 17.96C12.4703 17.96 12.9303 18.06 13.3003 18.27L18.1803 20.98C18.6903 21.27 19.1603 21.33 19.4603 21.15C19.7603 20.97 19.9303 20.54 19.9303 19.95V5.86C19.9303 4.15 18.5303 2.75 16.8203 2.75H7.18031C5.47031 2.75 4.07031 4.15 4.07031 5.86V19.95C4.07031 20.54 4.24031 20.98 4.54031 21.15C4.84031 21.32 5.30031 21.27 5.82031 20.98L10.7003 18.27C11.0703 18.06 11.5303 17.96 12.0003 17.96Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M19.0703 22.75C18.5603 22.75 18.0003 22.6 17.4603 22.29L12.5803 19.58C12.2903 19.42 11.7203 19.42 11.4303 19.58L6.55031 22.29C5.56031 22.84 4.55031 22.9 3.78031 22.44C3.01031 21.99 2.57031 21.08 2.57031 19.95V5.86C2.57031 3.32 4.64031 1.25 7.18031 1.25H16.8303C19.3703 1.25 21.4403 3.32 21.4403 5.86V19.95C21.4403 21.08 21.0003 21.99 20.2303 22.44C19.8803 22.65 19.4803 22.75 19.0703 22.75ZM12.0003 17.96C12.4703 17.96 12.9303 18.06 13.3003 18.27L18.1803 20.98C18.6903 21.27 19.1603 21.33 19.4603 21.15C19.7603 20.97 19.9303 20.54 19.9303 19.95V5.86C19.9303 4.15 18.5303 2.75 16.8203 2.75H7.18031C5.47031 2.75 4.07031 4.15 4.07031 5.86V19.95C4.07031 20.54 4.24031 20.98 4.54031 21.15C4.84031 21.32 5.30031 21.27 5.82031 20.98L10.7003 18.27C11.0703 18.06 11.5303 17.96 12.0003 17.96Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
              </svg>
            </Link>

            {/* user profile */}
            <Link
              href=""
              className="group bottom-4 left-[50%] absolute place-items-center grid hover:bg-foreground rounded-[8px] lg:rounded-[12px] w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 translate-x-[-50%]"
            >
              <svg
                className="w-5 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
                <path
                  d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                  fill=""
                  className="fill-foreground group-hover:fill-background"
                />
              </svg>
            </Link>
          </div>
          {/* properties */}
          {properties.map((property) => (
            <div
              className="sm:px-4 md:px-2 lg:px-12 xl:px-16 sm:pt-6 md:pt-4 lg:pt-10 xl:pt-14 pb-8 sm:border border-border rounded-[8px] lg:rounded-[12px]"
              key={property.id}
            >
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                {/* images */}
                <div className="top-24 md:sticky flex flex-col gap-2 h-fit">
                  <Image
                    src={property.image}
                    alt="property1 image"
                    className="mx-auto rounded-[8px] lg:rounded-[12px] w-full"
                  />
                  <div className="gap-2 grid grid-cols-1 sm:grid-cols-2">
                    {property.thumbImage.map((thumb, i) => (
                      <div key={i}>
                        <Image
                          src={thumb}
                          alt="property2 image"
                          className="mx-auto rounded-[8px] lg:rounded-[12px] w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* details */}
                <div className="details">
                  <div className="flex flex-wrap justify-between items-center gap-4 w-full">
                    <div className="flex gap-1 lg:gap-2">
                      <span className="bg-popover px-2 lg:px-3 py-1 lg:py-1.5 rounded-[6px] font-normal text-[12px] text-foreground leading-[18px]">
                        {property.roomType[0]}
                      </span>
                      <span className="bg-popover px-2 lg:px-3 py-1 lg:py-1.5 rounded-[6px] font-normal text-[12px] text-foreground leading-[18px]">
                        {property.roomType[1]}
                      </span>
                      <span className="bg-popover px-2 lg:px-3 py-1 lg:py-1.5 rounded-[6px] font-normal text-[12px] text-foreground leading-[18px]">
                        {property.roomType[2]}
                      </span>
                    </div>
                    <span className="bg-popover p-1 lg:p-1.5">
                      <svg
                        width="17"
                        height="19"
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.63001 8.15711C7.78001 8.15711 6.93001 8.00711 6.12201 7.71511C5.79701 7.59911 5.63001 7.24011 5.74701 6.91511C5.87201 6.59011 6.23001 6.42411 6.55501 6.54011C7.89701 7.02411 9.37201 7.02411 10.713 6.54011C11.038 6.42411 11.397 6.59011 11.513 6.91511C11.63 7.24011 11.463 7.59911 11.138 7.71511C10.33 8.00711 9.48001 8.15711 8.63001 8.15711Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M14.522 18.5491C14.097 18.5491 13.63 18.4241 13.18 18.1651L9.114 15.9071C8.872 15.7741 8.397 15.7741 8.155 15.9071L4.089 18.1651C3.264 18.6241 2.422 18.6741 1.78 18.2901C1.139 17.9151 0.772003 17.1571 0.772003 16.2151V4.47408C0.772003 2.35708 2.497 0.63208 4.614 0.63208H12.655C14.772 0.63208 16.497 2.35708 16.497 4.47408V16.2151C16.497 17.1571 16.13 17.9151 15.489 18.2901C15.197 18.4651 14.864 18.5491 14.522 18.5491ZM8.63 14.5571C9.022 14.5571 9.405 14.6401 9.714 14.8151L13.78 17.0741C14.205 17.3151 14.597 17.3651 14.847 17.2151C15.097 17.0651 15.239 16.7071 15.239 16.2151V4.47408C15.239 3.04908 14.072 1.88208 12.647 1.88208H4.614C3.189 1.88208 2.022 3.04908 2.022 4.47408V16.2151C2.022 16.7071 2.164 17.0741 2.414 17.2151C2.664 17.3571 3.047 17.3151 3.48 17.0741L7.547 14.8151C7.855 14.6401 8.239 14.5571 8.63 14.5571Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M14.522 18.5491C14.097 18.5491 13.63 18.4241 13.18 18.1651L9.114 15.9071C8.872 15.7741 8.397 15.7741 8.155 15.9071L4.089 18.1651C3.264 18.6241 2.422 18.6741 1.78 18.2901C1.139 17.9151 0.772003 17.1571 0.772003 16.2151V4.47408C0.772003 2.35708 2.497 0.63208 4.614 0.63208H12.655C14.772 0.63208 16.497 2.35708 16.497 4.47408V16.2151C16.497 17.1571 16.13 17.9151 15.489 18.2901C15.197 18.4651 14.864 18.5491 14.522 18.5491ZM8.63 14.5571C9.022 14.5571 9.405 14.6401 9.714 14.8151L13.78 17.0741C14.205 17.3151 14.597 17.3651 14.847 17.2151C15.097 17.0651 15.239 16.7071 15.239 16.2151V4.47408C15.239 3.04908 14.072 1.88208 12.647 1.88208H4.614C3.189 1.88208 2.022 3.04908 2.022 4.47408V16.2151C2.022 16.7071 2.164 17.0741 2.414 17.2151C2.664 17.3571 3.047 17.3151 3.48 17.0741L7.547 14.8151C7.855 14.6401 8.239 14.5571 8.63 14.5571Z"
                          fill=""
                          className="fill-foreground"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <div className="flex flex-wrap justify-between items-center gap-12">
                      <h4 className="font-medium text-xl lg:text-2xl leading-[34px] tracking-[-1.4px]">
                        {property.title}
                      </h4>
                      <h6 className="font-medium text-[18px] lg:text-[20px] leading-[24px] md:tracking- [-1px]">
                        $ {property.price.toLocaleString()}
                      </h6>
                    </div>
                    <ul className="flex flex-wrap items-center gap-2 mt-2 mb-4 lg:mb-6">
                      <li className="flex items-center gap-1">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.0003 9.96802C6.58029 9.96802 5.42029 8.86958 5.42029 7.51085C5.42029 6.15212 6.58029 5.06006 8.0003 5.06006C9.4203 5.06006 10.5803 6.15847 10.5803 7.5172C10.5803 8.87591 9.4203 9.96802 8.0003 9.96802ZM8.0003 6.01244C7.13362 6.01244 6.42029 6.68545 6.42029 7.5172C6.42029 8.34897 7.12695 9.02196 8.0003 9.02196C8.87366 9.02196 9.5803 8.34897 9.5803 7.5172C9.5803 6.68545 8.86694 6.01244 8.0003 6.01244Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M8.00031 15.4218C7.01364 15.4218 6.0203 15.0662 5.24697 14.3615C3.2803 12.5583 1.10697 9.6821 1.92697 6.25989C2.66697 3.15512 5.51364 1.76465 8.00031 1.76465C8.00031 1.76465 8.00031 1.76465 8.00695 1.76465C10.4937 1.76465 13.3403 3.15512 14.0803 6.26623C14.8937 9.68842 12.7203 12.5583 10.7537 14.3615C9.98031 15.0662 8.98695 15.4218 8.00031 15.4218ZM8.00031 2.71703C6.0603 2.71703 3.56697 3.70115 2.90697 6.46941C2.18697 9.45985 4.1603 12.0377 5.94697 13.6694C7.1003 14.7297 8.90695 14.7297 10.0603 13.6694C11.8403 12.0377 13.8137 9.45985 13.107 6.46941C12.4403 3.70115 9.94031 2.71703 8.00031 2.71703Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>

                        <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                          {property.locate}
                        </p>
                      </li>
                      <li className="flex items-center gap-1">
                        <span className="bg-foreground rounded-full w-2.5 h-2.5"></span>
                      </li>
                      <li className="flex items-center gap-1">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_414)">
                            <path
                              d="M10.0302 15.6254H6.03026C2.41026 15.6254 0.863586 14.1524 0.863586 10.7048V6.89524C0.863586 3.44762 2.41026 1.97461 6.03026 1.97461H10.0302C13.6502 1.97461 15.197 3.44762 15.197 6.89524V10.7048C15.197 14.1524 13.6502 15.6254 10.0302 15.6254ZM6.03026 2.92699C2.95692 2.92699 1.86359 3.96826 1.86359 6.89524V10.7048C1.86359 13.6317 2.95692 14.673 6.03026 14.673H10.0302C13.1036 14.673 14.197 13.6317 14.197 10.7048V6.89524C14.197 3.96826 13.1036 2.92699 10.0302 2.92699H6.03026Z"
                              fill=""
                              className="fill-foreground"
                            />
                            <path
                              d="M6.02974 8.00647C5.01641 8.00647 4.19641 7.22551 4.19641 6.26044C4.19641 5.29536 5.01641 4.5144 6.02974 4.5144C7.04307 4.5144 7.86307 5.29536 7.86307 6.26044C7.86307 7.22551 7.04307 8.00647 6.02974 8.00647ZM6.02974 5.46679C5.56974 5.46679 5.19641 5.82234 5.19641 6.26044C5.19641 6.69853 5.56974 7.05408 6.02974 7.05408C6.48974 7.05408 6.86307 6.69853 6.86307 6.26044C6.86307 5.82234 6.48974 5.46679 6.02974 5.46679Z"
                              fill=""
                              className="fill-foreground"
                            />
                            <path
                              d="M1.80999 13.689C1.64999 13.689 1.48999 13.6128 1.39666 13.4794C1.24332 13.2635 1.30332 12.9651 1.53666 12.8191L4.82332 10.7175C5.54332 10.254 6.53666 10.3111 7.18999 10.8381L7.40999 11.0223C7.74332 11.2953 8.31001 11.2953 8.63665 11.0223L11.41 8.75563C12.1166 8.17781 13.23 8.17781 13.9433 8.75563L15.03 9.64446C15.2366 9.81589 15.2633 10.1143 15.0833 10.3175C14.9033 10.5143 14.59 10.5397 14.3766 10.3683L13.29 9.47943C12.9566 9.20637 12.39 9.20637 12.0566 9.47943L9.28329 11.7461C8.57665 12.3239 7.46332 12.3239 6.74999 11.7461L6.52999 11.5619C6.22332 11.3143 5.71666 11.289 5.37666 11.5111L2.08999 13.6128C2.00332 13.6635 1.90332 13.689 1.80999 13.689Z"
                              fill=""
                              className="fill-foreground"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_414">
                              <rect
                                width="16"
                                height="16"
                                fill=""
                                className="fill-foreground"
                                transform="translate(0.0299988 0.800049)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                          {property.roomCount}
                        </p>
                      </li>
                    </ul>
                    <ul className="flex flex-wrap items-center gap-2 lg:gap-3 mb-2 sm:mb-3">
                      <li className="flex items-center gap-1">
                        <BedDouble
                          size={16}
                          strokeWidth={1.25}
                          absoluteStrokeWidth
                          className="text-foreground"
                        />
                        <p className="font-normal text-[12px] leading-[18px]">
                          {property.bedCount} Room
                        </p>
                      </li>
                      <li className="flex items-center gap-1">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.9467 10.1333H1.61334V12.8C1.61334 13.5364 2.2103 14.1333 2.94668 14.1333H13.6133C14.3497 14.1333 14.9467 13.5364 14.9467 12.8V10.1333Z"
                            stroke=""
                            className="stroke-foreground"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.94666 14.8H13.6133"
                            stroke=""
                            className="stroke-foreground"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.6133 10.1334V3.74286C13.6133 3.22216 13.1912 2.80005 12.6705 2.80005C12.4205 2.80005 12.1807 2.89938 12.0039 3.07619L10.28 4.80005"
                            stroke=""
                            className="stroke-foreground"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.61333 5.46672C4.34971 5.46672 4.94667 4.86976 4.94667 4.13338C4.94667 3.397 4.34971 2.80005 3.61333 2.80005C2.87695 2.80005 2.28 3.397 2.28 4.13338C2.28 4.86976 2.87695 5.46672 3.61333 5.46672Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M10.2059 6.05948C10.336 6.18966 10.5516 6.19095 10.6455 6.03262C10.7666 5.82844 10.8321 5.59378 10.8321 5.35238C10.8321 4.99875 10.6916 4.65962 10.4415 4.40956C10.1915 4.15952 9.8524 4.01904 9.49873 4.01904C9.25733 4.01904 9.02267 4.08451 8.81853 4.20561C8.6602 4.29953 8.66147 4.51509 8.79167 4.64527L9.49873 5.35238L10.2059 6.05948Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M2.61332 10.1334L2.4649 8.64918C2.36589 7.65912 3.14336 6.80005 4.13835 6.80005C4.64925 6.80005 5.13245 7.03229 5.4516 7.43124L7.61332 10.1334"
                            stroke=""
                            className="stroke-foreground"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <p className="font-normal text-[12px] leading-[18px]">
                          {property.bathCount} Bath Room
                        </p>
                      </li>
                      <li className="flex items-center gap-1">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_455)">
                            <path
                              d="M12.7767 12.6335H3.44333C1.83 12.6335 0.943329 11.7468 0.943329 10.1335V7.4668C0.943329 5.85346 1.83 4.9668 3.44333 4.9668H12.7767C14.39 4.9668 15.2767 5.85346 15.2767 7.4668V10.1335C15.2767 11.7468 14.39 12.6335 12.7767 12.6335ZM3.44333 5.9668C2.39 5.9668 1.94333 6.41346 1.94333 7.4668V10.1335C1.94333 11.1868 2.39 11.6335 3.44333 11.6335H12.7767C13.83 11.6335 14.2767 11.1868 14.2767 10.1335V7.4668C14.2767 6.41346 13.83 5.9668 12.7767 5.9668H3.44333Z"
                              fill=""
                              className="fill-foreground"
                            />
                            <path
                              d="M12.11 9.30013C11.8367 9.30013 11.61 9.07346 11.61 8.80013V5.4668C11.61 5.19346 11.8367 4.9668 12.11 4.9668C12.3833 4.9668 12.61 5.19346 12.61 5.4668V8.80013C12.61 9.07346 12.3833 9.30013 12.11 9.30013Z"
                              fill=""
                              className="fill-foreground"
                            />
                            <path
                              d="M4.10999 8.63346C3.83665 8.63346 3.60999 8.4068 3.60999 8.13346V5.4668C3.60999 5.19346 3.83665 4.9668 4.10999 4.9668C4.38332 4.9668 4.60999 5.19346 4.60999 5.4668V8.13346C4.60999 8.4068 4.38332 8.63346 4.10999 8.63346Z"
                              fill=""
                              className="fill-foreground"
                            />
                            <path
                              d="M6.77664 9.30013C6.49664 9.30013 6.27664 9.07346 6.27664 8.79346L6.30998 5.46013C6.30998 5.1868 6.53664 4.9668 6.80998 4.9668C6.80998 4.9668 6.80998 4.9668 6.81664 4.9668C7.08998 4.9668 7.31664 5.19346 7.30998 5.47346L7.27664 8.8068C7.27664 9.08013 7.04998 9.30013 6.77664 9.30013Z"
                              fill=""
                              className="fill-foreground"
                            />
                            <path
                              d="M9.44333 7.9668C9.17 7.9668 8.94333 7.74013 8.94333 7.4668V5.4668C8.94333 5.19346 9.17 4.9668 9.44333 4.9668C9.71666 4.9668 9.94333 5.19346 9.94333 5.4668V7.4668C9.94333 7.74013 9.71666 7.9668 9.44333 7.9668Z"
                              fill=""
                              className="fill-foreground"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_455">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0.109985 0.800049)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <p className="font-normal text-[12px] leading-[18px]">
                          {property.squareFit}
                        </p>
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 my-7 md:my-10 lg:my-12">
                      <Image src={property.agentImg} alt="agentFml image" />
                      <div>
                        <h6>{property.agent}</h6>
                        <p className="text-foreground/60">view Profile</p>
                      </div>
                    </div>
                    <p className="text-[12px]">DESCRIPTIONS</p>
                    <p className="mt-3 lg:mt-4 text-[14px]">
                      {(() => {
                        const text = property.description;
                        let dotCount = 0;
                        let splitIndex = -1;

                        for (let i = 0; i < text.length; i++) {
                          if (text[i] === ".") {
                            dotCount++;
                            if (dotCount === 3) {
                              splitIndex = i + 1; // right after 3rd dot
                              break;
                            }
                          }
                        }

                        if (splitIndex === -1) return text; // if fewer than 3 dots

                        const firstPart = text.slice(0, splitIndex);
                        const secondPart = text.slice(splitIndex);

                        return (
                          <>
                            {firstPart}
                            <br />
                            <br />
                            {secondPart}
                          </>
                        );
                      })()}
                    </p>
                    {/* address */}
                    <div className="mt-8 lg:mt-12 address">
                      <p className="mb-4 text-[12px]">ADDRESS</p>
                      <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-5">
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Area/Landmark
                            </p>
                            <h6 className="text-[14px]">
                              {property.address.area}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Address
                            </p>
                            <h6 className="text-[14px]">
                              {property.address.Address}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              City
                            </p>
                            <h6 className="text-[14px]">
                              {property.address.city}
                            </h6>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              State/County
                            </p>
                            <h6 className="text-[14px]">
                              {property.address.State}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              ZIP
                            </p>
                            <h6 className="text-[14px]">
                              {property.address.zip}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Country
                            </p>
                            <h6 className="text-[14px]">
                              {property.address.country}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Details */}
                    <div className="mt-8 lg:mt-12 address">
                      <p className="mb-4 text-[12px]">DETAILS</p>
                      <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-5">
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Property Id
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.PropertyId}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Price Info
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.priceInfo} / sq ft
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Property Lot Size
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.lotSize} ft<sup>2</sup>
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Bed Rooms
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.bedRooms} Room
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Garages
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.garages}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Garages Size
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.garageSize}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Struture Type
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.structure}
                            </h6>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Price
                            </p>
                            <h6 className="text-[14px]">
                              ${" "}
                              {property.propertyDetails.price.toLocaleString()}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Property Size
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.propertySize} ft{" "}
                              <sup>2</sup>
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Rooms
                            </p>
                            <h6 className="text-[14px]">
                              0{property.propertyDetails.rooms}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Bathrooms
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.bathrooms} Bathroom
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Year Build
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.year}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Availeable Form
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.form}
                            </h6>
                          </div>
                          <div className="">
                            <p className="opacity-[0.4] mb-1 text-[12px]">
                              Floors No.
                            </p>
                            <h6 className="text-[14px]">
                              {property.propertyDetails.floores}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* amenities & features */}
              <div className="mt-8 lg:mt-12 amenities">
                <p className="mb-4 text-[12px]">AMENITIES & FEATURES</p>
                <div className="gap-6 lg:gap-8 grid grid-cols-2">
                  <div>
                    <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                      Interior Details
                    </p>
                    <ul className="mt-4">
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Equipped Kitchen
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Gym
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Landry
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Media Room
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                      Outdoor Details
                    </p>
                    <ul className="mt-4">
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Patio
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Outdoor Fireplace
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Gazebo
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Outdoor Dining Area
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Pergola
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Garden Pathways
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="gap-6 lg:gap-8 grid grid-cols-2 mt-6 lg:mt-8">
                  {/* Utilities */}
                  <div>
                    <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                      Utilities
                    </p>
                    <ul className="mt-4">
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Central Air
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Electricity
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Heating
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Natural Gas
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Ventilation
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Water
                      </li>
                    </ul>
                  </div>
                  {/* Other Features */}
                  <div>
                    <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                      Other Features
                    </p>
                    <ul className="mt-4">
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Fire Pit
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Vegetable Garden
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Treehouse
                      </li>
                      <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                        Outdoor Shower
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 lg:gap-14">
                {/* flooer plans */}
                <div className="items-center gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-15 florplans">
                  <div className="planText">
                    <p className="text-[12px]">FLORE PLANS</p>
                    <div className="hidden md:block py-3 lg:py-5 text-[14px]">
                      <p className={`${activePlane === 1 ? "" : "hidden"}`}>
                        Living Spaces are more easily interpreted. All-In-Ones
                        color floor plan option clearly defines your listing’s
                        living spaces, making them obvious and clearly visible
                        to your potential buyers/clients. Add extra value to
                        your services. Color floor-plans show that you care
                        about selling your client’s listing; they add a premium,
                        high value look to any listing and can be used in your
                        brochures, email and websites.
                      </p>
                      <p className={`${activePlane === 2 ? "" : "hidden"}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quasi repellat repudiandae quod cupiditate. Vero
                        quos, dicta accusamus laboriosam corrupti quod ipsam
                        earum reprehenderit invepsa nisi nobis illo vitae?
                        Tenetur eligendi laborum molestiae molestias provident
                        autem officiis sint, quis nostrum ex quibusdam rem sequi
                        quo earum nisi! Deserunt, unde totam!
                      </p>
                      <p className={`${activePlane === 3 ? "" : "hidden"}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ratione at iste repudiandae a laborum inventore
                        magni labore commodi sint nostrum vero quia architecto,
                        enim soluta vitae sequi. Cumque tempora libero corrupti
                        aperiam fugit neque repellat amet itaque, maiores, ipsa
                        enim architecto reiciendis ob minima! Maiores facilis
                        distinctio libero quas dolorum.
                      </p>
                    </div>
                    {/* button */}
                    <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-6 md:mt-0 planningbtn">
                      <button
                        className={`cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] lg:rounded-[8px] text-[12px] ${
                          activePlane === 1
                            ? "bg-foreground text-background"
                            : "bg-transparent border border-foreground text-foreground"
                        }`}
                        onClick={() => setActivePlane(1)}
                      >
                        Ground Floor Plane
                      </button>
                      <button
                        className={`cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] lg:rounded-[8px] text-[12px] ${
                          activePlane === 2
                            ? "bg-foreground text-background"
                            : "bg-transparent border border-foreground text-foreground"
                        }`}
                        onClick={() => setActivePlane(2)}
                      >
                        First Floor Plane
                      </button>
                      <button
                        className={`cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] lg:rounded-[8px] text-[12px] ${
                          activePlane === 3
                            ? "bg-foreground text-background"
                            : "bg-transparent border border-foreground text-foreground"
                        }`}
                        onClick={() => setActivePlane(3)}
                      >
                        Second Floor Plane
                      </button>
                    </div>
                  </div>
                  <div className="planDiagram">
                    <Image
                      src={florediagram}
                      alt="florediagram image"
                      placeholder="blur"
                      className={`${activePlane === 1 ? "" : "hidden"} w-full`}
                    />
                    <Image
                      src={florediagram}
                      alt="florediagram image"
                      placeholder="blur"
                      className={`grayscale-50 ${
                        activePlane === 2 ? "" : "hidden"
                      } w-full`}
                    />
                    <Image
                      src={florediagram}
                      alt="florediagram image"
                      placeholder="blur"
                      className={`grayscale-100 ${
                        activePlane === 3 ? "" : "hidden"
                      } w-full`}
                    />
                    {/* description */}
                    <div className="md:hidden py-3 lg:py-5 text-[14px]">
                      <p className={`${activePlane === 1 ? "" : "hidden"}`}>
                        Living Spaces are more easily interpreted. All-In-Ones
                        color floor plan option clearly defines your listing’s
                        living spaces, making them obvious and clearly visible
                        to your potential buyers/clients. Add extra value to
                        your services. Color floor-plans show that you care
                        about selling your client’s listing; they add a premium,
                        high value look to any listing and can be used in your
                        brochures, email and websites.
                      </p>
                      <p className={`${activePlane === 2 ? "" : "hidden"}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quasi repellat repudiandae quod cupiditate. Vero
                        quos, dicta accusamus laboriosam corrupti quod ipsam
                        earum reprehenderit inventore natus aut corporis ratione
                        autem nesciunt nisi temporibus pariatur. Veniam dolorem
                        asperiores quo eum, consenisi nobis illo vitae? Tenetur
                        eligendi laborum molestiae molestias provident autem
                        officiis sint, quis nostrum ex quibusdam rem sequi quo
                        earum nisi! Deserunt, unde totam!
                      </p>
                      <p className={`${activePlane === 3 ? "" : "hidden"}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ratione at iste repudiandae a laborum inventore
                        magni labore commodi sint nostrum vero quia architecto,
                        enim soluta vitae sequi. Cumque tempora libero corrupti
                        aperiam fugit neque repellat amet itaque, maiores, ipsa
                        enim architecto reiciendis obcaecati quibusdam ipsam
                        deleniti? Deserunt odio aperiam quae ipsa soluta aut
                        minima! Maiores facilis distinctio libero quas dolorum.
                      </p>
                    </div>
                  </div>
                </div>
                {/* video */}
                <div className="w-full">
                  <p className="mb-4 text-[12px]">VIDEO</p>
                  <div className="relative rounded-[8px] lg:rounded-[12px] overflow-hidden">
                    <video
                      ref={videoRef}
                      src="/property/propertiesvideo.mp4"
                      loop
                      muted
                      className="w-full aspect-[16/9]"
                    >
                      Your browser does not support the video tag.
                    </video>
                    {!playing && (
                      <div
                        className="z-10 absolute inset-0 place-items-center grid bg-[url('/property/videothumb.png')] bg-cover bg-center cursor-pointer"
                        onClick={handlePlay}
                      >
                        <svg
                          className="group w-16 h-12"
                          viewBox="0 0 68 48"
                          version="1.1"
                        >
                          <path
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 
              C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 
              C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24
              S67.94,13.05,66.52,7.74z"
                            fill=""
                            className="fill-foreground/80"
                            fillOpacity="1"
                            style={{
                              transition:
                                "fill 0.1s cubic-bezier(0.4, 0, 1, 1), fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1)",
                            }}
                          />
                          <path
                            d="M 45,24 27,14 27,34"
                            className="fill-white group-hover:fill-destructive transition-all"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {/* map */}
                <div>
                  <p className="mb-4 text-[12px]">MAP</p>
                  <div className="rounded-[8px] lg:rounded-[12px] w-full overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps?q=52.37589,4.89131&hl=es;z=14&output=embed"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full aspect-[19/9]"
                    ></iframe>
                  </div>
                </div>

                {/* SIMILAR PROPERTIES */}
                <div className="">
                  <p className="mb-4 text-[12px]">SIMILAR PROPERTIES</p>
                  <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cardContainer">
                    {listingData.slice(0, 3).map((card) => (
                      <div
                        className="mx-auto pb-4 lg:pb-6 w-full perkCard"
                        key={card.id}
                      >
                        <div className="relative w-full">
                          <Image
                            src={card.image}
                            alt="propertyImg1 image"
                            placeholder="blur"
                            className="w-full"
                          />
                          <div className="top-0 left-0 absolute flex justify-between gap-2 lg:gap-4 p-2 md:p-3 lg:p-5 w-full h-full font-light text-sm">
                            <div className="flex justify-between items-end gap-4 w-full">
                              <div className="flex gap-1 lg:gap-2">
                                <div className="bg-popover px-2 lg:px-3 py-1 lg:py-1.5 rounded-[6px] font-normal text-[12px] text-foreground leading-[18px]">
                                  {card.roomType[0]}
                                </div>
                                <div className="bg-popover px-2 lg:px-3 py-1 lg:py-1.5 rounded-[6px] font-normal text-[12px] text-foreground leading-[18px]">
                                  {card.roomType[1]}
                                </div>
                              </div>
                              <span className="bg-popover p-1 lg:p-1.5">
                                <svg
                                  width="17"
                                  height="19"
                                  viewBox="0 0 17 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.63001 8.15711C7.78001 8.15711 6.93001 8.00711 6.12201 7.71511C5.79701 7.59911 5.63001 7.24011 5.74701 6.91511C5.87201 6.59011 6.23001 6.42411 6.55501 6.54011C7.89701 7.02411 9.37201 7.02411 10.713 6.54011C11.038 6.42411 11.397 6.59011 11.513 6.91511C11.63 7.24011 11.463 7.59911 11.138 7.71511C10.33 8.00711 9.48001 8.15711 8.63001 8.15711Z"
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M14.522 18.5491C14.097 18.5491 13.63 18.4241 13.18 18.1651L9.114 15.9071C8.872 15.7741 8.397 15.7741 8.155 15.9071L4.089 18.1651C3.264 18.6241 2.422 18.6741 1.78 18.2901C1.139 17.9151 0.772003 17.1571 0.772003 16.2151V4.47408C0.772003 2.35708 2.497 0.63208 4.614 0.63208H12.655C14.772 0.63208 16.497 2.35708 16.497 4.47408V16.2151C16.497 17.1571 16.13 17.9151 15.489 18.2901C15.197 18.4651 14.864 18.5491 14.522 18.5491ZM8.63 14.5571C9.022 14.5571 9.405 14.6401 9.714 14.8151L13.78 17.0741C14.205 17.3151 14.597 17.3651 14.847 17.2151C15.097 17.0651 15.239 16.7071 15.239 16.2151V4.47408C15.239 3.04908 14.072 1.88208 12.647 1.88208H4.614C3.189 1.88208 2.022 3.04908 2.022 4.47408V16.2151C2.022 16.7071 2.164 17.0741 2.414 17.2151C2.664 17.3571 3.047 17.3151 3.48 17.0741L7.547 14.8151C7.855 14.6401 8.239 14.5571 8.63 14.5571Z"
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M14.522 18.5491C14.097 18.5491 13.63 18.4241 13.18 18.1651L9.114 15.9071C8.872 15.7741 8.397 15.7741 8.155 15.9071L4.089 18.1651C3.264 18.6241 2.422 18.6741 1.78 18.2901C1.139 17.9151 0.772003 17.1571 0.772003 16.2151V4.47408C0.772003 2.35708 2.497 0.63208 4.614 0.63208H12.655C14.772 0.63208 16.497 2.35708 16.497 4.47408V16.2151C16.497 17.1571 16.13 17.9151 15.489 18.2901C15.197 18.4651 14.864 18.5491 14.522 18.5491ZM8.63 14.5571C9.022 14.5571 9.405 14.6401 9.714 14.8151L13.78 17.0741C14.205 17.3151 14.597 17.3651 14.847 17.2151C15.097 17.0651 15.239 16.7071 15.239 16.2151V4.47408C15.239 3.04908 14.072 1.88208 12.647 1.88208H4.614C3.189 1.88208 2.022 3.04908 2.022 4.47408V16.2151C2.022 16.7071 2.164 17.0741 2.414 17.2151C2.664 17.3571 3.047 17.3151 3.48 17.0741L7.547 14.8151C7.855 14.6401 8.239 14.5571 8.63 14.5571Z"
                                    className="fill-foreground"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 lg:mt-4 max-w-[384px]">
                          <h5 className="mb-2 font-normal text-[18px] leading-[25px] sm:leading-[27px]">
                            {card.title}
                          </h5>
                          <ul className="flex flex-wrap items-center gap-2">
                            <li className="flex items-center gap-1">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.0003 9.96802C6.58029 9.96802 5.42029 8.86958 5.42029 7.51085C5.42029 6.15212 6.58029 5.06006 8.0003 5.06006C9.4203 5.06006 10.5803 6.15847 10.5803 7.5172C10.5803 8.87591 9.4203 9.96802 8.0003 9.96802ZM8.0003 6.01244C7.13362 6.01244 6.42029 6.68545 6.42029 7.5172C6.42029 8.34897 7.12695 9.02196 8.0003 9.02196C8.87366 9.02196 9.5803 8.34897 9.5803 7.5172C9.5803 6.68545 8.86694 6.01244 8.0003 6.01244Z"
                                  fill=""
                                  className="fill-foreground"
                                />
                                <path
                                  d="M8.00031 15.4218C7.01364 15.4218 6.0203 15.0662 5.24697 14.3615C3.2803 12.5583 1.10697 9.6821 1.92697 6.25989C2.66697 3.15512 5.51364 1.76465 8.00031 1.76465C8.00031 1.76465 8.00031 1.76465 8.00695 1.76465C10.4937 1.76465 13.3403 3.15512 14.0803 6.26623C14.8937 9.68842 12.7203 12.5583 10.7537 14.3615C9.98031 15.0662 8.98695 15.4218 8.00031 15.4218ZM8.00031 2.71703C6.0603 2.71703 3.56697 3.70115 2.90697 6.46941C2.18697 9.45985 4.1603 12.0377 5.94697 13.6694C7.1003 14.7297 8.90695 14.7297 10.0603 13.6694C11.8403 12.0377 13.8137 9.45985 13.107 6.46941C12.4403 3.70115 9.94031 2.71703 8.00031 2.71703Z"
                                  fill=""
                                  className="fill-foreground"
                                />
                              </svg>

                              <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                                {card.locate}
                              </p>
                            </li>

                            <li className="">
                              <span className="block bg-foreground rounded-full w-2.5 h-2.5"></span>
                            </li>

                            <li className="flex items-center gap-1">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_2_414)">
                                  <path
                                    d="M10.0302 15.6254H6.03026C2.41026 15.6254 0.863586 14.1524 0.863586 10.7048V6.89524C0.863586 3.44762 2.41026 1.97461 6.03026 1.97461H10.0302C13.6502 1.97461 15.197 3.44762 15.197 6.89524V10.7048C15.197 14.1524 13.6502 15.6254 10.0302 15.6254ZM6.03026 2.92699C2.95692 2.92699 1.86359 3.96826 1.86359 6.89524V10.7048C1.86359 13.6317 2.95692 14.673 6.03026 14.673H10.0302C13.1036 14.673 14.197 13.6317 14.197 10.7048V6.89524C14.197 3.96826 13.1036 2.92699 10.0302 2.92699H6.03026Z"
                                    fill=""
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M6.02974 8.00647C5.01641 8.00647 4.19641 7.22551 4.19641 6.26044C4.19641 5.29536 5.01641 4.5144 6.02974 4.5144C7.04307 4.5144 7.86307 5.29536 7.86307 6.26044C7.86307 7.22551 7.04307 8.00647 6.02974 8.00647ZM6.02974 5.46679C5.56974 5.46679 5.19641 5.82234 5.19641 6.26044C5.19641 6.69853 5.56974 7.05408 6.02974 7.05408C6.48974 7.05408 6.86307 6.69853 6.86307 6.26044C6.86307 5.82234 6.48974 5.46679 6.02974 5.46679Z"
                                    fill=""
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M1.80999 13.689C1.64999 13.689 1.48999 13.6128 1.39666 13.4794C1.24332 13.2635 1.30332 12.9651 1.53666 12.8191L4.82332 10.7175C5.54332 10.254 6.53666 10.3111 7.18999 10.8381L7.40999 11.0223C7.74332 11.2953 8.31001 11.2953 8.63665 11.0223L11.41 8.75563C12.1166 8.17781 13.23 8.17781 13.9433 8.75563L15.03 9.64446C15.2366 9.81589 15.2633 10.1143 15.0833 10.3175C14.9033 10.5143 14.59 10.5397 14.3766 10.3683L13.29 9.47943C12.9566 9.20637 12.39 9.20637 12.0566 9.47943L9.28329 11.7461C8.57665 12.3239 7.46332 12.3239 6.74999 11.7461L6.52999 11.5619C6.22332 11.3143 5.71666 11.289 5.37666 11.5111L2.08999 13.6128C2.00332 13.6635 1.90332 13.689 1.80999 13.689Z"
                                    fill=""
                                    className="fill-foreground"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2_414">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill=""
                                      className="fill-foreground"
                                      transform="translate(0.0299988 0.800049)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                                {card.roomCount}
                              </p>
                            </li>
                          </ul>
                          <p className="my-2 sm:my-3 font-normal text-[12px] break-words leading-[18px] whitespace-normal">
                            {card.details}
                          </p>
                          <ul className="flex flex-wrap items-center gap-2 lg:gap-3 mb-2 sm:mb-3">
                            <li className="flex items-center gap-1">
                              <BedDouble
                                size={16}
                                strokeWidth={1.25}
                                absoluteStrokeWidth
                                className="text-foreground"
                              />
                              <p className="font-normal text-[12px] leading-[18px]">
                                {card.bedCount} Room
                              </p>
                            </li>
                            <li className="flex items-center gap-1">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.9467 10.1333H1.61334V12.8C1.61334 13.5364 2.2103 14.1333 2.94668 14.1333H13.6133C14.3497 14.1333 14.9467 13.5364 14.9467 12.8V10.1333Z"
                                  className="stroke-foreground"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.94666 14.8H13.6133"
                                  className="stroke-foreground"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.6133 10.1334V3.74286C13.6133 3.22216 13.1912 2.80005 12.6705 2.80005C12.4205 2.80005 12.1807 2.89938 12.0039 3.07619L10.28 4.80005"
                                  className="stroke-foreground"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.61333 5.46672C4.34971 5.46672 4.94667 4.86976 4.94667 4.13338C4.94667 3.397 4.34971 2.80005 3.61333 2.80005C2.87695 2.80005 2.28 3.397 2.28 4.13338C2.28 4.86976 2.87695 5.46672 3.61333 5.46672Z"
                                  className="fill-foreground"
                                />
                                <path
                                  d="M10.2059 6.05948C10.336 6.18966 10.5516 6.19095 10.6455 6.03262C10.7666 5.82844 10.8321 5.59378 10.8321 5.35238C10.8321 4.99875 10.6916 4.65962 10.4415 4.40956C10.1915 4.15952 9.8524 4.01904 9.49873 4.01904C9.25733 4.01904 9.02267 4.08451 8.81853 4.20561C8.6602 4.29953 8.66147 4.51509 8.79167 4.64527L9.49873 5.35238L10.2059 6.05948Z"
                                  className="fill-foreground"
                                />
                                <path
                                  d="M2.61332 10.1334L2.4649 8.64918C2.36589 7.65912 3.14336 6.80005 4.13835 6.80005C4.64925 6.80005 5.13245 7.03229 5.4516 7.43124L7.61332 10.1334"
                                  stroke=""
                                  className="stroke-foreground"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <p className="font-normal text-[12px] leading-[18px]">
                                {card.bathCount} Bath Room
                              </p>
                            </li>
                            <li className="flex items-center gap-1">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_2_455)">
                                  <path
                                    d="M12.7767 12.6335H3.44333C1.83 12.6335 0.943329 11.7468 0.943329 10.1335V7.4668C0.943329 5.85346 1.83 4.9668 3.44333 4.9668H12.7767C14.39 4.9668 15.2767 5.85346 15.2767 7.4668V10.1335C15.2767 11.7468 14.39 12.6335 12.7767 12.6335ZM3.44333 5.9668C2.39 5.9668 1.94333 6.41346 1.94333 7.4668V10.1335C1.94333 11.1868 2.39 11.6335 3.44333 11.6335H12.7767C13.83 11.6335 14.2767 11.1868 14.2767 10.1335V7.4668C14.2767 6.41346 13.83 5.9668 12.7767 5.9668H3.44333Z"
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M12.11 9.30013C11.8367 9.30013 11.61 9.07346 11.61 8.80013V5.4668C11.61 5.19346 11.8367 4.9668 12.11 4.9668C12.3833 4.9668 12.61 5.19346 12.61 5.4668V8.80013C12.61 9.07346 12.3833 9.30013 12.11 9.30013Z"
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M4.10999 8.63346C3.83665 8.63346 3.60999 8.4068 3.60999 8.13346V5.4668C3.60999 5.19346 3.83665 4.9668 4.10999 4.9668C4.38332 4.9668 4.60999 5.19346 4.60999 5.4668V8.13346C4.60999 8.4068 4.38332 8.63346 4.10999 8.63346Z"
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M6.77664 9.30013C6.49664 9.30013 6.27664 9.07346 6.27664 8.79346L6.30998 5.46013C6.30998 5.1868 6.53664 4.9668 6.80998 4.9668C6.80998 4.9668 6.80998 4.9668 6.81664 4.9668C7.08998 4.9668 7.31664 5.19346 7.30998 5.47346L7.27664 8.8068C7.27664 9.08013 7.04998 9.30013 6.77664 9.30013Z"
                                    className="fill-foreground"
                                  />
                                  <path
                                    d="M9.44333 7.9668C9.17 7.9668 8.94333 7.74013 8.94333 7.4668V5.4668C8.94333 5.19346 9.17 4.9668 9.44333 4.9668C9.71666 4.9668 9.94333 5.19346 9.94333 5.4668V7.4668C9.94333 7.74013 9.71666 7.9668 9.44333 7.9668Z"
                                    className="fill-foreground"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2_455">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0.109985 0.800049)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>

                              <p className="font-normal text-[12px] leading-[18px]">
                                {card.squareFit}
                              </p>
                            </li>
                          </ul>
                          <h6 className="font-semibold text-[14px] leading-[21px]">
                            $ {card.price}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-foreground hover:bg-destructive ms-auto px-4 lg:px-5 py-2 md:py-3 lg:py-4 rounded-[8px] w-fit text-background text-sm lg:text-base cursor-pointer">
                Contact Agent
                <svg
                  className="w-[18px] lg:w-[21px] h-[18px] lg:h-[21px]"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2131 9.70301C10.1881 9.70301 10.1711 9.70301 10.1461 9.70301C10.1051 9.69501 10.0461 9.69501 9.99613 9.70301C7.58013 9.62801 5.75513 7.72801 5.75513 5.38701C5.75513 3.00301 7.69613 1.06201 10.0801 1.06201C12.4631 1.06201 14.4051 3.00301 14.4051 5.38701C14.3961 7.72801 12.5631 9.62801 10.2381 9.70301C10.2301 9.70301 10.2211 9.70301 10.2131 9.70301ZM10.0801 2.31201C8.38813 2.31201 7.00513 3.69501 7.00513 5.38701C7.00513 7.05301 8.30513 8.39501 9.96313 8.45301C10.0051 8.44501 10.1211 8.44501 10.2301 8.45301C11.8631 8.37801 13.1461 7.03701 13.1551 5.38701C13.1551 3.69501 11.7711 2.31201 10.0801 2.31201Z"
                    fill=""
                    className="fill-background"
                  />
                  <path
                    d="M10.2211 18.8118C8.58809 18.8118 6.94609 18.3948 5.70509 17.5618C4.54609 16.7948 3.91309 15.7448 3.91309 14.6028C3.91309 13.4618 4.54609 12.4028 5.70509 11.6278C8.20509 9.96978 12.2551 9.96978 14.7381 11.6278C15.8881 12.3948 16.5301 13.4448 16.5301 14.5868C16.5301 15.7278 15.8961 16.7868 14.7381 17.5618C13.4881 18.3948 11.8551 18.8118 10.2211 18.8118ZM6.39609 12.6778C5.59609 13.2118 5.16309 13.8948 5.16309 14.6118C5.16309 15.3198 5.60509 16.0028 6.39609 16.5278C8.47109 17.9198 11.9711 17.9198 14.0461 16.5278C14.8461 15.9948 15.2801 15.3118 15.2801 14.5948C15.2801 13.8868 14.8381 13.2028 14.0461 12.6778C11.9711 11.2948 8.47109 11.2948 6.39609 12.6778Z"
                    fill=""
                    className="fill-background"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-4 ms-auto mt-4 w-fit">
                <Link href="" className="hover:text-destructive text-sm">
                  Privacy Policy
                </Link>
                <Link href="" className="hover:text-destructive text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Properties;
