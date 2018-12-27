import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import SEO from "../../components/SEO";
import TopPeople from "../../templates/TopPeople";

export default class TopPeopleContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  };

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

  componentDidUpdate = () => window.scrollTo(0, 0);

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
    return (
      <div>
        <SEO title="Popular people" />
        {
          (this.props.loading || this.props.configLoading) ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
              <div>
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={5500}
                  transitionEnterTimeout={5500}
                  transitionLeaveTimeout={5500}
                >
                  <TopPeople
                    config={this.props.config}
                    state={this.state}
                    toppeople={this.props.toppeople}
                    handlePersonClick={this.handlePersonClick}
                    handlePageSelect={this.handlePageSelect}
                  />
                </ReactCSSTransitionGroup>
              </div>
            )}
      </div>
    );
  }
}
