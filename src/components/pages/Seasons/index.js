import { compose, withProps } from 'recompose';

import withTv from '../../queries/withTv';
import withConfig from '../../queries/withConfig';
import Seasons from '../../templates/Seasons';

export default compose(
  withProps(props => ({ 'tvId': props.match.params.tvId })),
  withTv(),
  withConfig(),
)(Seasons);