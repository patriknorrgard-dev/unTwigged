import ProjectList from "../lists/ProjectList";
import type { Project } from "../../types/Project.types";
import { Link } from "@tanstack/react-router";

interface ProjectSectionProps {
  content: Project;
  username: string;
  preview: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ content, preview, username }) => {

  if (!content.sections || !content.sections.length) return null;

  return (
    <section key={content.id} className={`project-section ${preview ? "project-section--preview" : ""} `}>
      <h3 className="project-section__title">{content.sections[1].title}</h3>
      <p className="project-section__description">{content.sections[1].description}</p>

      {preview && (
        <Link 
          to="/projects/$username"
          params={{ username }}
        >
          <button className="project-section__button">View all projects</button>
        </Link>
      )}
      
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