import gql from 'graphql-tag';

export const query = gql`
  query getTv($tvId: ID!) {
    tv(id: $tvId) {
      id
      backdrop_path
      poster_path
      name
      first_air_date
      vote_average
      overview
      genres {
        id
        name
      }
      credits {
        crew {
          credit_id
          job
          name
          profile_path
        }
        cast {
          id
          credit_id
          name
          profile_path
          character
        }
      }
      seasons {
        poster_path
        overview
        name
        episode_count
        air_date
        season_number
      }
      reviews {
        id
        author
        content
      }
      images {
        posters {
          file_path
        }
        backdrops {
          file_path
        }
      }
      videos {
        key
        type
      }
      similar {
        results {
          id
          title
          poster_path
        }
      }
    }
  }
`;
