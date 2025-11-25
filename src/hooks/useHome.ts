import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_HERO_CONTENT } from "../graphql/queries/HomeQuery";

const API_URL = 'http://127.0.0.1:8888/graphql';

const fetchHomeContent = async () => {
  return request(API_URL, GET_HERO_CONTENT);
};

export function useHome() {
  return useQuery({ queryKey: ['home'], queryFn: fetchHomeContent });
}