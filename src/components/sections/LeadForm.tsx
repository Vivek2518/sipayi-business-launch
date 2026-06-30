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
  selectLabel?: string;
  selectOptions?: string[];
  /** Optional extra text input rendered after the select (e.g. phone / event date). */
  extraInput?: { name: string; placeholder: string };
  formClassName?: string;
  /** "dark" = translucent inputs with white text (for dark/ink CTA backgrounds). */
  inputTheme?: "light" | "dark";
  /** Submit button colour. */
  buttonTheme?: "gold" | "navy" | "amber";
}

const LeadForm = ({
  buttonLabel = "Get Free Quote →",
  service,
  selectLabel = "Select City",
  selectOptions = DEFAULT_CITIES,
  extraInput,
  formClassName = "max-w-[520px]",
  inputTheme = "light",
  buttonTheme = "gold",
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
        title: `Please enter your name and select ${selectLabel.replace(/^Select |^/, "a ").toLowerCase()}`,
        variant: "destructive",
      });
      return;
    }
    const extra: Record<string, string> = {};
    if (extraInput) {
      extra[extraInput.name] = String(data.get(extraInput.name) || "").trim();
    }
    setSubmitting(true);
    try {
      await submitLead({ name, city, service, extra });
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
            ? "The form isn't connected yet — please call us instead."
            : "Something went wrong. Please try again or call us.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    inputTheme === "dark"
      ? "flex-1 min-w-[140px] px-[14px] py-3 rounded text-[0.88rem] bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30"
      : "flex-1 min-w-[140px] px-4 py-[13px] rounded-md border-0 text-[0.9rem] text-foreground";

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
        className={inputClass}
      />
      <select
        name="city"
        aria-label={selectLabel}
        defaultValue=""
        className={inputClass}
      >
        <option value="" disabled>
          {selectLabel}
        </option>
        {selectOptions.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      {extraInput && (
        <input
          type="text"
          name={extraInput.name}
          aria-label={extraInput.placeholder}
          placeholder={extraInput.placeholder}
          className={inputClass}
        />
      )}
      <button
        type="submit"
        disabled={submitting}
        className={`${buttonTheme === "navy" ? "bg-primary text-white" : buttonTheme === "amber" ? "bg-[#FDE68A] text-[#78350F]" : "bg-accent text-primary"} px-[26px] py-[13px] rounded-md border-0 font-bold text-[0.9rem] font-heading cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {submitting ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
};

export default LeadForm;
