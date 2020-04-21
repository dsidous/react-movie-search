import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';

import { propTypes } from './propTypes';
import { SignUpLink } from '../SignUpForm';
import { auth } from '../../../firebase';

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

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const SignInForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const history = useHistory();

  const onSubmit = event => {
    const { email, password } = state;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setState(() => ({ ...INITIAL_STATE }));
        history.push('/');
      })
      .catch(error => setState(byPropKey('error', error)));

    event.preventDefault();
  };

  const { email, password, error } = state;
  const isInvalid = password === '' || email === '';

  return (
    <form onSubmit={onSubmit}>
      <Typography align="center" variant="h6" style={{ margin: '28px 0 0' }}>
        Or
      </Typography>

      {error && error.message}
      <TextField
        id="email"
        type="email"
        label="Email address"
        value={email}
        onChange={event => setState(s => ({ ...s, email: event.target.value }))}
        margin="normal"
        variant="outlined"
        fullWidth
        required
        autoFocus
        autoComplete="email"
      />
      <TextField
        id="passwordOne"
        label="Password"
        type="password"
        value={password}
        onChange={event =>
          setState(s => ({ ...s, password: event.target.value }))
        }
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <ColorButton fullWidth type="submit" disabled={isInvalid}>
        Log In
      </ColorButton>
      <SignUpLink />
    </form>
  );
};

SignInForm.propTypes = propTypes;

export default SignInForm;
