type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex rounded-full border border-[var(--site-border-strong)] bg-white/50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--site-primary)]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--site-foreground)] sm:text-4xl md:text-[2.65rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--site-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
