import { compose, withProps } from 'recompose';

import withPopularMovies from '../../queries/withPopularMovies';
import withNowPlayingMovies from '../../queries/withNowPlayingMovies';
import withUpcomingMovies from '../../queries/withUpcomingMovies';
import withConfig from '../../queries/withConfig';
import Home from '../../templates/Home';

export default compose(
  withProps(props => ({ 'query': 'page=1' })),
  withPopularMovies(),
  withNowPlayingMovies(),
  withUpcomingMovies(),
  withConfig(),
)(Home);
