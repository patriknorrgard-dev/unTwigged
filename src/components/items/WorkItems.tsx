import type { Milestone } from "../../types/Milestone.types";

interface WorkItemsProps {
  item: Milestone;
}

const WorkItems: React.FC<WorkItemsProps> = ({ item }) => {
  return (
    <>
      <h4>{item.title}</h4>
      <p>{item.subtitle}</p>
    </>
  )
}

export default WorkItems;