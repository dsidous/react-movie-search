import { graphql } from 'react-apollo';
import { query } from './query';

const withConfig = () =>
  graphql(query, {
    options: () => ({
      fetchPolicy: 'cache-first',
    }),
    props: ({ data: { config = {}, loading } }) => ({
      configLoading: loading,
      config,
    }),
  });

export default withConfig;
