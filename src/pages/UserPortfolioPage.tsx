import { Link, useParams } from "@tanstack/react-router";
import EducationSection from "../components/sections/EducationSection";
import WorkSection from "../components/sections/WorkSection";
import QuoteSection from "../components/sections/QuoteSection";

const UserPortfolioPage = () => {
  const { username } = useParams({ from: "/portfolio/$username" });

  return (
    <div className="portfolio">
      <Link
        to="/portfolio/$username/pdf"
        params={{ username }}
      >
        Download CV
      </Link>
      <div className="career">
        <EducationSection />
        <WorkSection />
      </div>

      <QuoteSection />
    </div>
  );
};

export default UserPortfolioPage;