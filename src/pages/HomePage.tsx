import HeroSection from "../components/sections/HeroSection";
import Map from "../components/Map";
import { useLocations } from "../hooks/useLocations";
import { useRef, useState } from "react";

const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const { data } = useLocations(search);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSearch(inputRef.current?.value ?? "");
  }

  if (!data) return;

  return (
    <>
      <HeroSection />

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          ref={inputRef}
          placeholder="e.g. frontend developer"
        />
        <button type="submit" hidden>Search</button>
      </form>
        
      <Map results={data.usercontentbyidGraphql1.results} />
    </>
  );
};

export default HomePage;
