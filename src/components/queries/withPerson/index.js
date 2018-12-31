import { graphql } from 'react-apollo';
import { query } from './query';

const withPerson = () => graphql(query, {
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      personId: props.personId,
    },
  }),
  props: ({
    data: {
      person = {},
      loading,
    },
  }) => ({
    loading,
    person,
  }),
});

export default withPerson;
