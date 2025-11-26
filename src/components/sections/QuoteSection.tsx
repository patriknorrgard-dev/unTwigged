import { usePortfolio } from "../../hooks/usePortfolio";
import QuoteList from "../lists/QuoteList";

const QuoteSection = () => {
  const { data } = usePortfolio(2);
  
  if (!data) return null;
  
  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((content: any) => (
          <div key={content.id}>

            {content.sections?.map((section: any) => (
              <div key={section.id}>
                <QuoteList items={section.quoteItems || []} />
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default QuoteSection;