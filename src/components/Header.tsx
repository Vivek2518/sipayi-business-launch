import { useState } from "react";
import { Link, useLocation, To } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  to: To;
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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const navLinks = pathname === "/" ? homeNav : detailNav;

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b-[3px] border-accent">
      <div className="mx-auto max-w-[1120px] flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-[1.25rem] font-extrabold text-primary-foreground"
        >
          Sipayi <span className="text-accent">Security</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[0.88rem] font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to={{ hash: "#contact" }}
            className="bg-accent text-primary px-5 py-2 rounded-md text-[0.88rem] font-bold hover:opacity-90 transition-opacity"
          >
            Free Quote
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
        <nav className="md:hidden border-t border-white/10 bg-primary px-6 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-sm font-medium text-primary-foreground/80 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to={{ hash: "#contact" }}
            onClick={() => setMobileOpen(false)}
            className="block mt-2 bg-accent text-primary px-4 py-2.5 rounded-md text-sm font-bold text-center"
          >
            Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
