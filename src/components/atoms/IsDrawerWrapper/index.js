import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { propTypes } from './propTypes';

const IsDrawerWrapper = ({
  children,
  width,
  mobileOpen,
  handleDrawerToggle,
  classes: { drawerPaper },
}) =>
  isWidthUp('md', width) ? (
    children
  ) : (
    <Drawer
      // container={container}
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: drawerPaper,
      }}
      ModalProps={{
        keepMounted: true,
      }}
      onClick={handleDrawerToggle}
    >
      {children}
    </Drawer>
  );

export default withWidth()(IsDrawerWrapper);

IsDrawerWrapper.propTypes = propTypes;
