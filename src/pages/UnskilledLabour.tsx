import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const PLUM = "#7C3AED";

const promiseStack = [
  { ico: "👷", t: "Workers Deployed", v: "1,000+ Active" },
  { ico: "⚡", t: "Bulk Mobilisation", v: "48 Hours" },
  { ico: "🔄", t: "No-Show Replacement", v: "Within 4 Hours" },
  { ico: "📋", t: "Compliance", v: "PF & ESI Included" },
];

const trustBar = [
  "✅ Background-Verified Workers",
  "🛡️ No-Show Backup Guarantee",
  "📋 PF & ESI Compliant",
  "👔 Daily Attendance Reports",
  "🏢 Corporate, Industrial & Logistics",
  "🗺️ 15+ Cities Across India",
];

const problems = [
  { bold: "No-show rate of 10–20%", rest: " is common with unmanaged contractors. Most operations managers build this in as an expected loss." },
  { bold: "Replacement takes days, not hours.", rest: " Contractors with no standby pool cannot mobilise a replacement quickly — you find out at 8 AM when the shift has already started." },
  { bold: "Compliance defaults stay hidden", rest: " until a labour audit. By then the penalty and the liability land on your organisation, not the contractor." },
  { bold: "No daily reporting.", rest: " You only find out the workforce was short when your production numbers or cleanliness scores drop — not at 7:30 AM when action was still possible." },
];

const solutions = [
  { title: "Active Standby Pool in Every City", desc: "We maintain a buffer of standby workers — background-checked and PF/ESI-enrolled — ready to deploy. When a worker calls in absent, we activate the standby before we call you." },
  { title: "4-Hour Replacement SLA — Written in the Contract", desc: "Replacement on-site within 4 hours of absence confirmation. If we fail, that worker-day is credited in your next billing cycle." },
  { title: "Morning Attendance Report by 9:30 AM", desc: "Your operations team knows who is present, who is absent, and who has been replaced — before you've made your second call of the day." },
  { title: "Full Compliance Documentation Always Ready", desc: "PF receipts, ESI records, Contract Labour Act documentation — available on request, every month, without being asked." },
];

const roles = [
  { ico: "👷", title: "General Helpers", desc: "Physical assistance on production floors, construction sites, warehouses, and maintenance crews. Lifting, material movement, floor support, general errands.", tags: ["Manufacturing", "Construction", "Logistics"], engage: "Contract / Daily" },
  { ico: "🧹", title: "Housekeeping Staff", desc: "Daily cleaning, sweeping, mopping, washroom maintenance, and waste management for offices, factories, hospitals, and commercial buildings. Briefed on your facility's specific schedule before day one.", tags: ["Corporate", "Hotels", "Healthcare"], engage: "Contract / Shift" },
  { ico: "📦", title: "Loading & Unloading Workers", desc: "Manual loading/unloading of goods, boxes, pallets, and materials at warehouses, docks, and factory dispatch/receiving bays. Shift-based deployment with standby backup.", tags: ["Logistics", "Warehousing", "Retail"], engage: "Contract / Shift" },
  { ico: "🧽", title: "Cleaning Crews", desc: "Deep cleaning, periodic cleaning, post-construction cleaning, glass facade cleaning, and industrial floor cleaning. Single-day or recurring deployments available.", tags: ["Construction", "Facilities", "Institutions"], engage: "Contract / One-time" },
  { ico: "🍽️", title: "Pantry Boys / Kitchen Helpers", desc: "Tea and coffee service, pantry restocking, utensil cleaning, and basic canteen support for corporate offices and institutions. Professional and presentable.", tags: ["Corporate", "Institutions", "Hotels"], engage: "Contract / Permanent" },
  { ico: "🏢", title: "Office Boys / Support Staff", desc: "Document delivery, reception assistance, reprography, stationery management, and general office errands for corporate and institutional environments.", tags: ["Corporate", "Legal", "Finance"], engage: "Contract / Permanent" },
  { ico: "🏗️", title: "Construction Helpers / Site Labour", desc: "Raw material carrying, mixing, scaffolding assistance, debris removal, and general site labour on active construction projects. Project-based or daily deployment.", tags: ["Construction", "Infrastructure"], engage: "Project / Daily" },
  { ico: "🛒", title: "Retail Floor Workers", desc: "Shelf stocking, display management, back-store organisation, and floor assistance for supermarkets, warehouses, and retail outlets. Available for peak-period surge staffing.", tags: ["Retail", "FMCG", "Supermarkets"], engage: "Contract / Shift" },
];

