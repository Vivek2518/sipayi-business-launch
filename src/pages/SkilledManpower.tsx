import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const TEAL = "#0F766E";

const heroStats = [
  { n: "500+", l: "Workers on Active Deployment" },
  { n: "20+", l: "Trade Categories Supplied" },
  { n: "100%", l: "PF & ESI Compliance" },
  { n: "7–10", l: "Days to First Deployment" },
];

const trustBar = [
  "✅ ITI-Certified & Verified",
  "📋 Contract Labour Act Compliant",
  "💼 PF & ESI by Sipayi",
  "🏢 Employer of Record",
  "🏭 Manufacturing, Construction, Utilities",
  "🗺️ 15+ Cities Across India",
];

const challenges = [
  { bold: "ITI verification is manual.", rest: " Checking NCVT/SCVT records takes 2–5 days per candidate. Most HR teams skip it and discover misrepresentation after deployment." },
  { bold: "PF and ESI registration per worker.", rest: " Each new hire requires separate UAN creation, PF mapping, ESI card issuance — before they can legally work for you." },
  { bold: "Principal employer liability.", rest: " Under the Contract Labour Act 1970, if your contractor defaults on wages or statutory dues, your organisation is directly liable — not just the contractor." },
  { bold: "State minimum wage varies by trade.", rest: " A welder's minimum wage in Karnataka differs from Maharashtra. Getting this wrong triggers a labour audit failure even when everything else is in order." },
];

const compliance = [
  { title: "ITI Certificate Verification", desc: "Every worker verified against NCVT/SCVT records before deployment. Certificate copies provided to your HR team on request." },
  { title: "PF Registration & Monthly Deposits", desc: "We register every worker, make monthly 12% deposits, and provide deposit receipts — no client action needed." },
  { title: "ESI Enrolment & Card Issuance", desc: "Every worker enrolled under ESI. Cards issued. 3.25% employer contribution managed by Sipayi." },
  { title: "Contract Labour Act Documentation", desc: "Form D (contractor registration), wage registers, muster rolls — all maintained and available for your labour inspector's visit." },
  { title: "State Minimum Wage Compliance", desc: "Wages calculated per the current state schedule for each trade category. Updated whenever state revision occurs." },
];

const trades = [
  { ico: "⚡", name: "Electrician (Wireman / Wiring)", cert: "ITI Electrician Trade · NCVT/SCVT", deploy: "Contract", desc: "Wiring, panel installation, maintenance, earthing systems. Available for shift-based production and facility maintenance roles.", tags: ["Manufacturing", "Construction", "Facilities"] },
  { ico: "🔧", name: "Plumber / Pipe Fitter", cert: "ITI Plumbing Trade · NCVT/SCVT", deploy: "Contract", desc: "Pipe laying, fitting, maintenance, drainage systems. MEP projects, industrial plants, and construction sites.", tags: ["Construction", "MEP", "Industrial"] },
  { ico: "🔥", name: "Welder (MIG / TIG / Arc)", cert: "ITI Welder Trade + ASME/CSWIP (Optional)", deploy: "Project / Contract", desc: "MIG, TIG, stick welding. Structural, pipe, and precision welding. ASME and CSWIP-certified welders available on request.", tags: ["Steel", "Automotive", "Oil & Gas"] },
  { ico: "⚙️", name: "Machine Operator", cert: "ITI Machinist / Turner / Fitter", deploy: "Contract / Temp", desc: "CNC, lathe, milling, press, and packaging machine operators. Production line deployment, 3-shift availability.", tags: ["Automotive", "FMCG", "Pharma"] },
  { ico: "🔩", name: "Fitter / Mechanical Fitter", cert: "ITI Fitter Trade · NCVT/SCVT", deploy: "Contract", desc: "Assembly, fitting, alignment, and mechanical maintenance. Preventive maintenance teams and production line support.", tags: ["Manufacturing", "Maintenance", "Engineering"] },
  { ico: "🏗️", name: "Fabricator / Structural Steel", cert: "ITI Fabrication Trade · NCVT/SCVT", deploy: "Project-Based", desc: "Structural steel fabrication, sheet metal, civil and industrial frame construction. Project-based deployment available.", tags: ["Construction", "Infrastructure", "Heavy Eng."] },
  { ico: "❄️", name: "HVAC Technician", cert: "ITI AC & Refrigeration Trade", deploy: "Contract", desc: "HVAC installation, servicing, and maintenance. Facilities management, commercial buildings, and industrial cooling systems.", tags: ["Facilities", "Hospitality", "Commercial"] },
  { ico: "🔌", name: "Instrumentation Technician", cert: "ITI Electronics / Instrumentation Trade", deploy: "Contract", desc: "Calibration, PLC systems, control panel maintenance. Process industries, pharmaceutical plants, and oil & gas facilities.", tags: ["Pharma", "Oil & Gas", "Process"] },
  { ico: "🏎️", name: "Automobile Technician", cert: "ITI Automobile Trade · NCVT/SCVT", deploy: "Contract", desc: "Engine, transmission, diagnostics, and EV maintenance. Auto OEM plants, ancillary units, and authorised service centres.", tags: ["Auto OEM", "Ancillary", "Workshops"] },
  { ico: "🧱", name: "Mason / Civil Worker", cert: "ITI Construction Trade", deploy: "Project-Based", desc: "Bricklaying, plastering, concrete work, formwork. Residential, commercial, and industrial construction projects.", tags: ["Construction", "Infrastructure"] },
  { ico: "🎨", name: "Painter / Surface Finisher", cert: "ITI Painter Trade · NCVT/SCVT", deploy: "Project / Contract", desc: "Brush, spray, and powder coating. Industrial paint applications, furniture finishing, and construction surface work.", tags: ["Construction", "Industrial", "Furniture"] },
  { ico: "📦", name: "Forklift / Crane Operator", cert: "Forklift / Crane License (DGFASLI)", deploy: "Contract", desc: "Licensed forklift and crane operators for warehouse and manufacturing material handling. Safety-certified and DGFASLI compliant.", tags: ["Warehousing", "Logistics", "Manufacturing"] },
];

