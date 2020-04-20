/* eslint-disable camelcase */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { propTypes } from './propTypes';
import { FirebaseAuthContext } from '../../../firebase/FirebaseAuthProvider';
import NavSearch from '../../atoms/NavSearch';
import MainMenu from '../../atoms/MainMenu';
import UserMenuNotLoggedIn from '../../atoms/UserMenuNotLoggedIn';
import UserMenuLoggedIn from '../../atoms/UserMenuLoggedIn';
import IsDrawerWrapper from '../../atoms/IsDrawerWrapper';

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
    padding: 0,
  },
  menuListUser: {
    display: 'flex',
    padding: 0,
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

const MainNavbar = props => {
  const classes = useStyles();
  const { config } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const UserMenu = () => (
    <FirebaseAuthContext.Consumer>
      {({ user, authUser }) =>
        !authUser ? (
          <UserMenuNotLoggedIn classes={classes} />
        ) : (
          <UserMenuLoggedIn username={user.username} classes={classes} />
        )
      }
    </FirebaseAuthContext.Consumer>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        <IsDrawerWrapper
          classes={classes}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        >
          <MainMenu classes={classes} />
        </IsDrawerWrapper>
        <div style={{ flexGrow: 1 }} />
        <NavSearch config={config} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;

MainNavbar.propTypes = propTypes;
