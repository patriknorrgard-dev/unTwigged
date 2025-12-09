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
        <h2 className={`portfolio__title ${preview ? "portfolio__title" : "portfolio__title--large"}`}>{item.title}</h2>
        <p>{item.description}</p>
        {!preview && (
          <div
          dangerouslySetInnerHTML={{ __html: item.body.processed }}
        ></div>
        )}
      </div>
    </div>
  )
}

export default PortfolioItems;