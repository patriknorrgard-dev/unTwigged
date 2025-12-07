import { dateFormater } from "../../utils/dateFormater";
import type { Portfolio } from "../../types/Portfolio.types";
import defaultImage from "../../assets/images/default.jpg";

interface PortfolioItemsProps {
  item: Portfolio;
}

const PortfolioItems: React.FC<PortfolioItemsProps> = ({ item }) => {
  return (
    <div className="portfolio__item">
      <div className="portfolio__image">
        <img
          src={item.image?.mediaImage.url ?? defaultImage}
          className="portfolio__thumbnail"
        />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.author?.name}</p>
        <p>Created at {dateFormater(item.created.time)}</p>
        <p>Last updated {dateFormater(item.changed.time)}</p>
      </div>
    </div>
  )
}

export default PortfolioItems;