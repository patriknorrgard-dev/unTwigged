import type { Quote } from "../../types/Quote.types";
import QuoteItems from "../items/QuoteItems";

interface QuoteListProps {
  items: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = ({ items }) => {
  return (
    <ul className="quote-list">
      {items.map(item => (
        <li key={item.id}>
          <QuoteItems item={item} />
        </li>
      ))}
    </ul>
  )
}

export default QuoteList;