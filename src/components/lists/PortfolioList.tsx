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
    <>
      {items
        .filter((item: any) => item.author?.name)
        .map((item: Portfolio) => (
          <Link
            key={item.id}
            to="/portfolio/$username"
            params={{ username: item.author?.name }}
          >
           <PortfolioItems key={item.id} item={item} preview={preview} />
           <div className="portfolio__dates">
            <p className="portfolio__date">Created at {dateFormater(item.created.time)},</p>
            <p className="portfolio__date">Last updated {dateFormater(item.changed.time)}</p>
           </div>
          </Link>
      ))}
    </>
  )
}

export default PortfolioList;