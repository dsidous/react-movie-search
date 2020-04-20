import { bool, object, array } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  loading: bool,
  toppeople: array,
};

export const defaultProps = {};
