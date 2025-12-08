import type { Project } from "../../types/Project.types";
import ProjectItems from "../items/ProjectItems";

interface ProjectListProps {
  items: Project[];
  preview: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ items, preview }) => {
  return (
    <div className={`project-list ${preview ? "project-list--row" : "project-list--col"}`}>
      {items.map(item => (
        <ProjectItems key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ProjectList;