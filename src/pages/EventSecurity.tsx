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
  { ico: "🎪", n: "500+", l: "Events Secured Across India" },
  { ico: "👥", n: "5,000+", l: "Attendee Events Managed" },
  { ico: "🧑‍💼", n: "1:1", l: "Dedicated Event Security Manager" },
  { ico: "⚡", n: "48hrs", l: "Emergency Deployment Available" },
];

const trustBar = [
  "✅ PSARA Licensed",
  "🧑‍💼 Event Security Manager on Every Job",
  "📋 Pre-Event Venue Walkthrough",
  "👑 VIP Close Protection",
  "🚶 Crowd Management",
  "🚨 Emergency Response Trained",
  "📝 Post-Event Report",
];

const fails = [
  "Generic guard deployment — no zone briefing, no escalation protocol, nobody in charge on the day.",
  "No pre-event walkthrough — guards see the venue for the first time on event day, same as the attendees.",
  "Under-staffed entry gates — queues build, crowd pressure increases, and the organiser is the last to know.",
  "No VIP separation plan — high-profile guests mixed with general admission, creating exposure and complaints.",
];
const failsBold = ["Generic guard deployment", "No pre-event walkthrough", "Under-staffed entry gates", "No VIP separation plan"];

const differentiators = [
  { di: "🗺️", title: "Pre-Event Venue Walkthrough", desc: "Every booking gets a walkthrough. Entry points, CCTV gaps, crowd pressure zones, and emergency exits — all mapped before event day." },
  { di: "📄", title: "Written Event Security Plan", desc: "A documented deployment map — guard zones, VIP protocols, emergency contacts — shared with your team at least 5 days before the event." },
  { di: "🧑‍💼", title: "Dedicated Event Security Manager", desc: "One person in charge throughout. On-site. Reachable directly by you. Making decisions in real time." },
  { di: "📋", title: "Post-Event Incident Report", desc: "A written report within 24 hours — what happened, what worked, and recommendations for next time." },
];

const eventTypes = [
  { ico: "🏢", title: "Corporate Events & Conferences", desc: "AGMs, leadership summits, product launches, shareholder events. Focus: access control, ID verification, executive floor security, press management, VIP arrival logistics." },
  { ico: "🎪", title: "Exhibitions & Trade Fairs", desc: "Large-scale expos, trade shows, B2B exhibitions. Focus: high-value display protection, controlled entry, exhibitor safety, crowd flow management across multiple halls." },
  { ico: "🎤", title: "Concerts & Music Events", desc: "Live performances, music festivals, ticketed outdoor events. Focus: crowd management, barrier control, stage perimeter, artist protection, emergency evacuation planning." },
  { ico: "🤝", title: "Government & Public Gatherings", desc: "Town halls, public meetings, civic events. Focus: perimeter management, access tiering, crowd flow at scale, coordination with local law enforcement." },
  { ico: "🥂", title: "Private & Social Functions", desc: "High-profile weddings, private parties, celebrity functions. Focus: discreet presence, guest list management, VIP entrance lanes, paparazzi boundary control." },
  { ico: "🏆", title: "Sports Events & Award Ceremonies", desc: "Corporate sports days, award nights, brand activations. Focus: venue perimeter, green room security, trophy and asset protection, media access management." },
];

