import HeroSection from "../components/sections/HeroSection";
import Map from "../components/Map";
import { useLocations } from "../hooks/useLocations";
import { useState } from "react";
import Search from "../components/Search";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const { data } = useLocations(search);

  if (!data) return;

  return (
    <>
      <HeroSection />
      <Search onSearch={setSearch} />
      <Map results={data.usercontentbyidGraphql1.results} />
    </>
  );
};

export default HomePage;
