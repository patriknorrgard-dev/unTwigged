import { usePortfolios } from "../hooks/usePortfolios";
import { useState } from "react";
import Sort from "../components/Sort";
import PortfolioList from "../components/lists/PortfolioList";

const PortfolioPage = () => {
  const [sort, setSort] = useState("CHANGED");
  const { data } = usePortfolios(sort);

  return (
    <div className="portfolio">
      <Sort
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
