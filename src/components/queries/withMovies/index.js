import { graphql } from 'react-apollo';
import { query } from './query';

const withMovies = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      query: props.query,
    },
  }),
  props: ({
    data: {
      movies = [],
      loading,
    },
  }) => ({
    loading,
    shows: movies,
    media: 'movies',
  }),
});

export default withMovies;
