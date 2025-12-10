import type { Milestone } from "../../types/Milestone.types";
import WorkItems from "../items/WorkItems";

interface WorkListProps {
  items: Milestone[];
}

const WorkList: React.FC<WorkListProps> = ({ items }) => {
  return (
    <ul className="career__list">
      {items.map(item => (
        <li key={item.id}>
          <WorkItems item={item} />
        </li>
      ))}
    </ul>
  )
}

export default WorkList;