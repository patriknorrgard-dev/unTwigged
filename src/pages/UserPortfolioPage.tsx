import { Link, useParams } from "@tanstack/react-router";
import EducationSection from "../components/sections/EducationSection";
import WorkSection from "../components/sections/WorkSection";
import QuoteSection from "../components/sections/QuoteSection";
import { usePortfolio } from "../hooks/usePortfolio";
import PortfolioItems from "../components/items/PortfolioItems";
import type { Portfolio } from "../types/Portfolio.types";

const UserPortfolioPage = () => {
  const { username } = useParams({ from: "/portfolio/$username" });
  const { data } = usePortfolio(username);

  return (
    <div className="portfolio">
      <Link
        to="/portfolio/$username/pdf"
        params={{ username }}
      >
        Download CV
      </Link>

      {data && (
        data.usercontentbyidGraphql1.results.map((item: Portfolio) => (
          <PortfolioItems item={item} />
        ))
      )}

      <div className="career">
        <EducationSection />
        <WorkSection />
      </div>

      <QuoteSection />
    </div>
  );
};

export default UserPortfolioPage;