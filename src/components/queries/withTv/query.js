import gql from 'graphql-tag';

export const query = gql`
  query getTv($tvId: ID!) {
    tv(id: $tvId) {
      id
      backdrop_path,
      poster_path,
      name,
      first_air_date,
      vote_average,
      overview,
      genres {
        id
        name
      }
      credits {
        crew {
          job
          name
          profile_path
        }
        cast {
          id
          name
          profile_path
          character
        }
      }
      reviews {
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
