"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeInElement = "div" | "figure" | "footer" | "section";

type FadeInProps = PropsWithChildren<{
  as?: FadeInElement;
  className?: string;
  delay?: number;
}>;

const motionElements = {
  div: motion.div,
  figure: motion.figure,
  footer: motion.footer,
  section: motion.section
} as const;

export function FadeIn({
  as = "div",
  children,
  className,
  delay = 0
}: FadeInProps) {
  const Component = motionElements[as];

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
