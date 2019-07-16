/* eslint-disable camelcase */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { propTypes, isDrawerWrapperPropTypes } from './propTypes';
import { FirebaseAuthContext } from '../../../firebase/FirebaseAuthProvider';
import SignOutButton from '../../atoms/SignOut';
import NavSearch from '../../atoms/NavSearch';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: '#1f1d1d',
    maxHeight: '63px',
  },
  logo: {
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuList: {
    display: 'flex',
    flexGrow: 1,
  },
  menuListUser: {
    display: 'flex',
  },
  menuItem: {
    color: '#fff',
    textDecoration: 'none',
  },
  searchMenu: {
    overflow: 'visible',
  },
  drawerPaper: {
    background: '#000',

    '& $menuList': {
      flexDirection: 'column',
      marginTop: theme.spacing(3),

      '& $menuItem': {
        padding: '0 16px',
        width: '100%',
      },
    },
  },
}));

const MainNavbar = (props) => {
  const classes = useStyles();
  const { config, width } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const MainMenu = () => (
    <MenuList className={classes.menuList}>
      <MenuItem>
        <Link to="/movies" className={classes.menuItem}>
          <Typography variant="button">
            MOVIES
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/tvs" className={classes.menuItem}>
          <Typography variant="button">
            TVS
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/person" className={classes.menuItem}>
          <Typography variant="button">
            PEOPLE
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/watchlist" className={classes.menuItem}>
          <Typography variant="button">
            WATCHLIST&nbsp;
            <span className="fa fa-bookmark" />
          </Typography>
        </Link>
      </MenuItem>
    </MenuList>
  );

  const UserMenu = () => (
    <FirebaseAuthContext.Consumer>
      {({ user, authUser }) => ((!authUser)
        ? (
          <MenuList className={classes.menuListUser}>
            <MenuItem>
              <Link to="/login" className={classes.menuItem}>
                <Typography variant="body2">
                  Login
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup" className={classes.menuItem}>
                <Typography variant="body2">
                  Sign up
                </Typography>
              </Link>
            </MenuItem>
          </MenuList>
        )
        : (
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
              <MenuItem disabled>
                {user ? user.username : null}
              </MenuItem>
              <MenuItem href="#" disabled>
                view profile
              </MenuItem>
              <MenuItem divider />
              <MenuItem>
                <Link to="/watchlist">
                  Watchlist
                </Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem>
                <SignOutButton />
              </MenuItem>
            </Menu>
          </div>
        ))}
    </FirebaseAuthContext.Consumer>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const IsDrawerWrapper = ({ children }) => (
    isWidthUp('md', width)
      ? children
      : (
        <Drawer
          // container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {children}
        </Drawer>
      ));

  IsDrawerWrapper.propTypes = isDrawerWrapperPropTypes;

  return (
    <AppBar color="primary" className={classes.appBar}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.menuItem}>
          <Typography variant="h6" className={classes.logo}>
            Movie Search
          </Typography>
        </Link>
        <IsDrawerWrapper>
          <MainMenu />
        </IsDrawerWrapper>
        <div style={{ flexGrow: 1 }} />
        <NavSearch config={config} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default withWidth()(MainNavbar);

MainNavbar.propTypes = propTypes;
