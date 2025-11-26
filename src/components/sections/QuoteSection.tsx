import { usePortfolio } from "../../hooks/usePortfolio";

const QuoteSection = () => {
  const { data } = usePortfolio(2);

  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((content: any) => (
          <div key={content.id}>
            <h2>{content.title}</h2>

            {content.sections?.map((section: any) => (
              <div key={section.id}>
                <h3>{section.sectionTitle}</h3>
                <p>{section.sectionDescription}</p>

                {section.quoteItems.map((item: any) => (
                  <p>{item.quote}</p>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default QuoteSection;