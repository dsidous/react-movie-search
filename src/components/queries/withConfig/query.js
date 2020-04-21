import gql from 'graphql-tag';

export const query = gql`
  query getConfig {
    config {
      images {
        base_url
        secure_base_url
        backdrop_sizes
        poster_sizes
        profile_sizes
        still_sizes
      }
    }
  }
`;
