import { gql } from "graphql-request";
import { PROJECT_SECTION_FRAGMENT } from "../fragments/projectFragment";

export const GET_PROJECT_CONTENT = gql`
  query GetProjectContent {
    usercontentGraphql1 {
      results {
        ... on NodeProject {
          id
          sections {
            ...ProjectSectionFragment
          }
        }
      }
    }
  }

  ${PROJECT_SECTION_FRAGMENT}
`;  