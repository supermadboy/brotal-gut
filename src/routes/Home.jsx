import Breads from "../components/Breads";
import Disclaimer from "../components/Disclaimer";
import FAQ from "../components/FAQ";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <LandingPage></LandingPage>
      <Navbar />
      <Disclaimer />
      <div className="px-4">
        <Breads />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
