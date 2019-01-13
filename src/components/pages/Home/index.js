import { compose, withProps } from 'recompose';

import withPopularMovies from '../../queries/withPopularMovies';
import withNowPlayingMovies from '../../queries/withNowPlayingMovies';
import withUpcomingMovies from '../../queries/withUpcomingMovies';
import Home from '../../templates/Home';

export default compose(
  withProps(() => ({ 'query': 'page=1' })),
  withPopularMovies(),
  withNowPlayingMovies(),
  withUpcomingMovies(),
)(Home);
