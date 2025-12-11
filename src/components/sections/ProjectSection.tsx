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
      <Link 
          to="/projects/$username"
          params={{ username }}
        >
          <button className="portfolio__button">View all projects</button>
        </Link>
    </section>
  )
}

export default ProjectSection;