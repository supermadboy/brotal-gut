import { useState } from "react";
import Accordion from "../Accordion";
import Picture from "../Picture";
import Text from "../typo/Text";

const availableBreads = [
  {
    name: "Hausbrot",
    tuesday: true,
    thursday: true,
    friday: true,
    description:
      "Unser Klassiker. Ein Weizenbrot mit 15 % Vollkornanteil (Roggen- und Weizenvollkorn). Zutaten: Weizenmehl 1050, Weizenvollkornmehl, Roggenvollkornmehl, Wasser, Weizensauerteig, Salz.",
  },
  {
    name: "Landbrot",
    tuesday: true,
    thursday: true,
    friday: true,
    description:
      "Helles, reines Weizenbrot. Zutaten: Weizenmehl 1050, Weizenmehl 550, Wasser, Weizensauerteig, Salz.",
  },
  {
    name: "Baguette",
    tuesday: true,
    thursday: true,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Weizenvollkornbrot",
    tuesday: true,
    thursday: true,
    friday: false,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Walnussbrot",
    tuesday: true,
    thursday: false,
    friday: false,
    description:
      "Ein Kastenbrot aus Weizen mit 15 % Vollkornanteil (Roggen- und Weizenvollkorn) und Walnüssen im Teig. Zutaten: Weizenmehl 1050, Weizenvollkornmehl, Roggenvollkornmehl, Wasser, Weizensauerteig, Walnüsse, Salz.",
  },
  {
    name: "Dinkelhirsebrot",
    tuesday: true,
    thursday: false,
    friday: false,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Rundes Roggenbrot",
    tuesday: true,
    thursday: false,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Simit",
    tuesday: true,
    thursday: false,
    friday: false,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Dinkelkastenbrot",
    tuesday: false,
    thursday: true,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Roggenkastenbrot",
    tuesday: false,
    thursday: true,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Zimtschnecken",
    tuesday: false,
    thursday: true,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Dinkelvollkornbrot",
    tuesday: false,
    thursday: false,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Porridgebrot",
    tuesday: false,
    thursday: false,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Dinkelseelen",
    tuesday: false,
    thursday: false,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
];

const BreadAvailable = ({ available }) => {
  return (
    <div
      className={
        (available ? "bg-secondary" : "bg-transparent") +
        " rounded-full w-4 h-4 mx-2 md:mx-12 md:w-8 md:h-8 flex-shrink-0"
      }
    />
  );
};

const breadToTitle = ({ name, tuesday, thursday, friday }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <Text className="flex-grow w-full md:text-smallest-desktop">{name}</Text>
      <BreadAvailable available={tuesday} />
      <BreadAvailable available={thursday} />
      <BreadAvailable available={friday} />
    </div>
  );
};

const items = [
  {
    title: (
      <div className="flex items-center gap-4 w-full font-serif">
        <div className="flex-grow w-full" />
        <Text className="text-center italic w-4 h-4 mx-2 md:mx-12 md:w-8 md:h-8 flex-shrink-0">
          Di
        </Text>
        <Text className="text-center italic w-4 h-4 mx-2 md:mx-12 md:w-8 md:h-8 flex-shrink-0">
          Do
        </Text>
        <Text className="text-center italic w-4 h-4 mx-2 md:mx-12 md:w-8 md:h-8 flex-shrink-0">
          Fr
        </Text>
      </div>
    ),
    disabled: true,
  },

  ...availableBreads.map((bread) => ({
    title: breadToTitle(bread),
    children: <Text>{bread.description}</Text>,
    name: bread.name,
  })),
];

export default function Breads() {
  const [clickedItem, setClickedItem] = useState("Dinkelvollkornbrot");

  return (
    <div
      id="breads"
      className="md:grid grid-cols-3 gap-8 scroll-mt-navbarHeight md:scroll-mt-navbarHeightDesktop md:mt-navbarHeightDesktop"
    >
      <Picture className="hidden md:block" src={`bread/${clickedItem}`} />

      <div className="col-span-2">
        <Accordion items={items} setClickedItem={setClickedItem} />
        <div className="border-t-2 border-solid border-black">
          <Text className="flex-grow w-full">
            & verschiedene saisonale Backwaren
          </Text>
        </div>

        <Text className="font-serif italic mt-10 md:text-smallest-desktop">
          Alle Produkte sind vorhanden solange der Vorrat reicht.
        </Text>
      </div>
    </div>
  );
}
