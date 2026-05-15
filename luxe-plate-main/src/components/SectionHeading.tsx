import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`mx-auto flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-primary">
          <span className="h-px w-8 bg-primary" /> {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
