import gql from 'graphql-tag';

export const query = gql`
  query getTvSeason($tvId:Int!, $season:Int!) {
    tvSeason(id:$tvId, season:$season) {
      name
      air_date
      episodes {
        name
        air_date
        episode_number
        overview
        still_path
      }
    }
  }
`
// export const query = gql`
//  query getTvs($query: String!) {
//     tvs(query: $query) {
//       id
//       backdrop_path
//       poster_path
//       title
//       overview
//       release_date
//       vote_average
//       genre_ids
//     }
//   }
// `