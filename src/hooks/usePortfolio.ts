import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_PORTFOLIO_CONTENT } from "../graphql/queries/PortfolioQuery";
import type { ContentData } from "../types/Shared.types";
import type { Portfolio } from "../types/Portfolio.types";

const API_URL = 'https://untwigged.com/graphql';

const fetchPortfolioContent = async (user: string) => {
  return request<ContentData<Portfolio>>(API_URL, GET_PORTFOLIO_CONTENT, { user });
};

export function usePortfolio(user: string) {
  return useQuery<ContentData<Portfolio>>({
    queryKey: ['portfolio', user],
    queryFn: () => fetchPortfolioContent(user),
  });
}