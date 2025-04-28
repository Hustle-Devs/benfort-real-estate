"use client";
import React from "react";
import { motion } from "framer-motion";
import StaggerWrapperProps from "@/types/animations/animate";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const StaggerWrapper = ({
  children,
  stagger = 0.3,
  duration = 0.6,
  className = "",
  ...rest
}: StaggerWrapperProps) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...rest}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={cardVariants}
          transition={{ duration, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerWrapper;
