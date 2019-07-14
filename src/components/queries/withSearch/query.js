import gql from 'graphql-tag';

export const query = gql`
  query search($query: String!) {
    search(query: $query) {
      id
      media_type
      title
      name
      profile_path
      poster_path
      first_air_date
      release_date
    }
  }
`;
