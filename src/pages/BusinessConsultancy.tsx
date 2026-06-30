import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FaqSection from "@/components/sections/FaqSection";
import LeadForm from "@/components/sections/LeadForm";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const resultChips = [
  "50+ SMB engagements completed",
  "Avg. 18% operational cost reduction in Year 1",
  "Engagements from Rs.50,000",
  "100% founder-facing — no junior handoffs",
];

const trustBar = [
  "🎯 Strategic Planning",
  "⚙️ Operational Improvement",
  "📈 Growth Advisory",
  "🔍 Business Diagnostics",
  "90-Day Outcome Cycles",
  "Senior Advisor Throughout",
];

const problems = [
  { label: "Founder Dependency", h: "Every decision runs through one person", p: "Growth stalls because there is no system — only individuals. When the founder is on leave, the business slows. This is not a people problem. It is a structure problem — and it is solvable." },
  { label: "Process Collapse", h: "What worked at Rs.1 Cr breaks at Rs.10 Cr", p: "The same informal systems that made you agile as a start-up now create errors, rework, delays, and customer complaints at scale. The business has outgrown its own operating model." },
  { label: "Strategy Drift", h: "Doing ten things, winning at none", p: "Revenue is spread across customers and segments that require completely different systems. The organisation is stretched serving all of them inadequately — and nobody has drawn a line about what to stop." },
  { label: "Talent Ceiling", h: "The team that built this cannot take it further", p: "The same team that built the business to its current size does not have the skills to take it to the next level. But the founder cannot see clearly who is the constraint and who is the solution." },
];

const services = [
  { ico: "🗺️", title: "Strategic Planning", sub: "For founders facing a strategic choice — or businesses that have grown without a plan and now need to make deliberate decisions.", body: ["Most SMBs have an idea of where they want to be in three years but no structured plan for getting there. Sipayi's strategic planning engagements produce three concrete outputs: a written one-page strategy that the whole leadership team can act from, a prioritised initiative list with owners and timelines, and a 90-day action plan that starts immediately after the engagement.", "We do not produce 60-page strategy documents. We produce clarity — about what to do, what to stop, and in what order."], meta: "Typical engagement: 3–6 weeks · 2–4 workshops with leadership team · Deliverable: 1-page strategy + prioritised initiative list + 90-day action plan · Fee: Rs.75,000 – Rs.3,00,000" },
  { ico: "⚙️", title: "Operational Improvement", sub: "For businesses where the operation is creating cost, delay, and customer complaints that are eating into margin and reputation.", body: ["Sipayi's operational improvement practice maps your current workflows, identifies the bottlenecks causing cost, delay, and error, and designs practical process changes that your existing team can implement — without a large change programme or external consultants doing the implementation for you.", "Common outcomes in the first 90 days: reduced order-to-delivery time, elimination of rework loops, clear accountability at every handoff, and a measurable reduction in operational cost that typically pays back the engagement fee within the engagement period."], meta: "Typical engagement: 6–12 weeks · Process mapping + root cause analysis + solution design + implementation support · Deliverable: Process blueprint + implementation tracker + measured outcome report · Fee: Rs.1,00,000 – Rs.5,00,000" },
  { ico: "📈", title: "Growth Advisory", sub: "For businesses ready to scale, but wanting a structured approach rather than hoping the next hire or product solves the problem.", body: ["Growth advisory covers: identifying the highest-leverage growth moves available (new segments, channel expansion, pricing optimisation, or operational leverage), building the organisational structure needed to support the next revenue level, and sequencing investments so cash flow is not destroyed in the process.", "This is not strategy consulting in the McKinsey sense. It is founder-to-advisor working sessions, honest assessment of what the organisation can realistically execute, and a pragmatic growth plan that fits your cash position and team capacity."], meta: "Typical engagement: 3 months ongoing · Monthly review sessions with founder + leadership · Deliverable: Monthly growth dashboard + quarterly review + founder accountability structure · Fee: Rs.50,000 – Rs.1,50,000/month" },
  { ico: "🔍", title: "Business Diagnostic — Where Do You Start?", sub: "For businesses not sure which problem to solve first. Most clients start here before committing to a longer engagement.", body: ["A structured two-week deep-dive across strategy, operations, finance, and people that produces a prioritised problem map and a recommended engagement scope. Most clients use the diagnostic to decide exactly what kind of support they need — before committing significant time and money to a longer programme.", "The diagnostic often reveals that the problem you see is a symptom, not the root cause. Getting this wrong first means solving the wrong problem with the right solution."], meta: "Typical engagement: 2 weeks · Founder interviews + data review + team interviews + process observation · Deliverable: Diagnostic report with prioritised problem map + engagement recommendation · Fee: Rs.50,000 – Rs.1,00,000" },
];

