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
  { n: "300+", l: "Corporate Sites Protected" },
  { n: "500+", l: "Police-Verified Guards" },
  { n: "72hrs", l: "Deployment Guarantee" },
  { n: "85%+", l: "Client Renewal Rate" },
];

const trustBar = [
  "✅ PSARA Licensed",
  "🏅 ISO 9001:2015",
  "🔍 Police-Verified Guards",
  "🕐 24/7 Monitoring",
  "⚖️ Labour Law Compliant",
  "📋 Monthly Client Reports",
  "🚀 72-Hour Deployment",
];

const services = [
  { ico: "🚪", title: "Access Control & Entry Management", desc: "Guards at all entry and exit points with structured visitor registration, employee badge verification, and contractor access management. Trained in biometric system operation and real-time unauthorised access flagging. Dedicated supervisor coverage during peak hours for large IT parks." },
  { ico: "🔦", title: "24/7 Perimeter & Floor Patrolling", desc: "Scheduled and randomised patrol routes across parking zones, server rooms, stairwells, common areas, and loading docks. Guards identify and report security gaps, maintenance issues, and unauthorised personnel. All patrol activities logged in daily registers handed to facility managers each morning." },
  { ico: "📹", title: "CCTV Monitoring & Surveillance Integration", desc: "Guards work in coordination with your CCTV infrastructure — monitoring camera feeds, responding to alerts, and maintaining live incident logs. Sipayi also offers CCTV installation and remote monitoring as an integrated service to eliminate blind spots." },
  { ico: "📋", title: "Visitor & Vendor Management", desc: "Structured visitor registration with ID verification, pre-approved visitor lists, time-stamped entry/exit logs, and escort protocols for sensitive areas like server rooms and executive floors. Vendor and delivery personnel managed under separate protocols." },
  { ico: "🚨", title: "Emergency Response & Evacuation Support", desc: "All Sipayi corporate guards are trained in fire safety, first aid, emergency evacuation procedures, and crisis communication. Guards are briefed on your building's specific exits, muster points, and escalation contacts before deployment. Periodic emergency drills conducted with your facility team." },
  { ico: "🏢", title: "Executive Floor & Restricted Area Protection", desc: "Dedicated guard posts for boardrooms, executive floors, data centres, and R&D facilities. Guards assigned to these zones undergo additional briefing on information security protocols, visitor escort requirements, and incident reporting for sensitive areas." },
];

const eeat = [
  { ico: "🎓", title: "10+ Years of Corporate Security Operations", tag: "(Experience)", desc: "Over 300 active corporate sites. 500+ police-verified guards. Our operations team includes former defence personnel who understand the specific demands of IT parks, MNC campuses, and multi-tenant office complexes — not just generic guarding." },
  { ico: "🏆", title: "Full PSARA, ISO & Labour Law Expertise", tag: "(Expertise)", desc: "160+ hour PSARA training for every guard. ISO 9001:2015 quality management across all operations. Full PF, ESI, and statutory wage compliance — so your HR and legal teams are never exposed. Sipayi clients have never failed a compliance audit due to our deployment." },
  { ico: "📣", title: "200+ Corporate Clients. 85%+ Renewal Rate.", tag: "(Authoritativeness)", desc: "IT parks in Bengaluru's Whitefield corridor, manufacturing campuses in Pune, BPOs in Hyderabad — Sipayi's 85%+ contract renewal rate across corporate clients reflects consistent, documented operational performance." },
  { ico: "🔐", title: "Written SLAs. Monthly Reports. Zero Surprises.", tag: "(Trustworthiness)", desc: "Every contract includes a written SLA covering post-filling rates, supervisor response times, incident reporting, and guard replacement guarantees. Monthly reports — patrol logs, attendance, incidents — delivered automatically without request. No hidden charges." },
];

const creds = [
  { ico: "📜", title: "PSARA License", desc: "Valid state-issued license — directly verifiable with the authority." },
  { ico: "🏅", title: "ISO 9001:2015 Certified", desc: "Quality management across guard selection, training, and operations." },
  { ico: "🔍", title: "160+ Hours Guard Training", desc: "PSARA training + site-specific briefing for every corporate deployment." },
  { ico: "👮", title: "100% Police-Verified Guards", desc: "Police check, address verification, employment history, medical fitness." },
  { ico: "💼", title: "PF / ESI / Labour Compliant", desc: "Full statutory compliance — zero client liability on manpower." },
  { ico: "📊", title: "Monthly Performance Reports", desc: "Attendance, patrol logs, incident reports — auto-delivered every month." },
];

