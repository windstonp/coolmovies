import { gql } from "@apollo/client";

export const currentUserQuery = gql`
  query {
    currentUser {
      id
      name
    }
  }
`;

export const allUsersQuery = gql`
  query {
    allUsers {
      nodes {
        id
        name
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
