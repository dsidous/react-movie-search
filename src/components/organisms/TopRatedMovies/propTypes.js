import { array, func } from 'prop-types';

export const propTypes = {
  filterTopMovies: func.isRequired,
  topMovies: array.isRequired,
};

export const defaultProps = {
};
