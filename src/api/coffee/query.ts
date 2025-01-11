import { gql } from "@apollo/client";

export type GetCoffeeListResponse = {
  coffeeCollection: {
    edges: {
      node: {
        id: string;
        title: string;
        score: string | null;
        img_url: string | null;
        created_at: string;
      };
    }[];
  };
};

export const GET_COFFEE_LIST_BY_USER_ID = gql`
  query GetCoffeeList($userId: UUID!) {
    coffeeCollection(filter: { user_id: { eq: $userId } }) {
      edges {
        node {
          id
          title
          score
          img_url
          created_at
        }
      }
    }
  }
`;
