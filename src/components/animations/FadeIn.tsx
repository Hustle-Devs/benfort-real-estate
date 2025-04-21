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
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
