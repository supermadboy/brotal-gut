import Accordion from "../Accordion";
import Text from "../typo/Text";

const items = [
  {
    title: <Text>Warum gibt es bei euch kein geschnittenes Brot?</Text>,
    children: (
      <>
        <Text>
          Unsere Brote werden immer tagesfrisch gebacken. Das bedeutet, dass die
          Brote manchmal noch lauwarm im Verkaufsregal liegen. Warmes Brot lässt
          sich schlecht schneiden –außerdem leidet die Qualität der Krume
          darunter. Geschnittenes Brot trocknet viel schneller aus, die Krume
          verliert ihre Saftigkeit und die Kruste ihre Knusprigkeit. 
        </Text>
        <Text>
          Außerdem gibt es praktische Gründe: Wir haben im Verkaufsraum keinen
          Platz für eine Brotschneidemaschine bzw möchten aufgrund der oben
          genannten Gründe keinen Platz dafür schaffen.
        </Text>
      </>
    ),
  },
  {
    title: <Text>Wie kann man eure Brote aufbacken?</Text>,
    children: (
      <Text>
        Um die Qualität und die Saftigkeit des Brotes zu erhalten, gilt dabei:
        Kurz und heiß aufbacken. Ofen auf circa 200 °C Ober- und Unterhitze
        vorheizen und die aufgetaute Backware circa 5-10 Minuten aufbacken.
        Natürlich sollte Kleingebäck und Baguette kürzer gebacken werden als ein
        Brotlaib. Bitte beachtet, dass Öfen unterschiedlich sind und wir hier
        nur Richtwerte angeben.
      </Text>
    ),
  },
  {
    title: <Text>Wie lagert man euer Brot am besten?</Text>,
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Text>
    ),
  },
];

export default function FAQ() {
  return <Accordion items={items} />;
}
