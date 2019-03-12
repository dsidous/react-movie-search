import { compose, withProps } from 'recompose';

import withPerson from '../../queries/withPerson';
import Person from '../../templates/Person';

export default compose(
  withProps(props => ({ personId: props.match.params.personId })),
  withPerson(),
)(Person);
