import Carousel from "../Carousel";
import Picture from "../Picture";
import ExternalLink from "../typo/ExternalLink";
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

        <div className="md:pt-12">
          <Text
            id="about-us"
            className="text-center sticky top-navbarHeight px-4 py-12 scroll-mt-navbarHeight md:scroll-mt-navbarHeightDesktop  md:top-navbarHeightDesktop  md:text-left md:px-20 md:pb-[1000px] md:pt-8"
          >
            Hallo, wir sind Nora & Jörn! In unserer kleinen,{" "}
            <i className="font-serif">transparenten</i> Backstube backen wir
            frisches Sauerteigbrot und andere{" "}
            <i className="font-serif">handgemachte</i> Produkte. Wir arbeiten
            mit hochwertigen Rohstoffen, im kleinen Familienbetrieb in Konstanz
            am Bodensee
          </Text>
        </div>
      </div>

      <div className="grid-cols-2 md:grid md:min-h-dvh md:p-3">
        <div className="text-center px-4 py-12 md:text-left">
          <Text className="mb-4">
            Mitten in der Konstanzer Altstadt liegt unsere Backstube, die mehr
            ist als nur ein Ort für gutes Brot. Sie ist ein Ort der Begegnung,
            der Leidenschaft. Bei Brotalgut kultivieren wir gemeinsam mit
            unserem Team Tag für Tag unser Handwerk und unsere Überzeugung für
            hochwertige Lebensmittel.
          </Text>
          <Text className="mb-4">
            Gemeinsam haben wir, Jörn & Nora, als Quereinsteiger im Jahr 2023
            den Sprung in die Selbstständigkeit gewagt, um einen Ort zu schaffen
            der Mut macht sich auszuprobieren - der zeigt, dass echtes Handwerk
            nicht kräftezehrend und altmodisch ist, sondern nachhaltig, kreativ
            und sinnstiftend. Und unglaublich erfüllend. Besonders wenn man
            spürt, wie aus Mehl, Wasser, Salz und Zeit ein Lebensmittel wird,
            das Menschen verbindet.
          </Text>
          <Text className="mb-4">
            Ob klassisches Dinkelkastenbrot oder Zimtschnecke – jedes Produkt
            hier hat eine eigene Geschichte. Und die besten entstehen dort, wo
            sich Generationen austauschen, Visionen reifen dürfen und man sich
            auf Augenhöhe begegnet. Der Sauerteigstarter? Über 10 Jahre alt. Der
            Anspruch? Qualität über Quantität. Immer.
          </Text>
        </div>

        <div className="border-t-2 solid border-black mx-4 text-center md:text-left md:border-t-0 md:flex md:justify-end">
          <div className="md:min-w-[400px]">
            <div className="px-4 pt-12 pb-4">
              <Text className="uppercase mb-2 md:text-smallest-desktop">
                Unsere Lieferanten
              </Text>

              <div className="flex flex-col gap-2">
                <ExternalLink href="https://www.hegaukorn.de/">
                  <Text className="md:text-smallest-desktop">
                    HegauKorn, Engen <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://www.moulins-bourgeois.com/">
                  <Text className="md:text-smallest-desktop">
                    Moulin Bourgeois, Verdelot <sup>(FR)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://haettelihof.de/">
                  <Text className="md:text-smallest-desktop">
                    Haettelihof, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://shop.rinklin-naturkost.de/">
                  <Text className="md:text-smallest-desktop">
                    BioGroßhandel Rinklin, Kaiserstuhl <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://pfersich.de/">
                  <Text className="md:text-smallest-desktop">
                    Konditorhandel Pfersich, Ulm <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
              </div>
            </div>

            <div className="px-4 pt-4 pb-12 ">
              <Text className="uppercase mb-2 md:text-smallest-desktop">
                Unsere Gastropartnerschaften
              </Text>

              <div className="flex flex-col gap-2">
                <ExternalLink href="https://wessenberg.de/">
                  <Text className="md:text-smallest-desktop">
                    Restaurant Wessenberg, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://das-heinrich.de/">
                  <Text className="md:text-smallest-desktop">
                    Restaurant Heinrichs, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://doppio-konstanz.de/">
                  <Text className="md:text-smallest-desktop">
                    DOPPIO Café, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://no-elf.de/">
                  <Text className="md:text-smallest-desktop">
                    No.elf Spezialitätenkaffee, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://www.restaurant-ophelia.de/">
                  <Text className="md:text-smallest-desktop">
                    Ophelia Gourmetrestaurant, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
                <ExternalLink href="https://haettelihof.de/cafe-selma">
                  <Text className="md:text-smallest-desktop">
                    Café Selma, Konstanz <sup>(DE)</sup>
                  </Text>
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden max-h-dvh md:block">
        <Carousel
          images={[
            { src: "horizontal/1", width: 633 },
            { src: "horizontal/2", width: 633 },
            { src: "horizontal/3", width: 633 },
            { src: "horizontal/4", width: 1425 },
            { src: "horizontal/5", width: 633 },
            { src: "horizontal/6", width: 1425 },
            { src: "horizontal/7", width: 633 },
          ]}
        />
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        <Picture src={"mobile/1"} className="max-w-full block" />
        <Picture src={"mobile/2"} className="max-w-full block" />
        <Picture src={"mobile/3"} className="max-w-full block" />
      </div>
    </div>
  );
}
