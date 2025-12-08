import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_PORTFOLIO_CONTENT } from "../graphql/queries/PortfolioQuery";
import type { PortfolioData } from "../types/Portfolio.types";

const API_URL = 'https://untwigged.com/graphql';

const fetchPortfolioContent = async (user: string) => {
  return request<PortfolioData>(API_URL, GET_PORTFOLIO_CONTENT, { user });
};

export function usePortfolio(user: string) {
  return useQuery<PortfolioData>({
    queryKey: ['portfolio', user],
    queryFn: () => fetchPortfolioContent(user),
  });
}