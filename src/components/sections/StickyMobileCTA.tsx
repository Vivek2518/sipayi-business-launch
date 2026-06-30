const PHONE_TEL = "tel:+919606696105";
const WHATSAPP = "https://wa.me/919606696105";

/**
 * Fixed bottom Call / WhatsApp bar shown only on mobile (matches reference).
 * Renders a spacer so page content/footer isn't hidden behind the bar.
 */
const StickyMobileCTA = () => (
  <>
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-2.5 bg-white border-t-2 border-accent px-4 py-3">
      <a
        href={PHONE_TEL}
        className="flex-1 text-center py-2.5 rounded-md font-bold text-[0.88rem] bg-primary text-white"
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

export default StickyMobileCTA;
