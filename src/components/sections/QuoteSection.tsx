import QuoteList from "../lists/QuoteList";
import type { Portfolio } from "../../types/Portfolio.types";

interface QuoteSectionProps {
  content: Portfolio;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ content }) => {

  return (
    <div key={content.id}>
      {content.sections
        .filter((section) => section.__typename === "ParagraphQuoteSection")
        .map((section) => (
          <div key={section.id}>
            <QuoteList items={section.quoteItems || []} />
          </div>
      ))}
    </div>
  )
}

export default QuoteSection;