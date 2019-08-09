import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  static propTypes = propTypes;

  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/');
          })
          .catch(error => this.setState(byPropKey('error', error)));
      })
      .catch(error => this.setState(byPropKey('error', error)));

    event.preventDefault();
  };

  render() {
    const {
      username, email, passwordOne, passwordTwo, error,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || username === '';

    return (
      <form onSubmit={this.onSubmit}>

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
          onChange={event => this.setState(byPropKey('username', event.target.value))}
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
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
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
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
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
  }
}

export default withRouter(SignUpForm);

export const SignUpLink = () => (
  <p>
    Don&apos;t have an account?
    <Link to="/signup">Sign Up</Link>
  </p>
);
