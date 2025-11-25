import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GET_PROJECT_CONTENT } from "../graphql/queries/ProjectQuery";

const API_URL = 'http://127.0.0.1:8888/graphql';

const fetchProjects = async () => {
  return request(API_URL, GET_PROJECT_CONTENT);
};

export function useProjects() {
  return useQuery({ queryKey: ['project'], queryFn: fetchProjects });
}