const capabilities = [
  { n: "01", title: "Pre-Event Security Planning & Venue Walkthrough", desc: "Before a single guard is deployed, our Event Security Manager visits your venue. We map entry and exit points, identify crowd pressure zones, review CCTV coverage gaps, confirm emergency evacuation routes, and produce a written Event Security Plan — shared with your team at least 5 days before event day." },
  { n: "02", title: "Crowd Management & Access Control", desc: "Trained crowd management personnel at all entry gates — ticketing verification, bag checking, and structured attendee flow. Dedicated lanes for general admission, VIPs, media, and exhibitors. We identify and address pressure points before they escalate through real-time team communication and proactive barrier management." },
  { n: "03", title: "VIP & Executive Close Protection", desc: "Discreet, professional close protection for keynote speakers, C-suite executives, celebrities, and high-profile guests. Dedicated officer for each principal — managing arrival logistics, green room access, private exit routing, and media boundary enforcement. Coordinated separately from general event security to avoid conflict of priorities." },
  { n: "04", title: "Perimeter Security & Stage Protection", desc: "Controlled perimeter management for outdoor events, festival grounds, and performance venues. Stage perimeter teams prevent unauthorised access while maintaining clear audience sightlines. For concerts and large performances, we coordinate with venue staff on barrier setup, crowd separation zones, and emergency access lanes for medical teams." },
  { n: "05", title: "Emergency Response Coordination", desc: "Every Sipayi event team includes trained first-responders briefed on your venue's medical support plan, nearest hospital, and local emergency services contacts. In any incident, our on-site Event Security Manager activates the pre-agreed emergency protocol immediately — no waiting for instructions from a remote control room." },
  { n: "06", title: "Post-Event Security & Venue Clearance", desc: "Security continues after the last guest leaves. Our post-event teams manage attendee exit safely, protect exhibitor assets and equipment during breakdown, and ensure restricted areas remain secure until venue handover. A written incident report is delivered to the organiser within 24 hours of event conclusion." },
];

const esmFeatures = [
  { ico: "🎖️", title: "Ex-Defence & Police Professionals", desc: "Manager roles filled by professionals with military, police, or senior security agency backgrounds." },
  { ico: "📞", title: "Direct Mobile Contact Throughout", desc: "One number. One person. Reachable by you at any point during the event — no call centres." },
  { ico: "⚡", title: "On-Site Emergency Authority", desc: "Authority to activate emergency protocols without waiting for remote approval — seconds matter in a crowd incident." },
  { ico: "📝", title: "24-Hour Post-Event Report", desc: "Formal incident log, what worked, what could improve — delivered in writing within 24 hours of event close." },
];

const esmQuotes = [
  { q: "We ran a 3,000-attendee IT expo in Hyderabad. Sipayi's Event Security Manager did a walkthrough 10 days before and gave us a written plan that covered every scenario we had not even thought of. On event day, entry queues moved smoothly and we had zero incidents. The post-event report was thorough and useful for next year.", name: "Vikram Rao, Conference Director", attr: "IT Trade Exhibition, Hyderabad" },
  { q: "Our annual leadership summit in Bengaluru had four international keynote speakers. Sipayi handled VIP arrivals, press management, and stage perimeter without a single issue. The guards were discreet, professional, and fully briefed — our guests actually complimented the venue experience.", name: "Priyanka Nair, HR Director", attr: "Leadership Summit, Bengaluru" },
];

const timeline = [
  { n: "01", tag: "Day 1", title: "Event Brief", desc: "Share event type, date, venue, expected attendance, VIP needs. We send a quote within 4 hours." },
  { n: "02", tag: "Day 2–4", title: "Venue Walkthrough", desc: "Event Security Manager visits the venue, maps zones, identifies risks, confirms emergency routes." },
  { n: "03", tag: "5 Days Before", title: "Security Plan Shared", desc: "Written deployment plan — guard map, zone assignments, VIP protocols, emergency contacts — delivered to your team." },
  { n: "04", tag: "Event Day + 24hrs", title: "Live + Report", desc: "Full team on-site. Event Security Manager throughout. Post-event report delivered within 24 hours." },
];

