import { compose, withProps } from 'recompose';

import withMovie from '../../queries/withMovie';
import withConfig from '../../queries/withConfig';
import Container from './Container';

export default compose(
  withProps(props => ({ 'movieId': props.match.params.movieId })),
  withMovie(),
  withConfig(),
)(Container);
