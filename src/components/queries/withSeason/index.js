import { graphql } from 'react-apollo';
import { query } from './query';

const withSeason = () =>
  graphql(query, {
    options: props => ({
      fetchPolicy: 'cache-first',
      variables: {
        tvId: props.tvId,
        season: props.season,
      },
    }),
    props: ({ data: { tvSeason = {}, loading } }) => ({
      loading,
      tvSeason,
    }),
  });

export default withSeason;
