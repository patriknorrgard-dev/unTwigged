import { usePortfolios } from "../hooks/usePortfolios";
import { Link } from "@tanstack/react-router";
import type { Portfolio } from "../types/Portfolio.types";
import defaultImage from "../assets/images/default.jpg";
import { dateFormater } from "../utils/dateFormater";
import { useState } from "react";

const PortfolioPage = () => {
  const [sort, setSort] = useState("CHANGED");
  const { data } = usePortfolios(sort);

  return (
    <div className="portfolio">
      <div style={{ display: "flex", justifyContent: "right", gap: "0.5rem" }}>
        Filter:
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="CHANGED">Last updated</option>
          <option value="CREATED">Last created</option>
        </select>
      </div>
      
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
                  <p>Created at {dateFormater(items.created.time)}</p>
                  <p>Last updated {dateFormater(items.changed.time)}</p>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default PortfolioPage;