const system = [
  { ico: "👔", label: "Field Supervisor on Every Deployment", body: "Every Sipayi deployment above 10 workers has a dedicated field supervisor who takes morning roll call, manages absenteeism, and reports to our operations team before 9 AM every day — so we know about a no-show before your production line feels it." },
  { ico: "🔄", label: "Active Standby Worker Pool", body: "We maintain a buffer of standby workers — background-checked and PF/ESI-enrolled — in every city we operate. When a worker calls in absent, the standby pool is activated before we call you. Most replacements are mobilised within 2 hours of absence confirmation." },
  { ico: "📊", label: "Daily Attendance Report by 9:30 AM", body: "Your operations team receives a daily attendance report by 9:30 AM — present, absent, and replaced — so you know the exact workforce status before your operations meeting. No surprises when you walk the floor at 10 AM." },
  { ico: "🛡️", label: "4-Hour Replacement SLA (Written)", body: "If a worker does not show up and we cannot mobilise a replacement within 4 hours of confirmation, that worker-day is credited in your next billing cycle. This commitment is written into the contract — not a verbal assurance." },
  { ico: "📄", label: "Monthly Performance Statement", body: "Every month: total worker-days deployed, no-shows, replacements, overtime, billing reconciliation, PF deposit receipts, and ESI coverage confirmation — in one statement, delivered before your accounts team asks for it." },
];

const complianceRows = [
  { ob: "Provident Fund (PF)", cov: "✔ Registered and deposited monthly for every eligible worker. Receipts available on request." },
  { ob: "ESI (Employee State Insurance)", cov: "✔ Enrolled before deployment. ESI cards issued. 3.25% employer contribution managed by us." },
  { ob: "Minimum Wage Act", cov: "✔ Wages paid per current state schedule for unskilled category. State revisions implemented within 30 days." },
  { ob: "Contract Labour (R&A) Act", cov: "✔ Form D registration maintained. Muster rolls, wage registers, attendance records kept and available." },
  { ob: "Bonus Act", cov: "✔ Annual bonus entitlement tracked per worker. Paid per Act provisions at year-end settlement." },
  { ob: "Background Verification", cov: "✔ Police-verified and address-verified before deployment. Records available to client on request." },
];

const sectors = [
  { ico: "🏭", title: "Manufacturing & Factories", desc: "Floor helpers, material movers, housekeeping, and loading/unloading at dispatch bays." },
  { ico: "📦", title: "Warehousing & Logistics", desc: "Loaders, unloaders, pickers, packers, and shelf stackers for 3PL and distribution centres." },
  { ico: "🏢", title: "Corporate Offices & IT Parks", desc: "Housekeeping, pantry boys, office boys, washroom attendants, and cleaning crews." },
  { ico: "🏗️", title: "Construction Sites", desc: "Site helpers, coolies, debris removal crews, material carriers, and scaffolding assistants." },
  { ico: "🏨", title: "Hotels & Hospitality", desc: "Housekeeping, laundry helpers, banquet setup crews, kitchen helpers, and cleaning staff." },
  { ico: "🏥", title: "Healthcare & Institutions", desc: "Hospital housekeeping, sanitation workers, ward attendants, and linen handling staff." },
];

const testimonials = [
  { quote: "We run a 24-hour logistics hub and the previous contractor no-show rate was close to 15%. With Sipayi, we have been at under 3% for eight months. The morning attendance report lands before I get to my desk. When someone does not show, the replacement is usually on-site before I finish my first coffee.", name: "Suresh Narayanan, Warehouse Operations Manager", role: "FMCG Logistics Hub, Bengaluru", chip: "📉 No-show rate: 15% → ", chipStrong: "under 3%", chipRest: " in 8 months" },
  { quote: "We manage 12 floors of corporate offices and needed housekeeping and pantry staff. The previous agency had PF compliance issues that showed up in our annual audit. Sipayi documentation was complete on day one. Monthly billing statements are clean. No surprises, no defaults, no audit flags in two years.", name: "Rekha Sharma, Facility Manager", role: "Corporate Campus, Hyderabad", chip: "📋 ", chipStrong: "Zero audit flags", chipRest: " in 2 years of deployment" },
];

