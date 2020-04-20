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
      combined_credits {
        cast {
          ... on Person_Movie_Cast_Credit {
            id
            title
            character
            release_date
            poster_path
            vote_count
            media_type
          }
          ... on Person_Tv_Cast_Credit {
            id
            name
            character
            episode_count
            first_air_date
            poster_path
            vote_count
            media_type
          }
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
