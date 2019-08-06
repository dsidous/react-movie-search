import { compose, withProps } from 'recompose';

import withGenres from '../../queries/withGenres';
import Shows from '../../templates/Shows';

export default compose(
  withProps(() => ({ media: 'movies', resultMedia: 'movie' })),
  withGenres(),
)(Shows);
