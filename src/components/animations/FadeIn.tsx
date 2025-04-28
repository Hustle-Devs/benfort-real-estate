"use client";
import React from "react";
import { motion, Transition } from "framer-motion"; // corrected import!
import FadeInProps from "../types/animations/animate";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  noViewport,
}: FadeInProps) => {
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
      viewport={noViewport ? undefined : { once: true, amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
