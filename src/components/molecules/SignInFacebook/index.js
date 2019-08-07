import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';

import { auth } from '../../../firebase';
import { propTypes } from './propTypes';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[800],
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
}))(Button);

export class SignInFacebook extends Component {
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
        <ColorButton
          variant="contained"
          fullWidth
          type="submit"
          onClick={this.signInWithFB}
        >
          Log in with Facebook
        </ColorButton>
      </div>
    );
  }
}

export default withRouter(SignInFacebook);
