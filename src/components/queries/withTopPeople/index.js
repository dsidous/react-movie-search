import { graphql } from 'react-apollo';
import { query } from './query';

const withTopPeople = () =>
  graphql(query, {
    options: props => ({
      fetchPolicy: 'cache-first',
      variables: {
        query: props.query,
      },
    }),
    props: ({ data: { topPeople = [], loading } }) => ({
      loading,
      toppeople: topPeople,
    }),
  });

export default withTopPeople;
