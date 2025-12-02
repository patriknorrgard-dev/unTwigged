import { gql } from "graphql-request";

export const PROJECT_SECTION_FRAGMENT = gql`
  fragment ProjectSectionFragment on ParagraphProjectSection {
    id
    title
    description
    projectItems {
      ... on ParagraphProjectItem {
        id
        title
        preamble
        image {
          ... on MediaImage {
            mediaImage { url }
          }
        }
      }
    }
  }
`;
