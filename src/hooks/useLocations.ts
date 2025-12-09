import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_USERS_LOCATION } from "../graphql/queries/MapQuery";

const API_URL = 'https://untwigged.com/graphql';

const fetchUserLocations = async () => {
  return request(API_URL, GET_USERS_LOCATION);
};

export function useLocations() {
  return useQuery({
    queryKey: ['location'],
    queryFn: () => fetchUserLocations(),
  });
}