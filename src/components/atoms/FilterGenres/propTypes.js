import { array, string, func } from 'prop-types';

export const propTypes = {
  genres: array.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
};

export const defaultProps = {
};
