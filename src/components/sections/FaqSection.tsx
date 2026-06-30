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
}

const FaqSection = ({ items }: FaqSectionProps) => (
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
        <AccordionTrigger className="px-5 py-4 text-left text-[0.92rem] font-semibold text-primary hover:bg-secondary hover:no-underline [&>svg]:text-accent [&>svg]:h-5 [&>svg]:w-5">
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
