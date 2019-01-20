import { object, bool } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  show: object.isRequired,
  loading: bool.isRequired,
};

export const defaultProps = {
};