const faqs = [
  { question: "What is unskilled labour supply and how is it different from skilled manpower?", answer: "Unskilled labour supply refers to the deployment of general workforce for physical, support, and operational roles that do not require formal trade certification — general helpers, housekeeping staff, loading and unloading workers, cleaning crews, pantry boys, and construction helpers. Unlike skilled manpower (electricians, welders), these roles are filled without ITI or trade certification but are still covered under PF, ESI, and minimum wage compliance." },
  { question: "What is your no-show policy for deployed workers?", answer: "If a Sipayi-deployed worker does not report for duty, our field supervisor notifies our operations team by 7:30 AM and a replacement from our active standby pool is mobilised immediately. Our commitment: replacement on-site within 4 hours of absence confirmation. If we fail this, the absent worker-day is automatically credited on your next month's invoice. This is written into the contract — not a verbal policy." },
  { question: "Do you provide housekeeping staff for corporate offices?", answer: "Yes. Sipayi supplies housekeeping staff for corporate offices, IT parks, commercial buildings, hospitals, and hotels. Workers are briefed on your facility's specific cleaning schedule, area assignments, equipment to use, and reporting protocols before their first shift. For facilities above 15 housekeeping workers, a housekeeping supervisor is included in the deployment at no additional charge." },
  { question: "Can you supply loading and unloading workers on short notice?", answer: "Yes. For loading and unloading requirements in major cities — Bengaluru, Hyderabad, Mumbai, Chennai, and Pune — Sipayi can mobilise workers within 24–48 hours of a confirmed requirement. For large-volume requirements (50+ workers), we recommend giving 72 hours. For recurring shift-based deployment at a warehouse, we set up a dedicated standby pool for your facility so urgent gaps are filled without a fresh recruitment cycle." },
  { question: "Are the workers background-verified?", answer: "Yes. Every worker supplied by Sipayi undergoes police verification and address verification before being added to our active deployment pool. We maintain records of all verifications and provide copies to clients on request. For facilities with specific security requirements — hospitals, corporate campuses, sensitive sites — additional reference checks can be conducted on request before deployment." },
  { question: "How are wages and statutory dues handled for unskilled workers?", answer: "Sipayi is the employer of record for all deployed workers. We handle PF registration, monthly deposits, ESI enrolment, minimum wage payments, bonus entitlements, and all statutory documentation under the Contract Labour Act. Your organisation receives one consolidated monthly invoice. No individual worker payment obligations fall on your HR or accounts team — and no compliance risk lands on your organisation because of our defaults." },
];

const cities = [
  "Helpers Bangalore", "Housekeeping Staff Mumbai", "Loading Workers Hyderabad",
  "Labour Contractor Chennai", "Cleaning Crew Pune", "Support Staff Delhi NCR",
  "Pantry Boys Ahmedabad", "General Labour Coimbatore", "Contract Labour India",
];

const chips = ["4-hour response", "No-show backup guarantee", "PF & ESI included", "Background-verified workers"];

const headerNav = {
  theme: "manpower" as const,
  logoSuffix: "Manpower",
  accentColor: PLUM,
  logoAccentColor: "#DDD6FE",
  items: [
    { label: "Home", to: "/" },
    { label: "Roles We Supply", to: { hash: "#roles" } },
    { label: "Reliability System", to: { hash: "#reliability" } },
    { label: "FAQ", to: { hash: "#faq" } },
  ],
  ctaLabel: "Get Workers →",
  ctaTo: { hash: "#contact" },
};

