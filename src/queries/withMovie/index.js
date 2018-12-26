import { graphql } from 'react-apollo';
import { query } from './query';

const withMovie = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      movieId: props.movieId,
    },
  }),
  props: ({
    data: {
      movie = {},
      loading,
    },
  }) => ({
    loading,
    movie,
  }),
});

export default withMovie;
