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
      <div className="flex flex-col grow border-y md:flex-row md:py-4 md:my-2 md:border-y-2 ">
        <div className="border-b my-2 pb-2 md:flex-1 md:border-none md:flex-grow-[2]">
          <SubTitle>Brotalgut GbR</SubTitle>
          <SubTitle className="whitespace-nowrap">Salmannsweilergasse 4</SubTitle>
          <SubTitle className='mb-4 md:mb-16'>78462 Konstanz</SubTitle>
          <SubTitle>Nora & Jörn Ridder</SubTitle>
          <EmailLink mail="info@brotalgut-konstanz.de" >info@brotalgut-konstanz.de</EmailLink>
        </div>
        <div className="md:flex-1 md:flex-grow-[3]">
          <div className="border-b mb-2 md:border-b-2">
            <div className="mb-2">
              <Text className="uppercase">Gestaltung</Text>
              <Link className='flex items-center gap-1 hover:italic focus:italic hover:font-serif focus:font-serif' to="https://katharina-peters.eu/" target='_blank'>
                <Text>Katharina Peters</Text>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Interface / External_Link">
                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="mb-2">
              <Text className="uppercase">Programmierung</Text>

              <Link className='flex items-center gap-1 hover:italic focus:italic hover:font-serif focus:font-serif' to="https://www.supermittel.com" target='_blank'>
                <Text>supermittel.com</Text>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Interface / External_Link">
                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </Link>
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