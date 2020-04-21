import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const MainMenu = ({ classes: { menuItem, menuList } }) => (
  <MenuList className={menuList}>
    <MenuItem>
      <Link to="/movies" className={menuItem}>
        <Typography variant="button">MOVIES</Typography>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/tvs" className={menuItem}>
        <Typography variant="button">TVS</Typography>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/person" className={menuItem}>
        <Typography variant="button">PEOPLE</Typography>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/watchlist" className={menuItem}>
        <Typography variant="button">
          WATCHLIST&nbsp;
          <span className="fa fa-bookmark" />
        </Typography>
      </Link>
    </MenuItem>
  </MenuList>
);

export default MainMenu;
