import { usePortfolios } from "../hooks/usePortfolios";
import { useState } from "react";
import Filter from "../components/Filter";
import PortfolioList from "../components/lists/PortfolioList";

const PortfolioPage = () => {
  const [sort, setSort] = useState("CHANGED");
  const { data } = usePortfolios(sort);

  return (
    <div className="portfolio">
      <Filter 
        sort={sort} 
        onChangeSort={setSort} 
      />
      
      {data && (
        <PortfolioList items={data.usercontentbyidGraphql1.results} preview={true} />
      )}
    </div>
  );
};

export default PortfolioPage;
