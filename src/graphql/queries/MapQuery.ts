import { gql } from "graphql-request";

export const GET_USERS_LOCATION = gql`
  query GetUserLocations($search: String!) {
    usercontentbyidGraphql1(filter: {
      title: $search
    }) {
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