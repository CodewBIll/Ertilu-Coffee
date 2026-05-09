"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { AccessCard } from "@/components/access-card";
import { ActionButton } from "@/components/action-button";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import {
  businessInfo,
  heroStats,
  primaryActions,
  quickAccessLinks,
  socialLinks,
  valuePoints,
  visualStories
} from "@/data/site";

export default function Home() {
  const [heroVisual, featureVisual] = visualStories;

  return (
    <main className="relative overflow-hidden pb-16 sm:pb-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(228,173,57,0.24),transparent_38%),radial-gradient(circle_at_top_right,rgba(122,78,47,0.14),transparent_32%)] blur-3xl" />
      <div className="absolute left-[-8rem] top-24 -z-10 h-64 w-64 rounded-full bg-[#f4d39b]/25 blur-3xl" />
      <div className="absolute right-[-7rem] top-[30rem] -z-10 h-72 w-72 rounded-full bg-[#d8b189]/18 blur-3xl" />
      <div className="absolute left-1/2 top-[58rem] -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-5 sm:gap-12 sm:px-6 sm:pt-8 lg:px-8">
        <section className="grid items-start gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-10">
          <FadeIn className="max-w-2xl text-center sm:text-left">
            <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#e4ad39]/35 bg-white/60 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c694c] shadow-[0_12px_28px_rgba(58,34,15,0.06)] backdrop-blur-md sm:mx-0">
              <span className="h-2 w-2 rounded-full bg-[#e4ad39]" />
              Ertilu Coffee
            </div>
            <Image
              src="/images/Ertilulogo.png"
              alt="Logo Ertilu"
              className="mx-auto mt-2 w-[220px] sm:mx-0 sm:w-[260px]"
              width={300}
              height={300}
            />

            <h1 className="mx-auto mt-6 max-w-3xl font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[2.55rem] leading-[0.98] text-[#21150d] sm:mx-0 sm:text-[3.65rem] lg:text-[4.4rem]">
              Ertilu untuk kopi yang berkualitas dan ruang yang terasa nyaman.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5a4638] sm:mx-0 sm:text-lg">
              {businessInfo.tagline}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6c5543] sm:mx-0 sm:text-base">
              {businessInfo.summary}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
              {primaryActions.map(({ label, href, icon: Icon }, index) => (
                <ActionButton
                  key={label}
                  href={href}
                  icon={Icon}
                  label={label}
                  priority={index === 0 ? "primary" : "secondary"}
                  delay={0.12 + index * 0.08}
                />
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#dfc6aa]/70 bg-white/64 p-5 text-center shadow-[0_20px_44px_rgba(61,36,19,0.08)] backdrop-blur-md sm:p-6 sm:text-left">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8d6f58]">
                Visit Ertilu
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#24160f] sm:mx-0">
                {businessInfo.address}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="rounded-[1.3rem] border border-[#ead8c5] bg-[#fffaf4] px-4 py-4"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#9a7858]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#604b3c]">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="space-y-4" delay={0.12}>
            <figure className="relative rounded-[2.3rem]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.3rem] bg-[linear-gradient(145deg,rgba(228,173,57,0.16),rgba(255,255,255,0.28))]" />
              <div className="absolute -left-4 top-10 h-24 w-24 rounded-full border border-white/50 bg-white/28 blur-2xl" />
              <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full border border-[#edcf9f]/30 bg-[#e4ad39]/14 blur-2xl" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2.3rem] border border-white/70 bg-[#ead5ba] shadow-[0_22px_50px_rgba(54,31,15,0.16)]"
              >
              <div className="relative aspect-[11/12] sm:aspect-[5/4]">
                <Image
                  src={heroVisual.src}
                  alt={heroVisual.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(28,17,10,0.78))] p-4 text-[#f9ead8] sm:p-5">
                  <h2 className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.65rem] sm:text-2xl">
                    {heroVisual.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#f7ddbf]">{heroVisual.caption}</p>
                </div>
              </motion.div>
              <div className="pointer-events-none absolute inset-x-10 bottom-4 h-10 rounded-full bg-[#2d1b0f]/18 blur-2xl" />
            </figure>

            <div className="rounded-[2rem] border border-[#ddc3a9]/70 bg-white/72 p-5 shadow-[0_18px_40px_rgba(55,31,15,0.08)] backdrop-blur-md">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeading
                  eyebrow="Quick Access"
                  title="Explore Ertilu"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {quickAccessLinks.map(({ label, href, icon: Icon, note, iconShellClassName }, index) => (
                  <AccessCard
                    key={label}
                    href={href}
                    icon={Icon}
                    iconShellClassName={iconShellClassName}
                    index={index}
                    label={label}
                    note={note}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <FadeIn
            as="figure"
            className="relative overflow-hidden rounded-[2rem] border border-[#e8d3ba] bg-white/70 shadow-[0_18px_38px_rgba(55,31,15,0.08)]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={featureVisual.src}
                alt={featureVisual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn
            className="rounded-[2rem] bg-[#24160f] p-6 text-[#f8e9d6] shadow-[0_22px_54px_rgba(33,21,13,0.2)] sm:p-7"
          >
            <SectionHeading
              eyebrow="Why Ertilu"
              title="Tempat kecil dengan kopi yang dibuat sepenuh hati."
              tone="light"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {valuePoints.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4"
                >
                  <h3 className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.55rem] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#e5cdb3]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        <FadeIn
          as="section"
          className="rounded-[2rem] border border-[#dec6ab]/75 bg-white/70 px-4 py-5 shadow-[0_18px_38px_rgba(55,31,15,0.06)] sm:px-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Social Media" title="Ikuti update Ertilu." />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {socialLinks.map(({ label, href, icon: Icon, note, iconShellClassName }, index) => (
              <AccessCard
                key={label}
                href={href}
                icon={Icon}
                iconShellClassName={iconShellClassName}
                index={index}
                label={label}
                note={note}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn
          as="footer"
          className="rounded-[2rem] border border-[#dec6ab]/75 bg-[#24160f] px-5 py-6 text-[#f0ddc4] shadow-[0_20px_50px_rgba(34,22,15,0.24)] sm:px-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.8rem] text-white sm:text-3xl">
                {businessInfo.name}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#dcc1a4]">
                {businessInfo.address}
              </p>
            </div>
            <a
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e4ad39]"
            >
              Buka lokasi
              <HiArrowUpRight className="text-base" />
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
