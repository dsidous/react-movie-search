import { compose, withProps } from 'recompose';

import withTopPeople from '../../queries/withTopPeople';
import TopPeople from '../../templates/TopPeople';

export default compose(
  withProps(props => {
    const params = new URLSearchParams(props.location.search);
    const page = parseInt(params.get("page"), 10) || 1;

    const query = `page=${page}`;
    return { 'query': query }
  }),
  withTopPeople(),
)(TopPeople);
