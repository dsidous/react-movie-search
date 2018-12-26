import gql from 'graphql-tag';

export const query = gql`
  query getMovie($movieId: ID!) {
    movie(id: $movieId) {
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
