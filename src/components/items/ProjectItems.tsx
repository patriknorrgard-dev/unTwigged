import type { Project } from "../../types/Project.types";

interface ProjectItemsProps {
  item: Project;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ item }) => {
  return (
    <div className="project-item">
        <img
          src={item.image.mediaImage.url}
          alt={item.title}
          className="project-item__image"
        />
      <div className="project-item__content">
        <h3 className="project-item__title">{item.title}</h3>
        <p className="project-item__description">{item.preamble}</p>
      </div>
    </div>
  )
}

export default ProjectItems;