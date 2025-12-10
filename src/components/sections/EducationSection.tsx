import EducationList from "../lists/EducationList";
import { type Portfolio } from "../../types/Portfolio.types";

interface EducationSectionProps {
  content: Portfolio;
}

const EducationSection: React.FC<EducationSectionProps> = ({ content }) => {
  return (
    <section className="career-section">
      <h3>Education</h3>
      {content.sections
        .filter((section) => section.__typename === "ParagraphEducationSection")
        .map((section) => (
          <EducationList key={section.id} items={section.milestoneItems} />
        ))
      }
    </section>
  )
}

export default EducationSection;