const steps = [
  { n: "01", free: true, h: "Discovery Call — 30 Minutes", p: "A senior Sipayi advisor (not a sales executive) listens to the problem, asks honest questions, and tells you directly whether we are the right fit. If we are not, we say so." },
  { n: "02", h: "Business Diagnostic (Recommended)", p: "For most new engagements, we recommend starting with a Diagnostic before committing to a larger scope. This prevents both parties from investing in the wrong problem." },
  { n: "03", h: "Engagement Design", p: "Based on the diagnostic, we propose a specific scope with clear deliverables, timelines, milestones, and fees. Nothing begins until you are satisfied with exactly what you are buying." },
  { n: "04", h: "Active Engagement", p: "Working sessions, reviews, implementation support. You work with the same senior advisor throughout — no handoff to a junior team. Weekly or bi-weekly cadence depending on type." },
  { n: "05", h: "Measurement & Close", p: "Every engagement closes with a measured outcome report comparing baseline to post-engagement state. The engagement is not complete until we have documented what changed." },
];

const fitYes = [
  "You want practical advice from someone who will tell you the truth, not validate your existing plan",
  "You are willing to do the implementation work — we advise and support, you execute",
  "Your business is between Rs.1 Cr and Rs.200 Cr turnover",
  "You want clear deliverables and a measurable outcome, not an engagement that continues indefinitely",
  "You need someone who understands Indian business realities — GST, family dynamics, informal systems, labour compliance",
];
const fitNo = [
  "You want a consultant to do the work for you — we advise and support, not execute",
  "You are looking for investor pitch decks or fundraising advisory — we do not do this",
  "You want 6 months of engagement before seeing any output",
  "You need Big 4 brand credibility for a board or investor presentation",
  "Your business is pre-revenue or very early-stage — we are better suited to businesses with existing operations",
];

const testimonials = [
  { quote: "We had been at the same revenue level for three years and I thought the problem was sales. Sipayi's diagnostic showed it was operations — we were losing 22% of every order to rework and delay before it reached the customer. Six months after implementing their process blueprint, our on-time delivery went from 64% to 91% and the same sales team grew revenue by 31%.", name: "Vikram Shetty, Managing Director", role: "Precision Components Manufacturer, Bengaluru", tag: "On-time delivery: 64% → 91% · Revenue +31%" },
  { quote: "I had spoken to two larger consultancies before Sipayi. Both gave me impressive presentations and very little they could actually do in the next 90 days. Sipayi's first question was: what decision are you stuck on right now? That was different. Within eight weeks we had restructured sales territories, removed one loss-making product line, and the founder was no longer the default for every customer complaint.", name: "Anita Mehta, Founder", role: "FMCG Distribution Business, Pune", tag: "Founder dependency reduced · Loss-making line removed in 8 weeks" },
];

