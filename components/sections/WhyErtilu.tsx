"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { valuePoints, visualStories } from "@/data/site";

export function WhyErtilu() {
  const [, featureVisual] = visualStories;

  return (
    <section className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
      <FadeIn
        as="figure"
        className="relative overflow-hidden rounded-[2rem] border border-[#e8d3ba] bg-white/70 shadow-[0_18px_38px_rgba(55,31,15,0.08)]"
      >
        <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
          <Image
            src={featureVisual.src}
            alt={featureVisual.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="object-cover"
          />
        </div>
      </FadeIn>

      <FadeIn className="rounded-[2rem] bg-[#24160f] p-6 text-[#f8e9d6] shadow-[0_22px_54px_rgba(33,21,13,0.2)] sm:p-8">
        <SectionHeading
          eyebrow="Why Ertilu"
          title="Tempat kecil dengan kopi yang dibuat sepenuh hati."
          tone="light"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {valuePoints.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5"
            >
              <h3 className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.4rem] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#e5cdb3]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
