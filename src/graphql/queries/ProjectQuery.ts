import { gql } from "graphql-request";
import { PROJECT_SECTION_FRAGMENT } from "../fragments/projectFragment";

export const GET_PROJECT_CONTENT = gql`
  query GetProjectContent($userId: Float!) {
    usercontentbyidGraphql1(filter: { user: $userId }) {
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