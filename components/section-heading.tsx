type SectionHeadingProps = {
  description?: string;
  eyebrow: string;
  title: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  description,
  eyebrow,
  title,
  tone = "dark"
}: SectionHeadingProps) {
  const eyebrowClass =
    tone === "light" ? "text-[#cda56b]" : "text-[#8e6f54]";
  const titleClass =
    tone === "light" ? "text-[#fff4e8]" : "text-[#21150d]";
  const descriptionClass =
    tone === "light" ? "text-[#e5cdb3]" : "text-[#6a5444]";

  return (
    <div>
      <p
        className={`text-[0.72rem] font-semibold uppercase tracking-[0.28em] ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-['Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif] text-[1.75rem] leading-tight sm:text-[2rem] ${titleClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-2 max-w-sm text-sm leading-6 ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