const models = [
  { badge: "Most Popular", badgeTone: "teal", title: "Contract Staffing", dur: "3 months → Ongoing", desc: "Ongoing production floor requirements, maintenance teams, and facilities with regular skilled trades needs. Sipayi handles all PF, ESI, and payroll — you receive a monthly invoice inclusive of all statutory costs.", note: "Best for: Manufacturing plants, facilities management, warehouses with stable headcount requirements.", featured: true },
  { badge: "Project-Based", badgeTone: "navy", title: "Project Staffing", dur: "1–18 months", desc: "Construction projects, plant commissioning, turnaround maintenance, and greenfield factory builds requiring a defined workforce for a specific timeline. Project-end clearance and settlements handled by Sipayi.", note: "Best for: Construction, EPC contractors, plant commissioning, scheduled maintenance shutdowns.", featured: false },
  { badge: "Flexible", badgeTone: "navy", title: "Surge / Temporary Staffing", dur: "Days → 3 months", desc: "Seasonal demand spikes, order rushes, and planned shutdowns where permanent headcount cannot increase. Fast mobilisation — deployed within 5–7 working days. Workers can be recalled for next season without re-hiring from scratch.", note: "Best for: FMCG seasonal peaks, festive production runs, planned maintenance shutdowns.", featured: false },
];

const complianceRows = [
  { ob: "Provident Fund (PF)", req: "12% employer contribution — registered and deposited monthly per worker above threshold", cov: "✔ 100% enrolled. Receipts available on request." },
  { ob: "ESI (Employee State Insurance)", req: "3.25% employer contribution. Entitles worker to ESIC medical coverage", cov: "✔ 100% enrolled. ESI cards issued to workers." },
  { ob: "Minimum Wage Act", req: "State-specific minimum wage per trade category — varies by skill level and state", cov: "✔ Paid per current state schedule. Documentation maintained." },
  { ob: "Contract Labour (R&A) Act", req: "Contractor must hold Form D registration, maintain muster rolls, wage registers, attendance records", cov: "✔ All registers maintained. Available for principal employer audit." },
  { ob: "Bonus Act", req: "Annual bonus entitlement for workers completing 30+ working days in an accounting year", cov: "✔ Paid per Act provisions. Included in annual settlement." },
  { ob: "Leave Encashment", req: "Earned leave accumulation and encashment as per Factories Act / Shops Act", cov: "✔ Tracked per worker. Settled at contract end." },
  { ob: "ITI Certification Verification", req: "Trade certificate authenticity verified against NCVT/SCVT records before deployment", cov: "✔ Verified before deployment. Certificate copies available." },
];

