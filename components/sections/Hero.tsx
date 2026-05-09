"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { ActionButton } from "@/components/action-button";
import { businessInfo, heroStats, primaryActions } from "@/data/site";

export function Hero() {
  return (
    <section className="grid items-start gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-10">
      <FadeIn className="max-w-2xl text-center sm:text-left">
        <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#e4ad39]/35 bg-white/60 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c694c] shadow-[0_12px_28px_rgba(58,34,15,0.06)] backdrop-blur-md sm:mx-0">
          <span className="h-2 w-2 rounded-full bg-[#e4ad39]" />
          Ertilu Coffee
        </div>
        
        <div className="relative mx-auto mt-4 flex justify-center sm:mx-0 sm:justify-start">
          <Image
            src="/images/Ertilulogo.png"
            alt="Logo Ertilu"
            className="w-[220px] transition-transform duration-500 hover:scale-[1.02] sm:w-[260px]"
            width={300}
            height={300}
            priority
          />
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[2.4rem] leading-[1.1] text-[#21150d] sm:mx-0 sm:text-[3.65rem] lg:text-[4.4rem] lg:leading-[0.98]">
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
                src="/images/lounge-scene.svg"
                alt="Ertilu Atmosphere"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(28,17,10,0.78))] p-4 text-[#f9ead8] sm:p-5">
              <h2 className="font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.65rem] sm:text-2xl">
                Warm corner, slow coffee
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#f7ddbf]">Dibuat untuk duduk lebih lama.</p>
            </div>
          </motion.div>
          <div className="pointer-events-none absolute inset-x-10 bottom-4 h-10 rounded-full bg-[#2d1b0f]/18 blur-2xl" />
        </figure>
      </FadeIn>
    </section>
  );
}
