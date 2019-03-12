import { graphql } from 'react-apollo';
import { query } from './query';

const withConfig = () => graphql(query, {
  options: () => ({
    fetchPolicy: 'cache-and-network',
  }),
  props: ({
    data: {
      config = {},
      loading,
    },
  }) => ({
    configLoading: loading,
    config,
  }),
});

export default withConfig;
