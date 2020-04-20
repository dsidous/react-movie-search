import { string, array } from 'prop-types';

export const propTypes = {
  title: string,
  list: array.isRequired,
};

export const defaultProps = {};
