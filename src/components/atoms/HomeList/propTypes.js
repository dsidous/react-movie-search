import { func, string, array } from 'prop-types';

export const propTypes = {
  title: string,
  list: array.isRequired,
  goToMovie: func.isRequired,
};

export const defaultProps = {
};
