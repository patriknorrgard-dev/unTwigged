import type { Project } from "../../types/Project.types";

interface ProjectItemsProps {
  item: Project;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ item }) => {
  return (
    <div className="project">
      <div className="project__image">
        <img
          src={item.image.mediaImage.url}
          alt={item.title}
        />
      </div>
      <div className="project__content">
        <h4>{item.title}</h4>
        <p>{item.preamble}</p>
      </div>
    </div>
  )
}

export default ProjectItems;