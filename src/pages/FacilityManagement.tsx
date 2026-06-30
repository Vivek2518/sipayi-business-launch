import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const ROSE = "#BE185D";

const heroPromises = [
  { ico: "👔", h: "Uniformed as Standard", p: "Every staff member arrives in uniform with a Sipayi staff ID before day one." },
  { ico: "🎓", h: "Corporate Etiquette Training", p: "Greeting protocols, communication standards, and phone conduct — trained before deployment." },
  { ico: "🏢", h: "Your Culture, Before Day One", p: "We brief staff on your company, visitors, and protocols before their first shift." },
  { ico: "📋", h: "Full PF & ESI Compliance", p: "Employer of record — zero statutory liability for your HR team." },
];

const trustBar = [
  "✅ Uniformed & Trained Staff",
  "🎓 Corporate Etiquette Module",
  "🏢 Office Culture Briefing Before Day 1",
  "📋 PF & ESI Compliant",
  "🔄 30-Day Replacement Guarantee",
  "🗺️ 15+ Cities Across India",
];

const stats = [
  { n: "300+", l: "Corporate Workplaces Staffed" },
  { n: "85%+", l: "Annual Client Renewal Rate" },
  { n: "30", l: "Day Replacement Guarantee" },
];

const training = [
  { h: "Corporate Etiquette Module", p: "Greeting standards, tone and language on duty, phone protocol, uniform care, and what to do when a situation needs escalation." },
  { h: "Workplace Culture Briefing", p: "Every staff member is briefed on your company: name pronunciation, visitor types, desk protocols, escalation contacts, and any custom rules your admin team specifies." },
  { h: "Uniform Before Day One", p: "Clean, pressed uniform and a Sipayi staff ID issued before they arrive at your premises — so they look like part of your team, not a temp from a contractor." },
  { h: "Supervised First Shift", p: "A Sipayi FM coordinator attends the first shift with every new deployment to ensure the handover from your admin team is complete and smooth." },
  { h: "Month-One Feedback Call", p: "Your admin head receives a structured check-in call at the end of month one — staff performance, any adjustments, any notes. Standards maintained proactively, not reactively." },
];

const roles = [
  { ico: "💁", title: "Receptionist / Front Desk Staff", desc: "Visitor registration, call handling, courier management, access control coordination. Trained in corporate greeting protocols and visitor management systems. Briefed on your specific visitor categories and escalation contacts before day one.", tags: ["Corporate Offices", "GCCs", "Co-working"], engage: "Contract" },
  { ico: "📋", title: "Office Assistant", desc: "Administrative support, document filing, photocopying, internal delivery, stationery management, scheduling assistance. Reliable, punctual, and briefed on your office's document handling and confidentiality expectations.", tags: ["Corporate", "Legal", "Finance"], engage: "Contract / Permanent" },
  { ico: "☕", title: "Pantry Staff / Beverage Service", desc: "Tea and coffee service, meeting room refreshment setup, pantry restocking, utensil management, basic canteen support. Trained in hospitality service standards — so every meeting feels prepared and every visitor feels welcomed.", tags: ["Corporate", "Hotels", "Institutions"], engage: "Contract" },
  { ico: "🔧", title: "Office Maintenance Crew", desc: "Electrical and plumbing first-response, furniture repair, equipment servicing, general maintenance tasks, vendor coordination. Keeps your workplace running without downtime — escalating only what genuinely needs external intervention.", tags: ["Offices", "IT Parks", "Institutions"], engage: "Contract" },
  { ico: "🏢", title: "Facility Coordinator / Supervisor", desc: "Oversees daily FM operations, manages staff schedules, coordinates maintenance requests and vendor visits, liaises with building management. The single point of contact for your admin head on all FM matters.", tags: ["Large Campuses", "GCCs", "IT Parks"], engage: "Contract / Permanent" },
  { ico: "🌿", title: "Horticulture / Landscaping Staff", desc: "Indoor plant care, office garden maintenance, terrace landscaping, and seasonal planting for premium office environments. For workplaces where biophilic design and greenery are part of the employee experience.", tags: ["Premium Offices", "Campuses"], engage: "Contract" },
  { ico: "🚐", title: "Driver / Facility Transport", desc: "Office shuttle coordination, executive cab support, vendor and delivery escort, facility vehicle maintenance coordination. Reliable, professional, and familiar with your office's transport protocols from day one.", tags: ["Large Offices", "Campuses"], engage: "Contract" },
  { ico: "🖥️", title: "Conference Room / AV Support", desc: "Meeting room setup, AV equipment management, presentation assistance, conference room booking coordination. For organisations where client meetings and internal presentations are frequent and standards matter.", tags: ["IT Parks", "Corporate", "Institutions"], engage: "Contract" },
];

