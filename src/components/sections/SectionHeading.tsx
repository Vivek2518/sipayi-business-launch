import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "gold" | "teal" | "plum" | "rose";
  className?: string;
}

const TONE_TEXT: Record<string, string> = {
  teal: "text-[#0F766E]",
  plum: "text-[#7C3AED]",
  rose: "text-[#BE185D]",
  gold: "text-accent",
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "gold",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      align === "center" ? "text-center mb-[52px]" : "mb-8",
      className,
    )}
  >
    {eyebrow && (
      <p
        className={cn(
          "text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-2",
          TONE_TEXT[tone],
        )}
      >
        {eyebrow}
      </p>
    )}
    <h2 className="text-primary mb-3">{title}</h2>
    {subtitle && (
      <p
        className={cn(
          "text-base text-muted-foreground max-w-[620px]",
          align === "center" && "mx-auto",
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
