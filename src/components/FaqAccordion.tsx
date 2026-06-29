import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqAccordion = ({ items }: { items: { q: string; a: string }[] }) => (
  <Accordion type="single" collapsible className="w-full">
    {items.map((it, i) => (
      <AccordionItem key={i} value={`item-${i}`}>
        <AccordionTrigger className="text-left font-semibold text-primary">{it.q}</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
export default FaqAccordion;