const footerConfig = {
  blurb: "Unskilled labour supply, skilled manpower, industrial security, corporate security, and residential security across 15+ cities in India since 2015.",
  servicesTitle: "Roles We Supply",
  services: ["General Helpers", "Housekeeping Staff", "Loading & Unloading", "Cleaning Crews", "Pantry Boys", "Construction Helpers"],
  thirdColTitle: "Other Services",
  thirdColTo: "/#services",
  industries: ["Skilled Manpower Supply", "Corporate Security", "Industrial Security", "Residential Security", "Event Security"],
  bottomTagline: "PSARA Licensed · ISO 9001:2015 · India",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const UnskilledLabour = () => {
  usePageMeta(
    "Unskilled Labour Supply India | Helpers, Housekeeping & Loading Workers | Sipayi",
    "Sipayi supplies reliable general helpers, housekeeping staff, loading/unloading workers, and cleaning crews across India. PF & ESI compliant. No-show backup guarantee. Fast deployment.",
  );

  return (
    <Layout nav={headerNav} footer={footerConfig}>
      {/* BREADCRUMB */}
      <div className="bg-[#F5F3FF] border-b border-[#EDE9FE] px-6 py-2.5">
        <div className="mx-auto max-w-[1120px] text-[0.8rem] text-muted-foreground">
          <Link to="/" className="text-[#7C3AED] hover:underline">Home</Link> ›{" "}
          <Link to="/#services" className="text-[#7C3AED] hover:underline">Services</Link> ›{" "}
          <span className="text-primary font-semibold">Unskilled Labour Supply</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-[76px]" style={{ background: "linear-gradient(135deg,#7C3AED 0%,#6D28D9 50%,#5B21B6 100%)" }}>
        <div className="absolute -top-16 -right-16 w-[440px] h-[440px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 60%)" }} />
        <div className="relative mx-auto max-w-[1120px] px-6 grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          <div>
            <div className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#DDD6FE] mb-3.5">Unskilled Labour Supply — Contract Staffing</div>
            <h1 className="text-white mb-3.5 tracking-tight">
              Reliable Helpers, Housekeeping Staff,{" "}
              <span className="text-[#DDD6FE]">Loading &amp; Unloading Workers, and Cleaning Crews</span>{" "}
              Across India
            </h1>
            <p className="text-white/[0.78] text-[0.97rem] mb-[26px]">
              Workforce gaps in unskilled labour don't come with advance notice — a warehouse needs 20 loaders
              by 6 AM, a corporate building needs housekeeping after a contractor vanishes, a factory needs
              floor helpers for a production surge starting tomorrow. Sipayi supplies reliable,
              background-checked workers fast, in the numbers you need — with a guarantee.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-lg px-[18px] py-3.5 mb-6 flex items-center gap-3">
              <div className="text-[1.4rem] shrink-0">🛡️</div>
              <p className="text-white/85 text-[0.88rem] m-0 font-medium">
                <strong className="text-[#FDE68A]">No-Show Guarantee:</strong> Replacement worker mobilised
                within 4 hours of any absence. In writing. In the contract.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-white text-[#7C3AED] px-[26px] py-3 rounded-md font-bold text-[0.92rem] font-heading inline-block hover:-translate-y-0.5 transition-transform">Tell Us What You Need →</a>
              <a href="#roles" className="border-2 border-white/40 text-white px-[22px] py-2.5 rounded-md font-semibold text-[0.92rem] inline-block hover:border-white transition-colors">See Roles We Supply</a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {promiseStack.map((p) => (
              <div key={p.t} className="bg-white/[0.08] border border-white/12 rounded-lg px-4 py-3.5 flex items-center gap-3">
                <div className="text-[1.4rem] shrink-0">{p.ico}</div>
                <div>
                  <div className="text-white/50 text-[0.68rem] uppercase tracking-[0.1em] font-semibold mb-0.5">{p.t}</div>
                  <div className="text-white text-[0.9rem] font-bold font-heading">{p.v}</div>
                </div>
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

      {/* PROBLEM */}
      <section className="py-[68px]">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-11 items-start">
            <div>
              <SectionHeading tone="plum" align="left" eyebrow="The Reliability Problem" title="The Workforce Reliability Problem No One Talks About" />
              <p className="text-[0.95rem] text-muted-foreground">
                The single biggest complaint from operations managers who use unskilled labour contractors in
                India is not cost. It is reliability. Workers who don't show up. Contractors who stop answering
                calls after the first week. Replacements that arrive three days after they were promised.
              </p>
              <p className="text-[0.95rem] text-muted-foreground">
                This problem is worse at the bottom of the workforce pyramid — general helpers, housekeeping
                staff, and loading workers — because there is very little switching cost for the worker and very
                little accountability on the contractor. The result is high no-show rates, high attrition, and
                constant disruption to operations that depend on bodies being present.
              </p>
              <div className="flex flex-col gap-3 mt-5">
                {problems.map((p) => (
                  <div key={p.bold} className="bg-secondary rounded-lg px-[18px] py-3.5 border-l-[3px] border-[#F43F5E] flex gap-3">
                    <div className="text-[1.1rem] shrink-0 mt-0.5">⚠️</div>
                    <p className="text-[0.86rem] text-foreground m-0"><strong className="text-primary">{p.bold}</strong>{p.rest}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-7 text-white" style={{ background: PLUM }}>
              <h3 className="text-[#DDD6FE] text-base mb-[18px]">✅ How Sipayi Solves Each Problem</h3>
              {solutions.map((s, i) => (
                <div key={s.title} className={`flex gap-3 py-3 ${i < solutions.length - 1 ? "border-b border-white/10" : ""}`}>
                  <div className="text-[#A7F3D0] font-bold text-base shrink-0">✓</div>
                  <div>
                    <h4 className="text-white text-[0.86rem] font-bold mb-0.5">{s.title}</h4>
                    <p className="text-[0.78rem] text-white/60 m-0">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* GUARANTEE BANNER */}
      <div className="px-6">
        <div className="mx-auto max-w-[900px] rounded-xl px-10 py-9 text-center text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#6D28D9)" }}>
          <h3 className="text-[#DDD6FE] text-[1.2rem] mb-2.5">🛡️ The Sipayi No-Show Guarantee</h3>
          <p className="text-white/75 max-w-[620px] mx-auto text-[0.94rem] m-0">
            If a deployed worker does not report for duty and we do not provide a replacement within{" "}
            <strong className="text-[#FDE68A]">4 hours</strong>, that worker-day is{" "}
            <strong className="text-[#FDE68A]">credited to your next month's invoice</strong> — automatically,
            without you raising a dispute. This is not a policy. It is written into every contract.
          </p>
        </div>
      </div>

      {/* ROLES */}
      <section id="roles" className="py-[68px] section-alt scroll-mt-16 mt-[68px]">
        <Wrap>
          <SectionHeading tone="plum" eyebrow="Workforce Categories" title="Roles We Supply — Find What You Need" subtitle="Every worker is background-verified, enrolled under PF and ESI, and supervised by a Sipayi field supervisor. Tell us the role and quantity — we confirm availability within 4 hours." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {roles.map((r) => (
              <div key={r.title} className="bg-white border border-border rounded-[10px] p-[18px] flex gap-3.5 items-start transition-all hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)] hover:border-[#8B5CF6]">
                <div className="text-[1.8rem] shrink-0">{r.ico}</div>
                <div>
                  <h3 className="text-primary text-[0.95rem] font-bold mb-1">{r.title}</h3>
                  <p className="text-[0.83rem] text-muted-foreground mb-1.5">{r.desc}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {r.tags.map((tag) => (
                      <span key={tag} className="text-[0.68rem] bg-[#F5F3FF] border border-[#EDE9FE] text-[#7C3AED] px-2 py-0.5 rounded-[3px] font-semibold">{tag}</span>
                    ))}
                    <span className="text-[0.68rem] bg-secondary border border-border text-muted-foreground px-2 py-0.5 rounded-[3px]">{r.engage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* RELIABILITY SYSTEM */}
      <section id="reliability" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SectionHeading tone="plum" eyebrow="How We Manage Reliability" title="Our Attendance & Reliability System — Five Layers" subtitle="Most labour contractors are intermediaries with no real control over whether workers show up. Sipayi functions as the employer — and builds accountability into every layer of deployment." />
          <div className="flex flex-col border border-border rounded-[10px] overflow-hidden">
            {system.map((s, i) => (
              <div key={s.label} className={`grid grid-cols-1 lg:grid-cols-[220px_1fr] ${i < system.length - 1 ? "border-b border-border" : ""}`}>
                <div className="bg-[#F5F3FF] px-5 py-[18px] flex items-center gap-2.5 border-b lg:border-b-0 lg:border-r border-[#EDE9FE]">
                  <div className="text-[1.3rem] shrink-0">{s.ico}</div>
                  <h4 className="text-[#7C3AED] text-[0.88rem] font-bold leading-tight">{s.label}</h4>
                </div>
                <div className="px-[22px] py-[18px] bg-white">
                  <p className="text-[0.87rem] text-foreground m-0">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* COMPLIANCE */}
      <section className="py-[68px] section-alt">
        <Wrap>
          <SectionHeading tone="plum" eyebrow="Statutory Compliance" title="Compliance — What We Handle So You Don't Have To" subtitle="Unskilled labour has the highest incidence of compliance violations in India — because contractors operate on thin margins. A failed audit at your facility for a contractor's violation affects you, not just them." />
          <div className="overflow-x-auto rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
            <table className="w-full min-w-[560px] border-collapse bg-white text-[0.86rem]">
              <thead>
                <tr>
                  <th className="bg-primary text-white text-left px-4 py-[11px] text-[0.81rem] font-semibold">Statutory Obligation</th>
                  <th className="text-left px-4 py-[11px] text-[0.81rem] font-semibold text-white" style={{ background: PLUM }}>Sipayi's Coverage</th>
                </tr>
              </thead>
              <tbody>
                {complianceRows.map((r, i) => (
                  <tr key={r.ob} className={i % 2 === 1 ? "bg-[#7C3AED]/[0.02]" : ""}>
                    <td className="px-4 py-3 border-b border-border font-semibold text-primary align-top">{r.ob}</td>
                    <td className="px-4 py-3 border-b border-border text-[#15803D] font-semibold align-top">{r.cov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.9rem] text-muted-foreground mt-5">
            ⚠️ <strong className="text-primary">Principal Employer Liability (Contract Labour Act 1970):</strong>{" "}
            If a contractor defaults on wages or statutory dues, your organisation is directly liable — not just
            the contractor. Sipayi's compliance-first model eliminates this risk. Request our Form D, PF
            receipts, and ESI records at any time.
          </p>
        </Wrap>
      </section>

      {/* SECTORS */}
      <section className="py-[68px]">
        <Wrap>
          <SectionHeading tone="plum" eyebrow="Where We Deploy" title="Industries & Settings Where Sipayi Supplies Unskilled Workforce" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {sectors.map((s) => (
              <div key={s.title} className="bg-white border border-border rounded-lg p-4 flex gap-3 items-start">
                <div className="text-[1.4rem] shrink-0 mt-0.5">{s.ico}</div>
                <div>
                  <h4 className="text-primary text-[0.9rem] font-bold mb-1">{s.title}</h4>
                  <p className="text-[0.8rem] text-muted-foreground m-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[68px] section-alt">
        <Wrap>
          <SectionHeading tone="plum" eyebrow="Client Results" title="What Our Clients Report About Reliability" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border border-t-[3px] border-t-[#7C3AED] rounded-[10px] p-6">
                <div className="text-accent tracking-[2px] text-[0.84rem] mb-2.5">★★★★★</div>
                <blockquote className="text-[0.89rem] text-foreground italic leading-relaxed mb-3.5">"{t.quote}"</blockquote>
                <div>
                  <h5 className="font-heading text-[0.86rem] text-primary font-bold mb-0.5">{t.name}</h5>
                  <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                </div>
                <div className="mt-3.5 px-3.5 py-2 bg-[#F5F3FF] rounded-md text-[0.78rem] text-[#7C3AED] font-semibold">
                  {t.chip}<strong className="text-[#7C3AED]">{t.chipStrong}</strong>{t.chipRest}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SectionHeading tone="plum" eyebrow="Common Questions" title="Frequently Asked Questions — Unskilled Labour Supply India" subtitle="Questions from operations managers, facility heads, and procurement teams before placing a labour order." />
          <FaqSection items={faqs} tone="plum" />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="bg-[#F5F3FF] border-y border-[#EDE9FE] py-7 px-6 text-center">
        <h3 className="font-heading text-primary text-[0.9rem] mb-3">📍 Unskilled Labour Supply Available Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-white border border-[#EDE9FE] text-[#7C3AED] px-[14px] py-1.5 rounded-full text-[0.78rem] font-semibold">{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="relative py-[68px] px-6 text-center text-white scroll-mt-16 overflow-hidden" style={{ background: PLUM }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%,rgba(255,255,255,0.08),transparent)" }} />
        <div className="relative">
          <h2 className="text-white mb-2">Tell Us How Many Workers You Need and Where</h2>
          <p className="text-white/[0.72] max-w-[480px] mx-auto mb-1.5">Our operations team confirms availability and mobilisation timeline within 4 hours.</p>
          <p className="text-[0.8rem] text-white/50 mb-[26px]">Include: Role · Quantity · City · When you need them</p>
          <LeadForm
            buttonLabel="Get Workers →"
            service="Unskilled Labour"
            selectLabel="Role Needed"
            selectOptions={["General Helpers", "Housekeeping Staff", "Loading / Unloading Workers", "Cleaning Crew", "Pantry Boys", "Office Boys / Support Staff", "Construction Helpers", "Retail Floor Workers", "Multiple Roles"]}
            extraInput={{ name: "detail", placeholder: "Quantity & When" }}
            formClassName="max-w-[640px]"
          />
          <p className="mt-3.5 text-[0.76rem] text-white/45">📞 +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com</p>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {chips.map((c) => (
              <span key={c} className="text-[0.76rem] bg-white/10 border border-white/20 text-white/75 px-3 py-[5px] rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <div className="section-alt text-center py-7">
        <Link to="/#services" className="text-primary font-semibold text-[0.9rem] hover:text-[#7C3AED] transition-colors">
          ← Back to All Services | Sipayi Security &amp; Manpower
        </Link>
      </div>

      <StickyMobileCTA variant="plum" />
    </Layout>
  );
};

export default UnskilledLabour;
