import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      align === "center" ? "text-center mb-[52px]" : "mb-8",
      className,
    )}
  >
    {eyebrow && (
      <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">
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
