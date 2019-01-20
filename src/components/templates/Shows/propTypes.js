import { object, array, bool } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  shows: array.isRequired,
  genres: array.isRequired,
  loading: bool.isRequired,
  genresLoading: bool.isRequired,
  configLoading: bool.isRequired,
};

export const defaultProps = {
};
