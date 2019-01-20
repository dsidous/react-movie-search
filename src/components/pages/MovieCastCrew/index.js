import { compose, withProps } from 'recompose';

import withMovie from '../../queries/withMovie';
import ShowCastCrew from '../../templates/ShowCastCrew';

export default compose(
  withProps(props => ({ movieId: props.match.params.movieId })),
  withMovie(),
)(ShowCastCrew);