const faqs = [
  { question: "What does professional event security include?", answer: "Professional event security includes pre-event planning, venue risk assessment, crowd management, access control, VIP protection, CCTV coordination, emergency response, and post-event clearance — all managed by a dedicated Event Security Manager. Sipayi covers all of these as standard on every major event booking, not as add-ons." },
  { question: "How many security guards do I need for my event?", answer: "As a general guide: events with up to 500 attendees typically need 6–12 guards; 500–2,000 attendees need 12–30 guards; large-scale events with 2,000+ attendees require a custom deployment plan. The right number also depends on venue layout, VIP requirements, number of entry gates, and whether indoor or outdoor. Sipayi provides a free estimate within 4 hours of your event brief." },
  { question: "How far in advance should I book event security?", answer: "We recommend booking at least 2 weeks before your event for a full team deployment with pre-event planning and a venue walkthrough. For urgent bookings in Bengaluru, Hyderabad, Mumbai, Chennai, and Pune, Sipayi offers 48-hour emergency deployment. Earlier bookings benefit from a more thorough security plan and better guard selection for your event profile." },
  { question: "What is the difference between crowd control and crowd management?", answer: "Crowd management is proactive — planning and preparing for crowd movement before an event begins, through entry lane design, barrier placement, and guard positioning. Crowd control is reactive — managing a crowd once a problem has already developed. Sipayi focuses heavily on crowd management planning before event day, which means crowd control situations rarely arise at our events." },
  { question: "Do you provide VIP security and close protection at events?", answer: "Yes. Sipayi provides professional VIP close protection for keynote speakers, executives, celebrities, and high-profile guests at corporate and public events. Our VIP security team manages arrival logistics, green room access, private exit routes, and media boundary enforcement — coordinated separately from general event security and managed by a dedicated officer per principal." },
  { question: "Can Sipayi handle events outside major metro cities?", answer: "Yes. Sipayi deploys event security teams across Bengaluru, Hyderabad, Mumbai, Chennai, Pune, Delhi NCR, Ahmedabad, Coimbatore, and Kochi. For events in Tier-2 cities or special venues, contact us at least 3 weeks in advance to confirm availability, travel logistics, and deployment timelines." },
];

const cities = [
  "Event Security Bangalore", "Corporate Event Security Mumbai", "Exhibition Security Hyderabad",
  "Event Guards Chennai", "Crowd Management Pune", "VIP Protection Delhi NCR",
  "Event Security Ahmedabad", "Conference Security Coimbatore", "PSARA Event Security India",
];

const headerNav = {
  items: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/#services" },
    { label: "Capabilities", to: { hash: "#capabilities" } },
    { label: "FAQ", to: { hash: "#faq" } },
  ],
  ctaLabel: "Book Now",
  ctaTo: { hash: "#contact" },
};

const footerConfig = {
  blurb:
    "PSARA-licensed event security, corporate security, residential security, and manpower staffing across 15+ cities in India since 2015.",
  servicesTitle: "Event Security",
  services: [
    "Corporate Events",
    "Exhibitions & Trade Fairs",
    "Concerts & Music Events",
    "VIP Protection",
    "Crowd Management",
    "Private Functions",
  ],
  thirdColTitle: "Other Services",
  thirdColTo: "/#services",
  industries: [
    "Corporate Security",
    "Residential Security",
    "Industrial Security",
    "Manpower Staffing",
    "Security Consultancy",
  ],
  bottomTagline: "PSARA Licensed Event Security Agency | India",
};

