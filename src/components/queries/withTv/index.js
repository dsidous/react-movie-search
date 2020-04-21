import { graphql } from 'react-apollo';
import { query } from './query';

const withTv = () =>
  graphql(query, {
    options: props => ({
      fetchPolicy: 'cache-first',
      variables: {
        tvId: props.tvId,
      },
    }),
    props: ({ data: { tv = {}, loading } }) => ({
      loading,
      show: tv,
    }),
  });

export default withTv;
