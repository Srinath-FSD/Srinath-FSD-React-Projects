import Header from "./components/Header";
import PlanetStats from "./components/PlanetStats";
import SectorsSection from "./components/SectorsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <PlanetStats />

      <SectorsSection />
      <EducationSection />

      <Footer />
    </div>
  );
}

export default Home;
