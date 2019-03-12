import { compose, withProps } from 'recompose';

import withTv from '../../queries/withTv';
import ShowCastCrew from '../../templates/ShowCastCrew';

export default compose(
  withProps(props => ({ tvId: props.match.params.tvId })),
  withTv(),
)(ShowCastCrew);
