import { object, bool } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  config: object,
  show: object,
  loading: bool,
};

export const defaultProps = {
};
