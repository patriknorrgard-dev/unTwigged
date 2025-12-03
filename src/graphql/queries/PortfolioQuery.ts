import { gql } from "graphql-request";
import { PROJECT_SECTION_FRAGMENT } from "../fragments/projectFragment";
import { QUOTE_SECTION_FRAGMENT } from "../fragments/quoteFragment";
import { EDUCATION_SECTION_FRAGMENT } from "../fragments/educationFragment";
import { WORK_SECTION_FRAGMENT } from "../fragments/workFragment";

export const GET_PORTFOLIO_CONTENT = gql`
  query GetPortfolioContent($user: String!) {
    usercontentbyidGraphql1(filter: { username: $user }) {
      results {
        ... on NodePortfolio {
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
          sections {
            __typename
            ...EducationSectionFragment
            ...ProjectSectionFragment
            ...QuoteSectionFragment
            ...WorkSectionFragment
          }
        }
      }
    }
  }

  ${EDUCATION_SECTION_FRAGMENT}
  ${PROJECT_SECTION_FRAGMENT}
  ${QUOTE_SECTION_FRAGMENT}
  ${WORK_SECTION_FRAGMENT}
`;