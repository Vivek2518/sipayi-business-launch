import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const PHONE_TEL = "tel:+919606696105";

const dataPanel = [
  { k: "industrial_sites_protected", v: "80+" },
  { k: "shift_model", v: "3-shift" },
  { k: "guard_training", v: "160+ hrs" },
  { k: "deployment_sla", v: "72 hrs" },
  { k: "psara_status", v: "ACTIVE" },
  { k: "monthly_report", v: "INCLUDED" },
];

const trustBar = [
  "// PSARA_LICENSED",
  "// SHIFT_MATCHED_DEPLOYMENT",
  "// CARGO_VERIFICATION",
  "// PERIMETER_PATROL",
  "// HAZARD_TRAINED_GUARDS",
  "// MONTHLY_AUDIT_REPORTS",
];

const risks = [
  { sev: "high", ico: "🚛", title: "Cargo Theft at Vehicle Bays", desc: "Outbound cargo theft at dispatch bays is the most reported industrial security incident across Indian manufacturing. It typically involves collusion between drivers and internal staff. A guard at the main gate does nothing to stop it — only structured vehicle bay access control and goods-out verification does." },
  { sev: "high", ico: "🔓", title: "Perimeter Breach During Night Shift", desc: "Factories with long compound walls — particularly in industrial zones outside city limits — face systematic perimeter breaches during night shifts. Unlit sections, broken fencing, and fixed patrol routes create predictable entry points that are well-known to organised thieves within weeks of opening." },
  { sev: "medium", ico: "🔧", title: "Equipment Pilferage at Construction Sites", desc: "Active construction sites lose an estimated 3–8% of total material value to systematic pilferage — tools, copper wiring, steel rebar, and small equipment. The loss is typically gradual and attributed to \"wastage\" until a proper audit reveals the pattern. By then, the responsible personnel have often rotated out." },
  { sev: "medium", ico: "⏱️", title: "Shift Handover Vulnerability", desc: "The 30-minute window around shift changeover is statistically the highest-risk period at any industrial facility. Poorly managed handovers create visibility gaps — both at access points and on the floor — that are well-known to anyone who has worked at the site long enough to notice the pattern." },
];

const services = [
  { title: "Factory & Manufacturing Plant Security", desc: "Manned access control at raw material entry, production floor entrances, finished goods dispatch bays, and visitor check-in. Guard rotation aligned to your factory's production schedule — typically 3 shifts: 6AM–2PM, 2PM–10PM, 10PM–6AM. Guards trained in hazardous material area protocols, fire safety procedures, and emergency assembly point management. All staff — including contract workers and vendors — are logged on entry and exit." },
  { title: "Warehouse & Logistics Hub Security", desc: "Structured access control at all vehicle entry and exit bays with cargo verification protocols. Every outbound vehicle is checked against dispatch documentation before clearance — this single protocol eliminates the most common form of warehouse cargo theft. Guards monitor CCTV feeds, patrol storage rows on a scheduled basis, and maintain a shift-wise goods movement log. Any discrepancy between logged and actual inventory triggers an immediate escalation." },
  { title: "Perimeter Security & Guard Patrol", desc: "Perimeter security for industrial facilities goes beyond a guard at the gate. Sipayi deploys structured patrol teams covering compound walls, fencing, and perimeter lighting gaps on a randomised schedule — not a fixed route that becomes predictable within days. Patrol logs are maintained in a physical register and digitised daily. Weak perimeter points identified during site assessment are flagged for physical reinforcement before deployment begins." },
  { title: "Construction Site Security", desc: "Active construction sites have a constantly changing perimeter, multiple contractor teams, and high-value equipment on-site. Sipayi construction site guards are trained in equipment identification, contractor access verification, and material movement logging. Guards maintain a site visitor register, manage contractor vehicle access, and conduct end-of-day equipment counts to detect pilferage early. Security protocols are updated as the site progresses through different construction phases." },
  { title: "CCTV Monitoring & Surveillance Integration", desc: "Guards working in coordination with your existing CCTV infrastructure — monitoring feeds, flagging anomalies, and maintaining a live incident log. For facilities without adequate CCTV coverage, Sipayi identifies surveillance blind spots during the site assessment and recommends installation before deployment. Physical guarding and surveillance are always coordinated under a single operational command." },
  { title: "Vehicle Bay & Cargo Control", desc: "Dedicated vehicle bay management with structured entry/exit logging for all commercial vehicles — delivery trucks, tankers, and contractors' transport. Every vehicle entering and leaving the facility is logged against a documented purpose. For facilities with high-frequency logistics movement, Sipayi deploys dedicated vehicle bay guards separate from general facility security — so cargo control does not compete with gate management for attention." },
];

