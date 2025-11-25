import { gql } from "graphql-request";
import { HERO_SECTION_FRAGMENT } from "../fragments/heroFragment";

export const GET_HERO_CONTENT = gql`
  query GetHeroContent {
    usercontentGraphql1 {
      results {
        ... on NodeHome {
          id
          sections {
          ...HeroSectionFragment
          }
        }
      }
    }
  }

  ${HERO_SECTION_FRAGMENT}
`;