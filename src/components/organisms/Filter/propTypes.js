import { array, string, func, node } from 'prop-types';

export const propTypes = {
  query: string,
  media: string,
  queryUpdate: func,
  genres: array,
  children: node,
};

export const defaultProps = {};
