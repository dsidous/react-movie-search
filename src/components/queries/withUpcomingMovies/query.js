import gql from 'graphql-tag';

export const query = gql`
  query getUpcomingMovies($query: String) {
    upcoming(query: $query) {
      id
      backdrop_path
      poster_path
      title
      release_date
      vote_average
      genre_names {
        genre_name
      }
    }
  }
`;