const faqs = [
  { question: "What does a business consultant actually do for an SMB?", answer: "A business consultant works with SMB owners to identify root causes of performance problems, design practical solutions, and support implementation. For Indian SMBs, this typically covers strategic clarity (where to focus), operational improvement (how to do things better), and growth structuring (how to scale without breaking). A good consultant brings external perspective and structured problem-solving that is hard to access internally when you are running the business day-to-day." },
  { question: "How much does business consultancy cost for an SMB in India?", answer: "Sipayi's engagement fees range from Rs.50,000 for a Business Diagnostic to Rs.5,00,000 for a full operational improvement engagement. Monthly growth advisory retainers start at Rs.50,000 per month. All fees are agreed in writing before any engagement begins — no scope creep, no surprise invoices. Most clients find the engagement fee is recovered within the engagement period through measurable operational savings or revenue improvement." },
  { question: "How long does a typical consultancy engagement take?", answer: "Sipayi operates in 90-day engagement cycles. A Business Diagnostic takes 2 weeks. A strategic planning engagement takes 3–6 weeks. An operational improvement project runs 6–12 weeks. Growth advisory is ongoing monthly. We do not run open-ended engagements without a clear deliverable — every scope has a defined endpoint and a measurement of what was achieved." },
  { question: "Can Sipayi help with a specific operational problem, not the whole business?", answer: "Yes. Many clients come with a specific problem — a broken procurement process, a warehouse losing inventory, a sales team not converting, a pricing model eroding margin. Sipayi works comfortably on a specific operational problem with a defined scope rather than requiring a whole-business engagement. The Business Diagnostic often helps identify whether the problem you see is the root cause or a symptom of something deeper." },
  { question: "How is Sipayi's consultancy different from a standalone management consultant?", answer: "Sipayi's advisors work across both operational management and business strategy, which means they have ground-level visibility into Indian SMB operations that a purely strategic consultant rarely has. Engagements are founder-facing, deliverable-based, and capped at 90-day cycles. There are no junior analyst handoffs — the same senior advisor who takes the discovery call runs your engagement. And because Sipayi also manages manpower and operations for many clients, the strategic advice is grounded in operational reality." },
  { question: "Does Sipayi work outside Bengaluru and Hyderabad?", answer: "Sipayi's consultancy operates primarily across Bengaluru, Hyderabad, Chennai, Mumbai, Pune, and Delhi NCR. For businesses in other locations, we offer remote advisory engagements with quarterly in-person reviews — which work well for strategic and growth advisory. For operational improvement engagements that require process mapping and observation, we prefer to be on-site for at least the diagnostic and design phases." },
];

const cities = [
  "Business Consultant Bangalore", "SME Consulting Mumbai", "Strategic Planning Hyderabad",
  "Operational Improvement Chennai", "Growth Advisory Pune", "Business Advisory Delhi NCR",
  "SMB Consultant India", "Business Consultancy Ahmedabad",
];

const headerNav = {
  theme: "advisory" as const,
  logoSuffix: "Advisory",
  items: [
    { label: "Home", to: "/" },
    { label: "Services", to: { hash: "#services" } },
    { label: "How We Work", to: { hash: "#how-we-work" } },
    { label: "FAQ", to: { hash: "#faq" } },
  ],
  ctaLabel: "Book Discovery Call",
  ctaTo: { hash: "#contact" },
};

const footerConfig = {
  blurb: "Business consultancy, facility management, skilled manpower, industrial security, and residential security across India since 2015.",
  servicesTitle: "Consultancy Services",
  services: ["Strategic Planning", "Operational Improvement", "Growth Advisory", "Business Diagnostic", "How We Work", "Book Discovery Call"],
  thirdColTitle: "Other Services",
  thirdColTo: "/#services",
  industries: ["Facility Management Staff", "Skilled Manpower Supply", "Corporate Security", "Industrial Security", "Residential Security"],
  bottomTagline: "PSARA Licensed · ISO 9001:2015 · India",
};

