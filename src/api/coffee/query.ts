import { gql } from "@apollo/client";
import { Query } from "src/gql/graphql";

export type GetCoffeeListResponse = Pick<Query, "coffeeCollection">;

export const GET_COFFEE_LIST = gql`
  query GetCoffeeList {
    coffeeCollection {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
