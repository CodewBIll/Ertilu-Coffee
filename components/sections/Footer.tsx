"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { FadeIn } from "@/components/fade-in";
import { businessInfo } from "@/data/site";

export function Footer() {
  return (
    <FadeIn
      as="footer"
      className="rounded-[2rem] border border-[#dec6ab]/75 bg-[#24160f] px-6 py-8 text-[#f0ddc4] shadow-[0_20px_50px_rgba(34,22,15,0.24)] sm:px-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-2xl text-white sm:text-3xl">
            {businessInfo.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#dcc1a4]">
            {businessInfo.address}
          </p>
        </div>
        <a
          href={businessInfo.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#e4ad39]/30 bg-[#e4ad39]/5 px-5 py-2.5 text-sm font-semibold text-[#e4ad39] transition-all hover:bg-[#e4ad39]/10"
        >
          Buka lokasi
          <HiArrowUpRight className="text-base" />
        </a>
      </div>
      <div className="mt-8 border-t border-white/5 pt-6 text-center text-[0.7rem] uppercase tracking-widest text-white/20">
        &copy; {new Date().getFullYear()} {businessInfo.name} Coffee. All rights reserved.
      </div>
    </FadeIn>
  );
}
