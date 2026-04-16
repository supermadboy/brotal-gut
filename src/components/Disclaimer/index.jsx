import { useState, useEffect } from "react";
import ClosingIcon from "./ClosingIcon";
import Text from "../typo/Text";

export default function Disclaimer() {
  const [closed, setClosed] = useState(true);
  const [disclaimerText, setDisclaimerText] = useState(undefined);

  useEffect(() => {
    const fetchDisclaimer = async () => {
      try {
        const response = await fetch("/api/disclaimer");
        const { text } = await response.json();

        if (text) {
          setDisclaimerText(text);
          setClosed(false);
        }
      } catch (error) {
        console.error("Error fetching disclaimer:", error);
      }
    };

    fetchDisclaimer();
  }, []);

  if (!disclaimerText) {
    return null;
  }

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
        <Text className="text-center">{disclaimerText}</Text>
      </div>
    </div>
  );
}
