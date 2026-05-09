"use client";

import { AccessCard } from "@/components/access-card";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { quickAccessLinks } from "@/data/site";

export function QuickAccess() {
  return (
    <FadeIn className="rounded-[2rem] border border-[#ddc3a9]/70 bg-white/72 p-5 shadow-[0_18px_40px_rgba(55,31,15,0.08)] backdrop-blur-md sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Quick Access" title="Explore Ertilu" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickAccessLinks.map((link, index) => (
          <AccessCard
            key={link.label}
            {...link}
            index={index}
          />
        ))}
      </div>
    </FadeIn>
  );
}
