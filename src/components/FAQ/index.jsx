import Accordion from "../Accordion";
import Text from "../typo/Text";

const items = [
  {
    title: <Text>Kann man euer Brot auch einfrieren?</Text>,
    children: (
      <Text>
        Ja, das ist gut möglich. Voraussetzung dafür ist, dass das Brot gut
        abgekühlt ist und luftdicht, am besten in Plastik, verpackt ist. Vor der
        Verwendung dann über Nacht (mindestens 3-4 Stunden) den Brotlaib bei
        Raumtemperatur auftauen lassen und nach Bedarf nochmal im Ofen
        aufknuspern. Für eine Anleitung zum Aufbacken bitte die nächste Frage
        lesen.
      </Text>
    ),
  },
  {
    title: <Text>Wie kann man eure Brote aufbacken?</Text>,
    children: (
      <Text>
        Um die Qualität und die Saftigkeit des Brotes zu erhalten, gilt dabei:
        kurz und heiß aufbacken. Ofen auf circa 200 °C Ober- und Unterhitze
        vorheizen und die aufgetaute Backware circa 5-10 Minuten aufbacken.
        Natürlich sollte Kleingebäck und Baguette kürzer gebacken werden als ein
        Brotlaib. Bitte beachtet, dass Öfen unterschiedlich sind und wir hier
        darum nur Richtwerte angeben.
      </Text>
    ),
  },
  {
    title: <Text>Wie lagert man euer Brot am besten?</Text>,
    children: (
      <Text>
        Für eine möglichst langanhaltende Frische, lagert ihr euer Brot am
        besten in einem atmungsaktiven Gefäß (Tontopf, Papiertüte,
        Leinenbeutel). Mit der Schnittkante auf einem Holzbrett und abgedeckt
        mit einem Geschirrtuch ist die Lagerung auch möglich.
      </Text>
    ),
  },
  {
    title: <Text>Ist das Brot bio?</Text>,
    children: (
      <Text>
        Wir beziehen unsere Rohstoffe vorrangig und überwiegend in Bioqualität.
        Da wir als Bäckerei und Laden nicht zertifiziert sind, dürfen wir es aus
        gesetzlichen Gründen nicht so kennzeichnen und bewerben. Das gilt auch
        für Produkte, die vollständig aus biozertifizierten Rohstoffen und
        Zutaten hergestellt sind.
      </Text>
    ),
  },
  {
    title: <Text>Gibt es bei euch auch vegane Produkte?</Text>,
    children: (
      <Text>
        Alle unsere Brote bestehen ausschließlich aus Getreide, Wasser und Salz
        und sind demnach vegan. Unser süßes Gebäck ist in der Regel nicht vegan.
        Durch die Nutzung der Geräte, beispielsweise der Knetmaschinen, können
        auch Brote Spuren von tierischen Produkten enthalten.
      </Text>
    ),
  },
  {
    title: <Text>Warum hat das Brot so große Löcher?</Text>,
    children: <Text>Xyz</Text>,
  },
  {
    title: <Text>Gibt es bei euch Brote ohne Hefe?</Text>,
    children: (
      <Text>Ja, alle Brote mit Ausnahme des Baguette sind hefefrei.</Text>
    ),
  },
  {
    title: <Text>Woher kommt euer Getreide?</Text>,
    children: (
      <Text>
        Unser Getreide bekommen wir wöchentlich frisch geliefert. Bis auf das
        Baguettemehl und unser helles Roggenmehl beziehen wir all unser Getreide
        von HegauKorn. Das bedeutet: maximale Regionalität, denn in den
        Bio-Mehlen von HegauKorn steckt ausschließlich das Getreide von acht
        Bäuerinnen und Bauern des Landkreises Konstanz. Sie ackern gemeinsam für
        eine nachhaltige Landwirtschaft und haben sich in der Initiative
        HegauKorn mit der Steigmühle Engen zusammengeschlossen. Dort entstehen
        in einem schonenden Mahlverfahren die hochwertigen HegauKorn-Mehle in
        handwerklicher Manier. Hier kannst du noch mehr erfahren:
        www.hegaukorn.de
      </Text>
    ),
  },
  {
    title: <Text>Kann man euer Brot vorbestellen?</Text>,
    children: (
      <>
        <Text>
          Nein. Momentan sind Vorbestellungen nicht möglich. Bisher haben wir
          keine guten Erfahrungen mit Vorbestellungen gemacht (Nichtabholung der
          Ware, Organisation der Wartezeit in der Schlange trotz Vorbestellung,
          extra Personalkosten zum Verpacken und zur Lagerung der vorbestellten
          Ware,..), weshalb wir uns entschieden haben, Vorbestellungen von
          Kleinmengen nicht zu anzubieten. Der logistische Aufwand ist für uns
          zu hoch. Wir danken für euer Verständnis.
        </Text>
        <Text>
          Solltet ihr mehr als 10 Brote benötigen oder für ein Event größere
          Mengen kaufen wollen, dann dürft ihr euch sehr gerne bei uns melden.
          Bitte mit einem Vorlauf von wenigstens einer Woche
        </Text>
      </>
    ),
  },
  {
    title: <Text>Wie kommen eure Öffnungszeiten zu Stande?</Text>,
    children: (
      <Text>
        In unserer Backstube arbeiten wir ohne Nachtarbeit und nicht am
        Wochenende. Wir fangen frühestens um 6:30 Uhr mit der Arbeit an. Aus den
        langen Reifezeiten unserer Brote (16 - 48 Stunden) ergeben sich daher
        unsere Öffnungszeiten dienstags, donnerstags und freitags von 12:00 -
        18:00 Uhr.
      </Text>
    ),
  },
  {
    title: <Text>Gibt es bei euch halbe Brote?</Text>,
    children: (
      <Text>
        Nein. In Einzelfällen, in denen wir das doch mal gemacht haben, führte
        das Halbieren von Broten zu verschiedenen Problemen: Kunden fürchten die
        „kleinere“ Hälfte zu bekommen, Kunden wollen keine Hälfte die schon „zu
        lange“ aufgeschnitten ist, am Ende des Tages bleiben Brothälften über,
        die wir nur schwer weiterverwerten können. Wir empfehlen daher ein
        ganzes Brot zu kaufen und einen Teil davon nötigenfalls einzufrieren.
        Auch auf die lange Frischhaltung der Brote möchten wir hier nochmal
        hinweisen, denn auch bei geringem Konsum kann ein ganzer Laib
        aufgegessen sein, bevor er altbacken ist.
      </Text>
    ),
  },
  {
    title: <Text>Warum gibt es bei euch kein geschnittenes Brot?</Text>,
    children: (
      <>
        <Text>
          Unsere Brote werden immer tagesfrisch gebacken. Das bedeutet, dass die
          Brote manchmal noch lauwarm im Verkaufsregal liegen. Warmes Brot lässt
          sich schlecht schneiden - außerdem leidet die Qualität der Krume
          darunter. Geschnittenes Brot trocknet viel schneller aus, die Krume
          verliert ihre Saftigkeit und die Kruste ihre Knusprigkeit.
        </Text>
        <Text>
          Außerdem gibt es praktische Gründe: Wir haben im Verkaufsraum keinen
          Platz für eine Brotschneidemaschine und wir möchten aufgrund der oben
          genannten Gründe keinen Platz dafür schaffen.
        </Text>
      </>
    ),
  },
  {
    title: <Text>Gibt es bei euch auch Gutscheine?</Text>,
    children: (
      <Text>
        Ja. Gutscheine könnt ihr bei uns in der Backstube erwerben. Das Guthaben
        des Gutscheins könnt ihr frei wählen.
      </Text>
    ),
  },
  {
    title: <Text>Gibt es bei euch Backkurse?</Text>,
    children: (
      <Text>
        Nein. Derzeit liegt unser ganzer Fokus auf dem Betrieb unserer
        Backstube, weshalb wir keine Backkurse anbieten. Wenn wir das in Zukunft
        ändern sollten, dann erfahrt ihr davon rechtzeitig zum Beispiel auf
        unserer Webseite oder über unseren Instagramkanal.
      </Text>
    ),
  },
  {
    title: <Text>Gibt es mehrere Filialen?</Text>,
    children: (
      <Text>
        Nein, wir produzieren und verkaufen nur in der Salmannsweilergasse 4 in
        Konstanz.
      </Text>
    ),
  },
  {
    title: <Text>Bietet ihr Praktika an?</Text>,
    children: (
      <Text>
        Wir freuen uns über so viele neugierige und backbegeisterte Anfragen von
        euch. So gerne wir uns mit euch austauschen und unser Wissen weitergeben
        wollen, sind kurzfristige Praktika für einen Tag oder ein bis zwei
        Wochen bei uns nicht möglich. Aufgrund unserer kleinen und teilweise
        beengten Räumlichkeiten, sind wir darauf angewiesen, dass bestimmte
        Abläufe sauber und zügig klappen, um effizient zu arbeiten. Eine
        Einarbeitung für so einen kurzen Zeitraum ist für uns hinderlich. Vielen
        Dank für euer Verständnis. Wer sich allerdings vorstellen kann für einen
        längeren Zeitraum bei uns zu arbeiten, ist herzlich eingeladen sich mit
        einer aussagekräftigen Bewerbung bei uns zu melden
        (info@brotalgut-konstanz.de).
      </Text>
    ),
  },
];

export default function FAQ() {
  return (
    <div
      id="faq"
      className="scroll-mt-navbarHeight md:scroll-mt-navbarHeightDesktop"
    >
      <Accordion items={items} />
      <Text className="mt-4 italic">
        Deine Frage ist nicht dabei? Dann schreib uns gerne eine Mail.
      </Text>
    </div>
  );
}
