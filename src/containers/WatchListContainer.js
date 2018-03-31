import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import WatchList from '../components/WatchList';

class WatchListContainer extends Component {
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {   
    if (!this.props.authUser) {
      return (
        <div>
          Please sign in or register for watchlist
        </div>
      )
    } 
    return (
      <div>
        {this.props.config.config.images && this.props.user.user &&
          <WatchList
            movies={this.props.user.user.watchlist} 
            config={this.props.config.config}
            />
        }
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    authUser: state.session.authUser,
    user: state.user
  };
};

export default withRouter(
  connect(mapStateToProps)(WatchListContainer)
);