import gql from 'graphql-tag';

export const query = gql`
  query getMovie($movieId: ID!) {
    movie(id: $movieId) {
      id
      backdrop_path,
      poster_path,
      title,
      release_date,
      runtime,
      vote_average,
      tagline,
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
        id
        author
        content
      }
      similar {
        results {
          id
          title
          poster_path
        }
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
    }
  }
`;
