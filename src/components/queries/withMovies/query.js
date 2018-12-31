import gql from 'graphql-tag';

export const query = gql`
  query getMovies($query: String!) {
    movies(query: $query) {
      id
      backdrop_path
      poster_path
      title
      overview
      release_date
      vote_average
      genre_ids
    }
  }
`;
