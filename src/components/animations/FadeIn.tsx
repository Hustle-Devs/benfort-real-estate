"use client";
import React from "react";
import FadeInProps from "../types/animations/animate";
import { motion, Transition } from "motion/react";

const FadeIn = ({ children, delay = 0, duration = 0.6 }: FadeInProps) => {
  const transition: Transition = {
    delay,
    duration,
    ease: ["easeOut"],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: false, amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
// "use client";
// import { FadeInProps } from "@/types/animate";
// import { Transition } from "motion";
// import { motion } from "motion/react";

// const FadeIn = ({ children, duration = 0.4, delay = 0 }: FadeInProps) => {
//   const transition: Transition = {
//     duration,
//     delay,
//     ease: ["easeOut"],
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: false, amount: 0.7 }}
//       transition={transition}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeIn;
