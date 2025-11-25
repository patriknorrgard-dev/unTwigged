import { gql } from "graphql-request";
import { QUOTE_SECTION_FRAGMENT } from "../fragments/quoteFragment";

export const GET_QUOTE_CONTENT = gql`
  query GetQuoteContent {
    usercontentGraphql1 {
      results {
        ... on NodePortfolio {
          id
          sections {
            ...QuoteSectionFragment
          }
        }
      }
    }
  }

  ${QUOTE_SECTION_FRAGMENT}
`;