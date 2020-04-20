import { graphql } from 'react-apollo';
import { query } from './query';

const withTvs = () =>
  graphql(query, {
    options: props => ({
      fetchPolicy: 'cache-first',
      variables: {
        query: props.query,
      },
    }),
    props: ({ data: { tvs = [], loading } }) => ({
      loading,
      shows: tvs,
    }),
  });

export default withTvs;
