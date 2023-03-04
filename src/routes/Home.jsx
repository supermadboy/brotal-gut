import { Link } from 'react-router-dom';
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
        className='bg-primary min-h-screen flex flex-col p-4 md:p-8'
      >
        <Title className="uppercase">Info</Title>

        <div
          className='border-y flex flex-col grow py-2 md:flex-row md:gap-8'
        >
          <div className='md:flex-1'>
            <SubTitle>Brotalgut GbR</SubTitle>
            <SubTitle>Salmannsweilergasse 4</SubTitle>
            <SubTitle>78462 Konstanz</SubTitle>
          </div>
          <div className='flex flex-col grow mt-4 md:mt-0'>
            <div className='border-b mb-2 pb-2 md:mb-6 md:pb-6'>
              <Title className="uppercase">Inhaber</Title>
              <SubTitle>Nora & Jörn Ridder</SubTitle>
            </div>
            <div className='border-b mb-2 pb-2 md:mb-6 md:pb-6'>
              <Title className="uppercase">Öffnungszeiten</Title>
              <SubTitle>Coming soon!</SubTitle>
            </div>
            <div className='flex flex-col grow justify-between md:justify-start md:grow-0'>
              <div>
                <Title className="uppercase">Kontakt</Title>  
                <SubTitle>ig logo</SubTitle>
                <EmailLink mail="info@brotalgut-konstanz.de" />  
              </div>
              <div>
                <Link className='text-3xl md:text-5xl hover:italic focus:italic' to="/impressum">Impressum</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden w-96 md:mt-6 md:block'>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Home;
