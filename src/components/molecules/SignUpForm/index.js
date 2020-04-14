import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';

import { propTypes } from './propTypes';
import { auth, db } from '../../../firebase';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[800]),
    backgroundColor: blue[800],
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
  disabled: {
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
  },
}))(Button);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value, state) => () => ({
  ...state,
  [propertyName]: value,
});

const SignUpForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const history = useHistory();

  const onSubmit = event => {
    const { username, email, passwordOne } = state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            setState(() => ({ ...INITIAL_STATE }));
            history.push('/');
          });
      })
      .catch(error => setState(byPropKey('error', error)));

    event.preventDefault();
  };

  const {
    username, email, passwordOne, passwordTwo, error,
  } = state;

  const isInvalid = passwordOne !== passwordTwo
    || passwordOne === ''
    || email === ''
    || username === '';

  return (
    <form onSubmit={onSubmit}>

      <Typography
        align="center"
        variant="h6"
        style={{ margin: '28px 0 0' }}
      >
        OR
      </Typography>

      {error && (
        error.message
      )}
      <TextField
        id="username"
        label="Username"
        value={username}
        onChange={event => setState(byPropKey('username', event.target.value, state))}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />

      <TextField
        id="email"
        type="email"
        label="Email address"
        placeholder="Enter email"
        value={email}
        onChange={event => setState(byPropKey('email', event.target.value, state))}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="passwordOne"
        label="Password"
        type="password"
        value={passwordOne}
        onChange={event => setState(byPropKey('passwordOne', event.target.value, state))}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="passwordTwo"
        label="Confirm password"
        type="password"
        value={passwordTwo}
        onChange={event => setState(byPropKey('passwordTwo', event.target.value, state))}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <ColorButton
        fullWidth
        type="submit"
        disabled={isInvalid}
        className="btn btn-primary btn-block"
      >
        Create account
      </ColorButton>

    </form>
  );
};

SignUpForm.propTypes = propTypes;

export default SignUpForm;

export const SignUpLink = () => (
  <p>
    Don&apos;t have an account?
    <Link to="/signup">Sign Up</Link>
  </p>
);
