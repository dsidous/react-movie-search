import { object, string } from 'prop-types';

export const contextTypes = {
  router: object.isRequired,
};

export const propTypes = {
  title: string,
};

export const defaultProps = {
};
