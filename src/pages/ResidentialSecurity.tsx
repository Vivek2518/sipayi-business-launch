import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const PHONE_TEL = "tel:+919606696105";

const stats = [
  { n: "150+", l: "Residential Societies Protected" },
  { n: "500+", l: "Police-Verified Guards" },
  { n: "90%+", l: "Reduction in Unauthorised Entry" },
  { n: "72hrs", l: "Deployment Guarantee" },
];

const trustBar = [
  "✅ PSARA Licensed",
  "🏅 ISO 9001:2015",
  "🔍 Police-Verified Guards",
  "🏠 RWA-Friendly Contracts",
  "⚖️ Zero PF/ESI for Society",
  "📋 Monthly RWA Reports",
  "🚀 72-Hour Deployment",
];

const services = [
  { ico: "🚪", title: "Gated Community Security", desc: "Trained guards at all vehicle and pedestrian entry gates — structured visitor registration, contractor access management, and delivery personnel verification. Shift-based rotations covering morning, afternoon, and night, with supervisor coverage during peak hours. Guards briefed on your community's specific rules including domestic staff entry times and vehicle sticker protocols." },
  { ico: "🏢", title: "Apartment Complex Security", desc: "Static guards for building lobbies, stairwell monitoring, basement parking patrolling, and delivery management. Our guards are trained to be polite with residents yet firm with visitors — ensuring resident comfort is never compromised by security enforcement. Suitable for single-tower and multi-tower apartment complexes." },
  { ico: "🏘️", title: "Housing Society & RWA Security", desc: "For multi-block or multi-phase societies, we provide a structured security team with a dedicated supervisor, guard allocation per block, and a centralised security post. All guard activity logged in a digital register shared monthly with your RWA committee. We assist societies in developing visitor management SOPs tailored to their community rules." },
  { ico: "🌙", title: "Night Patrolling & Perimeter Security", desc: "Randomised and scheduled patrol routes covering parking areas, compound walls, gardens, service entrances, and CCTV blind spots during night hours. Guards carry incident log sheets and report all observations to the supervising officer — particularly important for large gated communities with 24-hour resident movement." },
  { ico: "👥", title: "Visitor & Domestic Staff Management", desc: "Structured visitor entry with ID verification, digital or physical visitor logs, domestic staff ID registration, and delivery notification protocols. We help communities implement a robust visitor management process that reduces entry of unverified individuals by over 80% within the first month." },
  { ico: "🚨", title: "Emergency Response & Resident Assistance", desc: "Guards trained in first aid, fire safety, and emergency escalation. Briefed on each building's emergency exits, muster points, and local emergency contacts before deployment. Sipayi coordinates periodic emergency drills with your facility management team as part of the service agreement." },
];

const costs = [
  { type: "Small Complex", range: "₹15k–₹18k", desc: "Per guard/month. Suitable for apartments up to 50 flats, single gate. Day or night shift.", featured: false },
  { type: "Mid-Size Society ⭐ Most Common", range: "₹18k–₹22k", desc: "Per guard/month. 50–200 flats, 2 gates, mixed shift requirement. Includes supervisor allocation.", featured: true },
  { type: "Large Gated Community", range: "₹22k–₹28k", desc: "Per guard/month. 200+ flats, 3+ gates, multi-block, 24/7 coverage with CCTV coordination.", featured: false },
];

