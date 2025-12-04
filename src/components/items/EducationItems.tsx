import type { Milestone } from "../../types/Milestone.types";

interface EducationItemsProps {
  item: Milestone;
}

const EducationItems: React.FC<EducationItemsProps> = ({ item }) => {
  return (
    <>
      <h4 className="career__title">{item.title}</h4>

      <div className="career__details">
        <p className="career__subtitle">{item.subtitle}</p>
        <div className="career__dates">
          <p className="career_date">{item.dateFrom?.time}</p>
          <p>-</p>
          <p className="career_date">{item.dateTo?.time}</p>
        </div>
      </div>
    </>
  )
}

export default EducationItems;