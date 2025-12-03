import { usePortfolio } from "../../hooks/usePortfolio";
import { useParams } from "@tanstack/react-router";
import WorkList from "../lists/WorkList";

const WorkSection = () => {
  const { username } = useParams({ from: "/portfolio/$username" });
  const { data } = usePortfolio(username);

  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((content: any) => (
          <div key={content.id}>
            
            {content.sections
              .filter((section: any) => section.__typename === "ParagraphWorkSection")
              .map((section: any) => (
                <div key={section.id}>
                  <WorkList items={section.milestoneItems || []} />
                </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default WorkSection;