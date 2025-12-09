import { gql } from "graphql-request";

export const GET_USERS_LOCATION = gql`
  query GetUserLocations {
    usercontentbyidGraphql1 {
      results {
        ... on NodePortfolio {
          id
          user {
            location { 
              lat
              lon
            }
          }
        }
      }
    }
  }
`;