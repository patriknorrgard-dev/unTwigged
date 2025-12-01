import { useParams } from "@tanstack/react-router";
import { usePortfolio } from "../hooks/usePortfolio";

const PortfolioPage = () => {
  const { username } = useParams({ from: "/portfolio/$username" });
  const { data } = usePortfolio(username);

  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((content: any) => (
          <div key={content.id}>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        ))
      )}
    </>
  )
}

export default PortfolioPage;