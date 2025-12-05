import type { Quote } from "../../types/Quote.types";

interface QuoteItemsProps {
  item: Quote;
}

const QuoteItems: React.FC<QuoteItemsProps> = ({ item }) => {
  return (
    <div className="quote-items">
      <img
        src={item.image.mediaImage.url}
        className="quote-items__image"
      />
      <div className="quote-items__content">
        <h4>{item.quote}</h4>
        <p>- {item.source}</p>
      </div>
    </div>
  )
}

export default QuoteItems;