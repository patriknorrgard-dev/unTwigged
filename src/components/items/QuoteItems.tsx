import type { Quote } from "../../types/Quote.types";

interface QuoteItemsProps {
  item: Quote;
}

const QuoteItems: React.FC<QuoteItemsProps> = ({ item }) => {
  return (
    <>
      <h4>{item.quote}</h4>
      <p>{item.source}</p>
    </>
  )
}

export default QuoteItems;