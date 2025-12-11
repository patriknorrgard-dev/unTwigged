import { Link } from "@tanstack/react-router";
import type { Portfolio } from "../../types/Portfolio.types";
import PortfolioItems from "../items/PortfolioItems";
import { dateFormater } from "../../utils/dateFormater";

interface PortfolioListProps {
  items: Portfolio[];
  preview: boolean;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items, preview }) => {
  return (
    <ul className="portfolio-list">
      {items
        .filter((item) => item.author?.name)
        .map((item) => (
          <li key={item.id}>
            <Link
              to="/portfolio/$username"
              params={{ username: item.author?.name }}
            >
              <div className="portfolio-list__dates">
                <time className="portfolio-list__date">Created at {dateFormater(item.created.time)}</time>
                <span>,&nbsp;</span>
                <time className="portfolio-list__date">Last updated {dateFormater(item.changed.time)}</time>
              </div>
              <PortfolioItems key={item.id} item={item} preview={preview} />
            </Link>
          </li>
      ))}
    </ul>
  )
}

export default PortfolioList;