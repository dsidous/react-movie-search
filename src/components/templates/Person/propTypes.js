import { object, bool } from 'prop-types';

export const propTypes = {
  loading: bool.isRequired,
  person: object.isRequired,
};

export const defaultProps = {
};
