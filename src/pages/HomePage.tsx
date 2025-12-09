import HeroSection from "../components/sections/HeroSection";
import Map from "../components/Map";
import { useLocations } from "../hooks/useLocations";

const HomePage = () => {
  const { data } = useLocations();
  
  if (!data) return;

  return (
    <>
      <HeroSection />
      <Map results={data.usercontentbyidGraphql1.results} />
    </>
  );
};

export default HomePage;
