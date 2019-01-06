import { compose, withProps } from 'recompose';

import withTv from '../../queries/withTv';
import withConfig from '../../queries/withConfig';
import TvCastCrew from '../../templates/TvCastCrew';

export default compose(
  withProps(props => ({ 'tvId': props.match.params.tvId })),
  withTv(),
  withConfig(),
)(TvCastCrew);
