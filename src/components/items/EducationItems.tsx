import type { Milestone } from "../../types/Milestone.types";

interface EducationItemsProps {
  item: Milestone;
}

const EducationItems: React.FC<EducationItemsProps> = ({ item }) => {
  return (
    <>
      <h4>{item.title}</h4>
      <p>{item.subtitle}</p>
    </>
  )
}

export default EducationItems;