const eeat = [
  { ico: "🏠", title: "10+ Years Protecting Indian Families & Communities", tag: "(Experience)", desc: "150+ residential communities secured — from a 25-flat apartment building in Chennai to a 600-unit gated township in Bengaluru. Our supervisors understand RWA governance, community-specific protocols, and the interpersonal dynamics unique to residential security environments." },
  { ico: "📜", title: "PSARA Compliance + Zero RWA Legal Risk", tag: "(Expertise)", desc: "Every guard is PSARA-trained (160+ hours), police-verified, and covered under PF and ESI by Sipayi. Your RWA carries zero statutory liability. All documentation — police verification certificates, training records, compliance proofs — available on request for your committee's audit records." },
  { ico: "⭐", title: "150+ Societies. 85%+ Annual Renewal Rate.", tag: "(Authoritativeness)", desc: "Sipayi clients report an average 90%+ reduction in unauthorised entry incidents within the first 60 days. Our 85%+ contract renewal rate across residential clients reflects consistent, resident-friendly service delivery that RWA committees keep choosing year after year." },
  { ico: "📊", title: "Monthly Reports + Itemised Billing — No Surprises", tag: "(Trustworthiness)", desc: "Every residential client receives a monthly report — guard attendance, visitor log summary, incidents, patrol records — delivered to the RWA chairperson automatically. All billing is fully itemised: guard salary and statutory charges shown line by line. If a guard post is unfilled beyond 4 hours, it is adjusted in your invoice." },
];

const creds = [
  { ico: "📜", title: "PSARA License", desc: "Valid state-issued license — directly verifiable with the authority." },
  { ico: "🏅", title: "ISO 9001:2015 Certified", desc: "Quality management across guard selection, training, and operations." },
  { ico: "🔍", title: "160+ Hours Guard Training", desc: "PSARA training + resident-behaviour + community rule briefing." },
  { ico: "👮", title: "100% Police-Verified Guards", desc: "Police check, address verification, employment history, medical fitness." },
  { ico: "💼", title: "PF / ESI / Labour Compliant", desc: "Full statutory compliance — zero RWA liability." },
  { ico: "📊", title: "Monthly RWA Reports", desc: "Attendance, visitor log, incidents — auto-delivered every month." },
];

