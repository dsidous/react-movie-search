import { object, array, bool } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  shows: array,
  genres: array,
  loading: bool,
  genresLoading: bool,
  configLoading: bool,
};

export const defaultProps = {};
