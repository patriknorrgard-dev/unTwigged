import { gql } from "graphql-request";

export const GET_PORTFOLIOS_CONTENT = gql`
  query GetPortfoliosContent($sort: UsercontentbyidGraphql1SortKeys!) {
    usercontentbyidGraphql1(sortKey: $sort) {
      results {
        ... on NodePortfolio {
          author {
            name
          }
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
          created {
            time
          }
          changed {
            time
          }
        }
      }
    }
  }
`;