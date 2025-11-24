import type { Project } from "../../types/Project.types";

interface ProjectItemsProps {
  item: Project;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ item }) => {
  return (
    <>
      <h4>{item.title}</h4>
      <p>{item.preamble}</p>
      <img
        src={item.image.mediaImage.url}
        alt={item.title}
      />
    </>
  )
}

export default ProjectItems;