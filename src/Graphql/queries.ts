import { gql } from "@apollo/client";

export const GET_MONSTERS_NAMES = gql`
  query getAllMonsters {
    monsters {
      name
    }
  }
`;
