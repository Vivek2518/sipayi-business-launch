import { Link } from "react-router-dom";

export interface FooterProps {
  blurb?: string;
  services?: string[];
  industries?: string[];
  bottomTagline?: string;
}

const DEFAULT_BLURB =
  "India's trusted PSARA-licensed security agency — providing security guards, manpower staffing, and security consultancy across 15+ cities since 2015.";

const DEFAULT_SERVICES = [
  "Manned Security Guards",
  "Industrial Security",
  "Manpower Staffing",
  "Electronic Surveillance",
  "Event Security",
  "Security Consultancy",
];

const DEFAULT_INDUSTRIES = [
  "Corporate & IT Parks",
  "Manufacturing",
  "Residential Societies",
  "Hospitals",
  "Retail & Malls",
  "Educational Institutions",
];

const DEFAULT_TAGLINE = "PSARA Licensed Security Agency | Bengaluru, India";

const company: { label: string; to?: string; href?: string }[] = [
  { label: "About Sipayi", to: "/#why-us" },
  { label: "Client Reviews", to: "/#testimonials" },
  { label: "FAQ", to: "/#faq" },
  { label: "Get a Quote", to: "/#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const linkClass = "text-white/60 text-[0.83rem] hover:text-accent transition-colors";

const Footer = ({
  blurb = DEFAULT_BLURB,
  services = DEFAULT_SERVICES,
  industries = DEFAULT_INDUSTRIES,
  bottomTagline = DEFAULT_TAGLINE,
}: FooterProps) => (
  <footer className="bg-primary text-white/65 pt-[52px] pb-6 px-6">
    <div className="mx-auto max-w-[1120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-9 mb-9">
      {/* Company */}
      <div>
        <h4 className="font-heading text-white text-[0.88rem] mb-3.5">
          Sipayi Security &amp; Manpower Services
        </h4>
        <p className="text-[0.83rem] text-white/60 mb-2 leading-relaxed">{blurb}</p>
        <p className="text-[0.83rem] text-white/60 mb-2">
          📜 PSARA Licensed&nbsp;|&nbsp;🏅 ISO 9001:2015&nbsp;|&nbsp;🛡️ 500+ Verified Guards
        </p>
        <p className="text-[0.83rem] text-white/60 leading-relaxed">
          📍 Bengaluru, Karnataka, India
          <br />
          📞 <a href="tel:+919606696105" className={linkClass}>+91 96066 96105</a>
          <br />
          ✉ <a href="mailto:info@sipayisecurity.com" className={linkClass}>info@sipayisecurity.com</a>
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-heading text-white text-[0.88rem] mb-3.5">Services</h4>
        <ul className="flex flex-col gap-2">
          {services.map((s) => (
            <li key={s}>
              <Link to="/#services" className={linkClass}>{s}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Industries */}
      <div>
        <h4 className="font-heading text-white text-[0.88rem] mb-3.5">Industries</h4>
        <ul className="flex flex-col gap-2">
          {industries.map((i) => (
            <li key={i}>
              <Link to="/#industries" className={linkClass}>{i}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Company links */}
      <div>
        <h4 className="font-heading text-white text-[0.88rem] mb-3.5">Company</h4>
        <ul className="flex flex-col gap-2">
          {company.map((c) => (
            <li key={c.label}>
              {c.to ? (
                <Link to={c.to} className={linkClass}>{c.label}</Link>
              ) : (
                <a href={c.href} className={linkClass}>{c.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mx-auto max-w-[1120px] border-t border-white/10 pt-[18px] flex justify-between flex-wrap gap-2 text-[0.75rem] text-white/60">
      <span>© {new Date().getFullYear()} Sipayi Security &amp; Manpower Services. All Rights Reserved.</span>
      <span>{bottomTagline}</span>
    </div>
  </footer>
);

export default Footer;
