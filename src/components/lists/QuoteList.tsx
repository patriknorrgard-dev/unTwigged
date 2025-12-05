import type { Quote } from "../../types/Quote.types";
import QuoteItems from "../items/QuoteItems";

interface QuoteListProps {
  items: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = ({ items }) => {
  return (
    <div className="quote-list">
      {items.map(item => (
        <QuoteItems key={item.id} item={item} />
      ))}
    </div>
  )
}

export default QuoteList;