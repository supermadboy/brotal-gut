import { Link } from "react-router-dom";
import EmailLink from "../components/typo/EmailLink";
import SubTitle from "../components/typo/SubTitle";
import Text from "../components/typo/Text";

const Imprint = () => {
  window.scrollTo({ top: 0 });

  return (
    <div className="bg-primary min-h-screen flex flex-col px-4 pb-4 md:px-8 md:pb-8">
      <div className="bg-primary z-10 flex justify-between sticky top-0 border-b pt-4 md:pt-8 md:pb-4 md:mb-2 md:border-b-4">
        <SubTitle className="uppercase">Impressum</SubTitle>
        <Link
          to="/"
          className="uppercase text-xl md:text-3xl hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif"
        >
          <SubTitle>zurück</SubTitle>
        </Link>
      </div>
      <div className="flex flex-col grow border-b md:flex-row md:pb-4 md:mb-2 md:border-b-4 ">
        <div className="border-b mb-2 pb-2 md:flex-1 md:border-none md:flex-grow-[2]">
          <div className="text-center sticky top-navbarHeight pt-2 md:top-navbarHeightDesktop md:text-left">
            <SubTitle className={"md:text-extra-extra-large"}>
              Brotalgut GbR
            </SubTitle>
            <SubTitle className="whitespace-nowrap md:text-extra-extra-large">
              Salmannsweilergasse 4
            </SubTitle>
            <SubTitle className="mb-4 md:mb-16 md:text-extra-extra-large">
              78462 Konstanz
            </SubTitle>
            <SubTitle className={"md:text-extra-extra-large"}>
              Nora Ridder & Jörn Ridder
            </SubTitle>
            <a
              href="mailto:info@brotalgut-konstanz.de"
              className="cursor-pointer"
              target="blank"
            >
              <SubTitle className={"md:text-extra-extra-large"}>
                info@brotalgut-konstanz.de
              </SubTitle>
            </a>
          </div>
        </div>
        <div className="md:mt-2 md:flex-1 md:flex-grow-[3]">
          <div className="text-center border-b mb-2 md:border-b-4  md:text-left ">
            <div className="mb-4">
              <Text className="uppercase">Gestaltung</Text>
              <Link
                className="flex items-center justify-center gap-1 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif md:justify-start"
                to="https://katharina-peters.eu/"
                target="_blank"
              >
                <Text>Katharina Peters</Text>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="mb-4">
              <Text className="uppercase">Programmierung</Text>

              <Link
                className="flex items-center justify-center gap-1 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif md:justify-start"
                to="https://www.supermittel.com"
                target="_blank"
              >
                <Text>supermittel</Text>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="mb-4">
              <Text className="uppercase">Fotografie</Text>

              <Link
                className="flex items-center justify-center gap-1 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif md:justify-start"
                to="https://www.milenaschilling.de"
                target="_blank"
              >
                <Text>Milena Schilling</Text>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>

              <Link
                className="flex items-center justify-center gap-1 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif md:justify-start"
                to="https://www.instagram.com/mhllat/"
                target="_blank"
              >
                <Text>Marylin Laturner</Text>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>
              <Link
                className="flex items-center justify-center gap-1 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif md:justify-start"
                to="https://www.instagram.com/ehrlichagency/"
                target="_blank"
              >
                <Text>ehrlichagency</Text>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-3 md:mb-4">
              <Text>Berufsbezeichnung: Bäcker*in</Text>
              <Text>Zuständige Kammer: Handwerkskammer Konstanz (HWK)</Text>
              <Text>Verliehen in: Deutschland</Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text>Es gelten folgende berufsrechtliche Regelungen:</Text>
              <Text>Gesetz zur Ordnung des Handwerks</Text>
              <Text>
                einsehbar unter: http://www.gesetze-im-internet.de/hwo/HwO.pdf
              </Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text>EU-Streitschlichtung</Text>
              <Text>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                https://ec.europa.eu/consumers/odr/.
              </Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text>
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </Text>
              <Text>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text>Angaben gemäß § 5 TMG</Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text className="uppercase">Haftung für Inhalte</Text>
              <Text>
                Als Diensteanbieter sind wir, Brotalgut GbR., gemäß § 7 Abs.1
                TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text className="uppercase">Haftung für Links</Text>
              <Text>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text className="uppercase">Urheberrecht</Text>
              <Text>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
