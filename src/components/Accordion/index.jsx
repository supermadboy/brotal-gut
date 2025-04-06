import AccordionItem from "./AccordionItem";

export default function Accordion({ className, items }) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <AccordionItem key={i} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
}
