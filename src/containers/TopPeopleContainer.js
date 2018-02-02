import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import * as actions from "../actions";
import Search from "../components/Search";
import SEO from "../components/SEO";
import TopPeople from "../components/TopPeople";

class TopPeopleContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);
    const page = parseInt(params.get("page"),10);

    this.state = {
      page: page || 1
    };
  }

  componentDidMount() {
    this.props.dispatch(actions.getTopPeople(`&page=${this.state.page}`));
  }

  componentDidUpdate = () => window.scrollTo(0, 0);

  handlePersonClick = personId => {
    this.props.dispatch({ type: "RESET_PERSON" });
    this.props.dispatch(actions.updatePerson(personId));
    this.context.router.history.push(`/person/${personId}`);
  };

  runQuery() {
    this.props.dispatch({ type: "RESET_TOPPEOPLE_STATE" });
    this.props.dispatch(actions.getTopPeople("&page=" + this.state.page));
  }

  handlePageSelect = e => {
    if (e > 0) {
      this.setState({ page: e }, () => {
        this.runQuery();
        this.context.router.history.push(`/person?page=${this.state.page}`);
      });
    }
  };

  render() {
    return (
      <div>
        <SEO title="Popular people" />
        <Search />
        {!this.props.toppeople.results ? (
          this.props.isFetching ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )
        ) : (
          <div>
          {this.props.config.config.images &&
          <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={5500}
          transitionEnterTimeout={5500}
          transitionLeaveTimeout={5500}
        >
            <TopPeople
              config={this.props.config.config}
              state={this.state}
              toppeople={this.props.toppeople}
              handlePersonClick={this.handlePersonClick}
              handlePageSelect={this.handlePageSelect}
            />
            </ReactCSSTransitionGroup>
          }
          </div>
        )}
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
    toppeople: state.toppeople.toppeople,
    isFetching: state.toppeople.isFetching
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopPeopleContainer)
);
