import { graphql } from 'react-apollo';
import { query } from './query';

const withPopularMovies = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      query: props.query,
    },
  }),
  props: ({
    data: {
      popular = [],
      loading,
    },
  }) => ({
    popular,
    popularLoading: loading,
  }),
});

export default withPopularMovies;
