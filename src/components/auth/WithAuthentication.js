import React from 'react';
import { connect } from 'react-redux';

import * as actions from "../../actions";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.props.dispatch(actions.onSetAuthUser());            
    }

    render() {
      return (
        <Component />
      );
    }
  }

  return connect()(WithAuthentication);
}

export default withAuthentication;