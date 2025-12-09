import { Link, useParams } from "@tanstack/react-router";
import EducationSection from "../components/sections/EducationSection";
import WorkSection from "../components/sections/WorkSection";
import QuoteSection from "../components/sections/QuoteSection";
import { usePortfolio } from "../hooks/usePortfolio";
import PortfolioItems from "../components/items/PortfolioItems";
import ProjectSection from "../components/sections/ProjectSection";

const UserPortfolioPage = () => {
  const { username } = useParams({ from: "/portfolio/$username" });
  const { data } = usePortfolio(username);

  return (
    <div className="portfolio">
      <Link
        to="/portfolio/$username/pdf"
        params={{ username }}
      >
        <button className="portfolio__button">Download CV</button>
      </Link>

      {data && (
        data.usercontentbyidGraphql1.results.map((content) => (
          <>
            <PortfolioItems item={content} preview={false} />

            <div className="career">
              <EducationSection content={content} />
              <WorkSection content={content} />
            </div>
            
            <QuoteSection content={content} />
            <ProjectSection content={content} preview={true} />
            <Link 
              to="/projects/$username"
              params={{ username }}
            >
              <button className="portfolio__button">View all projects</button>
            </Link>
          </>
        ))
      )}
    </div>
  );
};

export default UserPortfolioPage;