import type { Milestone } from "../../types/Milestone.types";
import { dateFormater } from "../../utils/dateFormater";

interface EducationItemsProps {
  item: Milestone;
}

const EducationItems: React.FC<EducationItemsProps> = ({ item }) => {
  return (
    <article className="career-item">
      <details className="career-item__details">
        <summary className="career-item__title">{item.title}</summary>

        <div className="career-item__details-content">
          <p className="career-item__subtitle">{item.subtitle}</p>
          <div className="career-item__dates">
            <time className="career-item__date" dateTime={item.dateFrom?.time || ''}>
              {dateFormater(item.dateFrom?.time)}
            </time>
            <span>-</span>
            <time className="career-item__date" dateTime={item.dateTo?.time || ''}>
              {dateFormater(item.dateTo?.time)}
            </time>
          </div>
        </div>
      </details>
    </article>
  )
}

export default EducationItems;