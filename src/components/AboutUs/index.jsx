import Picture from "../Picture";
import Text from "../typo/Text";

export default function AboutUs() {
  return (
    <div>
      <Picture src="landing_page" alt="ein klein Bild" />
      <Text
        id="about-us"
        className="p-4 scroll-mt-navbarHeight md:scroll-mt-navbarHeightDesktop"
      >
        Hallo, wir sind Nora & Jörn! In unserer kleinen, transparenten Backstube
        backen wir frisches Sauerteigbrot und andere handgemachte Produkte. Wir
        arbeiten mit hochwertigen Rohstoffen, im kleinen Familienbetrieb in
        Konstanz am Bodensee
      </Text>

      <Picture src="landing_page" alt="ein klein Bild" />

      <Text className="p-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>

      <div className="p-4">
        <Text className="uppercase mb-2">Unsere Lieferanten</Text>

        <Text>
          HegauKorn, Engen <sup>(DE)</sup>
        </Text>
        <Text>
          Moulin Bourgeois, Verdelot <sup>(FR)</sup>
        </Text>
        <Text>
          Haettelihof, Konstanz <sup>(DE)</sup>
        </Text>
        <Text>
          BioGroßhandel Rinklin, Kaiserstuhl <sup>(DE)</sup>
        </Text>
        <Text>
          Konditorhandel Pfersich, Ulm <sup>(DE)</sup>
        </Text>
      </div>

      <div className="p-4">
        <Text className="uppercase mb-2">Unsere Gastropartnerschaften</Text>

        <Text>
          Restaurant Wessenberg, Konstanz <sup>(DE)</sup>
        </Text>
        <Text>
          Restaurant Heinrichs, Konstanz <sup>(DE)</sup>
        </Text>
        <Text>
          DOPPIO Café, Konstanz <sup>(DE)</sup>
        </Text>
        <Text>
          No.elf Spezialitätenkaffee, Konstanz <sup>(DE)</sup>
        </Text>
        <Text>
          Ophelia Gourmetrestaurant, Konstanz <sup>(DE)</sup>{" "}
        </Text>
      </div>

      <Picture src="landing_page" alt="ein klein Bild" />
    </div>
  );
}
