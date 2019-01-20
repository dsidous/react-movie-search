import { array, object, string } from 'prop-types';

export const propTypes = {
  config: object.isRequired,
  shows: array.isRequired,
  media: string.isRequired,
};

export const defaultProps = {
};
