import gql from 'graphql-tag';

export const query = gql`
  query getTvGenres {
    genresTv {
      id
      name
    }
  }
`;
