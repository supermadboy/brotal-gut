import { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";

export default function AccordionItem({
  title,
  children,
  setClickedItem,
  name,
}) {
  const [open, isOpen] = useState(false);

  return (
    <div className={" first:border-t-0 border-t-2 border-solid border-black"}>
      <div
        role="button"
        className={
          (children && "cursor-pointer") +
          " flex justify-between items-center md:py-1"
        }
        onClick={() => {
          isOpen((a) => !a);
          setClickedItem(name);
        }}
        onMouseEnter={() => {
          setClickedItem(name);
        }}
      >
        {title}
        <div className={(children ?? "invisible") + " text-secondary"}>
          {open ? <Minus /> : <Plus />}
        </div>
      </div>
      <div
        className={(open ? "block" : "hidden") + " py-2 md:pl-1/3 font-serif"}
      >
        {children}
      </div>
    </div>
  );
}
