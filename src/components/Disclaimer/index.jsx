import { useState } from "react";
import ClosingIcon from "./ClosingIcon";
import Text from "../typo/Text";

export default function Disclaimer() {
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={
        (closed ? "hidden " : "flex") +
        " bg-primary p-8 items-center justify-center flex-col gap-4 relative md:py-16"
      }
    >
      <div
        onClick={() => setClosed(true)}
        className="hidden md:block cursor-pointer absolute top-2 right-2"
      >
        <ClosingIcon />
      </div>

      <div className="flex flex-col items-center">
        <Text>+++</Text>
        <Text className="uppercase text-center">
          Neuigkeiten aus der Backstube
        </Text>
        <Text>+++</Text>
      </div>

      <div className="max-w-xl text-center font-serif">
        <Text className="text-center">
          Vom 18.08.25 - 31.08.25 haben wir Sommerpause. Ab dem 02.08.25 sind
          wir zu unseren gewohnten Öffnungszeiten wieder für euch da.
        </Text>
      </div>
    </div>
  );
}
