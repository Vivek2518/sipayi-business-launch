import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";

const PHONE_TEL = "tel:+919606696105";

const stats = [
  { n: "500+", l: "Trained Security Personnel" },
  { n: "10+", l: "Years of Field Operations" },
  { n: "200+", l: "Corporate Clients Across India" },
  { n: "15+", l: "Cities Served Pan-India" },
];

const trustBar = [
  "✅ PSARA Licensed Agency",
  "🏅 ISO 9001:2015 Certified",
  "🔍 100% Police-Verified Guards",
  "🕐 24×7 Operational Support",
  "⚖️ Labour Law Compliant",
  "🚀 72-Hour Deployment",
  "📋 Monthly Reports to Clients",
];

const services = [
  {
    ico: "🛡️",
    title: "Manned Security Guard Services",
    desc: "Police-verified, 160-hour trained security guards for corporate offices, gated communities, shopping complexes, hospitals, and government premises. Available in 3-shift rotation, armed or unarmed. All guards trained in fire safety, first aid, and emergency response.",
    link: "Request Guards →",
  },
  {
    ico: "🏭",
    title: "Industrial Security Solutions",
    desc: "Specialized security for factories, warehouses, power plants, and construction sites. Our industrial guards are trained in access control, asset protection, patrolling, and shift changeover procedures specific to high-risk industrial environments.",
    link: "Learn More →",
  },
  {
    ico: "👥",
    title: "Manpower Staffing Services",
    desc: "Skilled and semi-skilled workforce supply for manufacturing, logistics, hospitality, and services industries. We handle end-to-end recruitment, background verification, PF/ESI registration, and payroll management — full compliance, zero client liability.",
    link: "Get Staffing Quote →",
  },
  {
    ico: "📹",
    title: "Electronic Surveillance & CCTV Setup",
    desc: "CCTV installation, access control systems, video analytics, and 24×7 remote monitoring for offices and commercial establishments. We integrate physical guarding with smart surveillance technology for complete, layered security coverage.",
    link: "Get Assessment →",
  },
  {
    ico: "🎗️",
    title: "Event Security Management",
    desc: "Crowd management, perimeter control, VIP protection, and access control for corporate events, conferences, exhibitions, and public gatherings. Our event teams are trained in conflict de-escalation, emergency evacuation, and large-crowd handling.",
    link: "Plan Event Security →",
  },
  {
    ico: "📋",
    title: "Security Consultancy & Risk Audit",
    desc: "Risk assessment, vulnerability analysis, SOP development, and compliance audits for businesses. Our certified consultants deliver site-specific security blueprints that help you proactively manage threats, reduce liability, and pass corporate audits.",
    link: "Book Consultation →",
  },
];

const eeat = [
  {
    ico: "🎓",
    title: "10+ Years of Real Field Experience",
    tag: "(EEAT: Experience)",
    desc: "Our operations directors and field supervisors have backgrounds in defence, police, and leading private security agencies. 500+ deployments handled across 10+ years of on-ground operations — from a 2-guard residential post to a 60-guard IT campus roll-out.",
  },
  {
    ico: "🏆",
    title: "Deep Expertise in PSARA, ISO, and Labour Compliance",
    tag: "(EEAT: Expertise)",
    desc: "Full operational knowledge of PSARA regulations, state-level licensing, PF/ESI statutory obligations, and ISO 9001:2015 quality management. Our compliance team keeps all documentation audit-ready at all times — clients have never failed an audit due to a Sipayi deployment.",
  },
  {
    ico: "📣",
    title: "200+ Corporate Clients. 85%+ Repeat Rate.",
    tag: "(EEAT: Authoritativeness)",
    desc: "Clients across IT parks, manufacturing plants, hospitals, and residential townships. Our 85%+ repeat contract renewal rate speaks louder than any brochure. We currently protect over 300 sites across India, with 24×7 field supervisor coverage on every deployment.",
  },
  {
    ico: "🔐",
    title: "Full Transparency — Monthly Reports, SLA Guarantees, No Hidden Fees",
    tag: "(EEAT: Trustworthiness)",
    desc: "Every client receives a monthly report with attendance logs, incident summaries, and performance data — without asking. Every guard carries a verified government ID card. Our contracts include written SLA commitments. We publish our PSARA license details for direct verification.",
  },
];