const protocol = [
  { n: "01", h: "Workplace Briefing by Sipayi Coordinator", p: "Our FM coordinator visits your office before deployment, meets your admin head, and documents: company name, visitor greeting format, desk protocols, escalation contacts, common visitor types, and any custom requirements." },
  { n: "02", h: "Corporate Etiquette Training Module", p: "All FM staff complete our workplace etiquette module: greeting standards, communication tone, uniform maintenance, phone protocol on duty, escalation language, and basic confidentiality requirements for corporate environments." },
  { n: "03", h: "Uniform & ID Issued Before Arrival", p: "Clean, pressed uniform and a Sipayi staff ID card issued before they arrive at your premises. They present themselves as a professional extension of your workplace — not an anonymous contractor." },
  { n: "04", h: "Supervised First Shift", p: "A Sipayi FM supervisor attends the first shift with every new deployment — to complete the handover from your admin team, answer on-the-spot questions, and make any adjustments before leaving staff to independent operation." },
  { n: "05", h: "Month-One Feedback Call", p: "At the end of the first month, our coordinator calls your admin head for a structured feedback check-in — performance, incidents, improvement notes. Standards maintained proactively, not reactively." },
];

const eeat = [
  { tag: "// experience", title: "300+ Corporate Workplaces — From Start-ups to GCC Campuses", desc: "FM staffing experience across the full spectrum of Indian corporate real estate — from a 25-person start-up that needs one pantry person to a 600-person GCC campus requiring a 12-member FM team. Our FM coordinators have backgrounds in hospitality management and corporate facilities." },
  { tag: "// expertise", title: "Trained in Corporate Etiquette, Not Just Task Completion", desc: "Sipayi is not a bulk labour contractor for FM roles. Our workplace etiquette module, corporate grooming standards, and culture briefing protocol are designed around the standards that Grade A office environments expect. Staff deployed by Sipayi are trained to represent your brand." },
  { tag: "// authoritativeness", title: "Trusted by IT Parks, GCCs, and Premium Co-working Spaces", desc: "Sipayi FM staff are deployed across IT parks in Bengaluru's Whitefield and Electronic City, GCC campuses in Hyderabad's Hitech City, and co-working spaces across major metros. Our 85%+ annual renewal rate reflects consistent delivery of the professional standards modern workplaces demand." },
  { tag: "// trustworthiness", title: "Full Compliance + 30-Day Replacement Guarantee", desc: "Every FM staff member is enrolled under PF and ESI, paid at or above minimum wage, and covered under the Contract Labour Act — documentation available to your HR team on request. If any FM staff member does not meet your standard within the first 30 days, we replace them without delay or argument." },
];

const testimonials = [
  { quote: "We have hosted three board-level client meetings since Sipayi's receptionists joined. Every client has remarked on how professionally they were received. The staff remember returning visitor names, follow our meeting room protocols exactly, and present themselves in a way that genuinely reflects our brand. That is not something we expected from a staffing company.", name: "Nandini Krishnan, Admin Head", role: "IT Services Company, Whitefield, Bengaluru", chip: "💁 Receptionists + Pantry Staff" },
  { quote: "We manage a 600-person GCC campus and previously worked with two larger FM companies. Sipayi's key difference is the onboarding protocol. Their coordinator met our Admin Director before the first shift, documented our exact standards, and the staff arrived on day one knowing our company name, our visitor greeting format, and our escalation procedure. We had never experienced that level of preparation before.", name: "Arjun Bose, Workplace Experience Manager", role: "Global Capability Centre, Hitech City, Hyderabad", chip: "🏢 Full FM Team — 12 Staff" },
];

