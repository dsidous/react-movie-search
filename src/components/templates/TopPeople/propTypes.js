import {
  bool,
  object,
  array,
} from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  loading: bool.isRequired,
  toppeople: array.isRequired,
};

export const defaultProps = {
};