const shifts = [
  { name: "SHIFT_A :: Day", time: "06:00 → 14:00", risk: "Peak vehicle movement, raw material intake, maximum staff on-site", protocol: "Full gate staffing, vehicle bay guard, cargo intake logging, contractor access control" },
  { name: "SHIFT_B :: Evening", time: "14:00 → 22:00", risk: "Finished goods dispatch, shift handover vulnerability window", protocol: "Dispatch cargo verification, structured handover documentation, perimeter patrol intensified" },
  { name: "SHIFT_C :: Night", time: "22:00 → 06:00", risk: "Lowest visibility, highest perimeter breach risk, minimum internal witnesses", protocol: "Randomised patrol routes, CCTV active monitoring, supervisor check-in every 2 hours, incident log" },
];

const eeat = [
  { tag: "// experience", title: "80+ Industrial Sites, Multiple Facility Types", desc: "Deployment experience spanning automotive plants, pharmaceutical warehouses, steel processing units, FMCG logistics hubs, and construction sites at multiple build phases. Our industrial operations supervisors have backgrounds in plant security and HSE — not generic facility management." },
  { tag: "// expertise", title: "Guards Trained for Industrial Environments Specifically", desc: "Beyond PSARA basics, Sipayi industrial guards are trained in: hazardous material area entry protocols, fire safety and equipment awareness, cargo verification procedures, vehicle bay management, emergency assembly management, and shift handover documentation. All completed before the guard steps on your site." },
  { tag: "// authoritativeness", title: "Factory Act & Compliance Documentation Ready", desc: "For manufacturing clients subject to Factory Act compliance audits, Sipayi provides complete documentation of all deployed security personnel — training records, police verification certificates, PF/ESI compliance proofs — on request. Our monthly reports are structured to support internal audit requirements." },
  { tag: "// trustworthiness", title: "Monthly Site Reports — Not Just Incident Reports", desc: "Every industrial client receives a monthly report covering: guard attendance by shift, patrol log summary, vehicle movement records, cargo verification logs, incidents, and perimeter issues flagged. Detailed enough for Factory Act documentation. Honest enough to flag our own gaps when they occur." },
];

const testimonials = [
  { quote: "We had persistent cargo discrepancies at our dispatch bay that we had written off as processing errors. Sipayi's site assessment flagged the gap in our vehicle bay protocol within the first hour. After implementing their cargo verification system, discrepancies dropped to zero within 6 weeks. That's a direct, measurable result.", name: "Rajan Pillai, Plant Manager", role: "Automotive Components Plant, Pune", sbIco: "🏭", sbType: "Manufacturing", sbLoc: "Pune, MH" },
  { quote: "What convinced us was the shift-matching approach. Our warehouse runs round-the-clock and the previous agency's guards were never synced to our schedule — there were always gaps during handover. Sipayi aligned their shifts to ours exactly, including the night shift supervision protocol. The monthly reports are detailed enough to use in our internal audit documentation without any modification.", name: "Divya Krishnamurthy, Operations Head", role: "FMCG Logistics Hub, Chennai", sbIco: "📦", sbType: "Logistics Hub", sbLoc: "Chennai, TN" },
];

