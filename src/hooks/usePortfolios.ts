import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_PORTFOLIOS_CONTENT } from "../graphql/queries/PortfoliosQuery";

const API_URL = 'https://untwigged.com/graphql';

const fetchPortfoliosContent = async (sort: string) => {
  return request(API_URL, GET_PORTFOLIOS_CONTENT, { sort });
};

export function usePortfolios(sort: string) {
  return useQuery({
    queryKey: ['portfolio', sort],
    queryFn: () => fetchPortfoliosContent(sort),
  });
}