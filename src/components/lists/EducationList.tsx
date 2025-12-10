import type { Milestone } from "../../types/Milestone.types";
import EducationItems from "../items/EducationItems";

interface EducationListProps {
  items: Milestone[];
}

const EducationList: React.FC<EducationListProps> = ({ items }) => {
  return (
    <ul className="career__list">
      {items.map(item => (
        <li key={item.id}>
          <EducationItems item={item} />
        </li>
      ))}
    </ul>
  )
}

export default EducationList;