const faqs = [
  { question: "What is industrial security and how is it different from general security?", answer: "Industrial security specifically addresses threats in manufacturing plants, warehouses, and construction sites — cargo theft, equipment pilferage, perimeter breaches, and shift-handover vulnerabilities. Unlike general security, industrial guards are trained in vehicle bay control, cargo verification, hazardous material area protocols, and the specific access management demands of industrial environments. A guard trained for an IT park is not the right deployment for a steel processing plant." },
  { question: "How do you handle security across 3-shift factory operations?", answer: "Sipayi designs guard shift patterns to match your facility's exact production schedule. Guards rotate on the same 3-shift cycle as your plant team, with documented handover protocols at every post — eliminating the patrol gaps and accountability breakdowns that occur when security shifts do not align with production shifts. Shift handover documentation is maintained in a physical log and reviewed by the on-site supervisor at every changeover." },
  { question: "Can you prevent internal theft and pilferage at warehouses and factories?", answer: "Internal theft — referred to as pilferage — is the most common and most financially damaging form of industrial security loss in India. Sipayi addresses it through structured cargo verification at dispatch bays, goods-in/goods-out logging, CCTV coordination, and randomised spot checks during night shifts. Clients typically report a significant reduction in inventory discrepancies within 30–60 days of Sipayi deployment. The cargo verification protocol is the single highest-impact change we make in the first week." },
  { question: "Do you provide security for active construction sites?", answer: "Yes. Construction site security requires specific protocols different from static industrial security — equipment identification logs, contractor access management with rotating workforce, material movement records, and a security perimeter that evolves as the build progresses through foundation, structure, and fitout phases. Sipayi provides dedicated construction site security guards trained specifically for active build environments, with protocols reviewed and updated at each construction phase change." },
  { question: "What specific training do your industrial security guards receive?", answer: "Beyond PSARA-mandated training (160+ hours), Sipayi industrial guards receive additional training in: hazardous material area entry and exit protocols, fire safety awareness and fire equipment operation, cargo and vehicle bay verification procedures, emergency assembly point management, shift handover documentation requirements, and basic incident reporting. This additional training is completed before any guard is deployed to your facility — not on-site." },
  { question: "What is included in the monthly industrial security report?", answer: "Every Sipayi industrial client receives a monthly report covering: guard attendance by shift, patrol log summary, vehicle movement records, cargo verification log, incidents and near-misses, perimeter and lighting issues flagged, and recommendations for the following month. The report is structured to support Factory Act compliance documentation and internal security audits — so your team can use it directly without reformatting." },
];

const cities = [
  "factory_security::Bangalore", "warehouse_security::Mumbai", "industrial_guards::Hyderabad",
  "plant_security::Pune", "construction_site::Chennai", "perimeter_patrol::Delhi_NCR",
  "logistics_security::Ahmedabad", "cargo_control::Coimbatore", "psara_industrial::India",
];

const promises = [
  "Site assessment within 48 hours",
  "Written deployment plan included",
  "No obligation to proceed",
  "Shift-matched deployment on Day 1",
];

const headerNav = {
  items: [
    { label: "./home", to: "/" },
    { label: "./services", to: "/#services" },
    { label: "./risks", to: { hash: "#risks" } },
    { label: "./faq", to: { hash: "#faq" } },
  ],
  ctaLabel: "Get Assessment",
  ctaTo: { hash: "#contact" },
  theme: "industrial" as const,
};