const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1100px] px-6 ${className}`}>{children}</div>
);

const renderBold = (text: string, bold: string) => {
  const idx = text.indexOf(bold);
  if (idx !== 0) return text;
  return (
    <>
      <strong className="text-foreground font-semibold">{bold}</strong>
      {text.slice(bold.length)}
    </>
  );
};

const EventSecurity = () => {
  usePageMeta(
    "Event Security Services India | Crowd Management & VIP Protection | Sipayi",
    "Sipayi provides trained event security guards for corporate events, exhibitions, concerts & public gatherings across India. PSARA licensed. Crowd management. VIP protection. Book now.",
  );

  return (
    <Layout nav={headerNav} footer={footerConfig}>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/#services" },
          { label: "Event Security Services" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute top-0 inset-x-0 h-1.5" style={{ background: "linear-gradient(90deg,#D4A017,#8B1A2A,#D4A017)" }} />
        <div className="mx-auto max-w-[1100px] px-6 pt-[76px] pb-[68px] grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded bg-accent/20 border border-accent text-accent">🛡️ PSARA Licensed</span>
              <span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded bg-[#8B1A2A]/25 border border-[#c0392b] text-[#e57373]">🎯 Dedicated Event Security Manager</span>
              <span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded bg-white/[0.08] border border-white/20 text-white/80">All-India Coverage</span>
            </div>
            <h1 className="text-white mb-4">
              Event Security Services —{" "}
              <span className="text-accent">Professional Crowd Management &amp; VIP Protection</span>{" "}
              for Every Event Across India
            </h1>
            <p className="text-white/[0.72] text-[0.97rem] mb-2">
              A security failure at a live event can undo months of planning in minutes. Sipayi deploys
              trained event security guards, crowd management specialists, and a dedicated Event Security
              Manager — so every guest is safe and every moment goes as planned.
            </p>
            <div className="bg-accent/[0.12] border border-accent/30 rounded-md px-4 py-2.5 mb-[26px]">
              <p className="text-[0.82rem] text-white/80 m-0">
                ⏱️ <strong className="text-accent">Book at least 2 weeks before your event</strong> for full
                pre-event planning + venue walkthrough. <strong className="text-accent">48-hour emergency
                deployment</strong> available in major cities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-accent text-primary px-[26px] py-[13px] rounded-md font-bold text-[0.92rem] inline-block hover:-translate-y-0.5 transition-transform">Book Event Security →</a>
              <a href={PHONE_TEL} className="border-2 border-white/30 text-white px-6 py-[11px] rounded-md font-semibold text-[0.92rem] inline-block hover:border-accent hover:text-accent transition-colors">📞 Call Now</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {stats.map((s) => (
              <div key={s.l} className="bg-white/[0.06] border border-white/10 border-l-[3px] border-l-accent rounded-md px-5 py-4 flex items-center gap-4">
                <div className="text-[1.6rem] shrink-0">{s.ico}</div>
                <div>
                  <div className="font-heading text-[1.4rem] font-extrabold text-accent leading-none">{s.n}</div>
                  <div className="text-[0.74rem] text-white/60 mt-0.5">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-primary/95 border-b-2 border-accent/20 py-3.5 px-6">
        <div className="mx-auto max-w-[1100px] flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
          {trustBar.map((t) => (
            <span key={t} className="text-white/75 text-[0.78rem] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* WHY PLANS FAIL */}
      <section className="py-[68px]">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                eyebrow="The Risk You Can't Afford"
                title="Why Most Event Security Plans Fail — And How to Avoid It"
                align="left"
              />
              <div className="space-y-3.5 text-[0.95rem] text-muted-foreground">
                <p>
                  The most common event security failures in India have nothing to do with the guards on
                  the day. They happen weeks before — in the planning stage.{" "}
                  <strong className="text-primary">Under-staffed entry gates create queues that turn into
                  crowd pressure. Untrained personnel mishandle gate-crashers in full view of guests. VIP
                  lanes get blocked by general attendee overflow. Emergency exits are never communicated to
                  the security team.</strong>
                </p>
                <p>
                  Professional event security is not about placing guards at a venue and hoping for the best.
                  It requires a pre-event site walkthrough, a documented deployment plan that maps each guard
                  to a specific zone, and a single point of contact — an Event Security Manager — who
                  coordinates everything in real time.
                </p>
              </div>
              <div className="flex flex-col gap-3.5 mt-5">
                {fails.map((f, i) => (
                  <div key={i} className="flex gap-3 items-start p-3.5 bg-secondary rounded-lg border-l-[3px] border-[#C0392B]">
                    <div className="text-[1.2rem] shrink-0 mt-0.5">❌</div>
                    <p className="text-[0.86rem] text-foreground m-0">{renderBold(f, failsBold[i])}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-[30px] border-t-4 border-accent">
              <h3 className="text-accent text-base mb-4">✅ The Sipayi Difference</h3>
              {differentiators.map((d, i) => (
                <div key={d.title} className={`flex gap-2.5 py-3 ${i < differentiators.length - 1 ? "border-b border-white/[0.08]" : ""}`}>
                  <div className="text-[1.1rem] shrink-0">{d.di}</div>
                  <div>
                    <h4 className="text-white text-[0.86rem] font-semibold mb-0.5">{d.title}</h4>
                    <p className="text-[0.78rem] text-white/55 m-0">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* EVENT TYPES */}
      <section id="event-types" className="py-[68px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Events We Secure"
            title="Corporate to Concerts, Exhibitions to Private Functions — All Across India"
            subtitle="Each event type has a different crowd profile, different risk level, and a completely different security brief. Our teams are trained specifically for each."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventTypes.map((e) => (
              <div key={e.title} className="relative overflow-hidden bg-white border border-border border-t-[3px] border-t-accent rounded-[10px] px-[18px] py-[22px] transition-all hover:shadow-[0_8px_28px_rgba(11,29,58,0.1)] hover:-translate-y-[3px]">
                <div className="text-[2rem] mb-2.5">{e.ico}</div>
                <h3 className="text-primary text-[0.95rem] mb-1.5">{e.title}</h3>
                <p className="text-[0.82rem] text-muted-foreground m-0">{e.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="What We Bring"
            title="Our Event Security Capabilities — End to End"
            subtitle="From the venue walkthrough two weeks out to the post-event report 24 hours after — here is what Sipayi handles at every event."
          />
          <div className="flex flex-col">
            {capabilities.map((c, i) => (
              <div key={c.n} className={`grid grid-cols-[52px_1fr] gap-5 py-6 items-start ${i < capabilities.length - 1 ? "border-b border-border" : ""}`}>
                <div className="font-heading text-[1.8rem] font-extrabold text-accent/25 leading-none pt-1">{c.n}</div>
                <div>
                  <h3 className="text-primary text-base mb-1.5">{c.title}</h3>
                  <p className="text-[0.87rem] text-muted-foreground m-0">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ESM SECTION */}
      <section id="esm" className="relative bg-primary py-[68px] scroll-mt-16">
        <div className="absolute top-0 inset-x-0 h-1" style={{ background: "linear-gradient(90deg,transparent,#D4A017,transparent)" }} />
        <div className="mx-auto max-w-[1100px] px-6 grid lg:grid-cols-2 gap-12 lg:gap-[52px] items-center">
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-accent/80 mb-2">Our Differentiator</p>
            <h2 className="text-white mb-4">The Sipayi Event Security Manager — Your Single Point of Accountability</h2>
            <p className="text-white/70 text-[0.96rem] mb-3.5">
              Most event security companies deploy a team of guards and leave you to coordinate them. That
              works until something goes wrong — then nobody knows who to call.
            </p>
            <p className="text-white/70 text-[0.96rem]">
              <strong className="text-accent">Sipayi deploys a dedicated Event Security Manager with every
              assignment of 100+ attendees.</strong> This person is your single point of contact for the
              entire event. They manage the guard team, coordinate with venue staff, handle incidents in real
              time, and report directly to you throughout.
            </p>
            <div className="flex flex-col gap-3.5 mt-6">
              {esmFeatures.map((f) => (
                <div key={f.title} className="flex gap-3.5 items-start">
                  <div className="w-[38px] h-[38px] rounded-md bg-accent/15 border border-accent/30 flex items-center justify-center text-[0.95rem] shrink-0">{f.ico}</div>
                  <div>
                    <h4 className="text-white text-[0.9rem] font-semibold mb-0.5">{f.title}</h4>
                    <p className="text-[0.82rem] text-white/55 m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {esmQuotes.map((q) => (
              <div key={q.name} className="bg-white/5 border border-white/10 rounded-xl p-7">
                <p className="text-[0.92rem] text-white/75 italic mb-4 leading-relaxed">"{q.q}"</p>
                <p className="text-[0.8rem] text-white/40 m-0">
                  <strong className="text-accent">{q.name}</strong> — {q.attr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section id="process" className="py-[68px] section-alt scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Booking Process"
            title="From Enquiry to Event Day — 4 Clear Steps"
            subtitle="We keep the booking process simple so you can focus on the event. Most bookings are confirmed and planned within 5 days."
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 mt-5">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent to-accent/20" aria-hidden />
            {timeline.map((t) => (
              <div key={t.n} className="relative z-[1] flex flex-col items-center text-center px-3">
                <div className="w-14 h-14 rounded-full bg-primary border-[3px] border-accent flex items-center justify-center font-heading text-[1.1rem] font-extrabold text-accent mb-4 shrink-0">{t.n}</div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-accent mb-1.5">{t.tag}</div>
                <h4 className="text-primary text-[0.88rem] mb-1.5">{t.title}</h4>
                <p className="text-[0.8rem] text-muted-foreground m-0">{t.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[68px] scroll-mt-16">
        <Wrap>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions — Event Security Services"
            subtitle="Questions from event planners, HR teams, and conference organisers before booking."
          />
          <FaqSection items={faqs} />
        </Wrap>
      </section>

      {/* CITIES */}
      <div className="bg-primary py-8 px-6 text-center">
        <h3 className="font-heading text-white/80 text-[0.9rem] mb-3">📍 Event Security Available Across India</h3>
        <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
          {cities.map((c) => (
            <span key={c} className="bg-white/[0.07] border border-white/15 text-white/75 px-[14px] py-1.5 rounded-full text-[0.78rem] font-medium">{c}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section id="contact" className="relative py-[72px] px-6 text-center text-primary-foreground scroll-mt-16" style={{ background: "linear-gradient(135deg,#0B1D3A 0%,#1A1A2E 60%,#0B1D3A 100%)" }}>
        <div className="absolute top-0 inset-x-0 h-1" style={{ background: "linear-gradient(90deg,#D4A017,#c0392b,#D4A017)" }} />
        <h2 className="text-white mb-2.5">Your Event Is Too Important to Leave Security to Chance</h2>
        <p className="text-white/[0.68] max-w-[500px] mx-auto mb-2.5 text-[0.97rem]">
          Share your event details and we will respond within 2 hours with a staffing estimate and
          availability confirmation.
        </p>
        <div className="inline-block bg-accent/15 border border-accent/35 rounded-md px-[18px] py-2 mb-7 text-[0.82rem] text-accent font-semibold">
          ⏱️ Book at least 2 weeks before your event for full pre-event planning
        </div>
        <LeadForm
          buttonLabel="Book Now →"
          service="Event Security"
          selectLabel="Event Type"
          selectOptions={["Corporate Event", "Exhibition / Trade Fair", "Concert / Music Event", "Government Gathering", "Private Function", "Sports / Awards", "Other"]}
          extraInput={{ name: "phone", placeholder: "Phone / Event Date" }}
          formClassName="max-w-[560px]"
        />
        <p className="mt-3 text-[0.75rem] text-white/45">
          📞 +91 96066 96105 &nbsp;|&nbsp; 💬 WhatsApp: +91 96066 96105 &nbsp;|&nbsp; ✉ info@sipayisecurity.com
        </p>
        <p className="mt-[18px] text-[0.82rem] text-white/50">
          ⚡ <strong className="text-[#e57373]">Last-minute event?</strong> Call us directly — 48-hour
          emergency deployment available in major cities.
        </p>
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

export default EventSecurity;
