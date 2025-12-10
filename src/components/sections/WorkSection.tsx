import WorkList from "../lists/WorkList";
import { type Portfolio } from "../../types/Portfolio.types";

interface WorkSectionProps {
  content: Portfolio;
}

const WorkSection: React.FC<WorkSectionProps> = ({ content }) => {
  return (
    <section key={content.id} className="career-section">
      <h3>Work experience</h3>
      {content.sections
        .filter((section) => section.__typename === "ParagraphWorkSection")
        .map((section) => (
          <WorkList key={section.id} items={section.milestoneItems} />
      ))}
    </section>
  )
}

export default WorkSection;