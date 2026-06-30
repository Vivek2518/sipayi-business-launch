import { useState } from "react";
import { Link, useLocation, To } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  to: To;
}

export interface HeaderNav {
  items: NavItem[];
  ctaLabel?: string;
  ctaTo?: To;
  /** industrial=ink+mono · manpower=coloured bar+white CTA · advisory=amber-brown editorial. */
  theme?: "default" | "industrial" | "manpower" | "advisory";
  /** Word after "Sipayi" in the logo (default "Security"). */
  logoSuffix?: string;
  /** Manpower bar colour (default teal). */
  accentColor?: string;
  /** Manpower logo-suffix / accent colour (default teal-pale). */
  logoAccentColor?: string;
}

// Home shows in-page section anchors (Industries lives only on the home page).
const homeNav: NavItem[] = [
  { label: "Services", to: { hash: "#services" } },
  { label: "Why Us", to: { hash: "#why-us" } },
  { label: "Industries", to: { hash: "#industries" } },
  { label: "FAQ", to: { hash: "#faq" } },
];

// Detail pages add a "Home" link and scroll to their own sections.
const detailNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: { hash: "#services" } },
  { label: "Why Us", to: { hash: "#why-us" } },
  { label: "FAQ", to: { hash: "#faq" } },
];

const Header = ({ nav }: { nav?: HeaderNav }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const navLinks = nav?.items ?? (pathname === "/" ? homeNav : detailNav);
  const ctaLabel = nav?.ctaLabel ?? "Free Quote";
  const ctaTo: To = nav?.ctaTo ?? { hash: "#contact" };
  const theme = nav?.theme ?? "default";
  const industrial = theme === "industrial";
  const manpower = theme === "manpower";
  const advisory = theme === "advisory";
  const logoSuffix = nav?.logoSuffix ?? "Security";
  const accentColor = nav?.accentColor ?? "#0F766E";
  const logoAccentColor = nav?.logoAccentColor ?? "#CCFBF1";

  const headerClass = industrial
    ? "sticky top-0 z-50 bg-[#111827] text-primary-foreground border-b-2 border-accent/30"
    : manpower
      ? "sticky top-0 z-50 text-white border-b-[3px] border-white/15"
      : advisory
        ? "sticky top-0 z-50 bg-[#78350F] text-white border-b-2 border-[#FDE68A]/20"
        : "sticky top-0 z-50 bg-primary text-primary-foreground border-b-[3px] border-accent";
  const linkClass = industrial
    ? "font-mono text-[0.85rem] text-white/65 hover:text-accent transition-colors"
    : manpower
      ? "text-[0.86rem] font-medium text-white/80 hover:text-white transition-colors"
      : advisory
        ? "text-[0.86rem] font-medium text-white/75 hover:text-[#FDE68A] transition-colors"
        : "text-[0.88rem] font-medium text-primary-foreground/80 hover:text-accent transition-colors";
  const ctaClass = industrial
    ? "bg-accent text-[#111827] px-[18px] py-2 rounded font-heading text-[0.85rem] font-bold hover:opacity-90 transition-opacity"
    : manpower
      ? "bg-white px-[18px] py-2 rounded-md text-[0.86rem] font-bold hover:opacity-90 transition-opacity"
      : advisory
        ? "bg-[#FDE68A] text-[#78350F] px-[18px] py-2 rounded-md text-[0.86rem] font-bold hover:opacity-90 transition-opacity"
        : "bg-accent text-primary px-5 py-2 rounded-md text-[0.88rem] font-bold hover:opacity-90 transition-opacity";
  const mobileNavClass = `md:hidden border-t border-white/10 px-6 pb-4 ${industrial ? "bg-[#111827]" : advisory ? "bg-[#78350F]" : manpower ? "" : "bg-primary"}`;
  const logoAccentClass = advisory ? "text-[#FDE68A]" : manpower ? "" : "text-accent";

  const headerStyle = manpower ? { backgroundColor: accentColor } : undefined;
  const ctaStyle = manpower ? { color: accentColor } : undefined;
  const logoAccentStyle = manpower ? { color: logoAccentColor } : undefined;

  return (
    <header className={headerClass} style={headerStyle}>
      <div className="mx-auto max-w-[1120px] flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-[1.25rem] font-extrabold text-primary-foreground"
        >
          Sipayi <span className={logoAccentClass} style={logoAccentStyle}>{logoSuffix}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.label} to={l.to} className={linkClass}>
              {l.label}
            </Link>
          ))}
          <Link to={ctaTo} className={ctaClass} style={ctaStyle}>
            {ctaLabel}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className={mobileNavClass} style={headerStyle}>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-2 py-3 ${industrial ? "font-mono text-[0.85rem] text-white/65 hover:text-accent" : "text-sm font-medium text-primary-foreground/80 hover:text-accent"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to={ctaTo}
            onClick={() => setMobileOpen(false)}
            className={`block mt-2 px-4 py-2.5 rounded-md text-sm font-bold text-center ${manpower ? "bg-white" : advisory ? "bg-[#FDE68A] text-[#78350F]" : "bg-accent text-primary"}`}
            style={ctaStyle}
          >
            {ctaLabel}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
