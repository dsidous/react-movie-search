import { array, func } from 'prop-types';

export const propTypes = {
  filterTopMovies: func.isRequired,
  topMovies: array.isRequired,
  goToMovie: func.isRequired,
};

export const defaultProps = {
};
