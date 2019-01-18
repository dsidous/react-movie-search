import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { auth } from '../../../firebase';
import { propTypes } from './propTypes';

class SignInFacebook extends Component {
  static propTypes = propTypes;

  signInWithFB = () => {
    const { history } = this.props;

    auth.doSignInWithFacebook()
      .then(() => history.push('/'))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
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
    );
  }
}

export default withRouter(SignInFacebook);
