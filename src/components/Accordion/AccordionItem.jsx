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
    <div
      className={
        (children && "cursor-pointer") +
        " first:border-t-0 border-t-2 border-solid border-primary"
      }
      onClick={() => {
        isOpen((a) => !a);
        setClickedItem(name);
      }}
    >
      <div
        role="button"
        className={"  py-2 flex justify-between items-center "}
      >
        {title}
        <div className={(children ?? "invisible") + " text-secondary"}>
          {open ? <Minus /> : <Plus />}
        </div>
      </div>
      <div
        className={(open ? "block" : "hidden") + " py-2 md:pl-1/5 font-serif"}
      >
        {children}
      </div>
    </div>
  );
}
