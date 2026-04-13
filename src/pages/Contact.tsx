import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
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
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> +91 98765 43210</li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> info@sipayisecurity.com</li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /> Bangalore, Karnataka, India</li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted h-48 flex items-center justify-center text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 mr-2" /> Map — Bangalore, Karnataka
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
