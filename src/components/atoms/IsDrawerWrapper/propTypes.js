import { object, node, string, bool, func } from 'prop-types';

export const propTypes = {
  children: node.isRequired,
  width: string.isRequired,
  mobileOpen: bool.isRequired,
  handleDrawerToggle: func.isRequired,
  classes: object.isRequired,
};

export const defaultProps = {};
