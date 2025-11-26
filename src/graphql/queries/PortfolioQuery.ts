import { gql } from "graphql-request";
import { QUOTE_SECTION_FRAGMENT } from "../fragments/quoteFragment";

export const GET_QUOTE_CONTENT = gql`
  query GetQuoteContent($userId: Float!) {
    usercontentbyidGraphql1(filter: { user: $userId }) {
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