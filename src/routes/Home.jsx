import AboutUs from "../components/AboutUs";
import Breads from "../components/Breads";
import Disclaimer from "../components/Disclaimer";
import FAQ from "../components/FAQ";
import Insta from "../components/images/insta";
import Logo from "../components/images/Logo";
import LandingPage, { LazySvg } from "../components/LandingPage";
import Navbar from "../components/Navbar";
import EmailLink from "../components/typo/EmailLink";
import Text from "../components/typo/Text";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <Disclaimer />
      <div className="flex flex-col gap-4 mb-4">
        <AboutUs />
        <div className="mx-4">
          <Breads />
        </div>
        <div className="mx-16">
          <LazySvg />
        </div>
        <div className="mx-4">
          <FAQ />
        </div>
      </div>

      <footer className="text-center p-6 flex flex-col gap-4 justify-between items-center bg-primary flex-wrap text-white fill-white md:flex-row md:text-left">
        <div className="hidden md:flex flex-col">
          <div className="w-40 mb-2">
            <Logo />
          </div>
          <Text>© {new Date().getFullYear()}, Brotalgut GbR</Text>
        </div>
        <div>
          <Text className="uppercase">Adresse</Text>
          <Text>Salmannsweilergasse 4</Text>
          <Text>78462 Konstanz</Text>
        </div>
        <div>
          <Text className="uppercase">Öffnungszeiten</Text>
          <Text>Di,Do & Fr</Text>
          <Text>12 - 18 Uhr</Text>
        </div>

        <div>
          <div className="flex gap-4">
            <Insta />
            <EmailLink />
          </div>
          <Text>Impressum</Text>
        </div>

        <Text className="md:hidden">
          © {new Date().getFullYear()}, Brotalgut GbR
        </Text>
      </footer>
    </div>
  );
};

export default Home;
