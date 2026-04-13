import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of security services do you provide?",
    a: "We offer a comprehensive range of security services including corporate security, residential security, event security, and industrial facility protection. All our personnel are background-verified and undergo professional training before deployment.",
  },
  {
    q: "How quickly can you deploy manpower?",
    a: "We maintain a ready pool of trained professionals and can typically deploy personnel within 24 to 48 hours of confirming your requirements. For urgent needs, we offer same-day deployment options based on availability.",
  },
  {
    q: "Do you provide services outside Bangalore?",
    a: "Yes, while our headquarters is in Bangalore, we provide services across Karnataka and neighbouring states. Contact us with your specific location requirements and we will confirm availability.",
  },
  {
    q: "What is the minimum contract duration?",
    a: "We offer flexible contract options starting from a minimum of one month. For long-term partnerships, we provide discounted rates and dedicated account management to ensure consistent service quality.",
  },
  {
    q: "How do you ensure the quality and reliability of your staff?",
    a: "Every member of our team undergoes thorough background verification, skill assessment, and professional training. We conduct regular performance reviews and maintain strict attendance and discipline standards. Clients receive a dedicated supervisor as their single point of contact.",
  },
];

const FAQ = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-3 opacity-90">Find answers to common questions about our services</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