const faqs = [
  { question: "What is facility management staff supply and how is it different from general labour?", answer: "Facility management staff supply refers to the deployment of trained, uniformed, and customer-facing personnel for corporate workplaces — receptionists, office assistants, pantry staff, and maintenance crew. Unlike general labour, FM staff are selected for their communication skills, presentation, and ability to represent a corporate workplace professionally. Sipayi FM staff complete a corporate etiquette training module and receive a workplace-specific culture briefing before their first shift — something no general labour supplier provides." },
  { question: "Do your facility management staff receive training before deployment?", answer: "Yes — this is Sipayi's primary differentiator. Before any FM staff member arrives at your workplace, they complete a corporate etiquette training module covering greeting standards, communication tone, uniform care, phone protocol on duty, and escalation procedures. They also receive a briefing on your specific workplace — your company name, visitor types, greeting format, and custom protocols your admin team specifies. A Sipayi supervisor attends the first shift to ensure everything lands correctly." },
  { question: "Can you supply a receptionist for our corporate office?", answer: "Yes. Sipayi supplies trained, uniformed receptionists for corporate offices, IT parks, co-working spaces, hospitals, and institutions across India. They are briefed on your visitor management protocols, greeting standards, and escalation contacts before their first shift — and arrive in uniform with a staff ID. If a receptionist does not meet your standard within the first 30 days, we provide a replacement without delay or dispute." },
  { question: "What is the minimum contract period for facility management staff?", answer: "Our standard FM staff contracts start from 3 months — giving you flexibility without enterprise-length lock-ins. For project-based or event requirements such as exhibitions, office moves, and conferences, short-term deployments from 1 week are available. For ongoing deployments, most clients move to 12-month contracts with annual renewal after the first successful quarter." },
  { question: "Can you supply pantry staff and office assistants for a small office?", answer: "Yes. Sipayi supplies FM staff to offices of all sizes — from a 25-person start-up that needs one pantry person and one receptionist to a 500-person corporate campus requiring a full 12-member FM team. There is no minimum headcount requirement. Contact us with your office size and the roles you need — we provide a proposal within 24 hours." },
  { question: "How is PF and ESI handled for facility management staff?", answer: "Sipayi is the employer of record for all deployed FM staff. We handle PF registration, monthly deposits, ESI enrolment, minimum wage payments, and all Contract Labour Act documentation. Your HR team receives a monthly compliance statement and can request PF deposit receipts and ESI records at any time. Zero statutory liability lands on your organisation for Sipayi-deployed FM staff." },
];

const cities = [
  "Receptionist Staffing Bangalore", "Office Assistants Mumbai", "Pantry Staff Hyderabad",
  "FM Staff Chennai", "Office Support Pune", "Facility Staff Delhi NCR",
  "Workplace Staff Ahmedabad", "FM Team Coimbatore", "Facility Management Staff India",
];

const chips = ["Uniformed & trained", "Culture-briefed on Day 1", "30-day replacement guarantee", "Full PF & ESI"];

const headerNav = {
  theme: "manpower" as const,
  logoSuffix: "Manpower",
  accentColor: ROSE,
  logoAccentColor: "#FECDD3",
  items: [
    { label: "Home", to: "/" },
    { label: "Staff We Supply", to: { hash: "#roles" } },
    { label: "Onboarding Protocol", to: { hash: "#protocol" } },
    { label: "FAQ", to: { hash: "#faq" } },
  ],
  ctaLabel: "Get a Quote →",
  ctaTo: { hash: "#contact" },
};

