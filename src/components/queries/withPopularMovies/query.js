import gql from 'graphql-tag';

export const query = gql`
  query getPopularMovies($query: String) {
    popular(query: $query) {
      id
      backdrop_path
      poster_path
      title
      release_date
      vote_average
      genre_ids
    }
  }
`;
