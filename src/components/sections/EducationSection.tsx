import EducationList from "../lists/EducationList";
import { type Portfolio } from "../../types/Portfolio.types";

interface EducationSectionProps {
  content: Portfolio;
}

const EducationSection: React.FC<EducationSectionProps> = ({ content }) => {
  return (
    <div className="career__section">
      <h3>Education</h3>
      {content.sections
        .filter((section) => section.__typename === "ParagraphEducationSection")
        .map((section) => (
          <div key={section.id}>
            <EducationList items={section.milestoneItems} />
          </div>
      ))}
    </div>
  )
}

export default EducationSection;