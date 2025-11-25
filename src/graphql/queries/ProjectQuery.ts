import { gql } from "graphql-request";

export const GET_PROJECT_CONTENT = gql`
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