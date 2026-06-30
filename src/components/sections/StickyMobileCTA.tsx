const PHONE_TEL = "tel:+919606696105";
const WHATSAPP = "https://wa.me/919606696105";

interface StickyMobileCTAProps {
  /** light=white/navy · dark=navy/gold · teal/plum/rose=coloured bar+white call · amber=brown bar+amber call. */
  variant?: "light" | "dark" | "teal" | "plum" | "rose" | "amber";
}

/**
 * Fixed bottom Call / WhatsApp bar shown only on mobile (matches reference).
 * Renders a spacer so page content/footer isn't hidden behind the bar.
 */
const StickyMobileCTA = ({ variant = "light" }: StickyMobileCTAProps) => {
  const colored: Record<string, string> = {
    teal: "#0F766E",
    plum: "#7C3AED",
    rose: "#BE185D",
  };
  const barClass =
    variant === "dark"
      ? "bg-primary border-t-[3px] border-accent"
      : variant === "amber"
        ? "bg-[#78350F] border-t-2 border-[#FDE68A]/30"
        : variant in colored
          ? "border-t-2 border-white/20"
          : "bg-white border-t-2 border-accent";
  const barStyle = variant in colored ? { backgroundColor: colored[variant] } : undefined;
  const callClass =
    variant === "dark"
      ? "bg-accent text-primary"
      : variant === "amber"
        ? "bg-[#FDE68A] text-[#78350F]"
        : variant in colored
          ? "bg-white"
          : "bg-primary text-white";
  const callStyle = variant in colored ? { color: colored[variant] } : undefined;

  return (
    <>
      <div className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-2.5 px-4 py-3 ${barClass}`} style={barStyle}>
        <a
          href={PHONE_TEL}
          className={`flex-1 text-center py-2.5 rounded-md font-bold text-[0.88rem] ${callClass}`}
          style={callStyle}
        >
          📞 Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-md font-bold text-[0.88rem] bg-[#25D366] text-white"
        >
          💬 WhatsApp
        </a>
      </div>
      <div className="h-[64px] sm:hidden" aria-hidden />
    </>
  );
};

export default StickyMobileCTA;
