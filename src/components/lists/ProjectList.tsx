import type { Project } from "../../types/Project.types";
import ProjectItems from "../items/ProjectItems";

interface ProjectListProps {
  items: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ items }) => {
  return (
    <div className="project-list">
      {items.map(item => (
        <ProjectItems key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ProjectList;