import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_PORTFOLIO_CONTENT } from "../graphql/queries/PortfolioQuery";

const API_URL = 'http://127.0.0.1:8888/graphql';

const fetchPortfolioContent = async (user: string) => {
  return request(API_URL, GET_PORTFOLIO_CONTENT, { user });
};

export function usePortfolio(user: string) {
  return useQuery({
    queryKey: ['portfolio', user],
    queryFn: () => fetchPortfolioContent(user),
  });
}