import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const API_URL = 'http://127.0.0.1:8888/graphql';

const GET_PROJECT_CONTENT = gql`
query GetProjectContent{
  usercontentGraphql1 {
    results {
      ... on NodeProject {
        id
        sections {
          ... on ParagraphProjectSection {
            id
            sectionTitle
            sectionDescription
            projectItems {
              ... on ParagraphProjectItem {
                id
                title
                preamble
                image {
                  ... on MediaImage {
                    mediaImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const fetchProjects = async () => {
  return request(API_URL, GET_PROJECT_CONTENT);
};

export function useProjects() {
  return useQuery({ queryKey: ['project'], queryFn: fetchProjects });
}