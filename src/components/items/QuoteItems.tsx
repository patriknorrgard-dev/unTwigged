import type { Quote } from "../../types/Quote.types";

interface QuoteItemsProps {
  item: Quote;
}

const QuoteItems: React.FC<QuoteItemsProps> = ({ item }) => {
  return (
    <article className="quote-item">
      <figure>
        <img
          src={item.image.mediaImage.url}
          className="quote-item__image"
        />
      </figure>
      
      <section className="quote-item__content">
        <h4 className="quote-item__quote">{item.quote}</h4>
        <p className="quote-item__source">{item.source}</p>
      </section>
    </article>
  )
}

export default QuoteItems;