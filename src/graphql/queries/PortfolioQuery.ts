import { gql } from "graphql-request";
import { PROJECT_SECTION_FRAGMENT } from "../fragments/projectFragment";
import { QUOTE_SECTION_FRAGMENT } from "../fragments/quoteFragment";

export const GET_PORTFOLIO_CONTENT = gql`
  query GetPortfolioContent($userId: Float!) {
    usercontentbyidGraphql1(filter: { user: $userId }) {
      results {
        ... on NodePortfolio {
          id
          sections {
            ...ProjectSectionFragment
            ...QuoteSectionFragment
          }
        }
      }
    }
  }

  ${PROJECT_SECTION_FRAGMENT}
  ${QUOTE_SECTION_FRAGMENT}
`;