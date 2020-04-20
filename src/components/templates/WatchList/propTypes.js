import { bool, object } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  configLoading: bool,
  config: object,
};

export const defaultProps = {};
