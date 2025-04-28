import React, { FC } from "react";
import Image from "next/image";

import { motion, Variants } from "framer-motion";

import HappyClientsPopupProps from "@/types/Home";

const popupContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const popupItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: "easeOut" },
  }),
};

const HappyClientsPopup: FC<HappyClientsPopupProps> = ({
  icons,
  clientCount = "300+ Happy Clients",
}) => (
  <motion.div
    className="top-full left-0 absolute bg-card px-[19px] py-3 rounded-[8px] sm:rounded-[16px] -translate-y-1/2"
    initial="hidden"
    animate="visible"
    variants={popupContainer}
  >
    <div className="flex space-x-2">
      {icons.map((icon, idx) => (
        <motion.div
          key={icon.alt}
          variants={popupItem}
          custom={idx}
          className="shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-2 border-white rounded-full"
        >
          <Image src={icon.src} alt={icon.alt} />
        </motion.div>
      ))}
    </div>
    <motion.h6
      custom={icons.length}
      variants={popupItem}
      className="mt-1 sm:mt-2 font-normal text-[14px] text-center leading-[19px] sm:leading-[21px]"
    >
      {clientCount}
    </motion.h6>
  </motion.div>
);

export default HappyClientsPopup;
