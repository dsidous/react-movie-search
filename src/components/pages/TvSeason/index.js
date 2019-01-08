import { compose, withProps } from 'recompose';

import withSeason from '../../queries/withSeason';
import withConfig from '../../queries/withConfig';
import TvSeason from '../../templates/TvSeason';

export default compose(
  withProps(props => {
    const tvId = parseInt(props.match.params.tvId);
    const season = parseInt(props.match.params.season);
    return {tvId,season}
  }),
  withSeason(),
  withConfig(),
)(TvSeason);