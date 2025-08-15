import AccordionItem from "./AccordionItem";

export default function Accordion({
  className,
  items,
  setClickedItem,
  secondaryBorderColor,
}) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          setClickedItem={setClickedItem}
          name={item.name}
          disabled={item.disabled}
          secondaryBorderColor={secondaryBorderColor}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
}
