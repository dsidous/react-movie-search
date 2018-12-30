import { compose } from 'recompose';

import withConfig from '../../queries/withConfig';
import WatchList from '../../templates/WatchList';

export default compose(
  withConfig(),
)(WatchList);
