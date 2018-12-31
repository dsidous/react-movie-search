import { compose } from 'recompose';

import withConfig from '../../queries/withConfig';
import MainNavbar from '../../templates/MainNavbar';

export default compose(
  withConfig(),
)(MainNavbar);
