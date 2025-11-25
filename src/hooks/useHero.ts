import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const API_URL = 'http://127.0.0.1:8888/graphql';

const GET_HERO_CONTENT = gql`
query GetHeroContent{
  usercontentGraphql1 {
    results {
      ... on NodeHome {
        id
        sections {
          ... on ParagraphHeroSection {
            id
            title
            description
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
`;

const fetchHero = async () => {
  return request(API_URL, GET_HERO_CONTENT);
};

export function useHero() {
  return useQuery({ queryKey: ['hero'], queryFn: fetchHero });
}