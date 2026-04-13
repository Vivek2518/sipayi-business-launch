import { Link } from "react-router-dom";
import { Shield, Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: Shield, title: "Security Services", desc: "Trained security personnel for corporate offices, residential complexes, events, and industrial facilities." },
  { icon: Users, title: "Manpower Supply", desc: "Skilled and unskilled workforce deployment for construction, warehousing, manufacturing, and facility management." },
  { icon: Briefcase, title: "Consultancy Services", desc: "Expert business and staffing consultancy to streamline your hiring, compliance, and operational processes." },
];

const reasons = [
  "Experienced & Verified Team",
  "Trusted by 100+ Businesses",
  "Quick Deployment in 24–48 Hours",
  "Affordable & Transparent Pricing",
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient text-primary-foreground section-padding">
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Reliable Security, Manpower & Consultancy Services
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Professional solutions tailored for your business needs
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Get a Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <s.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-alt section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r} className="flex items-center gap-3 bg-background rounded-lg p-5 shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-gradient text-primary-foreground section-padding">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
        <p className="opacity-90 mb-8">Contact us today for a free consultation and customized service plan.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
