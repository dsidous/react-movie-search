import { array, func } from 'prop-types';

export const propTypes = {
  similar: array.isRequired,
  handleMovieClick: func.isRequired,
};

export const defaultProps = {};
