import { Link } from "react-router-dom";
import EmailLink from "../components/typo/EmailLink";
import SubTitle from "../components/typo/SubTitle";
import Title from "../components/typo/Title";
import Text from "../components/typo/Text";

const Imprint = () => {
  window.scrollTo({top: 0})

  return (
    <div
      className='bg-primary min-h-screen flex flex-col p-4 md:p-8'
    >
      <div className="flex justify-between">
        <Title className="uppercase">Impressum</Title>
        <Link to="/" className="uppercase text-xl md:text-3xl hover:italic focus:italic hover:font-serif focus:font-serif">zurück</Link>
      </div>
      <div className="flex flex-col grow border-y md:flex-row md:py-4 md:my-2 md:border-y-2">
        <div className="border-b my-2 pb-2 md:flex-1 md:border-none">
          <SubTitle>Brotalgut GbR</SubTitle>
          <SubTitle className="whitespace-nowrap">Salmannsweilergasse 4</SubTitle>
          <SubTitle className='mb-4 md:mb-16'>78462 Konstanz</SubTitle>
          <SubTitle>Nora & Jörn Ridder</SubTitle>
          <EmailLink mail="info@brotalgut-konstanz.de" >info@brotalgut-konstanz.de</EmailLink>
        </div>
        <div className="md:flex-1 md:flex-grow-[2]">
          <div className="border-b mb-2 md:border-b-2">
            <div className="mb-2">
              <Text className="uppercase">Gestaltung</Text>
              <Text>Katharina Peters</Text>
            </div>
            <div className="mb-2">
              <Text className="uppercase">Programmierung</Text>
              <Text>Markus Szvarvas</Text>
            </div>
          </div>
          <div >
            <div className="mb-3 md:mb-4">
              <Text>Angaben gemäß § 5 TMG</Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text className="uppercase">Haftung für Inhalte</Text>
              <Text>Als Diensteanbieter sind wir, Brotalgut GbR., gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text className="uppercase">Haftung für Links</Text>
              <Text>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Text>
            </div>
            <div className="mb-3 md:mb-4">
              <Text className="uppercase">Urheberrecht</Text>
              <Text>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imprint;