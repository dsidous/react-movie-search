import gql from 'graphql-tag';

export const query = gql`
  query getPerson($personId: ID!) {
    person(id: $personId) {
      id
      biography
      birthday
      deathday
      name
      place_of_birth
      profile_path
      movie_credits {
        cast {
          id
          original_title
          character
          release_date
          poster_path
          vote_count
        }
      }
      images {
        file_path
        height
        width
        vote_average
      }
    }  
  }
`;
