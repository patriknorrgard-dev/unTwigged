import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_QUOTE_CONTENT } from "../graphql/queries/PortfolioQuery";

const API_URL = 'http://127.0.0.1:8888/graphql';

const fetchPortfolioContent = async () => {
  return request(API_URL, GET_QUOTE_CONTENT);
};

export function usePortfolio() {
  return useQuery({ queryKey: ['portfolio'], queryFn: fetchPortfolioContent });
}