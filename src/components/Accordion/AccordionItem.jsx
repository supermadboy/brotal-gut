import { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";

export default function AccordionItem({ title, children }) {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <div
        role="button"
        onClick={() => isOpen((a) => !a)}
        className={
          (children && "cursor-pointer") +
          " border-b-2 border-solid border-primary py-2 flex justify-between items-center"
        }
      >
        {title}
        <div className={children ?? "invisible"}>
          {open ? <Minus /> : <Plus />}
        </div>
      </div>
      <div className={(open ? "block" : "hidden") + " py-2"}>{children}</div>
    </div>
  );
}
