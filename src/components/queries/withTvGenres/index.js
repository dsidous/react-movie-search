import { graphql } from 'react-apollo';
import { query } from './query';

const withTvGenres = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
  }),
  props: ({
    data: {
      genresTv = [],
      loading,
    },
  }) => ({
    genresLoading: loading,
    genres: genresTv,
  }),
});

export default withTvGenres;
