import { Link } from "@tanstack/react-router";
import { usePortfolios } from "../hooks/usePortfolios";
import EducationSection from "../components/sections/EducationSection";
import WorkSection from "../components/sections/WorkSection";
import QuoteSection from "../components/sections/QuoteSection";

const UserPortfolioPage = () => {
  const { data } = usePortfolios();

  return (
    <>
      {data && (
        <div className="portfolio">
          <Link
            to="/portfolio/$username/pdf"
            params={{ username: data.usercontentbyidGraphql1.results[0].author.name }}
          >
            Checkout PDF
          </Link>
          <div className="career">
            <EducationSection />
            <WorkSection />
          </div>

          <QuoteSection />
        </div>
      )}
    </>
  );
};

export default UserPortfolioPage;