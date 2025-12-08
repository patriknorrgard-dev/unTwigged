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
        <div role="button" style={{ textAlign: "right" }}>
          <span style={{ border: "1px solid black", padding: "8px 16px" }}>Download CV</span>
        </div>
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
            <div className="project">
              <ProjectSection content={content} preview={true} />
              <Link 
                to="/projects/$username"
                params={{ username }}
              >
                <div role="button" style={{ textAlign: "right" }}>
                  <span style={{ border: "1px solid black", padding: "8px 16px" }}>View all projects</span>
                </div>   
              </Link>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default UserPortfolioPage;