import SubTitle from "../typo/SubTitle";
import Title from "../typo/Title";

export default function Disclaimer() {
  return (
    <div className="bg-primary p-8 flex items-center flex-col gap-4">
      <Title className="uppercase text-center">
        ++ Neuigkeiten aus der Backstube ++
      </Title>
      <SubTitle>
        Auf Grund eines Betriebsausfluges bleibt die Backstube am Freitag den
        10. Oktober geschlossen
      </SubTitle>
    </div>
  );
}
