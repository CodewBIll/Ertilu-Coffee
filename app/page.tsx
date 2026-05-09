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
    <main className="relative overflow-hidden pb-20 sm:pb-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(228,173,57,0.28),transparent_36%),radial-gradient(circle_at_top_right,rgba(122,78,47,0.18),transparent_30%)] blur-3xl" />
      <div className="absolute left-[-8rem] top-20 -z-10 h-64 w-64 rounded-full bg-[#f4d39b]/28 blur-3xl" />
      <div className="absolute right-[-8rem] top-[24rem] -z-10 h-72 w-72 rounded-full bg-[#d8b189]/20 blur-3xl" />
      <div className="absolute left-1/2 top-[50rem] -z-10 h-44 w-44 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-4 pt-4 sm:gap-10 sm:px-6 sm:pt-7 lg:px-8">
        <section className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-8">
          <FadeIn className="relative overflow-hidden rounded-[2.35rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,252,247,0.82),rgba(250,242,230,0.92))] p-5 text-center shadow-[0_24px_70px_rgba(51,32,18,0.09)] backdrop-blur-xl sm:p-8 sm:text-left lg:p-9">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(228,173,57,0.8),transparent)]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f6d39f]/25 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/35 blur-3xl" />

            <div className="relative">
              <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#e4ad39]/35 bg-white/72 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c694c] shadow-[0_12px_28px_rgba(58,34,15,0.06)] backdrop-blur-md sm:mx-0">
                <span className="h-2 w-2 rounded-full bg-[#e4ad39]" />
                Ertilu Coffee
              </div>

              <Image
                src="/images/Ertilulogo.png"
                alt="Logo Ertilu"
                className="mx-auto mt-2 w-[210px] drop-shadow-[0_18px_34px_rgba(67,40,17,0.12)] sm:mx-0 sm:w-[250px] lg:w-[270px]"
                width={300}
                height={300}
              />

              <h1 className="mx-auto mt-5 max-w-3xl font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[2.45rem] leading-[0.98] text-[#21150d] sm:mx-0 sm:text-[3.5rem] lg:text-[4.35rem]">
                Ertilu untuk kopi yang berkualitas dan ruang yang terasa nyaman.
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5a4638] sm:mx-0 sm:text-lg">
                {businessInfo.tagline}
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6c5543] sm:mx-0 sm:text-base">
                {businessInfo.summary}
              </p>

              <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-start">
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

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#dfc6aa]/75 bg-white/72 p-4 text-center shadow-[0_20px_44px_rgba(61,36,19,0.08)] backdrop-blur-md sm:p-6 sm:text-left">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8d6f58]">
                  Visit Ertilu
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#24160f] sm:mx-0">
                  {businessInfo.address}
                </p>

                <div className="-mx-1 mt-5 flex snap-x gap-3 overflow-x-auto px-1 pb-2 hide-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
                  {heroStats.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="min-w-[14rem] snap-start rounded-[1.45rem] border border-[#ead8c5] bg-[linear-gradient(180deg,#fffaf4_0%,#fff3e1_100%)] px-4 py-4 shadow-[0_12px_28px_rgba(55,31,15,0.05)] sm:min-w-0"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#9a7858]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#604b3c]">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="space-y-5" delay={0.12}>
            <figure className="relative">
              <div className="absolute inset-0 rounded-[2.4rem] bg-[linear-gradient(145deg,rgba(228,173,57,0.16),rgba(255,255,255,0.24))] blur-sm" />
              <div className="absolute -left-3 top-12 h-24 w-24 rounded-full border border-white/55 bg-white/30 blur-2xl" />
              <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full border border-[#edcf9f]/35 bg-[#e4ad39]/16 blur-2xl" />

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(233,213,186,0.95))] p-2 shadow-[0_28px_64px_rgba(54,31,15,0.16)]"
              >
                <div className="relative aspect-[10/11] overflow-hidden rounded-[1.9rem] sm:aspect-[5/4]">
                  <Image
                    src={heroVisual.src}
                    alt={heroVisual.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(28,17,10,0.84))] p-4 text-[#f9ead8] sm:p-5">
                    <h2 className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.65rem] sm:text-2xl">
                      {heroVisual.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#f7ddbf]">{heroVisual.caption}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-10 bottom-2 h-10 rounded-full bg-[#2d1b0f]/16 blur-2xl" />
              </motion.div>
            </figure>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#ddc3a9]/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,248,239,0.92))] p-5 shadow-[0_20px_44px_rgba(55,31,15,0.08)] backdrop-blur-md sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(228,173,57,0.8),transparent)]" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeading eyebrow="Quick Access" title="Explore Ertilu" />
              </div>

              <div className="-mx-1 mt-5 flex snap-x gap-3 overflow-x-auto px-1 pb-2 hide-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
                {quickAccessLinks.map(({ label, href, icon: Icon, note, iconShellClassName }, index) => (
                  <div
                    key={label}
                    className="min-w-[15.5rem] snap-start sm:min-w-0"
                  >
                    <AccessCard
                      href={href}
                      icon={Icon}
                      iconShellClassName={iconShellClassName}
                      index={index}
                      label={label}
                      note={note}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <FadeIn
            as="figure"
            className="relative overflow-hidden rounded-[2.15rem] border border-[#e8d3ba] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(245,232,214,0.85))] p-2 shadow-[0_22px_50px_rgba(55,31,15,0.08)]"
          >
            <div className="absolute inset-x-10 bottom-2 h-10 rounded-full bg-[#2d1b0f]/10 blur-2xl" />
            <div className="relative aspect-[1/1.05] overflow-hidden rounded-[1.7rem] sm:aspect-[4/3]">
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
            className="relative overflow-hidden rounded-[2.15rem] bg-[radial-gradient(circle_at_top_right,rgba(228,173,57,0.12),transparent_28%),linear-gradient(180deg,#24160f_0%,#1b110c_100%)] p-5 text-[#f8e9d6] shadow-[0_26px_58px_rgba(33,21,13,0.24)] sm:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(228,173,57,0.85),transparent)]" />
            <SectionHeading
              eyebrow="Why Ertilu"
              title="Tempat kecil dengan kopi yang dibuat sepenuh hati."
              tone="light"
            />
            <div className="mt-6 grid gap-3">
              {valuePoints.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="rounded-[1.55rem] border border-white/12 bg-white/6 px-4 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
                >
                  <h3 className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.45rem] text-white sm:text-[1.6rem]">
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
          className="relative overflow-hidden rounded-[2rem] border border-[#dec6ab]/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,247,236,0.92))] px-4 py-5 shadow-[0_18px_38px_rgba(55,31,15,0.06)] sm:px-6"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(228,173,57,0.8),transparent)]" />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Social Media" title="Ikuti update Ertilu." />
          </div>

          <div className="-mx-1 mt-5 flex snap-x gap-3 overflow-x-auto px-1 pb-2 hide-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
            {socialLinks.map(({ label, href, icon: Icon, note, iconShellClassName }, index) => (
              <div
                key={label}
                className="min-w-[15rem] snap-start sm:min-w-0"
              >
                <AccessCard
                  href={href}
                  icon={Icon}
                  iconShellClassName={iconShellClassName}
                  index={index}
                  label={label}
                  note={note}
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          as="footer"
          className="relative overflow-hidden rounded-[2.05rem] border border-[#dec6ab]/60 bg-[radial-gradient(circle_at_top_right,rgba(228,173,57,0.12),transparent_30%),linear-gradient(180deg,#24160f_0%,#1d120c_100%)] px-5 py-6 text-[#f0ddc4] shadow-[0_22px_50px_rgba(34,22,15,0.24)] sm:px-7"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(228,173,57,0.85),transparent)]" />
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#5a3924] bg-white/5 px-4 py-3 text-sm font-semibold text-[#e4ad39] transition-colors duration-300 hover:bg-white/8 sm:w-auto"
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