const footerConfig = {
  blurb: "Facility management staff, skilled manpower, unskilled labour, and security services across 15+ cities in India since 2015.",
  servicesTitle: "FM Staff We Supply",
  services: ["Receptionists", "Office Assistants", "Pantry Staff", "Maintenance Crew", "Facility Coordinators", "AV & Conference Support"],
  thirdColTitle: "Other Services",
  thirdColTo: "/#services",
  industries: ["Skilled Manpower Supply", "Unskilled Labour Supply", "Corporate Security", "Industrial Security", "Residential Security"],
  bottomTagline: "PSARA Licensed · ISO 9001:2015 · India",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1120px] px-6 ${className}`}>{children}</div>
);

const FacilityManagement = () => {
  usePageMeta(
    "Facility Management Staff India | Receptionists, Office Assistants & Pantry | Sipayi",
    "Sipayi supplies trained, uniformed facility management staff — receptionists, office assistants, pantry staff, and maintenance crew — for corporate offices across India. PF & ESI compliant. Get a free quote.",
  );

  return (
    <Layout nav={headerNav} footer={footerConfig}>
      {/* BREADCRUMB */}
      <div className="bg-[#FFF1F2] border-b border-[#FECDD3] px-6 py-2.5">
        <div className="mx-auto max-w-[1120px] text-[0.8rem] text-muted-foreground">
          <Link to="/" className="text-[#BE185D] hover:underline">Home</Link> ›{" "}
          <Link to="/#services" className="text-[#BE185D] hover:underline">Services</Link> ›{" "}
          <span className="text-primary font-semibold">Facility Management Staff</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-[76px]" style={{ background: "linear-gradient(135deg,#BE185D 0%,#9D174D 50%,#831843 100%)" }}>
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(255,255,255,0.05),transparent 60%)" }} />
        <div className="relative mx-auto max-w-[1120px] px-6 grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          <div>
            <div className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#FECDD3] mb-3.5">Facility Management Staff — Workplace Staffing</div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[0.68rem] font-semibold tracking-[0.07em] uppercase px-3 py-[5px] rounded-full bg-[#FECDD3]/20 border border-[#FECDD3]/40 text-[#FECDD3]">Uniformed &amp; Trained</span>
              {["Corporate Etiquette", "Culture-Briefed on Day 1", "PF & ESI Included"].map((b) => (
                <span key={b} className="text-[0.68rem] font-semibold tracking-[0.07em] uppercase px-3 py-[5px] rounded-full bg-white/12 border border-white/20 text-white">{b}</span>
              ))}
            </div>
            <h1 className="text-white mb-3.5 tracking-tight">
              Facility Management Staff —{" "}
              <span className="text-[#FECDD3]">Trained Receptionists, Office Assistants, Pantry Staff &amp; Maintenance Crew</span>{" "}
              for Your Workplace
            </h1>
            <p className="text-white/[0.78] text-[0.97rem] mb-7">
              Your office is the first impression every client, candidate, and visitor forms about your company
              — and the daily environment your employees spend eight hours in. Sipayi supplies trained,
              uniformed facility management staff who represent your brand professionally, show up reliably,
              and know your workplace standards before their first shift.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-white text-[#BE185D] px-[26px] py-3 rounded-md font-bold text-[0.92rem] font-heading inline-block hover:-translate-y-0.5 transition-transform">Get a Free Quote →</a>
              <a href="#roles" className="border-2 border-white/35 text-white px-[22px] py-2.5 rounded-md font-semibold text-[0.92rem] inline-block hover:border-white transition-colors">See Staff We Supply</a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {heroPromises.map((p) => (
              <div key={p.h} className="bg-white/[0.08] border border-white/12 rounded-lg px-[18px] py-3.5 flex items-center gap-3.5">
                <div className="text-[1.5rem] shrink-0">{p.ico}</div>
                <div>
                  <h4 className="text-white font-heading text-[0.88rem] font-bold mb-0.5">{p.h}</h4>
                  <p className="text-white/60 text-[0.78rem] m-0">{p.p}</p>
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

      {/* FIRST IMPRESSION */}
      <section className="py-[68px]">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-11 items-start">
            <div>
              <SectionHeading tone="rose" align="left" eyebrow="The Workplace Experience Gap" title="Your Facility Staff Are Your Brand's First and Last Impression" />
              <p className="text-[0.95rem] text-muted-foreground">
                Research consistently shows that employee experience and workplace quality are top-three factors
                in talent retention. A client walking into your reception, a candidate attending an interview, a
                vendor visiting for a meeting — all of them form their judgment about your organisation in the
                first 90 seconds. Your facility staff are front and centre in that moment.
              </p>
              <p className="text-[0.95rem] text-muted-foreground">
                Yet most companies treat FM staff as an afterthought — sourced from whoever responds to a
                contractor notice, with no uniform, no etiquette training, and no briefing on the company's
                culture or expectations. The result is a gap between the brand your leadership team has built and
                the experience your reception desk delivers every morning.
              </p>
              <p className="text-[0.95rem] text-muted-foreground">
                The India facility management market crossed{" "}
                <strong className="text-primary">USD 87 billion in 2026</strong> and is growing at 7–10% annually,
                driven by Grade A office expansion and global capability centres (GCCs) that expect
                hospitality-level FM standards from day one. Sipayi closes the gap between what your office
                deserves and what most FM staffing contractors deliver.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {stats.map((s) => (
                  <div key={s.l} className="bg-[#FFF1F2] border border-[#FECDD3] rounded-lg p-4 text-center">
                    <div className="font-heading text-[1.4rem] font-extrabold text-[#BE185D]">{s.n}</div>
                    <div className="text-[0.72rem] text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-7 text-white" style={{ background: ROSE }}>
              <h3 className="text-[#FECDD3] text-base mb-[18px]">🎓 What "Trained &amp; Uniformed" Actually Means</h3>
              {training.map((t, i) => (
                <div key={t.h} className={`flex gap-3 py-[11px] ${i < training.length - 1 ? "border-b border-white/10" : ""}`}>
                  <div className="text-[#FDB8C7] font-bold shrink-0">✓</div>
                  <div>
                    <h4 className="text-white text-[0.86rem] font-bold mb-0.5">{t.h}</h4>
                    <p className="text-[0.78rem] text-white/60 m-0">{t.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ROLES */}
      <section id="roles" className="py-[68px] section-alt scroll-mt-16" style={{ background: "#FFF1F2" }}>
        <Wrap>
          <SectionHeading tone="rose" eyebrow="Staff We Supply" title="Facility Management Staff We Supply — Role by Role" subtitle="Every Sipayi FM staff member is uniformed, background-verified, and briefed on your workplace standards. Tell us which roles you need — we'll have a proposal to you within 24 hours." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {roles.map((r) => (
              <div key={r.title} className="relative bg-white border border-[#E5E7EB] rounded-[10px] p-[18px] pt-5 flex gap-3.5 items-start transition-all hover:shadow-[0_4px_20px_rgba(190,24,93,0.08)] hover:border-[#EC4899] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[3px] bg-[#BE185D]" />
                <div className="text-[1.7rem] shrink-0 mt-0.5">{r.ico}</div>
                <div>
                  <h3 className="text-primary text-[0.93rem] font-bold mb-1">{r.title}</h3>
                  <p className="text-[0.82rem] text-muted-foreground mb-2">{r.desc}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {r.tags.map((tag) => (
                      <span key={tag} className="text-[0.66rem] bg-[#FFF1F2] border border-[#FECDD3] text-[#BE185D] px-2 py-0.5 rounded-[3px] font-semibold">{tag}</span>
                    ))}
                    <span className="text-[0.66rem] bg-[#FAFAFA] border border-[#E5E7EB] text-muted-foreground px-2 py-0.5 rounded-[3px]">{r.engage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ONBOARDING PROTOCOL */}
      <section id="protocol" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SectionHeading tone="rose" align="left" eyebrow="What Makes Us Different" title="The Sipayi Onboarding Protocol — What Happens Before Your Staff Walk In on Day One" />
          <p className="text-[0.95rem] text-muted-foreground">
            Most FM staffing contractors send workers to a new workplace with little more than an address and a
            start time. Sipayi's pre-deployment protocol is different — and the difference is visible to your
            employees and visitors from the first morning.
          </p>
          <p className="text-[0.95rem] text-muted-foreground mb-8">
            No other FM staffing supplier in this segment provides a structured pre-deployment briefing tailored
            to your specific workplace. This protocol is Sipayi's primary differentiator — and the reason our
            clients see a difference on day one, not week three.
          </p>
          <div className="relative pl-12">
            <div className="absolute left-[19px] top-1 bottom-1 w-0.5 bg-[#FECDD3]" aria-hidden />
            {protocol.map((s, i) => (
              <div key={s.n} className={`relative pl-6 ${i < protocol.length - 1 ? "pb-7" : ""}`}>
                <div className="absolute left-[-48px] top-0.5 w-[38px] h-[38px] rounded-full bg-[#BE185D] text-white flex items-center justify-center font-heading font-extrabold text-[0.88rem] border-[3px] border-white z-[1]">{s.n}</div>
                <h4 className="text-primary text-base font-bold font-heading mb-1.5">{s.h}</h4>
                <p className="text-[0.88rem] text-muted-foreground m-0">{s.p}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* EEAT */}
      <section className="py-[68px] section-alt" style={{ background: "#FFF1F2" }}>
        <Wrap>
          <SectionHeading tone="rose" eyebrow="Why Sipayi" title="Why Corporate Workplace Teams Choose Sipayi for Facility Management Staff" subtitle="Four specific reasons — each backed by documented practice on active Sipayi deployments." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eeat.map((e) => (
              <div key={e.tag} className="bg-white border border-[#E5E7EB] border-l-4 border-l-[#BE185D] rounded-lg p-[22px]">
                <div className="text-[0.64rem] font-bold tracking-[0.1em] uppercase text-[#BE185D] mb-2">{e.tag}</div>
                <h3 className="text-primary text-[0.93rem] mb-1.5">{e.title}</h3>
                <p className="text-[0.84rem] text-muted-foreground m-0">{e.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[68px]">
        <Wrap>
          <SectionHeading tone="rose" eyebrow="What Clients Say" title="What Corporate Workplace Teams Say About Sipayi FM Staff" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-[#E5E7EB] border-t-[3px] border-t-[#BE185D] rounded-[10px] p-6">
                <div className="text-accent tracking-[2px] text-[0.84rem] mb-2.5">★★★★★</div>
                <blockquote className="text-[0.89rem] text-foreground italic leading-relaxed mb-3.5">"{t.quote}"</blockquote>
                <div>
                  <h5 className="font-heading text-[0.86rem] text-primary font-bold mb-0.5">{t.name}</h5>
                  <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[0.76rem] bg-[#FFF1F2] text-[#BE185D] px-3 py-1 rounded-full font-semibold">{t.chip}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[68px] section-alt scroll-mt-16" style={{ background: "#FFF1F2" }}>
        <Wrap>
          <SectionHeading tone="rose" eyebrow="Common Questions" title="Frequently Asked Questions — Facility Management Staff Supply" subtitle="Questions from admin heads, HR directors, and workplace managers before placing an FM staffing order." />
          <FaqSection items={faqs} tone="rose" />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="bg-primary py-7 px-6 text-center">
        <h3 className="font-heading text-white/70 text-[0.88rem] mb-3">📍 Facility Management Staff Available Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-white/[0.07] border border-[#BE185D]/30 text-[#FECDD3] px-[14px] py-[5px] rounded-full text-[0.78rem] font-medium">{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="relative py-[68px] px-6 text-center text-white scroll-mt-16 overflow-hidden" style={{ background: "linear-gradient(135deg,#BE185D,#9D174D)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 0%,rgba(255,255,255,0.06),transparent)" }} />
        <div className="relative">
          <h2 className="text-white mb-2.5">Let's Talk About Your Workplace — Free Consultation Within 24 Hours</h2>
          <p className="text-white/[0.72] max-w-[480px] mx-auto mb-6">
            Share your office size, city, and the staff roles you need. Our FM staffing consultant will send a
            tailored proposal — role by role, transparent pricing, no lock-in surprises.
          </p>
          <LeadForm
            buttonLabel="Get Proposal →"
            buttonTheme="navy"
            service="Facility Management Staff"
            selectLabel="Role Needed"
            selectOptions={["Receptionist / Front Desk", "Office Assistant", "Pantry Staff", "Maintenance Crew", "Facility Coordinator", "Horticulture Staff", "AV / Conference Support", "Multiple Roles / Full FM Team"]}
            extraInput={{ name: "detail", placeholder: "Office size & City" }}
            formClassName="max-w-[640px]"
          />
          <p className="mt-3.5 text-[0.76rem] text-white/45">📞 +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com</p>
          <div className="flex justify-center gap-2.5 mt-4 flex-wrap">
            {chips.map((c) => (
              <span key={c} className="text-[0.76rem] bg-white/10 border border-white/20 text-white/80 px-3 py-[5px] rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <div className="section-alt text-center py-7">
        <Link to="/#services" className="text-primary font-semibold text-[0.9rem] hover:text-[#BE185D] transition-colors">
          ← Back to All Services | Sipayi Security &amp; Manpower
        </Link>
      </div>

      <StickyMobileCTA variant="rose" />
    </Layout>
  );
};

export default FacilityManagement;
