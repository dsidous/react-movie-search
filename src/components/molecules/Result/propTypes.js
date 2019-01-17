import { object, string } from 'prop-types';

export const propTypes = {
  config: object.isRequired,
  movies: object.isRequired,
  media: string.isRequired,
};

export const defaultProps = {
};
