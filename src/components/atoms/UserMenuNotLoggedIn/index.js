import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const UserMenuNotLoggedIn = ({ classes: { menuItem, menuListUser } }) => (
  <MenuList className={menuListUser}>
    <MenuItem>
      <Link to="/login" className={menuItem}>
        <Typography variant="body2">Login</Typography>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/signup" className={menuItem}>
        <Typography variant="body2">Sign up</Typography>
      </Link>
    </MenuItem>
  </MenuList>
);

export default UserMenuNotLoggedIn;
