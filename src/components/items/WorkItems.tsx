import type { Milestone } from "../../types/Milestone.types";
import { dateFormater } from "../../utils/dateFormater";

interface WorkItemsProps {
  item: Milestone;
}

const WorkItems: React.FC<WorkItemsProps> = ({ item }) => {
  return (
    <>
      <h4 className="career__title">{item.title}</h4>

      <div className="career__details">
        <p className="career__subtitle">{item.subtitle}</p>
        <div className="career__dates">
          <p className="career_date">{dateFormater(item.dateFrom?.time)}</p>
          <p>-</p>
          <p className="career_date">{dateFormater(item.dateTo?.time)}</p>
        </div>
      </div>
    </>
  )
}

export default WorkItems;