import Carousel from "../Carousel";
import Picture from "../Picture";
import Text from "../typo/Text";

export default function AboutUs() {
  return (
    <div>
      <Picture src="landing_page" alt="ein klein Bild" />

      <div className="flex flex-col-reverse grid-cols-2 md:grid">
        <div>
          <Picture src="vertical1" />
          <Picture src="vertical2" className="hidden md:block" />
          <Picture src="vertical3" className="hidden md:block" />
          <Picture src="vertical4" className="hidden md:block" />
        </div>

        <div>
          <Text
            id="about-us"
            className="sticky top-navbarHeight p-4 scroll-mt-navbarHeight md:scroll-mt-navbarHeightDesktop"
          >
            Hallo, wir sind Nora & Jörn! In unserer kleinen, transparenten
            Backstube backen wir frisches Sauerteigbrot und andere handgemachte
            Produkte. Wir arbeiten mit hochwertigen Rohstoffen, im kleinen
            Familienbetrieb in Konstanz am Bodensee
          </Text>
        </div>
      </div>

      <div className="grid-cols-2 md:grid">
        <Text className="p-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>

        <div className="border-t-2 solid border-black mx-4 text-center md:text-left md:border-t-0">
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
        </div>
      </div>

      <div className="max-h-dvh">
        <Carousel
          images={[
            "horizontal1",
            "horizontal2",
            "horizontal3",
            "horizontal4",
            "horizontal5",
            "horizontal6",
            "horizontal7",
          ]}
        />
      </div>
    </div>
  );
}
