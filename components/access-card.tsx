"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { HiArrowUpRight } from "react-icons/hi2";

type AccessCardProps = {
  href: string;
  icon: IconType;
  iconShellClassName?: string;
  index: number;
  label: string;
  note: string;
};

export function AccessCard({
  href,
  icon: Icon,
  iconShellClassName,
  index,
  label,
  note
}: AccessCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      whileHover={{ y: -2 }}
      className="group rounded-[1.5rem] border border-[#ead4bb] bg-[#fffaf4] px-4 py-4 shadow-[0_10px_24px_rgba(55,31,15,0.05)] transition-colors duration-300 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg ${
            iconShellClassName ?? "bg-[#24160f] text-[#e4ad39]"
          }`}
        >
          <Icon />
        </span>
        <HiArrowUpRight className="text-lg text-[#8f6f55] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <p className="mt-4 font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.65rem] text-[#24160f]">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#6a5546]">{note}</p>
    </motion.a>
  );
}
