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
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative flex h-full min-h-[13rem] flex-col overflow-hidden rounded-[1.6rem] border border-[#ead4bb] bg-[linear-gradient(180deg,#fffaf4_0%,#fff5e7_100%)] px-4 py-4 shadow-[0_10px_24px_rgba(55,31,15,0.05)] transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_18px_36px_rgba(55,31,15,0.1)] sm:min-h-[12.5rem]"
    >
      <span className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(228,173,57,0.75),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-3">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-[1.15rem] text-lg shadow-[0_10px_22px_rgba(55,31,15,0.08)] ${
            iconShellClassName ?? "bg-[#24160f] text-[#e4ad39]"
          }`}
        >
          <Icon />
        </span>
        <HiArrowUpRight className="text-lg text-[#8f6f55] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <p className="mt-5 font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.5rem] text-[#24160f] sm:text-[1.65rem]">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#6a5546]">{note}</p>
    </motion.a>
  );
}
