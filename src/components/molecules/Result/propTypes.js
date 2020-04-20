import { array, object, string } from 'prop-types';

export const propTypes = {
  config: object.isRequired,
  shows: array.isRequired,
  resultMedia: string.isRequired,
};

export const defaultProps = {};
