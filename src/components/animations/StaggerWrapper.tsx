"use client";
import React from "react";
import { motion } from "framer-motion";

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
}) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
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
