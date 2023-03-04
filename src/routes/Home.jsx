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
        className='bg-primary min-h-screen flex flex-col p-2'
      >
        <Title>Info</Title>

        <div
          className='border-y flex flex-col grow md:flex-row md:gap-8'
        >
          <div className='md:flex-1'>
            <SubTitle>Brotalgut GbR</SubTitle>
            <SubTitle>Salmannsweilergasse 4</SubTitle>
            <SubTitle>78462 Konstanz</SubTitle>
          </div>
          <div className='flex flex-col grow'>
            <div className='border-b'>
              <Title>Inhaber</Title>
              <SubTitle>Nora & Jörn Ridder</SubTitle>
            </div>
            <div className='border-b'>
              <Title>Öffnungszeiten</Title>
              <SubTitle>Coming soon!</SubTitle>
            </div>
            <div className='flex flex-col grow justify-between md:justify-start md:grow-0'>
              <div>
                <Title>Kontakt</Title>  
                <SubTitle>ig logo</SubTitle>
                <EmailLink mail="info@brotalgut-konstanz.de" />  
              </div>
              <Link className='text-4xl italic' to="/impressum">Impressum</Link>
            </div>
          </div>
        </div>

        <div className='hidden w-96 md:block'>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Home;