type CellType = "ok" | "no" | "maybe";
const compareColumns = ["✅ Sipayi Security", "National Agency", "Local Unlicensed"];
const compareRows: { factor: string; cells: { text: string; type: CellType }[] }[] = [
  { factor: "PSARA License", cells: [{ text: "✔ Valid & Verifiable", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Often Missing", type: "no" }] },
  { factor: "Police-Verified Guards", cells: [{ text: "✔ 100% All Guards", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Rarely Done", type: "no" }] },
  { factor: "72-Hour Deployment", cells: [{ text: "✔ Guaranteed", type: "ok" }, { text: "⚠ 1–2 Weeks", type: "maybe" }, { text: "⚠ Variable", type: "maybe" }] },
  { factor: "RWA-Sized Contracts", cells: [{ text: "✔ Any Size — Even 20 Flats", type: "ok" }, { text: "⚠ Large Only", type: "maybe" }, { text: "⚠ Variable", type: "maybe" }] },
  { factor: "PF/ESI Managed by Agency", cells: [{ text: "✔ Yes — Zero RWA Risk", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ RWA Carries Risk", type: "no" }] },
  { factor: "Monthly RWA Reports", cells: [{ text: "✔ Auto Every Month", type: "ok" }, { text: "⚠ On Request Only", type: "maybe" }, { text: "✘ None", type: "no" }] },
  { factor: "Resident-Behaviour Training", cells: [{ text: "✔ Yes — Before Day 1", type: "ok" }, { text: "⚠ Standard Only", type: "maybe" }, { text: "✘ None", type: "no" }] },
  { factor: "Transparent Itemised Billing", cells: [{ text: "✔ Line-by-Line Invoice", type: "ok" }, { text: "⚠ Partial", type: "maybe" }, { text: "✘ No Structure", type: "no" }] },
];
const cellColor: Record<CellType, string> = {
  ok: "text-[#1A7A4A] font-bold",
  no: "text-[#C0392B]",
  maybe: "text-[#E67E22]",
};

const steps = [
  { n: "01", title: "Free Site Assessment", desc: "Security consultant visits your premises, walks all entry points and common areas, identifies gaps, and recommends exact guard count per shift. No charge, no commitment." },
  { n: "02", title: "Transparent Proposal in 24 Hours", desc: "Written, itemised proposal shared with your RWA committee — guard headcount, shift structure, SOP outline, and complete pricing including statutory charges. No verbal quotes." },
  { n: "03", title: "Guard Briefing on Community Rules", desc: "Guards briefed on your society's specific rules — resident vehicle stickers, domestic staff entry times, delivery management, restricted zones. Every guard knows your rules on day one." },
  { n: "04", title: "Live + Monthly RWA Reports", desc: "Guards go live. A supervisor is on-site for the first 72 hours. Your RWA chairperson receives a monthly security report — attendance, incidents, visitor log — automatically, every month." },
];

const testimonials = [
  { initials: "AS", quote: "Sipayi standardised our gate procedures, set up a visitor log system, and reduced unauthorised entry incidents by over 90% in the first two months. Our 400-flat society had struggled with this problem for 3 years. Their guards are polite with residents and firm with visitors.", name: "Amit Sharma, RWA Chairman", role: "Gated Community, Hyderabad" },
  { initials: "MI", quote: "We manage a 120-flat complex and hired Sipayi after a bad experience with an unlicensed agency. The difference is night and day. PF and ESI documentation is always ready, billing is transparent, and the monthly reports our committee receives are genuinely useful for managing the contract.", name: "Meena Iyer, Apartment Manager", role: "Apartment Complex, Chennai" },
];

const faqs = [
  { question: "What is a residential security service?", answer: "Residential security service refers to the deployment of trained, PSARA-licensed security guards to protect gated communities, apartment complexes, housing societies, and individual homes. It includes gate management, visitor and domestic staff verification, night patrolling, CCTV coordination, and emergency response — managed by a licensed agency with full statutory compliance." },
  { question: "How much does residential security cost in India?", answer: "Residential security guard costs in India range from ₹15,000 to ₹25,000+ per guard per month depending on city, shift pattern (day/night), and community requirements. For a standard gated community with 2 gates, most societies budget 3–6 guards. See our transparent cost guide above or contact Sipayi for an exact itemised quote within 24 hours." },
  { question: "Does the RWA or housing society need to manage PF and ESI for guards?", answer: "No — if you hire through Sipayi Security. We manage all statutory obligations for every deployed guard: PF registration, ESI coverage, minimum wage compliance, and labour law documentation. Your RWA or apartment committee carries zero liability. All compliance documents are available for your committee's records and can be shared during society audits." },
  { question: "How many security guards does my gated community need?", answer: "As a general guide: communities with 1 gate and up to 100 flats typically need 2–4 guards; communities with 2–4 gates and 100–500 flats typically need 4–8 guards; large townships with 500+ flats and multiple blocks may need 10–20 guards. Sipayi provides a free site assessment to recommend the exact guard count and shift structure for your community." },
  { question: "What should I check before hiring a security agency for my housing society?", answer: "Verify the agency holds a valid PSARA license for your state. Confirm all guards are police-verified. Ask for documentation of PF and ESI compliance. Request references from similar-sized residential communities. Ask whether you receive monthly performance reports. Sipayi meets all these requirements and provides documentation proactively — before you ask." },
  { question: "How quickly can Sipayi deploy residential security guards?", answer: "For most residential locations in major Indian cities, Sipayi deploys a fully briefed security team within 72 hours of contract signing. For urgent situations — such as a security incident or sudden departure of existing guards — emergency deployment within 24 hours is available subject to location confirmation." },
  { question: "Do you provide female security guards for residential buildings?", answer: "Yes. Sipayi has trained female security guards available for residential environments — particularly relevant for standalone towers, women's hostel security, senior living communities, and societies where female occupants prefer female guards at entry points. Please mention this requirement when requesting a quote." },
];

const cities = [
  "Residential Security Bangalore", "Gated Community Security Mumbai", "Apartment Security Hyderabad",
  "Society Security Chennai", "RWA Security Guards Pune", "Housing Society Security Delhi NCR",
  "Residential Security Ahmedabad", "Apartment Guards Coimbatore", "PSARA Residential Security India",
];

const footerConfig = {
  blurb:
    "PSARA-licensed residential security, corporate security, and manpower staffing across 15+ cities in India since 2015.",
  services: [
    "Residential Security",
    "Corporate Security",
    "Industrial Security",
    "Manpower Staffing",
    "Event Security",
    "Security Consultancy",
  ],
  thirdColTitle: "Residential",
  thirdColTo: "/#services",
  industries: [
    "Gated Communities",
    "Apartment Complexes",
    "Housing Societies",
    "Night Patrolling",
    "Visitor Management",
    "Emergency Response",
  ],
  bottomTagline: "PSARA Licensed Residential Security Agency | India",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const ResidentialSecurity = () => {
  usePageMeta(
    "Residential Security Services India | Guards for Gated Communities & Apartments | Sipayi",
    "Sipayi provides PSARA-licensed residential security guards for gated communities, apartments & housing societies across India. 24/7 vigilance. Police-verified. Get free quote.",
  );

  return (
    <Layout footer={footerConfig}>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/#services" },
          { label: "Residential Security Services" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient text-primary-foreground pt-[80px] pb-[68px] px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(43 80% 46% / 0.10), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1120px] grid lg:grid-cols-2 gap-8 lg:gap-[50px] items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-accent/[0.18] border border-accent text-accent">
                🛡️ PSARA Licensed
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-white/10 border border-white/20 text-white/85">
                ISO 9001:2015
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-white/10 border border-white/20 text-white/85">
                Zero RWA Liability
              </span>
            </div>
            <h1 className="text-white mb-4">
              Residential Security Services —{" "}
              <span className="text-accent">
                Reliable Guards for Gated Communities, Apartments &amp; Individual Homes
              </span>{" "}
              Across India
            </h1>
            <p className="text-white/75 text-[0.97rem] mb-[26px]">
              Your home and community deserve security that is reliable, respectful, and always
              accountable. Sipayi Security &amp; Manpower Services deploys PSARA-licensed,
              police-verified guards for gated communities, apartment complexes, housing societies,
              and individual residences across India — with transparent billing and zero PF/ESI
              liability for your RWA.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-accent text-primary px-[26px] py-3 rounded-md font-bold text-[0.92rem] inline-block hover:-translate-y-0.5 transition-transform"
              >
                Get Free Quote →
              </a>
              <a
                href={PHONE_TEL}
                className="border-2 border-white/35 text-white px-6 py-2.5 rounded-md font-semibold text-[0.92rem] inline-block hover:border-accent hover:text-accent transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="bg-white/[0.07] border border-white/[0.12] rounded-[10px] p-[18px] text-center">
                <div className="font-heading text-[1.65rem] font-extrabold text-accent">{s.n}</div>
                <div className="text-[0.72rem] text-white/60 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[hsl(var(--steel))] py-[13px] px-6">
        <div className="mx-auto max-w-[1120px] flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
          {trustBar.map((t) => (
            <span key={t} className="text-white/80 text-[0.78rem] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* WHY CRITICAL */}
      <section className="py-[70px]">
        <Wrap>
          <div className="mx-auto max-w-[820px] text-center">
            <SectionHeading
              eyebrow="Understanding the Need"
              title="Why Residential Security Is More Critical Than Ever in India"
              className="mb-6"
            />
            <div className="space-y-3.5 text-base text-foreground text-left">
              <p>
                India's urban residential landscape is changing fast. Large gated communities and
                high-rise towers now house thousands of families within a single perimeter. With this
                density comes a new set of challenges —{" "}
                <strong className="text-primary">unauthorised entry, unverified domestic staff, delivery personnel incidents, and inadequate emergency protocols</strong>{" "}
                — that a guard with a register alone cannot solve.
              </p>
              <p>
                Most residential security incidents involve entry through poorly managed gates,
                unverified visitor access, or absent patrolling during night hours. A professional,
                PSARA-licensed residential security service creates a{" "}
                <strong className="text-primary">structured, documented security environment</strong>{" "}
                where every person entering your premises is verified, logged, and accountable.
              </p>
            </div>
          </div>
          <div className="bg-primary rounded-[10px] px-7 py-[22px] my-7 mx-auto max-w-[780px] border-l-[5px] border-accent">
            <p className="text-white/80 text-[0.92rem] m-0">
              <strong className="text-accent">Important for RWA Committees:</strong> Under PSARA 2005,
              any security agency you hire must hold a valid state license. Using an unlicensed vendor
              means your RWA carries direct legal liability for any incident involving that guard.
              Sipayi holds a valid, verifiable PSARA license — protecting your committee from
              compliance risk.
            </p>
          </div>
        </Wrap>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-[70px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="What's Included"
            title="Our Residential Security Services — Complete Coverage for Every Home Type"
            subtitle="Every Sipayi residential security deployment is designed around your specific community — its size, layout, resident profile, and the security challenges you are already facing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-border rounded-xl px-[22px] py-[26px] transition-all hover:shadow-[0_10px_30px_rgba(11,29,58,0.09)] hover:-translate-y-[3px]"
              >
                <div className="text-[2rem] mb-3">{s.ico}</div>
                <h3 className="text-primary text-base mb-2">{s.title}</h3>
                <p className="text-[0.86rem] text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      {/* COST GUIDE */}
      <section className="py-[70px]">
        <Wrap>
          <SectionHeading
            eyebrow="Transparent Pricing"
            title="Residential Security Cost Guide"
            subtitle="All prices include guard salary + statutory compliance (PF, ESI, bonus). No hidden charges. Exact pricing depends on your city, shift type, and community size."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {costs.map((c) => (
              <div
                key={c.type}
                className={`rounded-[10px] p-5 text-center bg-white border ${c.featured ? "border-accent shadow-[0_6px_24px_rgba(212,160,23,0.18)]" : "border-border"}`}
              >
                <div className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-accent mb-2.5">{c.type}</div>
                <div className="font-heading text-[1.3rem] font-extrabold text-primary mb-1.5">{c.range}</div>
                <p className="text-[0.8rem] text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[0.86rem] text-muted-foreground mt-5 text-center">
            Note: Metro cities (Bengaluru, Mumbai, Hyderabad) are at the higher end of each range. Get
            an exact itemised quote within 24 hours.{" "}
            <a href="#contact" className="font-semibold text-accent hover:underline">Request here →</a>
          </p>
        </Wrap>
      </section>

      {/* EEAT / WHY US */}
      <section id="why-us" className="py-[70px] section-alt scroll-mt-16">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-[46px] items-start">
            <div>
              <SectionHeading
                eyebrow="Our Credibility"
                title="Why Choose Sipayi for Your Residential Security?"
                subtitle="Many unregistered local agencies operate in the residential segment without PSARA licensing or police verification — putting RWAs at serious legal and financial risk. Sipayi gives you the compliance quality of a national agency with the personal accountability and contract flexibility that residential communities actually need."
                align="left"
              />
              <div className="flex flex-col gap-5">
                {eeat.map((item) => (
                  <div key={item.title} className="flex gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-accent/[0.12] border-[1.5px] border-accent flex items-center justify-center text-base shrink-0">
                      {item.ico}
                    </div>
                    <div>
                      <h4 className="text-primary text-[0.92rem] mb-1">
                        {item.title}{" "}
                        <em className="text-muted-foreground font-normal text-[0.8rem]">{item.tag}</em>
                      </h4>
                      <p className="text-[0.86rem] text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-7">
              <h3 className="text-accent text-[0.93rem] mb-4">📜 Our Residential Security Credentials</h3>
              {creds.map((c, i) => (
                <div
                  key={c.title}
                  className={`flex items-start gap-3 py-[11px] ${i < creds.length - 1 ? "border-b border-white/[0.08]" : ""}`}
                >
                  <div className="text-[1.2rem] shrink-0 mt-0.5">{c.ico}</div>
                  <div>
                    <h4 className="text-white text-[0.86rem] font-semibold mb-0.5">{c.title}</h4>
                    <p className="text-[0.78rem] text-white/55">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* COMPARISON */}
      <section className="py-[70px]">
        <Wrap>
          <SectionHeading
            eyebrow="How We Compare"
            title="Sipayi vs. Other Residential Security Agencies"
            subtitle="National agencies serve large enterprise contracts. Unregistered local agencies carry legal risk. Sipayi gives you enterprise-quality compliance with RWA-friendly flexibility."
          />
          <div className="overflow-x-auto rounded-xl shadow-[0_4px_18px_rgba(11,29,58,0.07)]">
            <table className="w-full min-w-[640px] border-collapse bg-white text-[0.84rem]">
              <thead>
                <tr>
                  <th className="bg-primary text-white text-left px-[15px] py-3 text-[0.82rem]">Factor</th>
                  {compareColumns.map((col, i) => (
                    <th key={col} className={`text-left px-[15px] py-3 text-[0.82rem] ${i === 0 ? "bg-accent text-primary" : "bg-primary text-white"}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.factor}>
                    <td className="px-[15px] py-[11px] border-b border-border text-foreground">{row.factor}</td>
                    {row.cells.map((cell, i) => (
                      <td key={i} className={`px-[15px] py-[11px] border-b border-border ${i === 0 ? "bg-accent/5" : ""} ${cellColor[cell.type]}`}>
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Wrap>
      </section>

      {/* PROCESS */}
      <section className="py-[70px] section-alt">
        <Wrap>
          <SectionHeading
            eyebrow="How We Work"
            title="Setting Up Residential Security in 4 Steps — Guards Deployed in 72 Hours"
            subtitle="Our onboarding is designed for RWA committees — transparent, documented, and completed before the first guard steps in."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {steps.map((step) => (
              <div key={step.n} className="bg-white border border-border rounded-xl px-[18px] py-[22px]">
                <div className="font-heading text-[2.3rem] font-extrabold text-accent/[0.18] leading-none mb-2.5">{step.n}</div>
                <h4 className="text-primary text-[0.92rem] mb-1.5">{step.title}</h4>
                <p className="text-[0.83rem] text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[70px]">
        <Wrap>
          <SectionHeading eyebrow="Client Reviews" title="What Our Residential Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-xl p-6">
                <div className="text-accent tracking-[2px] mb-2.5 text-[0.86rem]">★★★★★</div>
                <blockquote className="text-[0.88rem] text-foreground italic mb-4">"{t.quote}"</blockquote>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary text-accent flex items-center justify-center font-heading font-bold text-[0.85rem] shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-heading text-[0.85rem] text-primary font-semibold">{t.name}</h5>
                    <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[70px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions — Residential Security Services"
            subtitle="Key questions from RWA committees, apartment managers, and homeowners before hiring a residential security agency."
          />
          <FaqSection items={faqs} />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="section-alt py-8 px-6 text-center">
        <h3 className="font-heading text-primary text-[0.9rem] mb-3">📍 Residential Security Services Available Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-white border border-border text-muted-foreground px-[14px] py-1.5 rounded-full text-[0.78rem] font-medium">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="cta-gradient text-primary-foreground py-[70px] px-6 text-center scroll-mt-16">
        <h2 className="text-white mb-3">Secure Your Community — Free Site Assessment Today</h2>
        <p className="text-white/75 max-w-[500px] mx-auto mb-7">
          Talk to our residential security consultant within 2 hours. We assess your gates, entry
          points, and patrol needs — and provide a fully transparent, itemised quote for your RWA
          committee's approval.
        </p>
        <LeadForm buttonLabel="Get Free Quote →" service="Residential Security" />
        <p className="mt-3 text-[0.76rem] text-white/50">
          📞 +91 96066 96105 &nbsp;|&nbsp; 💬 WhatsApp: +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com
        </p>
      </section>

      {/* BACK LINK */}
      <div className="section-alt text-center py-7">
        <Link to="/#services" className="text-primary font-semibold text-[0.9rem] hover:text-accent transition-colors">
          ← Back to All Services | Sipayi Security &amp; Manpower
        </Link>
      </div>

      <StickyMobileCTA />
    </Layout>
  );
};

export default ResidentialSecurity;
