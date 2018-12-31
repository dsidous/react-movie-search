import { compose, withProps } from 'recompose';

import withPerson from '../../queries/withPerson';
import withConfig from '../../queries/withConfig';
import Container from './Container';

export default compose(
  withProps(props => ({ 'personId': props.match.params.personId })),
  withPerson(),
  withConfig(),
)(Container);
