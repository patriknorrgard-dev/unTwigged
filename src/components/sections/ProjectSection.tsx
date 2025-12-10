import ProjectList from "../lists/ProjectList";
import type { Project } from "../../types/Project.types";

interface ProjectSectionProps {
  content: Project;
  preview: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ content, preview }) => {
  return (
    <section key={content.id} className={`project-section ${preview ? "project-section--preview" : ""} `}>
      <h3>{content.sections[1].title}</h3>
      <p>{content.sections[0].description}</p>
      {content.sections
        .filter((section) => section.__typename === "ParagraphProjectSection")
        .map((section) => (
          <ProjectList
            key={section.id}
            items={section.projectItems}
            preview={preview}
          />
        ))
      }
    </section>
  )
}

export default ProjectSection;