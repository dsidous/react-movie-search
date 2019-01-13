import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';

import { auth } from "../../../firebase";

class SignInFacebook extends Component {

  signInWithFB = () => {
    auth.doSignInWithFacebook()
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.signInWithFB}
        >
          Log in with Facebook
          </Button>
      </div>
    )
  }
}

export default withRouter(SignInFacebook);
