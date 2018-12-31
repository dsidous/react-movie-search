import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Alert, Button } from 'react-bootstrap';

import FieldGroup from '../atoms/FieldGroup';
import { SignUpLink } from "./SignUpForm";
import { auth } from "../../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push("/");
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <h3>Or Sign in</h3>

        {error && <Alert bsStyle="danger">{error.message}</Alert>}
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
          value={password}
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
        />
        <Button
          type="submit"
          disabled={isInvalid}
          className="btn btn-primary btn-block"
        >
          Sign In
        </Button>
        <SignUpLink />
      </form>
    );
  }
}

export default withRouter(SignInForm);
