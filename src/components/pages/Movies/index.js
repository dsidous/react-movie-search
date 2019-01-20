import { compose, withProps } from 'recompose';

import withMovies from '../../queries/withMovies';
import withConfig from '../../queries/withConfig';
import withGenres from '../../queries/withGenres';
import Shows from '../../templates/Shows';

export default compose(
  withProps((props) => {
    const params = props.location.search.slice(1);
    return { query: params };
  }),
  withMovies(),
  withConfig(),
  withGenres(),
)(Shows);
