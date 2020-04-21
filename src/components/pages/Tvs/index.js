import { compose, withProps } from 'recompose';

import withTvGenres from '../../queries/withTvGenres';
import Shows from '../../templates/Shows';

export default compose(
  withProps(() => ({ media: 'tvs', resultMedia: 'tv' })),
  withTvGenres(),
)(Shows);
