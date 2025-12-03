import type { Milestone } from "../../types/Milestone.types";
import EducationItems from "../items/EducationItems";

interface EducationListProps {
  items: Milestone[];
}

const EducationList: React.FC<EducationListProps> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <EducationItems key={item.id} item={item} />
      ))}
    </>
  )
}

export default EducationList;