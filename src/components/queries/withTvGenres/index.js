import { graphql } from 'react-apollo';
import { query } from './query';

const withTvGenres = () =>
  graphql(query, {
    options: () => ({
      fetchPolicy: 'cache-first',
    }),
    props: ({ data: { genresTv = [], loading } }) => ({
      genresLoading: loading,
      genres: genresTv,
    }),
  });

export default withTvGenres;
