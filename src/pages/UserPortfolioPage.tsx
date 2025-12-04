import { Link } from "@tanstack/react-router";
import { usePortfolios } from "../hooks/usePortfolios";

const UserPortfolioPage = () => {
  const { data } = usePortfolios();

  return (
    <>
      {data && (
        <Link
          to="/portfolio/$username/pdf"
          params={{ username: data.usercontentbyidGraphql1.results[0].author.name }}
        >
          Checkout PDF
        </Link>
      )}
    </>
  );
};

export default UserPortfolioPage;