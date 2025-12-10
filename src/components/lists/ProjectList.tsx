import type { Project } from "../../types/Project.types";
import ProjectItems from "../items/ProjectItems";

interface ProjectListProps {
  items: Project[];
  preview: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ items, preview }) => {
  return (
    <ul className={`project-list ${preview ? "project-list--preview" : ""}`}>
      {items.map(item => (
        <li key={item.id}>
          <ProjectItems item={item} preview={preview} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectList;