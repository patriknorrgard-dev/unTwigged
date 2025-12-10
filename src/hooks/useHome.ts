import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_HERO_CONTENT } from "../graphql/queries/HomeQuery";
import type { HeroData } from "../types/Hero.types";

const API_URL = 'https://untwigged.com/graphql';

const fetchHomeContent = async () => {
  return request<HeroData>(API_URL, GET_HERO_CONTENT);
};

export function useHome() {
  return useQuery<HeroData>({
    queryKey: ['home'],
    queryFn: fetchHomeContent
  });
}