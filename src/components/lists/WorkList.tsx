import type { Milestone } from "../../types/Milestone.types";
import WorkItems from "../items/WorkItems";

interface WorkListProps {
  items: Milestone[];
}

const WorkList: React.FC<WorkListProps> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <WorkItems key={item.id} item={item} />
      ))}
    </>
  )
}

export default WorkList;