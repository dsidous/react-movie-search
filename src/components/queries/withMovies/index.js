import { graphql } from 'react-apollo';
import { query } from './query';

const withMovies = () =>
  graphql(query, {
    options: props => ({
      fetchPolicy: 'cache-first',
      variables: {
        query: props.query,
      },
    }),
    props: ({ data: { movies = [], loading } }) => ({
      loading,
      shows: movies,
    }),
  });

export default withMovies;
