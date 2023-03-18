import { Link } from 'react-router-dom';
import Insta from '../components/images/insta';
import Logo from '../components/images/Logo';
import LandingPage from '../components/LandingPage';
import EmailLink from '../components/typo/EmailLink';
import SubTitle from '../components/typo/SubTitle';
import Title from '../components/typo/Title';

const Home = () => {


  return (
    <div>
      <LandingPage></LandingPage>
      <div
        className='bg-primary min-h-screen flex flex-col p-4'
      >
        <div
          className='border-b flex flex-col grow py-2 md:py-6 md:flex-row md:gap-8 md:border-b-2'
        >
          <div className='md:flex-1'>
            <SubTitle>Brotalgut GbR</SubTitle>
            <SubTitle className="whitespace-nowrap">Salmannsweilergasse 4</SubTitle>
            <SubTitle>78462 Konstanz</SubTitle>
          </div>
          <div className='flex flex-col grow mt-4 md:mt-0 md:flex-1 md:flex-grow-[2]'>
            <div className='border-b mb-2 pb-2 md:mb-6 md:pb-6 md:border-b-2'>
              <Title className="uppercase">Inhaber</Title>
              <SubTitle>Nora & Jörn Ridder</SubTitle>
            </div>
            <div className='border-b mb-2 pb-2 md:mb-6 md:pb-6 md:border-b-2'>
              <Title className="uppercase">Öffnungszeiten</Title>
              <SubTitle>Coming soon!</SubTitle>
            </div>
            <div className='flex flex-col grow justify-between md:justify-start md:grow-0'>
              <div>
                <Title className="uppercase">Kontakt</Title>  
                <Insta />
                <EmailLink mail="info@brotalgut-konstanz.de"><p>info@brotalgut-konstanz.de</p></EmailLink>  
              </div>
              <div>
                <Link className='text-3xl md:text-4.5xl hover:italic focus:italic hover:font-serif focus:font-serif' to="/impressum">Impressum</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden w-80 md:mt-4 md:block'>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Home;
