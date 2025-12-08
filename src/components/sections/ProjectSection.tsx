import ProjectList from "../lists/ProjectList";
import type { Project } from "../../types/Project.types";

interface ProjectSectionProps {
  content: Project;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ content }) => {
  return (
    <div key={content.id} className="project-section">
      {content.sections.map((section) => (
        <div key={section.id}>
          <h2 className="project-section__title">{section.title}</h2>
          <p className="project-section__description">{section.description}</p>

          <ProjectList items={section.projectItems || []} />
        </div>
      ))}
    </div>
  )
}

export default ProjectSection;