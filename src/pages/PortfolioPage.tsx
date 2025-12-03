import { usePortfolios } from "../hooks/usePortfolios";
import { Link } from "@tanstack/react-router";
import type { Portfolio } from "../types/Portfolio.types";

const PortfolioPage = () => {
  const { data } = usePortfolios();

  return (
    <div className="portfolio">
      {data && (
        data.usercontentbyidGraphql1.results.map((items: Portfolio) => (
          <div key={items.id}>
            <Link
              to="/portfolio/$username"
              params={{ username: items.author?.name }}
            >
              <h4>{items.title}</h4>
              <p>{items.description}</p>
              <p>{items.author?.name}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default PortfolioPage;