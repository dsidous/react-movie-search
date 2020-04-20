import { graphql } from 'react-apollo';
import { query } from './query';

const withSearch = () =>
  graphql(query, {
    options: props => ({
      fetchPolicy: 'cache-first',
      variables: {
        query: props.query,
      },
    }),
    props: ({ data: { search = {}, loading } }) => ({
      loading,
      search,
    }),
  });

export default withSearch;