const creds = [
  { ico: "📜", title: "PSARA License", desc: "Valid Private Security Agencies Regulation Act license — directly verifiable with the state authority." },
  { ico: "🏅", title: "ISO 9001:2015 Certified", desc: "Quality management certification covering all service delivery, training, and HR processes." },
  { ico: "🔍", title: "100% Police-Verified Personnel", desc: "Every guard — police verification, address check, employment history, medical fitness." },
  { ico: "💼", title: "PF / ESI / Labour Law Compliant", desc: "Full statutory compliance on all deployed manpower. Zero client liability." },
  { ico: "🚒", title: "160-Hour PSARA Training", desc: "Fire safety, first aid, emergency response, access control — certified training for every guard." },
  { ico: "📊", title: "Monthly Performance Reports", desc: "Attendance logs, incident reports, guard performance data — delivered to every client monthly." },
];

type CellType = "ok" | "no" | "maybe";
const compareColumns = ["✅ Sipayi Security", "SIS India / G4S", "Local Unregistered"];
const compareRows: { factor: string; cells: { text: string; type: CellType }[] }[] = [
  { factor: "PSARA License", cells: [{ text: "✔ Valid & Verifiable", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Often Missing", type: "no" }] },
  { factor: "Police-Verified Guards", cells: [{ text: "✔ 100% All Guards", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Rarely Done", type: "no" }] },
  { factor: "Deployment Speed", cells: [{ text: "✔ Within 72 Hours", type: "ok" }, { text: "⚠ 1–2 Weeks", type: "maybe" }, { text: "⚠ Variable", type: "maybe" }] },
  { factor: "Minimum Contract Size", cells: [{ text: "✔ Any Size — SME Friendly", type: "ok" }, { text: "⚠ Large Contracts Only", type: "maybe" }, { text: "⚠ Variable", type: "maybe" }] },
  { factor: "Dedicated Account Manager", cells: [{ text: "✔ Yes — Direct Access", type: "ok" }, { text: "⚠ Often Rotated", type: "maybe" }, { text: "✘ No", type: "no" }] },
  { factor: "Monthly Performance Reports", cells: [{ text: "✔ Detailed Every Month", type: "ok" }, { text: "⚠ Basic / On Request", type: "maybe" }, { text: "✘ None", type: "no" }] },
  { factor: "PF / ESI / Labour Compliance", cells: [{ text: "✔ Fully Compliant", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ High Legal Risk", type: "no" }] },
  { factor: "Custom Security SOP", cells: [{ text: "✔ Site-Specific SOPs", type: "ok" }, { text: "⚠ Standardised Only", type: "maybe" }, { text: "✘ No SOPs", type: "no" }] },
  { factor: "Female Security Guards", cells: [{ text: "✔ Available", type: "ok" }, { text: "✔ Yes", type: "ok" }, { text: "✘ Rarely", type: "no" }] },
];
const cellColor: Record<CellType, string> = {
  ok: "text-[#1A7A4A] font-bold",
  no: "text-[#C0392B]",
  maybe: "text-[#E67E22]",
};

const industries = [
  { ico: "🏢", title: "Corporate Offices & IT Parks", desc: "Access control, visitor management, 24×7 perimeter guarding for technology campuses and business parks." },
  { ico: "🏗️", title: "Industrial & Manufacturing", desc: "Shift patrolling, asset protection, and access control for factories, warehouses, and industrial zones." },
  { ico: "🏥", title: "Hospitals & Healthcare", desc: "Patient safety, crowd control, and emergency response protocols for healthcare environments." },
  { ico: "🏘️", title: "Residential Societies", desc: "Gate security, patrolling, CCTV monitoring, and visitor log management for housing complexes." },
  { ico: "🛒", title: "Retail Malls & Showrooms", desc: "Floor security, loss prevention, and customer safety for high-footfall retail environments." },
  { ico: "🏫", title: "Educational Institutions", desc: "Campus safety, entry screening, and emergency response for schools and colleges." },
  { ico: "🏨", title: "Hotels & Hospitality", desc: "Discreet professional security integrated with hospitality standards for guest-facing environments." },
  { ico: "🏦", title: "Banks & Financial Institutions", desc: "Armed guard deployment, vault security, and cash management support for financial premises." },
];

const steps = [
  { n: "01", title: "Free Site Assessment (Same Day)", desc: "Our security consultant visits your premises, reviews vulnerabilities, and recommends the exact staffing model and equipment for your site — no charge, no obligation." },
  { n: "02", title: "Customised Proposal Within 24 Hours", desc: "You receive a detailed written proposal: guard count, shift structure, SOP outline, and complete pricing — within 24 hours of the assessment. No vague quotes." },
  { n: "03", title: "Guard Selection, Verification & Briefing", desc: "We handpick guards matched to your site type and risk profile. Every guard is briefed specifically on your premises before day one. Verified IDs handed over on deployment day." },
  { n: "04", title: "Live Deployment + Monthly Review Reports", desc: "Guards deployed with a field supervisor. You receive a monthly report every month — attendance, incidents, performance — without ever having to ask for it." },
];

const testimonials = [
  { initials: "RK", quote: "Sipayi deployed 12 guards for our IT campus in Bengaluru within 3 days of signing. Professional, SOP-compliant, and the monthly reports give us full visibility. We switched from a larger national agency — this is significantly better in terms of accountability and response time.", name: "Rajesh Kumar", role: "Admin Manager, IT Company — Bengaluru" },
  { initials: "PM", quote: "We moved from a larger agency to Sipayi for our Pune factory. The key difference is real accountability. Our dedicated contact picks up the phone at 11 PM. All PF and ESI documents are always audit-ready. Zero compliance surprises in 2 years of working together.", name: "Priya Mehta", role: "Operations Head, Manufacturing Unit — Pune" },
  { initials: "AS", quote: "Managing gate security for our 400-flat society was a persistent problem before Sipayi. They standardised our procedures, set up a visitor log system, and we reduced unauthorised entry incidents by over 90% in the first two months. Highly recommended for residential societies.", name: "Amit Sharma", role: "Society Chairman, Gated Community — Hyderabad" },
];

const faqs = [
  { question: "What is a PSARA license and is it mandatory in India?", answer: "PSARA stands for Private Security Agencies Regulation Act, 2005. It is a mandatory government license required for all private security agencies operating in India. Hiring an unlicensed agency puts your business at direct legal and financial risk — including liability for incidents involving unverified personnel. Sipayi Security holds a valid, current PSARA license that is directly verifiable with the state authority." },
  { question: "What is the cost of hiring security guards in India?", answer: "Security guard costs in India typically range from ₹15,000 to ₹30,000 per guard per month, depending on: city (metro cities are higher), shift type (day or night), armed vs. unarmed, and industry requirements (industrial and hospital sectors may need specialised training). Contact us for a site-specific quote — we provide detailed pricing within 24 hours of a free site assessment." },
  { question: "How quickly can you deploy security guards?", answer: "For most locations, Sipayi Security deploys trained, police-verified guards within 72 hours of contract signing. For urgent requirements in major cities like Bengaluru, Hyderabad, Mumbai, and Chennai, emergency deployment within 24 hours is available subject to headcount and location confirmation." },
  { question: "Are your security guards police-verified?", answer: "Yes — 100%. Every guard deployed by Sipayi undergoes thorough police verification, address verification, prior employment history checks, and a medical fitness test before being cleared for deployment. We maintain digital records of all verification statuses and can provide documentation for your compliance requirements." },
  { question: "Do you handle PF, ESI, and statutory compliance for deployed guards?", answer: "Yes. Sipayi manages all statutory obligations for every deployed guard — PF registration, ESI coverage, minimum wage compliance, and complete labour law documentation. Our clients bear zero compliance liability. All documents are audit-ready and can be shared with your HR or legal team on request." },
  { question: "What is the minimum contract period?", answer: "Our standard contracts start from 3 months, giving you flexibility without long lock-ins. For event security, we offer one-time and short-duration engagements. For ongoing facility security, most clients opt for 12-month agreements with annual renewal options." },
  { question: "Do you provide female security guards?", answer: "Yes. Sipayi has trained female security personnel available for hospitals, schools, corporate offices, residential societies, and retail environments that require female security presence. Please mention this requirement when requesting a quote and we will confirm availability for your city and site type." },
  { question: "Which cities does Sipayi Security operate in?", answer: "Sipayi currently operates in: Bengaluru, Mumbai, Hyderabad, Chennai, Pune, Delhi NCR, Ahmedabad, Coimbatore, Kochi, Chandigarh, and Jaipur. We are expanding to additional Tier-2 cities. Contact us to confirm availability and deployment timelines in your city." },
];

const cities = [
  "Security Agency Bangalore", "Security Guards Mumbai", "Manpower Services Hyderabad",
  "Security Company Chennai", "Industrial Security Pune", "Security Guards Delhi NCR",
  "Security Agency Ahmedabad", "Guard Services Coimbatore", "Security Agency Kochi",
  "PSARA Licensed Agency Karnataka", "Manpower Staffing Chandigarh", "Corporate Security India",
];

const Wrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient text-primary-foreground pt-[84px] pb-[72px] px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-[480px] w-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(43 80% 46% / 0.10), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1120px] grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="flex flex-wrap gap-2 mb-[18px]">
              <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-accent/[0.18] border border-accent text-accent">
                🛡️ PSARA Licensed
              </span>
              <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-white/10 border border-white/20 text-white/85">
                ISO 9001:2015
              </span>
              <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full bg-white/10 border border-white/20 text-white/85">
                Police-Verified Guards
              </span>
            </div>
            <h1 className="text-white mb-[18px]">
              India's Trusted{" "}
              <span className="text-accent">
                PSARA-Licensed Security &amp; Manpower Agency
              </span>{" "}
              — Deployed in 72 Hours
            </h1>
            <p className="text-white/75 text-base mb-7">
              Sipayi Security &amp; Manpower Services provides police-verified security
              guards, workforce staffing, and expert security consultancy across 15+ cities
              in India. PSARA compliant. ISO certified. Full statutory compliance — so you
              never carry the risk.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/#contact"
                className="bg-accent text-primary px-7 py-[13px] rounded-md font-bold text-[0.95rem] inline-block hover:-translate-y-0.5 transition-transform"
              >
                Get Free Quote →
              </Link>
              <a
                href={PHONE_TEL}
                className="border-2 border-white/35 text-white px-[26px] py-[11px] rounded-md font-semibold text-[0.95rem] inline-block hover:border-accent hover:text-accent transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>
          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map((s) => (
              <div
                key={s.l}
                className="bg-white/[0.07] border border-white/[0.12] rounded-[10px] p-5 text-center"
              >
                <div className="font-heading text-[1.9rem] font-extrabold text-accent">{s.n}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[hsl(var(--steel))] py-3.5 px-6">
        <div className="mx-auto max-w-[1120px] flex flex-wrap gap-x-[18px] gap-y-2 justify-center items-center">
          {trustBar.map((t) => (
            <span key={t} className="text-white/80 text-[0.8rem] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* COMPANY INTRO */}
      <section className="section-padding">
        <Wrap className="max-w-[820px] text-center">
          <SectionHeading
            eyebrow="Who We Are"
            title="India's Reliable Security & Manpower Partner Since 2015"
            className="mb-8"
          />
          <div className="space-y-3.5 text-[1.02rem] text-foreground text-left">
            <p>
              Sipayi Security &amp; Manpower Services is a{" "}
              <strong className="text-primary">PSARA-licensed, ISO 9001:2015 certified</strong>{" "}
              private security agency headquartered in Bengaluru, Karnataka. We deploy{" "}
              <strong className="text-primary">500+ police-verified security personnel</strong>{" "}
              across corporate offices, industrial facilities, residential societies, hospitals,
              and retail establishments in{" "}
              <strong className="text-primary">15+ cities across India</strong>.
            </p>
            <p>
              Founded in 2015 with a clear mission — to make professional, compliant, and
              accountable security accessible to every business in India, not just enterprise-level
              clients. Unlike national agencies that serve only large contracts, Sipayi works
              equally well for a 2-guard residential gate post and a 50-guard IT campus deployment.
              Every client gets a{" "}
              <strong className="text-primary">dedicated account manager</strong>, monthly
              performance reports, and SLA-backed service — without the enterprise price tag.
            </p>
            <p>
              Our operations span manned security guarding, manpower workforce staffing, electronic
              surveillance, event security, and security consultancy — all delivered with{" "}
              <strong className="text-primary">full PF, ESI, and labour law compliance</strong>, so
              your organisation carries zero statutory risk.
            </p>
          </div>
        </Wrap>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Security & Manpower Services Across India"
            subtitle="From a single guard post to a 100-person deployment — every service delivered with PSARA compliance, trained personnel, and a dedicated account manager."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-border rounded-xl p-7 transition-all hover:shadow-[0_10px_36px_rgba(11,29,58,0.1)] hover:-translate-y-1"
              >
                <div className="text-[2.2rem] mb-3.5">{s.ico}</div>
                <h3 className="text-primary mb-2">{s.title}</h3>
                <p className="text-[0.88rem] text-muted-foreground mb-3">{s.desc}</p>
                <Link to="/#contact" className="text-[0.84rem] font-bold text-accent">
                  {s.link}
                </Link>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      {/* EEAT / WHY US */}
      <section id="why-us" className="section-padding scroll-mt-16">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-[52px] items-start">
            <div>
              <SectionHeading
                eyebrow="Our Credibility"
                title="Why Businesses Choose Sipayi Over Other Security Agencies in India"
                subtitle="Larger national agencies like G4S India, SIS India, and TOPSGRUP are built for enterprise-scale, long-term contracts. Sipayi Security serves a critical gap — offering the same standard of training, compliance, and documentation with the personal accountability and speed that growing businesses genuinely need."
                align="left"
              />
              <div className="flex flex-col gap-5">
                {eeat.map((item) => (
                  <div key={item.title} className="flex gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-accent/[0.12] border-[1.5px] border-accent flex items-center justify-center text-base shrink-0">
                      {item.ico}
                    </div>
                    <div>
                      <h4 className="text-primary text-[0.95rem] mb-1">
                        {item.title}{" "}
                        <em className="text-muted-foreground font-normal text-[0.8rem]">
                          {item.tag}
                        </em>
                      </h4>
                      <p className="text-[0.86rem] text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials card */}
            <div className="bg-primary rounded-2xl p-8">
              <h3 className="text-accent text-base mb-[18px]">📜 Our Verified Credentials</h3>
              {creds.map((c, i) => (
                <div
                  key={c.title}
                  className={`flex items-center gap-3 py-3 ${
                    i < creds.length - 1 ? "border-b border-white/[0.08]" : ""
                  }`}
                >
                  <div className="text-xl shrink-0">{c.ico}</div>
                  <div>
                    <h4 className="text-white text-[0.88rem] mb-0.5">{c.title}</h4>
                    <p className="text-[0.78rem] text-white/55">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* COMPARISON */}
      <section className="section-padding section-alt">
        <Wrap>
          <SectionHeading
            eyebrow="Sipayi vs. The Market"
            title="How Sipayi Compares to Other Security Agencies in India"
            subtitle="Enterprise agencies like SIS India and G4S are built for large long-term contracts. Local unregistered agencies cut corners on compliance. Sipayi delivers enterprise-quality with SME-level flexibility."
          />
          <div className="overflow-x-auto rounded-xl shadow-[0_4px_20px_rgba(11,29,58,0.07)]">
            <table className="w-full min-w-[640px] border-collapse bg-white">
              <thead>
                <tr>
                  <th className="bg-primary text-white text-left px-[18px] py-[14px] text-[0.85rem]">
                    Factor
                  </th>
                  {compareColumns.map((col, i) => (
                    <th
                      key={col}
                      className={`text-left px-[18px] py-[14px] text-[0.85rem] ${
                        i === 0 ? "bg-accent text-primary" : "bg-primary text-white"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.factor}>
                    <td className="px-[18px] py-[13px] text-[0.86rem] border-b border-border text-foreground">
                      {row.factor}
                    </td>
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        className={`px-[18px] py-[13px] text-[0.86rem] border-b border-border ${
                          i === 0 ? "bg-accent/5" : ""
                        } ${cellColor[cell.type]}`}
                      >
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

      {/* INDUSTRIES */}
      <section id="industries" className="section-padding scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Sectors We Serve"
            title="Security Solutions Tailored to Every Industry"
            subtitle="From IT parks in Bengaluru to factories in Pune — our guards are trained for your sector's specific requirements and risks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="bg-white border border-border rounded-[10px] px-[18px] py-[22px] text-center"
              >
                <div className="text-[1.9rem] mb-2.5">{ind.ico}</div>
                <h4 className="text-primary text-[0.9rem] mb-[5px]">{ind.title}</h4>
                <p className="text-[0.78rem] text-muted-foreground">{ind.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* PROCESS */}
      <section className="section-padding section-alt">
        <Wrap>
          <SectionHeading
            eyebrow="How We Work"
            title="From Quote to Guards Deployed in 72 Hours — 4 Simple Steps"
            subtitle="We make hiring a security agency fast, clear, and risk-free. Most clients have their team deployed within 72 hours of contract signing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.n} className="bg-white border border-border rounded-xl px-5 py-[26px]">
                <div className="font-heading text-[2.6rem] font-extrabold text-accent/[0.18] leading-none mb-2.5">
                  {step.n}
                </div>
                <h4 className="text-primary text-[0.95rem] mb-1.5">{step.title}</h4>
                <p className="text-[0.84rem] text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-padding scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Client Reviews"
            title="What Our Clients Say"
            subtitle="Real feedback from businesses across corporate, industrial, and residential sectors across India."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-xl px-[22px] py-[26px]">
                <div className="text-accent tracking-[2px] mb-3 text-[0.9rem]">★★★★★</div>
                <blockquote className="text-[0.88rem] text-foreground italic mb-[18px]">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-2.5">
                  <div className="w-[38px] h-[38px] rounded-full bg-primary text-accent flex items-center justify-center font-heading font-bold text-[0.9rem] shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-heading text-[0.86rem] text-primary font-semibold">{t.name}</h5>
                    <span className="text-[0.75rem] text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions About Hiring a Security Agency in India"
            subtitle="Everything a business needs to know before hiring a private security agency — compliance, costs, deployment, and more."
          />
          <FaqSection items={faqs} />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="bg-secondary py-9 px-6">
        <div className="mx-auto max-w-[1120px]">
          <h3 className="font-heading text-primary text-[0.95rem] text-center mb-3.5">
            📍 Security Agency Services Available Across India
          </h3>
          <div className="flex flex-wrap gap-[9px] justify-center">
            {cities.map((c) => (
              <span
                key={c}
                className="bg-white border border-border text-muted-foreground px-4 py-[7px] rounded-full text-[0.8rem] font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="cta-gradient text-primary-foreground py-[76px] px-6 text-center scroll-mt-16">
        <h2 className="text-white mb-3">Get a Free Security Assessment — Response Within 2 Hours</h2>
        <p className="text-white/75 max-w-[520px] mx-auto mb-8">
          Talk to our security consultant today. No obligation. No fine print. Just an honest
          recommendation based on your site's actual requirements.
        </p>
        <LeadForm buttonLabel="Request Free Quote →" formClassName="max-w-[500px]" />
        <p className="mt-3.5 text-[0.78rem] text-white/50">
          📞 Call: +91 96066 96105 &nbsp;|&nbsp; 💬 WhatsApp: +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com
        </p>
      </section>

      {/* STICKY MOBILE CTA */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default Index;
