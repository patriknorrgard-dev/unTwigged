import ProjectList from "../lists/ProjectList";
import type { Project } from "../../types/Project.types";

interface ProjectSectionProps {
  content: Project;
  preview: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ content, preview }) => {
  return (
    <div key={content.id} className="project-section">
      {content.sections
        .filter((section) => section.__typename === "ParagraphProjectSection")
        .map((section) => (
          <div key={section.id}>
            <h2 className="project-section__title">{section.title}</h2>
            <p className="project-section__description">{section.description}</p>

            <ProjectList items={section.projectItems || []} preview={preview} />
          </div>
      ))}
    </div>
  )
}

export default ProjectSection;