import { compose, withProps } from 'recompose';

import withGenres from '../../queries/withGenres';
import Shows from '../../templates/Shows';

export default compose(
  withProps(() => {
    return { media: 'movies' };
  }),
  withGenres(),
)(Shows);
