import { compose, withProps } from 'recompose';

import withMovie from '../../queries/withMovie';
import MovieCastCrew from '../../templates/MovieCastCrew';

export default compose(
  withProps(props => ({ movieId: props.match.params.movieId })),
  withMovie(),
)(MovieCastCrew);
