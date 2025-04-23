import { useState } from "react";
import SubTitle from "../typo/SubTitle";
import ClosingIcon from "./ClosingIcon";
import Text from "../typo/Text";

export default function Disclaimer() {
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={
        (closed ? "hidden " : "flex") +
        " bg-primary p-8 items-center justify-center flex-col gap-4 relative "
      }
    >
      <div
        onClick={() => setClosed(true)}
        className="hidden md:block cursor-pointer absolute top-2 right-2"
      >
        <ClosingIcon />
      </div>

      <Text className="uppercase text-center">
        ++ Neuigkeiten aus der Backstube ++
      </Text>

      <div className="max-w-xl text-center font-serif">
        <SubTitle>
          Auf Grund eines Betriebsausfluges bleibt die Backstube am Freitag den
          10. Oktober geschlossen
        </SubTitle>
      </div>
    </div>
  );
}
