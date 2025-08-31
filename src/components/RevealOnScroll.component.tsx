"use client";

import { PropsWithChildren } from "react";

import { motion } from "framer-motion";

type RevealOnScrollProps = PropsWithChildren<{
  once?: boolean;
  offsetY?: number;
  delay?: number;
  duration?: number;
}>;

export const RevealOnScroll = ({
  children,
  once = false,
  offsetY = 100,
  delay = 0,
  duration = 0.5,
}: RevealOnScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ delay, duration, ease: "easeOut" }}
      className='will-change-transform'
    >
      {children}
    </motion.div>
  );
};