const industries = [
  { ico: "🏭", title: "Manufacturing", desc: "Auto ancillary, FMCG, pharmaceuticals, packaging, electronics — production floor and maintenance teams." },
  { ico: "🏗️", title: "Construction & Infrastructure", desc: "Residential, commercial, and industrial construction — masons, electricians, welders, fabricators." },
  { ico: "⚡", title: "Power & Utilities", desc: "Power plants, solar installations, substations, and utility maintenance requiring certified technicians." },
  { ico: "🛢️", title: "Oil, Gas & Petrochemical", desc: "Refineries, pipelines, LPG plants — certified welders, instrumentation technicians, fitters." },
  { ico: "🏢", title: "Facilities & MEP", desc: "Corporate campuses, data centres, hospitals — HVAC, electrical, and plumbing maintenance teams." },
  { ico: "🚢", title: "Logistics & Warehousing", desc: "Licensed forklift/crane operators, packaging technicians, material handlers for warehouse operations." },
];

const testimonials = [
  { quote: "We needed 18 welders and 12 machine operators for a 6-month production ramp. Sipayi had all 30 workers on-site and enrolled in PF and ESI within 12 days of our request. The compliance documentation our audit team checked was complete, current, and required zero chasing from our side.", name: "Ganesh Raman, HR Head", role: "Auto Components Plant, Pune", supplied: "ITI Welders (MIG/Arc) + Machine Operators", model: "Contract Staffing · 6 months" },
  { quote: "We contracted Sipayi for electricians and civil workers across two project sites. The workers were ITI-certified and actually knew their trade — not just people with certificates. When one worker did not meet our site supervisor's standards, Sipayi replaced him within 48 hours without argument or delay.", name: "Pradeep Nair, Project Manager", role: "Infrastructure Project, Hyderabad", supplied: "Electricians + Civil Workers (Masons)", model: "Project Staffing · 8 months" },
];

const faqs = [
  { question: "What is the difference between contract staffing and permanent placement for skilled workers?", answer: "In contract staffing, Sipayi remains the employer of record — we handle PF, ESI, wages, and compliance. You pay Sipayi a monthly service fee inclusive of all statutory costs. In permanent placement, the worker is hired directly by your organisation and all employment obligations transfer to you. For most manufacturing and construction requirements, contract staffing is preferred because it keeps compliance off your HR team's plate entirely." },
  { question: "Are your workers ITI-certified and how do you verify it?", answer: "Yes. All skilled workers supplied by Sipayi hold ITI trade certificates from NCVT (National Council for Vocational Training) or SCVT (State Council for Vocational Training). We verify certificate authenticity against official NCVT/SCVT records before deployment — not just during screening. Certificate copies are provided to the client on request. For specialised roles such as welders requiring ASME or CSWIP certification, we conduct additional credential verification with the issuing authority." },
  { question: "Do you handle PF and ESI registration for contract skilled workers?", answer: "Yes, completely. Sipayi handles PF registration, UAN creation, monthly 12% deposits, ESI enrolment, ESI card issuance, and all related documentation for every worker we deploy. Your organisation has zero direct obligation for statutory compliance on Sipayi-deployed workers. Monthly proof of PF deposits and ESI contributions is provided on request — useful for your internal audits and principal employer compliance checks." },
  { question: "What is the principal employer's liability for contract workers?", answer: "Under the Contract Labour (Regulation and Abolition) Act 1970, if a contractor fails to meet wage or statutory obligations, the principal employer is directly liable — this is not a technicality, it has been enforced in labour court decisions across India. This is why Sipayi maintains complete compliance documentation for every worker: Form D (contractor registration), wage registers, PF deposit receipts, and ESI records. As our client, you can request these at any time — so your organisation is never exposed in a labour audit or inspection." },
  { question: "Can you supply workers for a short-term project or do you require long contracts?", answer: "We offer flexible engagement terms. For project-based requirements, we supply workers from as short as 2 weeks. For surge staffing during seasonal demand peaks or planned shutdowns, we mobilise within 5–7 working days. For ongoing contract staffing, our standard minimum is 3 months. All models include full compliance coverage regardless of duration — there is no short-term discount on statutory obligations." },
  { question: "How quickly can you deploy skilled workers after receiving a requirement?", answer: "For standard trade categories — electricians, welders, machine operators, fitters — we deploy within 7–10 working days for requirements up to 25 workers. For large-volume requirements (50+ workers) or specialised trades, we confirm deployment timelines during the initial call. Emergency deployment for critical maintenance situations can be arranged within 48–72 hours in Bengaluru, Hyderabad, Mumbai, Chennai, and Pune." },
];

