import type { Portfolio } from "../../types/Portfolio.types";
import defaultImage from "../../assets/images/default.jpg";

interface PortfolioItemsProps {
  item: Portfolio;
  preview: boolean;
}

const PortfolioItems: React.FC<PortfolioItemsProps> = ({ item, preview }) => {

  if (!item.description && !item.body) return null;

  return (
    <article className={`portfolio-item ${preview ? "portfolio-item--preview" : ""}`}>
      <figure>
        <img
          src={item.image?.mediaImage.url ?? defaultImage}
          className={`portfolio-item__image`}
        />
      </figure>

      <section>
        <h2 className={`portfolio-item__title`}>
          {item.title}
        </h2>
        <p>{item.description}</p>
        {!preview && (
          <div dangerouslySetInnerHTML={{ __html: item.body?.processed }}></div>
        )}
      </section>
    </article>  
  )
}

export default PortfolioItems;