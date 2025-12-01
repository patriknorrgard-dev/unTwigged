import { useParams } from "@tanstack/react-router";
import { usePortfolio } from "../../hooks/usePortfolio";
import QuoteList from "../lists/QuoteList";

const QuoteSection = () => {
  const { username } = useParams({ from: "/portfolio/$username" });
  const { data } = usePortfolio(username);
  
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