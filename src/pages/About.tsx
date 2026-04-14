import { Target, Eye, Award } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-3 opacity-90">Building trust through professional service since 2015</p>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Company Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Sipayi Security and Manpower Services has been a trusted provider of security, workforce, and business consultancy solutions across Karnataka and beyond. Founded with a commitment to quality and reliability, we serve corporate offices, industrial facilities, residential complexes, and event organizers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a team of over 500 trained professionals and a client base exceeding 100 organisations, we have established ourselves as a dependable partner for businesses of all sizes. Our focus on background-verified personnel, timely deployment, and transparent pricing sets us apart in the industry.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-alt section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To deliver high-quality security, manpower, and consultancy services that empower businesses to operate safely and efficiently, while providing dignified employment to our workforce.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <Eye className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become the most trusted name in integrated security and manpower solutions in South India, recognised for our professionalism, integrity, and commitment to client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold">Professional Experience</h2>
        </div>
        <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
          <li className="flex gap-3"><span className="font-bold text-primary text-lg">8+</span><span>Years of operational experience in security and manpower services</span></li>
          <li className="flex gap-3"><span className="font-bold text-primary text-lg">500+</span><span>Trained and background-verified security and manpower professionals</span></li>
          <li className="flex gap-3"><span className="font-bold text-primary text-lg">100+</span><span>Clients across corporate, industrial, residential, and event sectors</span></li>
          <li className="flex gap-3"><span className="font-bold text-primary text-lg">24/7</span><span>Round-the-clock support and emergency response capability</span></li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default About;
