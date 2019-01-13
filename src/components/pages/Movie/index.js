import { compose, withProps } from 'recompose';

import withMovie from '../../queries/withMovie';
import withConfig from '../../queries/withConfig';
import Movie from '../../templates/Movie';

export default compose(
  withProps(props => ({ 'movieId': props.match.params.movieId })),
  withMovie(),
  withConfig(),
)(Movie);
