import type { Project } from "../../types/Project.types";

interface ProjectItemsProps {
  item: Project;
  preview: boolean;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ item, preview }) => {
  return (
    <article className={`project-item ${preview ? "project-item--preview" : ""}`}>
      <figure>
        <img
          src={item.image.mediaImage.url}
          alt={item.title}
          className="project-item__image"
        />
      </figure>

      <section className="project-item__content">
        <h3 className="project-item__title">{item.title}</h3>
        <p className="project-item__description">{item.preamble}</p>
      </section>
    </article>
  )
}

export default ProjectItems;