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
           .then(res => this.props.dispatch(actions.onSetUser(res.val())))
           .then(this.setWatchlist);
          this.props.dispatch(actions.onSetAuthUser(authUser));                    
        } else {
          this.props.dispatch(actions.onSetAuthUser(null));
          this.props.dispatch(actions.onSetUser(null));
          this.props.dispatch({type: "RESET_WATCHLIST_STATE"});
        }
      });
    }

    setWatchlist = () => {
      const { watchlist } = this.props.user.user;
      if (watchlist) {
        watchlist.map(movieId => 
          this.props.dispatch(actions.getWatchListMovie(movieId))
        )
      }
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