import { object, node } from 'prop-types';

export const propTypes = {
  config: object.isRequired,
};

export const isDrawerWrapperPropTypes = {
  children: node.isRequired,
};

export const defaultProps = {};