const Wrap = ({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) => (
  <div className={`mx-auto ${narrow ? "max-w-[780px]" : "max-w-[1060px]"} px-6 ${className}`}>{children}</div>
);

const SecHead = ({ tag, title, sub, center = false, className = "" }: { tag: string; title: string; sub?: string; center?: boolean; className?: string }) => (
  <div className={`${center ? "text-center mx-auto max-w-[760px]" : ""} ${className}`}>
    <p className={`text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#92400E] mb-2.5 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
      <span className="text-[#D97706]">—</span>{tag}
    </p>
    <h2 className="text-primary mb-3.5">{title}</h2>
    {sub && <p className={`text-[0.97rem] text-muted-foreground max-w-[620px] ${center ? "mx-auto" : ""}`}>{sub}</p>}
  </div>
);

const BusinessConsultancy = () => {
  usePageMeta(
    "Business Consultancy Services India | Strategy & Growth Advisory for SMBs | Sipayi",
    "Sipayi provides practical business consultancy for Indian SMBs — strategic planning, operational improvement, and growth advisory. Founder-focused. Results-measured. Book a free discovery call.",
  );

  return (
    <Layout nav={headerNav} footer={footerConfig}>
      {/* BREADCRUMB */}
      <div className="bg-[#FFFBEB] border-b border-[#E8E0D4] px-6 py-2.5">
        <div className="mx-auto max-w-[1060px] text-[0.8rem] text-muted-foreground">
          <Link to="/" className="text-[#92400E] hover:underline">Home</Link> ›{" "}
          <Link to="/#services" className="text-[#92400E] hover:underline">Services</Link> ›{" "}
          <span className="text-primary font-semibold">Business Consultancy</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden text-white pt-20 pb-[70px]" style={{ background: "#78350F" }}>
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(253,230,138,0.06),transparent 60%)" }} />
        <div className="relative mx-auto max-w-[1060px] px-6">
          <div className="font-heading text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[#FDE68A]/60 mb-[18px] flex items-center gap-2.5">
            <span className="w-8 h-0.5 bg-[#FDE68A]" />
            Business Consultancy Services for Indian SMBs
          </div>
          <h1 className="text-white mb-[18px] max-w-[820px]">
            Business Consultancy —{" "}
            <span className="text-[#FDE68A]">Practical Strategy, Operational Improvement &amp; Growth Advisory</span>{" "}
            for Indian Small and Medium Businesses
          </h1>
          <p className="text-white/[0.72] text-base max-w-[700px] mb-8 font-serif italic leading-[1.75]">
            Most Indian SMBs do not struggle because of effort. They struggle because of clarity — unclear
            strategy, processes that do not scale, decision-making trapped in one or two founders, and growth
            that creates more problems than it solves.
          </p>
          <div className="flex flex-wrap gap-3.5 items-center">
            <a href="#contact" className="bg-[#FDE68A] text-[#78350F] px-7 py-[13px] rounded-md font-bold text-[0.92rem] font-heading inline-block hover:-translate-y-0.5 transition-transform">Book Free Discovery Call →</a>
            <a href="#services" className="border-[1.5px] border-[#FDE68A]/30 text-white/70 px-6 py-[11px] rounded-md font-medium text-[0.88rem] inline-block hover:border-[#FDE68A] hover:text-[#FDE68A] transition-colors">See What We Do</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-9 pt-7 border-t border-white/10">
            {resultChips.map((c) => (
              <span key={c} className="text-[0.78rem] font-semibold text-white/65 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FDE68A] shrink-0" />{c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#78350F]/80 border-b border-[#FDE68A]/15 py-3 px-6">
        <div className="mx-auto max-w-[1060px] flex flex-wrap gap-x-[18px] gap-y-2 justify-center items-center">
          {trustBar.map((t) => (
            <span key={t} className="text-white/60 text-[0.78rem] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* THE PROBLEM */}
      <section className="py-[68px]">
        <Wrap>
          <SecHead center tag="The Real Problem" title="The Real Reasons Indian SMBs Get Stuck — And Why Most Stay That Way" className="pb-10" />
          <p className="max-w-[760px] mx-auto text-center text-muted-foreground text-[0.97rem] -mt-6 mb-4">
            India has more than 63 million MSMEs. Most of them are not failing — they are simply stuck at the same
            revenue level, the same organisational problems, and the same set of decisions for years. The issue is
            almost never market opportunity or founder effort. It is almost always one of four structural problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {problems.map((p) => (
              <div key={p.label} className="rounded-lg overflow-hidden flex">
                <div className="w-14 bg-[#78350F] flex items-center justify-center py-3 px-1.5 shrink-0">
                  <span className="text-[#FDE68A] text-[0.62rem] font-bold uppercase tracking-[0.1em]" style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}>{p.label}</span>
                </div>
                <div className="bg-[#FFFBEB] border border-[#E8E0D4] border-l-0 px-[18px] py-4 flex-1">
                  <h4 className="text-[#78350F] text-[0.92rem] font-heading font-bold mb-1.5">{p.h}</h4>
                  <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">{p.p}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-[0.95rem] mt-6">
            Each of these is solvable. But they require an outside perspective — someone who has seen these
            problems across enough businesses to recognise them quickly, and knows what actually works in the
            Indian SMB context.
          </p>
        </Wrap>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-[68px] section-alt scroll-mt-16" style={{ background: "#FFFBEB" }}>
        <Wrap>
          <SecHead tag="What We Actually Do" title="Our Business Consultancy Services" sub="Sipayi's consultancy practice is deliberately narrow. We work on three areas where we have the deepest expertise and the most consistent track record of results with Indian SMBs." className="mb-10" />
          <div className="flex flex-col gap-8">
            {services.map((s) => (
              <div key={s.title} className="border border-[#E8E0D4] rounded-[10px] overflow-hidden bg-white">
                <div className="bg-[#FFFBEB] px-7 py-5 flex items-start gap-4 border-b border-[#E8E0D4]">
                  <div className="text-[1.6rem] shrink-0">{s.ico}</div>
                  <div>
                    <h3 className="text-[#78350F] text-[1.05rem] mb-1">{s.title}</h3>
                    <p className="text-[0.85rem] text-muted-foreground m-0">{s.sub}</p>
                  </div>
                </div>
                <div className="px-7 py-6">
                  {s.body.map((para, i) => (
                    <p key={i} className="text-[0.9rem] text-foreground mb-3 leading-relaxed">{para}</p>
                  ))}
                  <div className="bg-[#FFFBEB] border border-[#E8E0D4] rounded-md px-4 py-3 mt-3.5 text-[0.83rem] text-[#78350F] italic">{s.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* HOW WE WORK */}
      <section id="how-we-work" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SecHead tag="How Engagements Work" title="What to Expect — From First Call to Final Report" />
          <p className="text-muted-foreground text-[0.95rem] mb-8 max-w-[760px]">
            We are explicit about this because consultancy relationships fail most often from unclear
            expectations, not lack of effort. Here is exactly what working with Sipayi looks like.
          </p>
          <div className="relative pl-[52px]">
            <div className="absolute left-[19px] top-2 bottom-5 w-0.5 bg-[#E8E0D4]" aria-hidden />
            {steps.map((s, i) => (
              <div key={s.n} className={`relative ${i < steps.length - 1 ? "pb-7" : ""}`}>
                <div className="absolute left-[-52px] top-0 w-[38px] h-[38px] rounded-full bg-[#78350F] text-[#FDE68A] flex items-center justify-center font-heading font-extrabold text-[0.86rem] border-[3px] border-[#FFFBEB] z-[1]">{s.n}</div>
                {s.free && <span className="absolute top-[-2px] left-[-10px] text-[0.58rem] font-bold bg-[#FDE68A] text-[#78350F] px-[5px] py-px rounded-[3px] font-heading z-[2]">FREE</span>}
                <h4 className="text-primary text-[0.97rem] font-bold font-heading mb-1.5">{s.h}</h4>
                <p className="text-[0.88rem] text-muted-foreground m-0">{s.p}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FIT */}
      <section className="py-[68px] section-alt" style={{ background: "#FFFBEB" }}>
        <Wrap>
          <SecHead tag="Honest Fit Assessment" title="What Makes Sipayi the Right Fit — And What Makes It the Wrong One" sub="There are hundreds of business consultants in India. Here is a straight answer to who Sipayi is and is not built for." className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg p-6 bg-[#FFFBEB] border border-[#E8E0D4]">
              <h3 className="text-[#78350F] text-[0.95rem] font-heading mb-4">✅ Sipayi is a good fit if...</h3>
              {fitYes.map((f) => (
                <div key={f} className="flex gap-2.5 mb-2.5 text-[0.86rem] last:mb-0">
                  <span className="shrink-0 text-[0.9rem] mt-0.5 text-[#92400E]">→</span>
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg p-6 bg-[#FAFAF8] border border-[#E5E7EB]">
              <h3 className="text-primary text-[0.95rem] font-heading mb-4">✗ Sipayi is not a good fit if...</h3>
              {fitNo.map((f) => (
                <div key={f} className="flex gap-2.5 mb-2.5 text-[0.86rem] last:mb-0">
                  <span className="shrink-0 text-[0.9rem] mt-0.5 text-muted-foreground">✗</span>
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary rounded-lg px-6 py-5 mt-6">
            <p className="text-white/75 text-[0.9rem] m-0 font-serif italic leading-relaxed">
              <strong className="text-[#FDE68A] not-italic font-bold">The integrated advantage:</strong> Because Sipayi
              also manages manpower, security, and facility operations for many consultancy clients, our advisors
              have ground-level visibility into Indian SMB operations that a standalone consultancy rarely has. The
              advisor reviewing your business strategy has also seen what your warehouse floor looks like. That makes
              the strategic advice more accurate.
            </p>
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[68px]">
        <Wrap>
          <SecHead tag="Client Results" title="What SMB Owners Say After Working With Sipayi" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="relative bg-[#FFFBEB] border border-[#E8E0D4] rounded-[10px] p-7">
                <span className="absolute top-[-8px] left-5 font-serif text-[5rem] leading-none text-[#92400E]/15 pointer-events-none">"</span>
                <div className="text-accent tracking-[2px] text-[0.84rem] mb-3.5">★★★★★</div>
                <blockquote className="relative z-[1] text-[0.9rem] text-foreground font-serif italic leading-[1.7] mb-[18px]">{t.quote}</blockquote>
                <div>
                  <h5 className="font-heading text-[0.86rem] text-primary font-bold mb-0.5">{t.name}</h5>
                  <span className="text-[0.74rem] text-muted-foreground">{t.role}</span>
                </div>
                <div className="mt-3.5 inline-block bg-[#78350F] text-[#FDE68A] text-[0.76rem] font-bold px-3 py-[5px] rounded font-heading">{t.tag}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[68px] section-alt scroll-mt-16" style={{ background: "#FFFBEB" }}>
        <Wrap>
          <SecHead tag="Common Questions" title="Frequently Asked Questions" className="mb-10" />
          <FaqSection items={faqs} tone="amber" />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="bg-[#78350F] py-7 px-6 text-center">
        <h3 className="font-heading text-white/60 text-[0.88rem] mb-3">Business Consultancy Engagements Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[800px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-[#FDE68A]/10 border border-[#FDE68A]/20 text-[#FDE68A] px-[14px] py-[5px] rounded text-[0.78rem] font-medium">{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="relative py-[72px] px-6 text-center text-white scroll-mt-16 overflow-hidden" style={{ background: "#78350F" }}>
        <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 font-serif text-[20rem] leading-none text-[#FDE68A]/[0.03] pointer-events-none" aria-hidden>"</span>
        <div className="relative">
          <h2 className="text-white mb-2.5">Start With a Free 30-Minute Discovery Call</h2>
          <p className="text-white/65 max-w-[520px] mx-auto mb-[26px] font-serif italic text-[0.97rem]">
            Talk to a senior Sipayi advisor about what is holding your business back. If we are not the right fit,
            we will tell you honestly and point you in the right direction.
          </p>
          <LeadForm
            buttonLabel="Book Call →"
            buttonTheme="amber"
            service="Business Consultancy"
            selectLabel="Business Type"
            selectOptions={["Manufacturing", "Distribution / Trading", "Services", "Retail", "Construction", "Healthcare", "Other SMB"]}
            extraInput={{ name: "detail", placeholder: "Phone / Turnover" }}
            formClassName="max-w-[580px]"
          />
          <p className="mt-3.5 text-[0.75rem] text-white/40">📞 +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com</p>
          <p className="mt-[18px] text-[0.82rem] text-white/50 font-serif italic max-w-[460px] mx-auto">
            No commitment. No sales pitch. If we are the right fit, we will tell you clearly. If we are not, we will
            tell you that too.
          </p>
        </div>
      </section>

      {/* BACK LINK */}
      <div className="section-alt text-center py-7" style={{ background: "#FFFBEB" }}>
        <Link to="/#services" className="text-primary font-semibold text-[0.9rem] hover:text-[#92400E] transition-colors">
          ← Back to All Services | Sipayi Security &amp; Manpower
        </Link>
      </div>

      <StickyMobileCTA variant="amber" />
    </Layout>
  );
};

export default BusinessConsultancy;
