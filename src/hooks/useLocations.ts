import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_USERS_LOCATION } from "../graphql/queries/MapQuery";

const API_URL = 'https://untwigged.com/graphql';

const fetchUserLocations = async (search: string) => {
  return request(API_URL, GET_USERS_LOCATION, { search });
};

export function useLocations(search: string) {
  return useQuery({
    queryKey: ['location', search],
    queryFn: () => fetchUserLocations(search),
  });
}