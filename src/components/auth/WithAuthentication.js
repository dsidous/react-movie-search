import React from 'react';
import { connect } from 'react-redux';

import { firebase,db } from '../../firebase';
import * as actions from "../../actions";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.onceGetUser(authUser.uid)
           .then(res => this.props.dispatch(actions.onSetUser(res.val())));
          this.props.dispatch(actions.onSetAuthUser(authUser));                    
        } else {
          this.props.dispatch(actions.onSetAuthUser(null));
          this.props.dispatch(actions.onSetUser(null));
        }
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user
  })

  const mapDispatchToProps = (dispatch) => ({
    dispatch
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;