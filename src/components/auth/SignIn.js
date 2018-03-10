import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Alert, Button } from 'react-bootstrap';

import FieldGroup from '../FieldGroup';
import { SignUpLink } from "./SignUp";
import { auth } from "../../firebase";

const SignInPage = ({ history }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

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
      <form onSubmit={this.onSubmit} className="form-signin">
        <h3>Please sign in</h3>

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

export default withRouter(SignInPage);

export { SignInForm };