const cities = [
  "Electrician Staffing Bangalore", "Welder Supply Mumbai", "Skilled Labour Hyderabad",
  "Machine Operators Chennai", "Contract Labour Pune", "ITI Workers Delhi NCR",
  "Manpower Supply Ahmedabad", "Skilled Workers Coimbatore", "Contract Staffing India",
];

const promises = ["4-hour availability response", "PF & ESI included", "ITI-verified workers", "Full Contract Labour Act compliance"];

const headerNav = {
  theme: "manpower" as const,
  logoSuffix: "Manpower",
  items: [
    { label: "Home", to: "/" },
    { label: "Trade Directory", to: { hash: "#trades" } },
    { label: "Compliance", to: { hash: "#compliance" } },
    { label: "FAQ", to: { hash: "#faq" } },
  ],
  ctaLabel: "Get Workers →",
  ctaTo: { hash: "#contact" },
};

const footerConfig = {
  blurb: "ITI-certified skilled manpower supply, industrial security, corporate security, and residential security across 15+ cities in India since 2015.",
  servicesTitle: "Trades We Supply",
  services: ["Electricians", "Welders (MIG/TIG/Arc)", "Plumbers / Pipe Fitters", "Machine Operators", "Fitters & Fabricators", "HVAC & Instrumentation"],
  thirdColTitle: "Security Services",
  thirdColTo: "/#services",
  industries: ["Corporate Security", "Residential Security", "Industrial Security", "Event Security", "Security Consultancy"],
  bottomTagline: "PSARA Licensed · ISO 9001:2015 · India",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const SkilledManpower = () => {
  usePageMeta(
    "Skilled Manpower Supply India | Electricians, Welders & ITI Trades | Sipayi",
    "Sipayi supplies ITI-certified electricians, welders, plumbers, and machine operators across India. Contract staffing with full PF, ESI & compliance. Fast deployment. Get a free quote.",
  );

  const [query, setQuery] = useState("");
  const filteredTrades = trades.filter((t) =>
    `${t.name} ${t.cert} ${t.tags.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <Layout nav={headerNav} footer={footerConfig}>
      {/* BREADCRUMB */}
      <div className="bg-[#0F766E]/[0.08] border-b border-[#0F766E]/[0.12] px-6 py-2.5">
        <div className="mx-auto max-w-[1120px] text-[0.8rem] text-muted-foreground">
          <Link to="/" className="text-[#0F766E] hover:underline">Home</Link> ›{" "}
          <Link to="/#services" className="text-[#0F766E] hover:underline">Services</Link> ›{" "}
          <span className="text-primary font-semibold">Skilled Manpower Supply</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-[76px]" style={{ background: "linear-gradient(135deg,#0F766E 0%,#0D9488 50%,#0F766E 100%)" }}>
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 60%)" }} />
        <div className="relative mx-auto max-w-[1120px] px-6 grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          <div>
            <div className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#CCFBF1] mb-3.5">Skilled Manpower Supply — Contract Staffing</div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[0.68rem] font-semibold tracking-[0.06em] uppercase px-3 py-[5px] rounded-full bg-[#CCFBF1]/20 border border-[#CCFBF1]/40 text-[#CCFBF1]">ITI-Certified Workers</span>
              {["20+ Trade Categories", "Full PF & ESI", "Employer of Record"].map((b) => (
                <span key={b} className="text-[0.68rem] font-semibold tracking-[0.06em] uppercase px-3 py-[5px] rounded-full bg-white/15 border border-white/25 text-white">{b}</span>
              ))}
            </div>
            <h1 className="text-white mb-3.5 tracking-tight">
              Skilled Manpower Supply —{" "}
              <span className="text-[#CCFBF1]">ITI-Certified Electricians, Welders, Plumbers, Machine Operators &amp; More,</span>{" "}
              Across India
            </h1>
            <p className="text-white/80 text-[0.97rem] mb-[26px]">
              Finding skilled tradespeople in India — and keeping them compliant — is one of the most
              persistent operational headaches for manufacturing and construction businesses. Sipayi supplies
              ITI-certified, background-verified skilled workers across 20+ trade categories, acting as the
              employer of record so your HR team carries zero compliance liability.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#trades" className="bg-white text-[#0F766E] px-[26px] py-3 rounded-md font-bold text-[0.92rem] font-heading inline-block hover:-translate-y-0.5 transition-transform">Browse Trade Directory →</a>
              <a href="#contact" className="border-2 border-white/40 text-white px-[22px] py-2.5 rounded-md font-semibold text-[0.92rem] inline-block hover:border-white transition-colors">Get Free Quote</a>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-2.5">
            {heroStats.map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/15 rounded-lg px-3.5 py-4 text-center">
                <div className="font-heading text-[1.5rem] font-extrabold text-white leading-none">{s.n}</div>
                <div className="text-[0.72rem] text-white/65 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-primary py-3 px-6">
        <div className="mx-auto max-w-[1120px] flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
          {trustBar.map((t) => (
            <span key={t} className="text-white/70 text-[0.78rem] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* WHY HARD */}
      <section className="py-[68px]">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-11 items-start">
            <div>
              <SectionHeading tone="teal" align="left" eyebrow="The Hiring Reality" title="Why Skilled Manpower Hiring Is Harder Than It Looks — And Why Most HR Teams Outsource It" />
              <p className="text-[0.95rem] text-muted-foreground">
                Hiring a skilled electrician or welder sounds straightforward. Verifying ITI certification
                takes days. Checking trade experience requires calls to previous employers. Then comes the
                compliance web: PF registration, ESI enrolment, Contract Labour Act registration, minimum wage
                by state and trade category, and statutory documentation — all while your production line is
                waiting.
              </p>
              <div className="flex flex-col gap-3 mt-5">
                {challenges.map((c) => (
                  <div key={c.bold} className="bg-secondary rounded-lg px-[18px] py-3.5 border-l-[3px] border-[#DC2626] flex gap-3">
                    <div className="text-[1.2rem] shrink-0 mt-0.5">⚠️</div>
                    <p className="text-[0.86rem] text-foreground m-0"><strong className="text-primary">{c.bold}</strong>{c.rest}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-7 text-white" style={{ background: TEAL }}>
              <h3 className="text-[#CCFBF1] text-base mb-[18px]">✅ What Sipayi Handles — So You Don't Have To</h3>
              {compliance.map((c, i) => (
                <div key={c.title} className={`flex gap-3 py-2.5 ${i < compliance.length - 1 ? "border-b border-white/10" : ""}`}>
                  <div className="text-[#CCFBF1] font-bold text-base shrink-0">✓</div>
                  <div>
                    <h4 className="text-white text-[0.86rem] font-semibold mb-0.5">{c.title}</h4>
                    <p className="text-[0.78rem] text-white/60 m-0">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* TRADE DIRECTORY */}
      <section id="trades" className="py-[68px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading tone="teal" eyebrow="Trade Directory" title="Skilled Workers We Supply — Browse by Trade" subtitle="Every worker is ITI-certified or holds equivalent trade certification, background-verified, and enrolled under PF and ESI before deployment. Find your trade below." />
          <div className="flex gap-2.5 mb-7 flex-wrap">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search trades"
              placeholder="Search by trade — e.g. electrician, welder, HVAC, forklift…"
              className="flex-1 min-w-[220px] px-4 py-3 rounded-lg border-[1.5px] border-border text-[0.9rem] outline-none focus:border-[#0F766E]"
            />
          </div>
          {filteredTrades.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredTrades.map((t) => (
                <div key={t.name} className="relative bg-white border border-border rounded-[10px] px-4 py-[18px] transition-all hover:shadow-[0_6px_24px_rgba(15,118,110,0.1)] hover:border-[#14B8A6] cursor-pointer">
                  <span className="absolute top-3 right-3 text-[0.64rem] font-semibold text-[#15803D] bg-[#DCFCE7] px-[7px] py-0.5 rounded-[10px]">{t.deploy}</span>
                  <div className="flex items-center gap-2.5 mb-2.5 pr-16">
                    <div className="text-[1.6rem] shrink-0">{t.ico}</div>
                    <div className="font-heading text-[0.95rem] font-bold text-primary">{t.name}</div>
                  </div>
                  <div className="text-[0.72rem] font-semibold text-[#0F766E] uppercase tracking-[0.06em] mb-1.5">{t.cert}</div>
                  <p className="text-[0.82rem] text-muted-foreground m-0">{t.desc}</p>
                  <div className="flex gap-1.5 flex-wrap mt-2.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[0.68rem] bg-secondary border border-border text-muted-foreground px-2 py-[3px] rounded-[3px]">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-[0.9rem]">No trade matches "{query}". We supply 20+ categories — <a href="#contact" className="text-[#0F766E] font-semibold">contact us</a> with your requirement.</p>
          )}
          <div className="text-center mt-5 p-4 bg-secondary rounded-lg border border-dashed border-[#14B8A6]">
            <p className="m-0 text-[0.86rem] text-primary">
              Don't see your trade? We supply <strong className="text-primary">20+ trade categories</strong>.{" "}
              <a href="#contact" className="text-[#0F766E] font-semibold">Contact us</a> with your requirement — we confirm availability within 4 hours.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-[68px]">
        <Wrap>
          <SectionHeading tone="teal" eyebrow="How We Work" title="Three Ways to Engage — Pick What Fits Your Production Cycle" subtitle="We are not a job portal. Sipayi acts as a manpower contractor — recruiting, verifying, employing, and deploying workers on your schedule, while remaining the employer of record." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {models.map((m) => (
              <div key={m.title} className={`rounded-[10px] p-6 border-2 ${m.featured ? "border-[#0F766E] bg-[#0F766E]/[0.03]" : "border-border"}`}>
                <span className={`text-[0.68rem] font-bold tracking-[0.08em] uppercase px-2.5 py-[3px] rounded-[10px] mb-3 inline-block ${m.badgeTone === "teal" ? "bg-[#CCFBF1] text-[#0F766E]" : "bg-secondary text-primary"}`}>{m.badge}</span>
                <div className="font-heading text-base font-bold text-primary mb-1">{m.title}</div>
                <div className="text-[0.78rem] font-semibold text-[#0F766E] mb-3">{m.dur}</div>
                <p className="text-[0.86rem] text-muted-foreground mb-2.5">{m.desc}</p>
                <div className="text-[0.78rem] text-muted-foreground border-t border-border pt-2.5 mt-2.5">{m.note}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* COMPLIANCE TABLE */}
      <section id="compliance" className="py-[68px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading tone="teal" eyebrow="Compliance Detail" title={`What "Full Compliance" Actually Means — Line by Line`} subtitle="Every manpower supplier claims to be compliant. Here is exactly what Sipayi covers — and what you should ask any supplier to prove in writing." />
          <div className="overflow-x-auto rounded-[10px] shadow-[0_2px_16px_rgba(11,29,58,0.06)]">
            <table className="w-full min-w-[640px] border-collapse bg-white text-[0.86rem]">
              <thead>
                <tr>
                  <th className="bg-primary text-white text-left px-4 py-3 text-[0.82rem] font-semibold">Statutory Obligation</th>
                  <th className="bg-primary text-white text-left px-4 py-3 text-[0.82rem] font-semibold">What It Requires</th>
                  <th className="text-left px-4 py-3 text-[0.82rem] font-semibold text-white" style={{ background: TEAL }}>Sipayi's Coverage</th>
                </tr>
              </thead>
              <tbody>
                {complianceRows.map((r, i) => (
                  <tr key={r.ob} className={i % 2 === 1 ? "bg-[#0F766E]/[0.02]" : ""}>
                    <td className="px-4 py-3 border-b border-border font-semibold text-primary align-top">{r.ob}</td>
                    <td className="px-4 py-3 border-b border-border text-foreground align-top">{r.req}</td>
                    <td className="px-4 py-3 border-b border-border text-[#15803D] font-semibold align-top">{r.cov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.9rem] text-muted-foreground mt-5">
            ⚠️ <strong className="text-primary">Principal Employer Liability:</strong> Under the Contract Labour
            (R&amp;A) Act 1970, if a contractor fails to pay statutory dues, the principal employer (your
            organisation) is directly liable. Sipayi's compliance model eliminates this risk — request our
            Form D registration and monthly PF deposit receipts at any time.
          </p>
        </Wrap>
      </section>

      {/* INDUSTRIES */}
      <section className="py-[68px]">
        <Wrap>
          <SectionHeading tone="teal" eyebrow="Sectors Served" title="Industries We Supply Skilled Workers To" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white border border-border rounded-lg p-[18px] flex gap-3 items-start">
                <div className="text-[1.4rem] shrink-0 mt-0.5">{ind.ico}</div>
                <div>
                  <h4 className="text-primary text-[0.9rem] font-bold mb-1">{ind.title}</h4>
                  <p className="text-[0.8rem] text-muted-foreground m-0">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[68px] section-alt">
        <Wrap>
          <SectionHeading tone="teal" eyebrow="Client Results" title="What Clients Report After Hiring Through Sipayi" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border border-t-[3px] border-t-[#0F766E] rounded-[10px] p-6">
                <div className="text-accent tracking-[2px] text-[0.84rem] mb-2.5">★★★★★</div>
                <blockquote className="text-[0.89rem] text-foreground italic leading-relaxed mb-3.5">"{t.quote}"</blockquote>
                <div>
                  <h5 className="font-heading text-[0.86rem] text-primary font-bold mb-0.5">{t.name}</h5>
                  <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                </div>
                <div className="mt-3.5 pt-3 border-t border-border text-[0.76rem] text-muted-foreground">
                  Trades supplied: <strong className="text-[#0F766E]">{t.supplied}</strong> · {t.model}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SectionHeading tone="teal" eyebrow="Common Questions" title="Frequently Asked Questions — Skilled Manpower Supply India" subtitle="Questions HR managers and procurement teams ask before placing a staffing order." />
          <FaqSection items={faqs} tone="teal" />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="section-alt border-t border-border py-7 px-6 text-center">
        <h3 className="font-heading text-primary text-[0.9rem] mb-3">📍 Skilled Manpower Supply Available Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-white border border-border text-muted-foreground px-[14px] py-1.5 rounded-full text-[0.78rem] font-medium">{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="py-[68px] px-6 text-center text-white scroll-mt-16" style={{ background: "linear-gradient(135deg,#0F766E,#0D9488)" }}>
        <h2 className="text-white mb-2.5">Tell Us What You Need — We'll Confirm Availability in 4 Hours</h2>
        <p className="text-white/75 max-w-[500px] mx-auto mb-2.5">
          Share your trade requirement, quantity, and location. Our manpower team responds with worker
          availability, deployment timeline, and a fully itemised cost sheet.
        </p>
        <p className="text-[0.8rem] text-white/60 mb-[26px]">Include: Trade required · Quantity · City · Engagement type (contract / project / surge)</p>
        <LeadForm
          buttonLabel="Get Quote →"
          buttonTheme="navy"
          service="Skilled Manpower"
          selectLabel="Trade Required"
          selectOptions={["Electrician", "Welder (MIG/TIG/Arc)", "Plumber / Pipe Fitter", "Machine Operator", "Fitter / Mechanical", "Fabricator", "HVAC Technician", "Forklift Operator", "Other / Multiple Trades"]}
          extraInput={{ name: "detail", placeholder: "Quantity & City" }}
          formClassName="max-w-[620px]"
        />
        <p className="mt-3.5 text-[0.76rem] text-white/50">
          📞 +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com (Subject: Skilled Manpower — [Trade] — [City])
        </p>
        <div className="flex justify-center gap-x-5 gap-y-2 mt-[18px] flex-wrap">
          {promises.map((p) => (
            <span key={p} className="text-[0.78rem] text-white/65 flex items-center gap-1.5">
              <span className="text-[#CCFBF1] font-bold">✓</span>{p}
            </span>
          ))}
        </div>
      </section>

      {/* BACK LINK */}
      <div className="section-alt text-center py-7">
        <Link to="/#services" className="text-primary font-semibold text-[0.9rem] hover:text-[#0F766E] transition-colors">
          ← Back to All Services | Sipayi Security &amp; Manpower
        </Link>
      </div>

      <StickyMobileCTA variant="teal" />
    </Layout>
  );
};

export default SkilledManpower;
