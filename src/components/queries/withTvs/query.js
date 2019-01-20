import gql from 'graphql-tag';

export const query = gql`
  query getTvs($query: String) {
    tvs(query: $query) {
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
