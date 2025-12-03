import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_PORTFOLIOS_CONTENT } from "../graphql/queries/PortfoliosQuery";

const API_URL = 'https://untwigged.com/graphql';

const fetchPortfoliosContent = async () => {
  return request(API_URL, GET_PORTFOLIOS_CONTENT);
};

export function usePortfolios() {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: () => fetchPortfoliosContent(),
  });
}