import Carousel from "../Carousel";
import Picture from "../Picture";
import Text from "../typo/Text";

export default function AboutUs() {
  return (
    <div>
      <Picture src="landing_page" alt="ein klein Bild" id="home" />

      <div className="flex flex-col-reverse grid-cols-2 md:grid">
        <div className="flex flex-col gap-4">
          <Picture src="vertical1" />
          <Picture src="vertical2" className="hidden md:block" />
          <Picture src="vertical3" className="hidden md:block" />
          <Picture src="vertical4" className="hidden md:block" />
        </div>

        <div className="pt-12">
          <Text
            id="about-us"
            className="text-center sticky top-navbarHeight px-4 py-12 scroll-mt-navbarHeight md:scroll-mt-navbarHeightDesktop  md:top-navbarHeightDesktop  md:text-left md:px-20 md:pb-[1000px] md:pt-8"
          >
            Hallo, wir sind Nora & Jörn! In unserer kleinen, transparenten
            Backstube backen wir frisches Sauerteigbrot und andere handgemachte
            Produkte. Wir arbeiten mit hochwertigen Rohstoffen, im kleinen
            Familienbetrieb in Konstanz am Bodensee
          </Text>
        </div>
      </div>

      <div className="grid-cols-2 md:grid md:min-h-dvh md:p-20">
        <Text className="text-center px-4 py-12  md:text-left">
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

        <div className="border-t-2 solid border-black mx-4 text-center md:text-left md:border-t-0 md:flex md:justify-end">
          <div>
            <div className="px-4 pt-12 pb-4">
              <Text className="uppercase mb-2 md:text-smallest-desktop">
                Unsere Lieferanten
              </Text>

              <div className="flex flex-col gap-2">
                <Text className="md:text-smallest-desktop">
                  HegauKorn, Engen <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  Moulin Bourgeois, Verdelot <sup>(FR)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  Haettelihof, Konstanz <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  BioGroßhandel Rinklin, Kaiserstuhl <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  Konditorhandel Pfersich, Ulm <sup>(DE)</sup>
                </Text>
              </div>
            </div>

            <div className="px-4 pt-4 pb-12 ">
              <Text className="uppercase mb-2 md:text-smallest-desktop">
                Unsere Gastropartnerschaften
              </Text>

              <div className="flex flex-col gap-2">
                <Text className="md:text-smallest-desktop">
                  Restaurant Wessenberg, Konstanz <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  Restaurant Heinrichs, Konstanz <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  DOPPIO Café, Konstanz <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  No.elf Spezialitätenkaffee, Konstanz <sup>(DE)</sup>
                </Text>
                <Text className="md:text-smallest-desktop">
                  Ophelia Gourmetrestaurant, Konstanz <sup>(DE)</sup>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-dvh">
        <Carousel
          images={[
            { src: "horizontal1", width: 1000 },
            { src: "horizontal2", width: 200 },
            { src: "horizontal3", width: 500 },
            { src: "horizontal4", width: 200 },
            { src: "horizontal5", width: 600 },
            { src: "horizontal6", width: 500 },
            { src: "horizontal7", width: 900 },
          ]}
        />
      </div>
    </div>
  );
}
