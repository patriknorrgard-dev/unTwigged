import { Link, useParams } from "@tanstack/react-router";
import EducationSection from "../components/sections/EducationSection";
import WorkSection from "../components/sections/WorkSection";
import QuoteSection from "../components/sections/QuoteSection";
import { usePortfolio } from "../hooks/usePortfolio";
import PortfolioItems from "../components/items/PortfolioItems";

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
        data.usercontentbyidGraphql1.results.map((content) => (
          <>
            <PortfolioItems item={content} />

            <div className="career">
              <EducationSection content={content} />
              <WorkSection content={content} />
            </div>
            <div className="quotes">
              <QuoteSection content={content} />
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default UserPortfolioPage;