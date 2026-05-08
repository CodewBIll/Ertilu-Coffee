"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type ActionButtonProps = {
  href: string;
  icon: IconType;
  label: string;
  priority?: "primary" | "secondary";
  delay?: number;
};

export function ActionButton({
  href,
  icon: Icon,
  label,
  priority = "secondary",
  delay = 0
}: ActionButtonProps) {
  const isPrimary = priority === "primary";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-3 rounded-full border px-5 py-3.5 text-sm font-semibold shadow-[0_14px_32px_rgba(39,24,14,0.08)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4ad39] ${
        isPrimary
          ? "border-[#21150d] bg-[#21150d] text-[#f7e8d5] hover:bg-[#382318]"
          : "border-[#d6baa0] bg-white/78 text-[#3d281b] hover:bg-[#fffaf3]"
      }`}
    >
      <Icon className={isPrimary ? "text-[#e4ad39]" : "text-[#8d673f]"} />
      {label}
    </motion.a>
  );
}
