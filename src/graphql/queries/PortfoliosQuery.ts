import { gql } from "graphql-request";

export const GET_PORTFOLIOS_CONTENT = gql`
  query GetPortfoliosContent{
    usercontentbyidGraphql1 {
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
        }
      }
    }
  }
`;