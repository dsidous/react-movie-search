import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions";
import Search from "../components/Search";
import SEO from "../components/SEO";
import TopPeople from "../components/TopPeople";

class TopPeopleContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.dispatch(actions.getTopPeople());
  }

  handlePersonClick = personId => {
    this.props.dispatch({ type: "RESET_PERSON" });
    this.props.dispatch(actions.updatePerson(personId));
    this.context.router.history.push(`/person/${personId}`);
  };
  
  render() {
    return (
      <div>
        <SEO title="Popular people" />  
        <Search />  
        {this.props.toppeople && this.props.config.config.images &&
          <TopPeople
            config={this.props.config.config}
            toppeople={this.props.toppeople}
            handlePersonClick={this.handlePersonClick}
          />
        }
      </div>
    );
  }
}

TopPeopleContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    config: state.config,
    toppeople: state.toppeople.toppeople
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopPeopleContainer)
);
