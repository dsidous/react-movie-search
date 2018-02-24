import React from 'react';
import { connect } from 'react-redux';

import { firebase,db } from '../../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser, onSetUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.onceGetUser(authUser.uid)
           .then(res => onSetUser(res.val()));
          onSetAuthUser(authUser);                    
        } else {
          onSetAuthUser(null);
          onSetUser(null)
        }
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
    onSetUser: (user) => dispatch({ type: 'USER_SET', user }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;