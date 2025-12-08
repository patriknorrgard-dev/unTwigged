import WorkList from "../lists/WorkList";
import { type Portfolio } from "../../types/Portfolio.types";

interface WorkSectionProps {
  content: Portfolio;
}

const WorkSection: React.FC<WorkSectionProps> = ({ content }) => {
  return (
    <div key={content.id} className="career__section">
      <h3>Work experience</h3>
      {content.sections
        .filter((section) => section.__typename === "ParagraphWorkSection")
        .map((section) => (
          <div key={section.id}>
            <WorkList items={section.milestoneItems} />
          </div>
      ))}
    </div>
  )
}

export default WorkSection;