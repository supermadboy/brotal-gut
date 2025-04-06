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
];

const BreadAvailable = ({ available }) => {
  return (
    <div
      className={
        (available ? "bg-primary" : "bg-transparent") +
        " rounded-full w-4 h-4 mx-6"
      }
    />
  );
};

const breadToTitle = ({ name, tuesday, thursday, friday }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <Text className="flex-grow">{name}</Text>
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
        <div className="flex-grow" />
        <Text className="w-4 h-4 mx-6">Di</Text>
        <Text className="w-4 h-4 mx-6">Do</Text>
        <Text className="w-4 h-4 mx-6">Fr</Text>
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
