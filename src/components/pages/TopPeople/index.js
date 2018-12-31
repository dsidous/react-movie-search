import { compose, withProps } from 'recompose';

import withTopPeople from '../../queries/withTopPeople';
import withConfig from '../../queries/withConfig';
import Container from './Container';

export default compose(
  withProps(props => {
    const params = new URLSearchParams(props.location.search);
    const page = parseInt(params.get("page"), 10) || 1;

    const query = `page=${page}`;
    return { 'query': query }
  }),
  withTopPeople(),
  withConfig(),
)(Container);
