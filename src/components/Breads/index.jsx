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

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Unser Klassiker: Ein Weizenbrot mit kleinem Roggenanteil. Bestehend
          aus Weizenmehl 1050 und mit 15 % Vollkornanteil (Roggen- und
          Weizenvollkorn). Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Weizenmehl 1050, Weizenvollkornmehl, Roggenvollkornmehl,
          Wasser, Weizensauerteig, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Landbrot",
    tuesday: true,
    thursday: true,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein helles, reines Weizenbrot. Hergestellt mit 100 %
          HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Weizenmehl 1050, Weizenmehl 550, Wasser, Weizensauerteig,
          Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Baguette",
    tuesday: true,
    thursday: true,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein Weizenbaguette mit T65 Mehl und 0,1 % Hefeanteil. Hergestellt mit
          Getreide aus Frankreich von Moulin Bourgeois
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: T65 Mehl, Wasser, Weizensauerteig, Hefe, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Weizenvollkornbrot",
    tuesday: true,
    thursday: true,
    friday: false,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein körniges, kräftiges Weizenvollkornbrot. Erhältlich im Kasten und
          als freigeschobener Laib. Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Weizenvollkornmehl, Weizenschrot, Sonnenblumenkernen, Wasser,
          Weizensauerteig, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Walnussbrot",
    tuesday: true,
    thursday: false,
    friday: false,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein Weizenbrot mit kleinem Roggenanteil und Walnusskernen im Kasten.
          Bestehend aus Weizenmehl 1050 und mit 15 % Vollkornanteil (Roggen- und
          Weizenvollkorn). Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Weizenmehl 1050, Weizenvollkornmehl, Roggenvollkornmehl,
          Walnusskerne, Wasser, Weizensauerteig, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Dinkelhirsebrot",
    tuesday: true,
    thursday: false,
    friday: false,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein feinporiges, saftiges, rundes Dinkelbrot mit 40 % Vollkornmehl und
          gekochten Hirsekörner im Teig und Hirseflocken auf der Kruste.
          Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Ur-Dinkelmehl 1050 (Oberkulmer Rotkorn),
          Ur-Dinkelvollkornmehl (Oberkulmer Rotkorn), Hirsekörner, Hirseflocken,
          Wasser, Dinkelsauerteig, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Rundes Roggenbrot",
    tuesday: true,
    thursday: false,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein feinporiges, helles, rundes Roggenbrot.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Roggenmehl 1150, Wasser, Roggensauerteig, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Simit",
    tuesday: true,
    thursday: false,
    friday: false,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein aus der türkischen Küche inspiriertes Weizengebäck mit T65 Mehl
          und 0,1 % Hefeanteil. Vor dem Backen wird es in Traubenmelasse und
          Sesam gewälzt und als Stange verzwirbelt. Hergestellt mit Getreide aus
          Frankreich von Moulin Bourgeois.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: T65 Mehl, Wasser, Weizensauerteig, Hefe, Salz,
          Traubenmelasse, Sesam.
        </Text>
      </>
    ),
  },
  {
    name: "Dinkelkastenbrot",
    tuesday: false,
    thursday: true,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein feinporiges, saftiges Dinkelbrot mit 15 % Vollkornmehl und im
          Kasten gebacken. Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Ur-Dinkelmehl 1050 (Oberkulmer Rotkorn), Ur-D
        </Text>
      </>
    ),
  },
  {
    name: "Roggenkastenbrot",
    tuesday: false,
    thursday: true,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein kerniges Roggenvollkornbrot im Kasten mit gekochten Roggenkörnern
          im Teig und gewälzt in Saaten und Flocken. Hergestellt mit 100 %
          HegauKorn-Getreide
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Roggenvollkornmehl, Roggenvollkornschrot, Roggenkörner,
          Wasser, Roggensauerteig, Salz, Haferflocken, Kürbiskerne,
          Sonnenblumenkerne, Mohn, Sesam.
        </Text>
      </>
    ),
  },
  {
    name: "Zimtschnecken",
    tuesday: false,
    thursday: true,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Von Hand geknoteter süßer Weizenteig, verfeinert mit Butter, Milch und
          Ei. Gefüllt mit unserer hausgemachten Füllung aus Zimt, Zucker und
          Butter. Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Weizenmehl 550, Vollmilch, Butter, Eier, Zucker,
          Weizensauerteig, Hefe, Salz, Zimt.
        </Text>
      </>
    ),
  },
  {
    name: "Dinkelvollkornbrot",
    tuesday: false,
    thursday: false,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein feinporiges, saftiges, rundes Dinkelvollkornbrot. Dieses Brot
          fermentiert 48 Stunden. Hergestellt mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Ur-Dinkelvollkornmehl (Oberkulmer Rotkorn),
          Ur-Dinkelvollkornschrot (Oberkulmer Rotkorn), Wasser, Dinkelsauerteig,
          Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Porridgebrot",
    tuesday: false,
    thursday: false,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ein kleines rundes Dinkelbrot mit (verquollenen) Haferflocken im Teig
          und auf der Kruste. Dieses Brot fermentiert 48 Stunden. Hergestellt
          mit 100 % HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Ur-Dinkelmehl 1050 (Oberkulmer Rotkorn),
          Vollkornhaferflocken, Wasser, Dinkelsauerteig, Salz.
        </Text>
      </>
    ),
  },
  {
    name: "Dinkelseelen",
    tuesday: false,
    thursday: false,
    friday: true,

    children: (
      <>
        <Text className="md:text-smallest-desktop">
          Ofenfrisches Kleingebäck aus hellem Dinkelmehl, einem würzigen
          Roggensauerteig und kleinem Hefeanteil. Von Hand abgestochen und mit
          Kümmel-Salz, Mohn oder Sesam bestreut. Hergestellt mit 100 %
          HegauKorn-Getreide.
        </Text>
        <Text className="md:text-smallest-desktop">
          Zutaten: Ur-Dinkelmehl 630 (Oberkulmer Rotkorn), Roggensauerteig,
          Sonnenblumenöl, Wasser, Hefe, Salz, Kümmel/Mohn/Sesam.
        </Text>
      </>
    ),
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
      <Text className="flex-grow w-full ">{name}</Text>
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
    children: bread.children,
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
      <Picture
        className="hidden object-contain md:block h-[800px]"
        src={`bread/${clickedItem?.replaceAll(" ", "_")}`}
      />

      <div className="flex flex-col justify-between col-span-2">
        <div>
          <Accordion items={items} setClickedItem={setClickedItem} />
          <div className="border-t-2 border-solid border-black">
            <Text className="flex-grow w-full">
              & verschiedene saisonale Backwaren
            </Text>
          </div>
        </div>

        <Text className="font-serif italic mt-10 md:text-smallest-desktop">
          Alle Produkte sind vorhanden, so lange der Vorrat reicht.
        </Text>
      </div>
    </div>
  );
}
