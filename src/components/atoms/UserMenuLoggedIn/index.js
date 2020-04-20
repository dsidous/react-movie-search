import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import SignOutButton from '../SignOut';

const UserMenuLoggedIn = ({ username }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={e => setAnchorEl(e.currentTarget)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem disabled>{username}</MenuItem>
        <Divider />
        <MenuItem>
          <Link to="/watchlist">Watchlist</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <SignOutButton />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenuLoggedIn;
