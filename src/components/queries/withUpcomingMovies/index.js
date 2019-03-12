import { graphql } from 'react-apollo';
import { query } from './query';

const withUpcomingMovies = () => graphql(query, {
  options: () => ({
    fetchPolicy: 'cache-and-network',
  }),
  props: ({
    data: {
      upcoming = {},
      loading,
    },
  }) => ({
    upcomingLoading: loading,
    upcoming,
  }),
});

export default withUpcomingMovies;
