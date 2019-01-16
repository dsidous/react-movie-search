import { array, func } from 'prop-types';

export const propTypes = {
  genres: array.isRequired,
  onChange: func.isRequired,
  value: array.isRequired,
};

export const defaultProps = {
};
