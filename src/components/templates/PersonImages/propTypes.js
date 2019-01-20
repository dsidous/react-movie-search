import { object, bool } from 'prop-types';

export const propTypes = {
  loading: bool.isRequired,
  person: object.isRequired,
  config: object.isRequired,
};

export const defaultProps = {
};
