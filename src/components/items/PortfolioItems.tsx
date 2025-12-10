import type { Portfolio } from "../../types/Portfolio.types";
import defaultImage from "../../assets/images/default.jpg";

interface PortfolioItemsProps {
  item: Portfolio;
  preview: boolean;
}

const PortfolioItems: React.FC<PortfolioItemsProps> = ({ item, preview }) => {
  return (
    <article className="portfolio-item">
      <figure className={`${preview ? "portfolio-item__image" : "portfolio-item__image--large"}`}>
        <img
          src={item.image?.mediaImage.url ?? defaultImage}
          className="portfolio-item__thumbnail"
        />
      </figure>

      <section>
        <h2 className={`${preview ? "portfolio-item__title" : "portfolio-item__title--large"}`}>
          {item.title}
        </h2>
        <p>{item.description}</p>
        {!preview && (
          <div dangerouslySetInnerHTML={{ __html: item.body.processed }}></div>
        )}
      </section>
    </article>  
  )
}

export default PortfolioItems;