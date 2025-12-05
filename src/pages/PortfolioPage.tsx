import { usePortfolios } from "../hooks/usePortfolios";
import { Link } from "@tanstack/react-router";
import type { Portfolio } from "../types/Portfolio.types";
import defaultImage from "../assets/images/default.jpg";

const PortfolioPage = () => {
  const { data } = usePortfolios();

  return (
    <div className="portfolio">
      {data &&
        data.usercontentbyidGraphql1.results
          .filter((items: any) => items.author?.name)
          .map((items: Portfolio) => (
            <Link
              key={items.id}
              to="/portfolio/$username"
              params={{ username: items.author?.name }}
            >
              <div className="portfolio__item">
                <div className="portfolio__image">
                  <img
                    src={items.image?.mediaImage.url ?? defaultImage}
                    className="portfolio__thumbnail"
                  />
                </div>

                <div>
                  <h4>{items.title}</h4>
                  <p>{items.description}</p>
                  <p>{items.author?.name}</p>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default PortfolioPage;
