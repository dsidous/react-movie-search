import { graphql } from 'react-apollo';
import { query } from './query';

const withGenres = () =>
  graphql(query, {
    options: () => ({
      fetchPolicy: 'cache-first',
    }),
    props: ({ data: { genres = [], loading } }) => ({
      genresLoading: loading,
      genres,
    }),
  });

export default withGenres;
