import type { Portfolio } from "../../types/Portfolio.types";
import defaultImage from "../../assets/images/default.jpg";

interface PortfolioItemsProps {
  item: Portfolio;
  preview: boolean;
}

const PortfolioItems: React.FC<PortfolioItemsProps> = ({ item, preview }) => {
  return (
    <div className="portfolio__item">
      <div className={`portfolio__image ${preview ? "portfolio__image" : "portfolio__image--large"}`}>
        <img
          src={item.image?.mediaImage.url ?? defaultImage}
          className="portfolio__thumbnail"
        />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default PortfolioItems;