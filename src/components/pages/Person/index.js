import { compose, withProps } from 'recompose';

import withPerson from '../../queries/withPerson';
import Container from './Container';

export default compose(
  withProps(props => ({ 'personId': props.match.params.personId })),
  withPerson(),
)(Container);
