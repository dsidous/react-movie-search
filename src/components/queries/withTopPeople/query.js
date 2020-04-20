import gql from 'graphql-tag';

export const query = gql`
  query getTopPeople($query: String!) {
    topPeople(query: $query) {
      id
      name
      profile_path
      popularity
    }
  }
`;
