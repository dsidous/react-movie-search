import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

class SignInForm extends Component {
  static propTypes = propTypes;

  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/');
      })
      .catch(error => this.setState(byPropKey('error', error)));

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Typography
          variant="h5"
          style={{ margin: '28px 0 0' }}
        >
          Or Sign in
        </Typography>

        {error && error.message}
        <TextField
          id="email"
          type="email"
          label="Email address"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="passwordOne"
          label="Password"
          type="password"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />
        <ColorButton
          fullWidth
          type="submit"
          disabled={isInvalid}
        >
          Sign In
        </ColorButton>
        <SignUpLink />
      </form>
    );
  }
}

export default withRouter(SignInForm);
