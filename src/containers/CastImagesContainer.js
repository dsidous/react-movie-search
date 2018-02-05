import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Search from "../components/Search";
import CastImages from "../components/CastImages";
import * as actions from '../actions';

class CastImagesContainer extends Component {

  componentDidMount() {
    if (!this.props.config.images) {
      this.props.dispatch(actions.getConfig());
    }

    if (!this.props.person.personId) {
      let personId = this.props.match.params.personId;
      this.props.dispatch(actions.updatePerson(personId));
    }

    window.scroll(0,0);
  }

  render(){
    return (
      <div>
        <Search />
        {this.props.config.images && this.props.person.images &&
          <CastImages 
            config={this.props.config}
            person={this.props.person}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    config: state.config.config,
    person: state.person.person
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CastImagesContainer)
);
