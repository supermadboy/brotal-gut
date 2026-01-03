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
          Wir sind am Dreikönigstag (06.01.26) trotz des Feiertags zu unseren
          gewohnten Öffnungszeiten für Euch da!
        </Text>
      </div>
    </div>
  );
}
