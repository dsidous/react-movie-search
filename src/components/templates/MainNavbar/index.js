/* eslint-disable camelcase */
import React, { Component } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { propTypes } from './propTypes';
import { FirebaseAuthContext } from '../../../firebase/FirebaseAuthProvider';
import SignOutButton from '../../atoms/SignOut';
import NavSearch from '../../atoms/NavSearch';

const styles = {
  appBar: {
    background: '#1f1d1d',
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
};

class MainNavbar extends Component {
  static propTypes = propTypes;

  state = {
    isLoading: false,
    options: [],
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const { classes, config } = this.props;
    const { authUser, user } = this.context;
    return (
      <AppBar color="primary" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.menuItem}>
            <Typography variant="h6">
              Movie Search
            </Typography>
          </Link>
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
            <div style={{ flexGrow: 1 }} />
            <MenuItem>
              <NavSearch config={config} />
            </MenuItem>
            {!authUser && (
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
            )}
            {authUser && (
              <div>
                <IconButton
                  aria-label="Account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
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
                  onClose={this.handleClose}
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
            )}
          </MenuList>
        </Toolbar>
      </AppBar>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(MainNavbar);

MainNavbar.contextType = FirebaseAuthContext;
