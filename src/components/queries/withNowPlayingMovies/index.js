import { graphql } from 'react-apollo';
import { query } from './query';

const withNowPlayingMovies = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      query: props.query,
    },
  }),
  props: ({
    data: {
      nowplaying = {},
      loading,
    },
  }) => ({
    nowplaying,
    nowPlayingLoading: loading,
  }),
});

export default withNowPlayingMovies;
