import Accordion from "../Accordion";
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
    name: "Dinkelkasten",
    tuesday: false,
    thursday: true,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Roggenkasten",
    tuesday: false,
    thursday: true,
    friday: true,
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
    name: "Weizenvollkornbrot",
    tuesday: true,
    thursday: true,
    friday: false,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Dinkelvollkornbrot",
    tuesday: false,
    thursday: true,
    friday: true,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    name: "Porridgebrot",
    tuesday: false,
    thursday: true,
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
  {
    name: "Simit",
    tuesday: true,
    thursday: false,
    friday: false,
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
];

const BreadAvailable = ({ available }) => {
  return (
    <div
      className={
        (available ? "bg-primary" : "bg-transparent") +
        " rounded-full w-4 h-4 mx-2 md:mx-6 flex-shrink-0"
      }
    />
  );
};

const breadToTitle = ({ name, tuesday, thursday, friday }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <Text className="flex-grow w-full">{name}</Text>
      <BreadAvailable available={tuesday} />
      <BreadAvailable available={thursday} />
      <BreadAvailable available={friday} />
    </div>
  );
};

const items = [
  {
    title: (
      <div className="flex items-center gap-4 w-full">
        <div className="flex-grow w-full" />
        <Text className="w-4 h-4 mx-2 md:mx-6 flex-shrink-0">Di</Text>
        <Text className="w-4 h-4 mx-2 md:mx-6 flex-shrink-0">Do</Text>
        <Text className="w-4 h-4 mx-2 md:mx-6 flex-shrink-0">Fr</Text>
      </div>
    ),
  },

  ...availableBreads.map((bread) => ({
    title: breadToTitle(bread),
    children: <Text>{bread.description}</Text>,
  })),
];

export default function Breads() {
  return <Accordion items={items} />;
}
