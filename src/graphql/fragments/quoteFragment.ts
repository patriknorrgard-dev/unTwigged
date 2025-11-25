import { gql } from "graphql-request";

export const QUOTE_SECTION_FRAGMENT = gql`
  fragment QuoteSectionFragment on ParagraphQuoteSection {
    id
    quoteItems {
      ... on ParagraphQuoteItem {
        quote
        source
      }
    }
  }
`;
