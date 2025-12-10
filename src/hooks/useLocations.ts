import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_USERS_LOCATION } from "../graphql/queries/MapQuery";
import type { ContentData } from "../types/Shared.types";
import type { UserLocationResult } from "../types/Location.types";

const API_URL = 'https://untwigged.com/graphql';

const fetchUserLocations = async (search: string) => {
  return request<ContentData<UserLocationResult>>(API_URL, GET_USERS_LOCATION, { search });
};

export function useLocations(search: string) {
  return useQuery<ContentData<UserLocationResult>>({
    queryKey: ['location', search],
    queryFn: () => fetchUserLocations(search),
  });
}