import { Shield, Users, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";

const sections = [
  {
    icon: Shield,
    title: "Security Services",
    items: [
      { name: "Corporate Security", desc: "Trained guards for office buildings, IT parks, and business establishments with 24/7 monitoring." },
      { name: "Residential Security", desc: "Reliable security for gated communities, apartments, and individual residences." },
      { name: "Event Security", desc: "Professional crowd management and security for corporate events, exhibitions, and public gatherings." },
      { name: "Industrial Security", desc: "Perimeter protection, access control, and surveillance for factories, warehouses, and construction sites." },
    ],
  },
  {
    icon: Users,
    title: "Manpower Supply",
    items: [
      { name: "Skilled Labour", desc: "Electricians, plumbers, welders, machine operators, and other technically skilled workers." },
      { name: "Unskilled Labour", desc: "General helpers, loading/unloading workers, housekeeping, and cleaning staff." },
      { name: "Facility Management Staff", desc: "Receptionists, office assistants, pantry staff, and maintenance crew for your workplace." },
    ],
  },
  {
    icon: Briefcase,
    title: "Consultancy Services",
    items: [
      { name: "Business Consultancy", desc: "Strategic planning, operational improvement, and growth advisory for small and medium businesses." },
      { name: "Staffing Consultancy", desc: "End-to-end recruitment solutions including sourcing, screening, and onboarding of candidates." },
      { name: "Compliance & Licensing", desc: "Guidance on labour law compliance, contract management, and statutory licensing requirements." },
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="mt-3 opacity-90">Comprehensive security, manpower, and consultancy solutions</p>
      </div>
    </section>

    {sections.map((s, i) => (
      <section key={s.title} className={`section-padding ${i % 2 === 1 ? "section-alt" : ""}`}>
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <s.icon className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">{s.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {s.items.map((item) => (
              <div key={item.name} className="border rounded-lg p-6 bg-background">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
