import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_QUOTE_CONTENT } from "../graphql/queries/PortfolioQuery";

const API_URL = 'http://127.0.0.1:8888/graphql';

const fetchPortfolioContent = async (userId: number) => {
  return request(API_URL, GET_QUOTE_CONTENT, { userId });
};

export function usePortfolio(userId: number) {
  return useQuery({
    queryKey: ['portfolio', userId],
    queryFn: () => fetchPortfolioContent(userId),
  });
}