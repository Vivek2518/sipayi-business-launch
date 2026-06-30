import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/lead";

const DEFAULT_CITIES = [
  "Bengaluru",
  "Mumbai",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Delhi NCR",
  "Ahmedabad",
  "Coimbatore",
  "Other",
];

interface LeadFormProps {
  buttonLabel?: string;
  service?: string;
  cities?: string[];
  formClassName?: string;
}

const LeadForm = ({
  buttonLabel = "Get Free Quote →",
  service,
  cities = DEFAULT_CITIES,
  formClassName = "max-w-[520px]",
}: LeadFormProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const city = String(data.get("city") || "");
    if (!name || !city) {
      toast({
        title: "Please enter your name and select a city",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      await submitLead({ name, city, service });
      toast({
        title: "Request received",
        description: "Our team will get back to you within 2 hours.",
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send";
      toast({
        title: "Couldn't send your request",
        description:
          message === "Missing VITE_GOOGLE_SHEETS_WEB_APP_URL"
            ? "The quote form isn't connected yet — please call us instead."
            : "Something went wrong. Please try again or call us.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-2.5 justify-center flex-wrap mx-auto ${formClassName}`}
    >
      <input
        type="text"
        name="name"
        aria-label="Your name"
        placeholder="Your Name"
        className="flex-1 min-w-[140px] px-4 py-[13px] rounded-md border-0 text-[0.9rem] text-foreground"
      />
      <select
        name="city"
        aria-label="Select city"
        defaultValue=""
        className="flex-1 min-w-[140px] px-4 py-[13px] rounded-md border-0 text-[0.9rem] text-foreground"
      >
        <option value="" disabled>
          Select City
        </option>
        {cities.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <button
        type="submit"
        disabled={submitting}
        className="bg-accent text-primary px-[26px] py-[13px] rounded-md border-0 font-bold text-[0.9rem] font-heading cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
};

export default LeadForm;
