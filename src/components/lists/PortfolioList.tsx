import { Link } from "@tanstack/react-router";
import type { Portfolio } from "../../types/Portfolio.types";
import PortfolioItems from "../items/PortfolioItems";

interface PortfolioListProps {
  items: Portfolio[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
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
           <PortfolioItems key={item.id} item={item} /> 
          </Link>
      ))}
    </>
  )
}

export default PortfolioList;