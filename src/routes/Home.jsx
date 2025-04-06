import AboutUs from "../components/AboutUs";
import Breads from "../components/Breads";
import Disclaimer from "../components/Disclaimer";
import FAQ from "../components/FAQ";
import LandingPage, { LazySvg } from "../components/LandingPage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <Disclaimer />
      <div className="flex flex-col gap-4 my-4">
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
    </div>
  );
};

export default Home;
