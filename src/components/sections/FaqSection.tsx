import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  tone?: "gold" | "teal" | "plum" | "rose" | "amber";
}

const TONE_CHEVRON: Record<string, string> = {
  teal: "[&>svg]:text-[#0F766E]",
  plum: "[&>svg]:text-[#7C3AED]",
  rose: "[&>svg]:text-[#BE185D]",
  amber: "[&>svg]:text-[#92400E]",
  gold: "[&>svg]:text-accent",
};

const FaqSection = ({ items, tone = "gold" }: FaqSectionProps) => (
  <Accordion
    type="single"
    collapsible
    defaultValue="item-0"
    className="mx-auto max-w-[800px] flex flex-col gap-2.5"
  >
    {items.map((item, index) => (
      <AccordionItem
        key={index}
        value={`item-${index}`}
        className="border border-border rounded-[10px] overflow-hidden bg-white"
      >
        <AccordionTrigger className={`px-5 py-4 text-left text-[0.92rem] font-semibold text-primary hover:bg-secondary hover:no-underline [&>svg]:h-5 [&>svg]:w-5 ${TONE_CHEVRON[tone]}`}>
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-4 text-[0.88rem] text-muted-foreground leading-relaxed">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqSection;
