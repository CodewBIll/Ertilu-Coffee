"use client";

import { AccessCard } from "@/components/access-card";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/data/site";

export function SocialMedia() {
  return (
    <FadeIn
      as="section"
      className="rounded-[2rem] border border-[#dec6ab]/75 bg-white/70 px-5 py-6 shadow-[0_18px_38px_rgba(55,31,15,0.06)] sm:px-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Social Media" title="Ikuti update Ertilu." />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {socialLinks.map((link, index) => (
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
