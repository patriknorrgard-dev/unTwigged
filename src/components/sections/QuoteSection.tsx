import QuoteList from "../lists/QuoteList";
import type { Portfolio } from "../../types/Portfolio.types";

interface QuoteSectionProps {
  content: Portfolio;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ content }) => {

  if (!content.sections || !content.sections.length) return null;

  return (
    <section key={content.id} className="quote-section">
      <h3>{content.sections[0]?.title}</h3>
      {content.sections
        .filter((section) => section.__typename === "ParagraphQuoteSection")
        .filter(section => section.quoteItems.length > 0)
        .map((section) => (
          <QuoteList key={section.id} items={section.quoteItems} />
        ))
      }
    </section>
  )
}

export default QuoteSection;