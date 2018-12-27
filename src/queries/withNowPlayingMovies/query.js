import gql from 'graphql-tag';

export const query = gql`
  query getNowPlayingMovies ($query: String) {
    nowplaying(query:$query) {
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
