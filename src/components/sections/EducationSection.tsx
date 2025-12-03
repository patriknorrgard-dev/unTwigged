import { usePortfolio } from "../../hooks/usePortfolio";
import { useParams } from "@tanstack/react-router";
import EducationList from "../lists/EducationList";

const EducationSection = () => {
  const { username } = useParams({ from: "/portfolio/$username" })
  const { data } = usePortfolio(username);
    
  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((content: any) => (
          <div key={content.id}>
            
            {content.sections.map((section: any) => (
              <div key={section.id}>
                <EducationList items={section.milestoneItems || []} />
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default EducationSection;