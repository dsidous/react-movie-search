import gql from 'graphql-tag';

export const query = gql`
  query getGenres {
    genres {
      id
      name
    }
  }
`;
