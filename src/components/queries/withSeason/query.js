import gql from 'graphql-tag';

export const query = gql`
  query getTvSeason($tvId: Int!, $season: Int!) {
    tvSeason(id: $tvId, season: $season) {
      name
      air_date
      poster_path
      episodes {
        name
        air_date
        episode_number
        overview
        still_path
      }
    }
  }
`;
