import { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";

export default function AccordionItem({
  title,
  children,
  setClickedItem,
  name,
  disabled = false,
  secondaryBorderColor = false,
}) {
  const [open, isOpen] = useState(false);

  return (
    <div
      className={
        (secondaryBorderColor ? "border-primary" : "border-black") +
        " first:border-t-0 border-t-2 border-solid "
      }
    >
      <div
        role="button"
        className={
          (children && "cursor-pointer") +
          " flex justify-between items-center md:py-1"
        }
        onClick={() => {
          if (disabled) {
            return;
          }
          isOpen((a) => !a);
          setClickedItem(name);
        }}
        onMouseEnter={() => {
          if (disabled) {
            return;
          }

          setClickedItem(name);
        }}
      >
        {title}
        <div className={(children ?? "invisible") + " text-secondary"}>
          {open ? <Minus /> : <Plus />}
        </div>
      </div>
      <div
        className={
          (open ? "block" : "hidden") +
          " mb-2 py-2 md:pl-1/3 " +
          (!secondaryBorderColor ? "font-serif" : "font-sans")
        }
      >
        {children}
      </div>
    </div>
  );
}
