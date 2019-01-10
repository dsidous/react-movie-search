import { compose, withProps } from 'recompose';

import withPerson from '../../queries/withPerson';
import PersonImages from '../../templates/PersonImages';

export default compose(
  withProps(props => ({ 'personId': props.match.params.personId })),
  withPerson(),
)(PersonImages);
