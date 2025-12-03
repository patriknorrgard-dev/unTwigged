import { gql } from "graphql-request";
import { PROJECT_SECTION_FRAGMENT } from "../fragments/projectFragment";
import { QUOTE_SECTION_FRAGMENT } from "../fragments/quoteFragment";
import { EDUCATION_SECTION_FRAGMENT } from "../fragments/educationFragment";

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
            ...EducationSectionFragment
            ...ProjectSectionFragment
            ...QuoteSectionFragment
          }
        }
      }
    }
  }

  ${EDUCATION_SECTION_FRAGMENT}
  ${PROJECT_SECTION_FRAGMENT}
  ${QUOTE_SECTION_FRAGMENT}
`;