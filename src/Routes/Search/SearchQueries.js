import { gql } from "@apollo/client";

export const SEARCH = gql`
  query search($term: String!) {
    searchpost(term: $term) {
      title
    }
  }
`;
