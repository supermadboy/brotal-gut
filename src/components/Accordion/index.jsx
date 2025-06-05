import AccordionItem from "./AccordionItem";

export default function Accordion({ className, items, setClickedItem }) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          setClickedItem={setClickedItem}
          name={item.name}
          disabled={item.disabled}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
}
