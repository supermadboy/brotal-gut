import { Link } from "react-router-dom";
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
import Picture from "../components/Picture";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <Disclaimer />
      <div className="flex flex-col gap-4 mb-4">
        <AboutUs />
        <div className="mx-4 md:mx-7">
          <Breads />
        </div>
        <div className=" flex justify-center items-center md:mx-16 md:min-h-dvh">
          <div className="w-full hidden md:block">
            <LazySvg />
          </div>

          <Picture src={"mobile/4"} className="max-w-full md:hidden" />
        </div>
        <div className="mx-4 md:mx-7 ">
          <FAQ />
        </div>
      </div>

      <footer
        id="contact"
        className="text-center mt-12 px-4 py-12 flex flex-col gap-8 justify-between items-center bg-primary flex-wrap text-white fill-white md:flex-row md:text-left md:px-7 md:py-20"
      >
        <div className="hidden md:flex flex-col">
          <div className="w-40 mb-2">
            <Logo />
          </div>
          <Text className="md:text-smallest-desktop">
            © {new Date().getFullYear()}, Brotalgut GbR
          </Text>
        </div>
        <div className="md:flex flex-col items-center">
          <Text className="uppercase">Öffnungszeiten</Text>
          <Text>Di, Do & Fr</Text>
          <Text>12 - 18 Uhr</Text>
        </div>
        <div className="md:flex flex-col items-center">
          <Text className="uppercase">Adresse</Text>
          <Text>Salmannsweilergasse 4</Text>
          <Text>78462 Konstanz</Text>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-4">
            <Insta />
            <EmailLink mail="info@brotalgut-konstanz.de" />
          </div>
          <Link
            to="/impressum"
            className="text-small bg-primary rounded-full hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif md:text-3xl"
          >
            Impressum
          </Link>
        </div>

        <Text className="md:hidden">
          © {new Date().getFullYear()}, Brotalgut GbR
        </Text>
      </footer>
    </div>
  );
};

export default Home;
