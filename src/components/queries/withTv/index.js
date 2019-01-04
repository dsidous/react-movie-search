import { graphql } from 'react-apollo';
import { query } from './query';

const withTv = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      tvId: props.tvId,
    },
  }),
  props: ({
    data: {
      tv = {},
      loading,
    },
  }) => ({
    loading,
    tv,
  }),
});

export default withTv;
