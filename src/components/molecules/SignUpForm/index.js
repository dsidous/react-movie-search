import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Alert, Button } from 'react-bootstrap';

import FieldGroup from '../../atoms/FieldGroup';
import { auth, db } from '../../../firebase';

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/');
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>

        <h3>Or Sign up for an account</h3>

        {error &&
          <Alert bsStyle="danger">
            {error.message}
          </Alert>
        }
        <FieldGroup
          id="username"
          type="text"
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
        />
        <FieldGroup
          id="email"
          type="email"
          label="Email address"
          placeholder="Enter email"
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
        />
        <FieldGroup
          id="passwordOne"
          label="Password"
          type="password"
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey("passwordOne", event.target.value))
          }
        />
        <FieldGroup
          id="passwordTwo"
          label="Confirm password"
          type="password"
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey("passwordTwo", event.target.value))
          }
        />
        <Button
          type="submit"
          disabled={isInvalid}
          className="btn btn-primary btn-block"
        >
          Sign Up
        </Button>

      </form>
    );
  }
}

export default withRouter(SignUpForm);

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={'/signup'}>Sign Up</Link>
  </p>
);