type CellType = "ok" | "no" | "maybe";
const compareColumns = ["✅ Sipayi Security", "SIS India / G4S", "Local Agency"];
const compareRows: { factor: string; cells: { text: string; type: CellType }[] }[] = [
  { factor: "PSARA License", cells: [{ text: "✔ Valid & Verifiable", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Often Missing", type: "no" }] },
  { factor: "Police-Verified Guards", cells: [{ text: "✔ 100% All Guards", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Rarely Done", type: "no" }] },
  { factor: "72-Hour Deployment", cells: [{ text: "✔ Guaranteed", type: "ok" }, { text: "⚠ 1–2 Weeks", type: "maybe" }, { text: "⚠ Variable", type: "maybe" }] },
  { factor: "SME-Sized Contracts", cells: [{ text: "✔ Yes — Any Size", type: "ok" }, { text: "⚠ Large Only", type: "maybe" }, { text: "⚠ Variable", type: "maybe" }] },
  { factor: "Dedicated Account Manager", cells: [{ text: "✔ Yes — Direct Access", type: "ok" }, { text: "⚠ Often Rotated", type: "maybe" }, { text: "✘ No", type: "no" }] },
  { factor: "Monthly Performance Reports", cells: [{ text: "✔ Auto Every Month", type: "ok" }, { text: "⚠ On Request Only", type: "maybe" }, { text: "✘ None", type: "no" }] },
  { factor: "Site-Specific SOP", cells: [{ text: "✔ Before Day 1", type: "ok" }, { text: "⚠ Standard Templates", type: "maybe" }, { text: "✘ None", type: "no" }] },
  { factor: "PF / ESI Compliance", cells: [{ text: "✔ Fully Managed", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ High Risk", type: "no" }] },
];
const cellColor: Record<CellType, string> = {
  ok: "text-[#1A7A4A] font-bold",
  no: "text-[#C0392B]",
  maybe: "text-[#E67E22]",
};

const steps = [
  { n: "01", title: "Free Site Assessment (Same Day)", desc: "Security consultant visits your premises, reviews entry/exit points, CCTV coverage, and occupancy patterns. No charge, no obligation." },
  { n: "02", title: "Custom Proposal in 24 Hours", desc: "Written proposal with guard headcount, shift structure, SOP draft, supervisor plan, and fully transparent pricing — within 24 hours. No verbal quotes." },
  { n: "03", title: "Guard Selection & Site Briefing", desc: "Guards handpicked to match your campus profile. Each guard is briefed specifically on your site's procedures, emergency contacts, and access protocols before day one." },
  { n: "04", title: "Live Deployment + Monthly Reports", desc: "Guards go live with a supervisor on-site for the first 72 hours. Monthly reports — patrol logs, attendance, incidents — delivered automatically every month." },
];

const sectors = [
  { ico: "💻", title: "IT Parks & Technology Campuses", desc: "Whitefield, Electronic City, Hitech City, OMR, Magarpatta — high-footfall tech campuses with multi-gate access and server room protection requirements." },
  { ico: "🏢", title: "MNC Headquarters & Grade-A Towers", desc: "BKC, Nariman Point, Cybercity, DLF Cyber City — international-standard security for multinational office environments." },
  { ico: "📞", title: "BPO & Call Centre Facilities", desc: "24/7 multi-shift environments with high staff rotation — access control and night-shift guarding for round-the-clock operations." },
  { ico: "🤝", title: "Corporate Coworking & Managed Offices", desc: "Flexible workspace with high visitor flow — visitor management, tenant access protocols, and common area security." },
  { ico: "🔬", title: "R&D & Innovation Centres", desc: "Restricted access zones, IP protection protocols, and confidentiality briefing for guards on sensitive campuses." },
  { ico: "🎓", title: "Corporate Training & Business Schools", desc: "Campus safety with structured visitor management and event security for training institutes and business schools." },
];

const testimonials = [
  { initials: "KN", quote: "Sipayi deployed 14 guards across three shifts for our IT campus in Bengaluru within 72 hours. Their site briefing process was thorough — each guard knew our access protocols on day one. Monthly reports are detailed and have never been late in 18 months of working together.", name: "Karthik Nair, Facility Manager", role: "IT Company, Whitefield, Bengaluru" },
  { initials: "SR", quote: "We manage a multi-tenant office complex in Hyderabad. Sipayi's visitor management protocol and guard briefing for our 12 tenant companies was handled professionally. Their compliance documentation — PF, ESI, labour law — was audit-ready within the first week of deployment.", name: "Sneha Reddy, Admin Director", role: "Business Complex Management, Hyderabad" },
];

const faqs = [
  { question: "What is a corporate security service?", answer: "Corporate security service refers to the deployment of trained, verified security guards at office buildings, IT parks, and business campuses to protect employees, visitors, assets, and data. It includes access control, perimeter patrolling, visitor management, CCTV coordination, and emergency response — delivered by a PSARA-licensed security agency." },
  { question: "How much does it cost to hire corporate security guards in India?", answer: "Corporate security guard costs in India typically range from ₹18,000 to ₹32,000 per guard per month depending on city, shift pattern (day/night), armed vs. unarmed, and training requirements. Metro cities like Bengaluru, Mumbai, and Hyderabad are typically at the higher end. Contact Sipayi for a site-specific quote within 24 hours." },
  { question: "Do corporate security guards need special training?", answer: "Yes. Beyond the 160-hour PSARA-mandated training, Sipayi's corporate guards receive additional briefing in access control systems, visitor management, data security awareness, customer-facing behaviour, and site-specific emergency evacuation. Every guard is briefed on your specific premises before deployment day." },
  { question: "How quickly can Sipayi deploy corporate security guards?", answer: "For most corporate locations in Bengaluru, Hyderabad, Chennai, Mumbai, Pune, and Delhi NCR, Sipayi deploys a fully briefed security team within 72 hours of contract signing. Emergency deployments within 24 hours are available for urgent requirements subject to headcount and location confirmation." },
  { question: "What is the difference between PSARA-licensed and unlicensed security agencies?", answer: "A PSARA-licensed agency has been vetted and approved by the state government, deploys only trained and police-verified guards, and follows documented quality and compliance standards. Hiring an unlicensed agency means your business carries full legal liability for any security incident involving those guards — with no government oversight protecting your facility." },
  { question: "Can Sipayi provide security across multiple office locations in different cities?", answer: "Yes. Sipayi currently operates in Bengaluru, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Ahmedabad, Coimbatore, Kochi, and Chandigarh. Multi-location deployments are managed by a central account manager to ensure consistent standards and documentation across all sites." },
  { question: "Does Sipayi handle payroll and compliance for deployed guards?", answer: "Yes. Sipayi manages all statutory obligations — PF registration, ESI coverage, minimum wage compliance, and complete labour law documentation — for every deployed guard. Your HR and legal teams carry zero compliance risk from the security staff. All documents are audit-ready and can be shared on request." },
];

const cities = [
  "Corporate Security Bangalore", "IT Park Security Mumbai", "Office Security Hyderabad",
  "Corporate Guards Chennai", "Business Security Pune", "Office Building Security Delhi NCR",
  "Corporate Security Ahmedabad", "IT Park Guards Coimbatore", "PSARA Corporate Security India",
];

const footerConfig = {
  blurb:
    "PSARA-licensed corporate security guards, manpower staffing, and security consultancy across 15+ cities in India since 2015.",
  services: [
    "Corporate Security",
    "Industrial Security",
    "Manpower Staffing",
    "Electronic Surveillance",
    "Event Security",
    "Security Consultancy",
  ],
  industries: [
    "IT Parks & Tech Campuses",
    "MNC Headquarters",
    "BPO & Call Centres",
    "Manufacturing",
    "Residential Societies",
    "Hospitals",
  ],
  bottomTagline: "PSARA Licensed Corporate Security Agency | India",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const CorporateSecurity = () => {
  usePageMeta(
    "Corporate Security Services India | Guards for IT Parks & Offices | Sipayi",
    "Sipayi provides PSARA-licensed corporate security guards for IT parks, offices & business campuses across India. 24/7 monitoring. Deployed in 72 hours. Get free quote.",
  );

  return (
    <Layout footer={footerConfig}>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/#services" },
          { label: "Corporate Security Services" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient text-primary-foreground pt-[80px] pb-[68px] px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(43 80% 46% / 0.10), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1120px] grid lg:grid-cols-2 gap-8 lg:gap-[52px] items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-accent/[0.18] border border-accent text-accent">
                🛡️ PSARA Licensed
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-white/10 border border-white/20 text-white/85">
                ISO 9001:2015
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-white/10 border border-white/20 text-white/85">
                24/7 Corporate Security
              </span>
            </div>
            <h1 className="text-white mb-4">
              Corporate Security Services —{" "}
              <span className="text-accent">
                Trained Guards for IT Parks, Offices &amp; Business Campuses
              </span>{" "}
              Across India
            </h1>
            <p className="text-white/75 text-[0.98rem] mb-[26px]">
              Sipayi Security &amp; Manpower Services deploys police-verified, PSARA-compliant
              corporate security guards for IT parks, MNC offices, BPOs, and business campuses
              across India. 24/7 monitoring. Site-specific SOPs. Deployed in 72 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-accent text-primary px-[26px] py-[13px] rounded-md font-bold text-[0.92rem] inline-block hover:-translate-y-0.5 transition-transform"
              >
                Get Free Quote →
              </a>
              <a
                href={PHONE_TEL}
                className="border-2 border-white/35 text-white px-6 py-[11px] rounded-md font-semibold text-[0.92rem] inline-block hover:border-accent hover:text-accent transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="bg-white/[0.07] border border-white/[0.12] rounded-[10px] p-[18px] text-center">
                <div className="font-heading text-[1.75rem] font-extrabold text-accent">{s.n}</div>
                <div className="text-[0.73rem] text-white/60 mt-0.5">{s.l}</div>
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

      {/* WHAT IS CORPORATE SECURITY */}
      <section className="py-[72px]">
        <Wrap>
          <div className="mx-auto max-w-[800px] text-center">
            <SectionHeading
              eyebrow="Understanding Corporate Security"
              title="What Is Corporate Security & Why Does Your Business Need It?"
              className="mb-6"
            />
            <div className="space-y-3.5 text-base text-foreground text-left">
              <p>
                Corporate security refers to the system of people, processes, and technology
                deployed to protect a company's employees, physical assets, intellectual property,
                and visitors from security threats. For office buildings and IT parks in India,
                this means a combination of{" "}
                <strong className="text-primary">manned guarding, access control, CCTV surveillance, visitor management, and emergency response</strong>{" "}
                — all working together under one accountable service provider.
              </p>
              <p>
                The risk landscape for Indian corporates is evolving rapidly. Unauthorised entry,
                employee safety incidents, data centre breaches, and workplace conflicts are among
                the most commonly reported security failures at Indian office complexes. According
                to the Private Security Agencies (Regulation) Act 2005, any agency providing security
                personnel must hold a valid PSARA license — and the personnel they deploy must be
                trained, verified, and documented.{" "}
                <strong className="text-primary">Businesses that hire unlicensed vendors carry direct legal liability</strong>{" "}
                for any incident involving those guards.
              </p>
            </div>
          </div>
          <div className="bg-primary rounded-xl px-8 py-7 my-7 mx-auto max-w-[820px] border-l-[5px] border-accent">
            <p className="text-white/80 text-[0.94rem] m-0">
              Sipayi Security provides end-to-end corporate security backed by{" "}
              <strong className="text-accent">PSARA licensing, ISO 9001:2015 quality management, 160+ hours of guard training, and monthly client reporting</strong>{" "}
              — so your corporate premises are always protected, compliant, and accountable.
            </p>
          </div>
        </Wrap>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-[72px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="What's Included"
            title="Our Corporate Security Services — Complete Coverage"
            subtitle="Every Sipayi corporate security program is tailored to your building layout, occupancy patterns, risk profile, and compliance requirements — not a template deployment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-border rounded-xl px-[22px] py-[26px] transition-all hover:shadow-[0_10px_32px_rgba(11,29,58,0.1)] hover:-translate-y-[3px]"
              >
                <div className="text-[2rem] mb-3">{s.ico}</div>
                <h3 className="text-primary text-base mb-2">{s.title}</h3>
                <p className="text-[0.87rem] text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      {/* EEAT / WHY US */}
      <section id="why-us" className="py-[72px] scroll-mt-16">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-[48px] items-start">
            <div>
              <SectionHeading
                eyebrow="Our Credibility"
                title="Why Choose Sipayi for Corporate Security?"
                subtitle="Enterprise agencies like SIS India and G4S are built for Fortune 500 contracts. Sipayi brings the same compliance standard and training quality with the personal accountability, deployment speed, and contract flexibility that growing Indian corporates actually need."
                align="left"
              />
              <div className="flex flex-col gap-5">
                {eeat.map((item) => (
                  <div key={item.title} className="flex gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-accent/[0.12] border-[1.5px] border-accent flex items-center justify-center text-base shrink-0">
                      {item.ico}
                    </div>
                    <div>
                      <h4 className="text-primary text-[0.93rem] mb-1">
                        {item.title}{" "}
                        <em className="text-muted-foreground font-normal text-[0.8rem]">{item.tag}</em>
                      </h4>
                      <p className="text-[0.86rem] text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-[30px]">
              <h3 className="text-accent text-[0.95rem] mb-[18px]">📜 Our Corporate Security Credentials</h3>
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
      <section className="py-[72px] section-alt">
        <Wrap>
          <SectionHeading
            eyebrow="How We Compare"
            title="Corporate Security Comparison — Sipayi vs. Other Agencies"
            subtitle="Enterprise agencies serve Fortune 500 clients at scale. Local agencies cut corners on compliance. Sipayi delivers enterprise-quality with SME flexibility."
          />
          <div className="overflow-x-auto rounded-xl shadow-[0_4px_20px_rgba(11,29,58,0.07)]">
            <table className="w-full min-w-[640px] border-collapse bg-white text-[0.85rem]">
              <thead>
                <tr>
                  <th className="bg-primary text-white text-left px-4 py-[13px] text-[0.83rem]">Factor</th>
                  {compareColumns.map((col, i) => (
                    <th key={col} className={`text-left px-4 py-[13px] text-[0.83rem] ${i === 0 ? "bg-accent text-primary" : "bg-primary text-white"}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.factor}>
                    <td className="px-4 py-3 border-b border-border text-foreground">{row.factor}</td>
                    {row.cells.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 border-b border-border ${i === 0 ? "bg-accent/5" : ""} ${cellColor[cell.type]}`}>
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
      <section className="py-[72px]">
        <Wrap>
          <SectionHeading
            eyebrow="Deployment Process"
            title="From Quote to Guards Deployed in 72 Hours — 4 Steps"
            subtitle="We remove the complexity from hiring a corporate security vendor. Most clients have a fully briefed team on-site within 72 hours of signing — with zero disruption to existing operations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {steps.map((step) => (
              <div key={step.n} className="bg-white border border-border rounded-xl px-[18px] py-6">
                <div className="font-heading text-[2.4rem] font-extrabold text-accent/[0.18] leading-none mb-2.5">{step.n}</div>
                <h4 className="text-primary text-[0.93rem] mb-1.5">{step.title}</h4>
                <p className="text-[0.84rem] text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* SECTORS */}
      <section className="py-[72px] section-alt">
        <Wrap>
          <SectionHeading
            eyebrow="Corporate Environments"
            title="Corporate Environments We Secure Across India"
            subtitle="Our corporate security teams are deployed across every major business environment — from large IT corridors to multi-tenant office complexes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((s) => (
              <div key={s.title} className="bg-white border border-border rounded-[10px] p-5 flex gap-3 items-start">
                <div className="text-[1.6rem] shrink-0">{s.ico}</div>
                <div>
                  <h4 className="text-primary text-[0.9rem] mb-1">{s.title}</h4>
                  <p className="text-[0.8rem] text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[72px]">
        <Wrap>
          <SectionHeading eyebrow="Client Reviews" title="What Our Corporate Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-xl p-6">
                <div className="text-accent tracking-[2px] mb-2.5 text-[0.88rem]">★★★★★</div>
                <blockquote className="text-[0.88rem] text-foreground italic mb-4">"{t.quote}"</blockquote>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary text-accent flex items-center justify-center font-heading font-bold text-[0.86rem] shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-heading text-[0.86rem] text-primary font-semibold">{t.name}</h5>
                    <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[72px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions — Corporate Security Services"
            subtitle="Key questions from facility managers, admin heads, and procurement teams before hiring a corporate security vendor."
          />
          <FaqSection items={faqs} />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="section-alt py-8 px-6 text-center">
        <h3 className="font-heading text-primary text-[0.92rem] mb-3">📍 Corporate Security Available Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-white border border-border text-muted-foreground px-[14px] py-1.5 rounded-full text-[0.78rem] font-medium">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="cta-gradient text-primary-foreground py-[72px] px-6 text-center scroll-mt-16">
        <h2 className="text-white mb-3">Secure Your Corporate Premises — Free Site Assessment Today</h2>
        <p className="text-white/75 max-w-[500px] mx-auto mb-[30px]">
          Talk to our corporate security consultant within 2 hours. Honest recommendation.
          Transparent quote. No obligation.
        </p>
        <LeadForm buttonLabel="Get Free Quote →" service="Corporate Security" />
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

export default CorporateSecurity;
