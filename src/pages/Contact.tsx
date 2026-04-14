import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const emptyForm: ContactForm = { name: "", phone: "", email: "", service: "", message: "" };

const submitContactToGoogleSheet = async (data: ContactForm) => {
  const endpoint = (import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL as string | undefined)?.trim();
  if (!endpoint) {
    throw new Error("Missing VITE_GOOGLE_SHEETS_WEB_APP_URL");
  }

  const payload = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    service: data.service,
    message: data.message.trim(),
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href,
  };

  const formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    formData.append(key, value);
  }

  await fetch(endpoint, { method: "POST", body: formData, mode: "no-cors" });
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      await submitContactToGoogleSheet(form);
      toast({ title: "Message Sent", description: "Thank you! We will get back to you within 24 hours." });
      setForm(emptyForm);
      setErrors({});
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message";
      toast({
        title: "Send Failed",
        description:
          message === "Missing VITE_GOOGLE_SHEETS_WEB_APP_URL"
            ? "Google Sheet is not connected yet. Please configure the Google Sheets endpoint."
            : "Something went wrong while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (key: string) => ({
    value: form[key as keyof typeof form],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 opacity-90">Get in touch for a free consultation</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
              { key: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-sm font-medium mb-1">{f.label} *</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  {...field(f.key)}
                />
                {errors[f.key] && <p className="text-destructive text-xs mt-1">{errors[f.key]}</p>}
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">Service Required *</label>
              <select
                className="w-full border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                {...field("service")}
              >
                <option value="">Select a service</option>
                <option>Security Services</option>
                <option>Manpower Supply</option>
                <option>Consultancy Services</option>
                <option>Other</option>
              </select>
              {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                {...field("message")}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <ul className="space-y-4 text-sm text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="whitespace-nowrap">080-41163369, +91 96066 96105</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>info@sipayisecurity.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>#8/2,1 8/2, Ist FLOOR, ABOVE NARAYANA KITCHEN, NEAR DOMLAR FLY OVER RING ROAD DOMLUR LAYOUT, BENGALURU 560071</span>
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all" aria-label="WhatsApp">
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="border rounded-lg overflow-hidden h-[280px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1328477610996!2d77.63660387574886!3d12.96335961502444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13f064436577%3A0x633d74c760a5e8c0!2sDomlur%20Flyover!5e0!3m2!1sen!2sin!4v1712997500000!5m2!1sen!2sin&disableDefaultUI=1&gestureHandling=none"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sipayi Security Location"
                className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=%238%2F2%2C1%208%2F2%2C%20Ist%20FLOOR%2C%20ABOVE%20NARAYANA%20KITCHEN%2C%20NEAR%20DOMLAR%20FLY%20OVER%20RING%20ROAD%20DOMLUR%20LAYOUT%2C%20BENGALURU%20560071"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open in Google Maps"
              ></a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
