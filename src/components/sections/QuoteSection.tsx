import QuoteList from "../lists/QuoteList";
import type { Portfolio } from "../../types/Portfolio.types";

interface QuoteSectionProps {
  content: Portfolio;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ content }) => {
  return (
    <section key={content.id} className="quote-section">
      <h3>{content.sections[0].title}</h3>
      {content.sections
        .filter((section) => section.__typename === "ParagraphQuoteSection")
        .map((section) => (
          <QuoteList key={section.id} items={section.quoteItems} />
        ))
      }
    </section>
  )
}

export default QuoteSection;