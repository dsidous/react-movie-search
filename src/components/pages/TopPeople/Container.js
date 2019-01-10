import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import SEO from "../../atoms/SEO";
import TopPeople from "../../templates/TopPeople";

export default class TopPeopleContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);
    const page = parseInt(params.get("page"), 10);

    this.state = {
      page: page || 1
    };
  }

  handlePersonClick = personId => {
    this.context.router.history.push(`/person/${personId}`);
  };

  handlePageSelect = e => {
    if (e > 0) {
      this.setState({ page: e }, () => {
        this.context.router.history.push(`/person?page=${this.state.page}`);
      });
    }
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    return (
      <div>
        <SEO title="Popular people" />
        <div>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={5500}
            transitionEnterTimeout={5500}
            transitionLeaveTimeout={5500}
          >
            <TopPeople
              state={this.state}
              toppeople={this.props.toppeople}
              handlePersonClick={this.handlePersonClick}
              handlePageSelect={this.handlePageSelect}
            />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