const footerConfig = {
  theme: "industrial" as const,
  blurb: "PSARA-licensed industrial, corporate, residential, and event security across 15+ cities in India since 2015.",
  servicesTitle: "Industrial",
  services: ["Factory Security", "Warehouse Security", "Construction Sites", "Perimeter Patrol", "Cargo Control", "CCTV Surveillance"],
  thirdColTitle: "Other Services",
  thirdColTo: "/#services",
  industries: ["Corporate Security", "Residential Security", "Event Security", "Manpower Staffing", "Security Consultancy"],
  bottomTagline: "PSARA :: ACTIVE  |  ISO_9001:2015 :: CERTIFIED  |  INDIA",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const SecHead = ({ tag, title, sub, center = false }: { tag: string; title: string; sub?: string; center?: boolean }) => (
  <div className={center ? "text-center mb-[46px]" : "mb-7"}>
    <p className={`font-mono text-[0.67rem] font-semibold tracking-[0.15em] uppercase text-accent mb-2 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
      <span className="text-accent/40">//</span>
      {tag}
    </p>
    <h2 className="text-primary mb-3">{title}</h2>
    {sub && <p className={`text-[0.97rem] text-muted-foreground max-w-[640px] ${center ? "mx-auto" : ""}`}>{sub}</p>}
  </div>
);

const GRID_BG = "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)";

const IndustrialSecurity = () => {
  usePageMeta(
    "Industrial Security Services India | Factory, Warehouse & Site Guards | Sipayi",
    "Sipayi provides PSARA-licensed industrial security guards for factories, warehouses & construction sites across India. Shift-based. Perimeter-ready. Cargo-verified. Get free assessment.",
  );

  return (
    <Layout nav={headerNav} footer={footerConfig}>
      {/* BREADCRUMB */}
      <div className="bg-[#111827] border-b border-white/[0.06] px-6 py-2.5">
        <div className="mx-auto max-w-[1120px] font-mono text-[0.78rem] text-white/40">
          ~ /{" "}
          <Link to="/" className="hover:text-accent transition-colors">home</Link> /{" "}
          <Link to="/#services" className="hover:text-accent transition-colors">services</Link> /{" "}
          <span className="text-accent">industrial-security</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111827] text-primary-foreground py-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRID_BG, backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-[1120px] px-6 grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          <div>
            <div className="font-mono text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-accent" />
              Industrial Security Services
            </div>
            <h1 className="text-white mb-4 tracking-tight">
              Industrial Security —{" "}
              <span className="text-accent">Perimeter Protection, Access Control &amp; Surveillance</span>{" "}
              for Factories, Warehouses &amp; Construction Sites
            </h1>
            <p className="text-white/65 text-[0.97rem] mb-7">
              Industrial facilities face threats that generic guard deployment cannot handle — cargo theft
              at vehicle bays, perimeter breaches at night, equipment pilferage on construction sites, and
              internal theft during shift handovers. Sipayi deploys guards trained specifically for industrial
              environments, matched to your shift schedule, and accountable through monthly site reports.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["PSARA Licensed", "Shift-Matched Deployment"].map((b) => (
                <span key={b} className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-[3px] bg-accent/15 border border-accent/40 text-accent">{b}</span>
              ))}
              {["Cargo Verified", "Perimeter Patrol"].map((b) => (
                <span key={b} className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-[3px] bg-white/[0.06] border border-white/15 text-white/70">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-accent text-[#111827] px-[26px] py-3 rounded font-bold text-[0.9rem] font-heading inline-block hover:bg-[#e6b020] transition-colors">Request Site Assessment →</a>
              <a href={PHONE_TEL} className="border border-white/25 text-white/70 px-6 py-[11px] rounded font-medium text-[0.9rem] inline-block hover:border-accent hover:text-accent transition-colors">📞 Call Now</a>
            </div>
          </div>
          {/* Data panel */}
          <div className="hidden lg:block bg-white/[0.04] border border-white/[0.08] rounded-md p-6 font-mono">
            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-white/35 mb-4">// site_stats.json</div>
            {dataPanel.map((row, i) => (
              <div key={row.k} className={`flex justify-between items-center py-2.5 ${i < dataPanel.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                <span className="text-[0.78rem] text-white/50">{row.k}</span>
                <span className="text-[0.92rem] font-semibold text-accent">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-black/60 border-b border-accent/15 py-3 px-6">
        <div className="mx-auto max-w-[1120px] flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
          {trustBar.map((t) => (
            <span key={t} className="font-mono text-white/65 text-[0.76rem] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* RISKS */}
      <section id="risks" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SecHead tag="Threat Assessment" title="The Real Security Risks at Indian Industrial Facilities — And the Cost of Getting It Wrong" />
          <p className="text-[0.95rem] text-muted-foreground">
            Industrial security failures are rarely dramatic. The most damaging ones are systematic and slow
            — cargo that disappears over weeks, tools that quietly shrink from warehouses, trespassers who
            learn your patrol gaps. By the time management notices, the loss has compounded beyond a single
            incident. Here are the four most common failure modes our site assessments reveal:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7">
            {risks.map((r) => (
              <div key={r.title} className="rounded-md overflow-hidden flex">
                <div className={`w-[72px] flex flex-col items-center justify-center py-3.5 px-2 shrink-0 gap-1 ${r.sev === "high" ? "bg-[#DC2626]" : "bg-[#EA580C]"}`}>
                  <div className="text-[1.4rem]">{r.ico}</div>
                  <div className="font-mono text-[0.58rem] font-bold tracking-[0.1em] uppercase text-white/80">{r.sev}</div>
                </div>
                <div className="bg-secondary border border-border border-l-0 px-[18px] py-4 flex-1">
                  <h4 className="text-primary text-[0.92rem] mb-1.5">{r.title}</h4>
                  <p className="text-[0.83rem] text-muted-foreground m-0">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[0.95rem] text-muted-foreground mt-7">
            <strong className="text-primary">Each of these risks has a specific security response.</strong>{" "}
            Sipayi designs industrial security deployments that address these specific vulnerabilities — not
            a uniform guard count applied across your entire facility.
          </p>
        </Wrap>
      </section>

      {/* SERVICES */}
      <section className="py-[68px] section-alt">
        <Wrap>
          <SecHead center tag="Service Scope" title="Our Industrial Security Services — Specific to Your Facility Type" sub="A pharmaceutical warehouse has different access requirements than an automobile plant. A construction site has a different perimeter challenge than a logistics hub. We deploy around your specific risk profile." />
          <div className="flex flex-col">
            {services.map((s, i) => (
              <div key={s.title} className={`grid grid-cols-[4px_48px_1fr] sm:grid-cols-[4px_64px_1fr] gap-x-5 sm:gap-x-6 py-[26px] items-start ${i < services.length - 1 ? "border-b border-border" : ""}`}>
                <div className="bg-accent w-1 rounded-sm min-h-[60px] h-full" />
                <div className="font-mono text-[1.5rem] sm:text-[1.8rem] font-bold text-accent/20 leading-none pt-1 text-right">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-primary text-base mb-1.5">{s.title}</h3>
                  <p className="text-[0.87rem] text-muted-foreground m-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* SHIFT MODEL */}
      <section className="py-[68px]">
        <Wrap>
          <SecHead tag="Deployment Model" title="Shift-Matched Security — How Sipayi Deploys Differently for Industrial Sites" />
          <p className="text-[0.95rem] text-muted-foreground">
            Most security agencies deploy guards on standard 8-hour shifts that do not align with your
            factory's production schedule. This creates handover mismatches, patrol gaps, and accountability
            breakdowns at exactly the moments when your facility is most vulnerable.
          </p>
          <p className="text-[0.95rem] text-muted-foreground">
            Sipayi designs guard shift patterns to match your facility's{" "}
            <strong className="text-primary">exact production schedule</strong> — with structured handover
            protocols between outgoing and incoming guards at every post.
          </p>
          <div className="bg-[#111827] rounded-lg overflow-hidden mt-6">
            <div className="px-6 py-4 bg-accent/10 border-b border-accent/20">
              <p className="font-mono text-white/60 text-[0.82rem] m-0">// shift_deployment_model.config — Standard 3-Shift Factory Pattern</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    {["Shift", "Hours", "Key Risk Period", "Sipayi Protocol"].map((h) => (
                      <th key={h} className="bg-accent/[0.08] text-accent px-[18px] py-3 text-[0.78rem] tracking-[0.08em] uppercase text-left font-mono font-semibold border-b border-white/[0.06]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {shifts.map((s) => (
                    <tr key={s.name}>
                      <td className="px-[18px] py-3.5 text-[0.85rem] text-white font-semibold font-mono border-b border-white/[0.04] whitespace-nowrap">{s.name}</td>
                      <td className="px-[18px] py-3.5 text-[0.85rem] text-accent font-mono border-b border-white/[0.04] whitespace-nowrap">{s.time}</td>
                      <td className="px-[18px] py-3.5 text-[0.85rem] text-white/70 border-b border-white/[0.04]">{s.risk}</td>
                      <td className="px-[18px] py-3.5 text-[0.85rem] text-white/70 border-b border-white/[0.04]">{s.protocol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Wrap>
      </section>

      {/* EEAT */}
      <section className="py-[68px] section-alt">
        <Wrap>
          <SecHead center tag="Why Sipayi" title="Why Industrial Managers Choose Sipayi Over Other Security Agencies" sub="Four specific reasons — not marketing claims. Each backed by documented practice on Sipayi industrial deployments." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {eeat.map((e) => (
              <div key={e.tag} className="bg-white border border-border border-t-[3px] border-t-accent rounded-lg p-6">
                <div className="font-mono text-[0.64rem] font-bold tracking-[0.12em] uppercase text-accent mb-2.5">{e.tag}</div>
                <h3 className="text-primary text-[0.95rem] mb-2">{e.title}</h3>
                <p className="text-[0.85rem] text-muted-foreground m-0">{e.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[68px]">
        <Wrap>
          <SecHead center tag="Field Reports" title="What Industrial Clients Report After Sipayi Deployment" />
          <div className="flex flex-col gap-4 max-w-[900px] mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-lg p-[26px] grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-7 items-start">
                <div>
                  <div className="text-accent tracking-[2px] text-[0.84rem] mb-2.5">★★★★★</div>
                  <blockquote className="text-[0.89rem] text-foreground italic leading-relaxed mb-3.5">"{t.quote}"</blockquote>
                  <div>
                    <h5 className="text-[0.86rem] text-primary font-bold font-heading mb-0.5">{t.name}</h5>
                    <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                  </div>
                </div>
                <div className="hidden sm:block bg-[#111827] rounded-md px-4 py-3 text-center min-w-[140px]">
                  <div className="text-[1.5rem] mb-1.5">{t.sbIco}</div>
                  <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent">{t.sbType}</div>
                  <div className="text-[0.75rem] text-white/50 mt-0.5">{t.sbLoc}</div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[68px] section-alt scroll-mt-16">
        <Wrap>
          <SecHead center tag="FAQ" title="Industrial Security — Questions Plant Managers Ask" sub="Direct answers to the questions operations and HSE teams ask before contracting industrial security." />
          <FaqSection items={faqs} />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="bg-[#111827] border-t border-white/[0.06] py-7 px-6">
        <h3 className="font-mono text-white/50 text-[0.76rem] tracking-[0.1em] uppercase text-center mb-3">// coverage.map — industrial_facilities_served</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="font-mono bg-white/5 border border-white/10 text-white/60 px-3 py-[5px] rounded-[3px] text-[0.76rem]">{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="relative bg-[#111827] py-[72px] px-6 text-center text-primary-foreground scroll-mt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRID_BG, backgroundSize: "40px 40px" }} />
        <div className="relative">
          <h2 className="text-white mb-2.5 tracking-tight">Request a Free Industrial Security Site Assessment</h2>
          <p className="text-white/60 max-w-[520px] mx-auto mb-7">
            Our industrial security consultant visits your facility, maps vulnerabilities specific to your
            site type, and delivers a written deployment plan within 48 hours. No generic quote — a security
            model built around your actual risk profile.
          </p>
          <LeadForm
            buttonLabel="Request Assessment →"
            service="Industrial Security"
            selectLabel="Facility Type"
            selectOptions={["Manufacturing Plant", "Warehouse / Logistics Hub", "Construction Site", "Power Plant / Utility", "Pharma / Chemical Plant", "Other Industrial"]}
            extraInput={{ name: "phone", placeholder: "Phone" }}
            formClassName="max-w-[580px]"
            inputTheme="dark"
          />
          <p className="font-mono mt-3.5 text-[0.76rem] text-white/35">
            +91 96066 96105 &nbsp;·&nbsp; info@sipayisecurity.com &nbsp;·&nbsp; sipayisecurity.com
          </p>
          <div className="flex justify-center gap-x-6 gap-y-2 mt-5 flex-wrap">
            {promises.map((p) => (
              <span key={p} className="font-mono text-[0.78rem] text-white/45 flex items-center gap-1.5">
                <span className="text-accent">✓</span>{p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <div className="section-alt text-center py-7">
        <Link to="/#services" className="text-primary font-semibold text-[0.9rem] hover:text-accent transition-colors">
          ← Back to All Services | Sipayi Security &amp; Manpower
        </Link>
      </div>

      <StickyMobileCTA variant="dark" />
    </Layout>
  );
};

export default IndustrialSecurity;
