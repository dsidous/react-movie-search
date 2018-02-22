import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { withRouter } from "react-router-dom";
import { IntlProvider } from 'react-intl';


import * as actions from "../actions";

import CastProfile from "../components/CastProfile";

class CastProfielContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    person: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  handlePersonMovieClick = movieId => {
    this.props.dispatch({ type: "RESET_MOVIE_STATE" });
    this.props.dispatch(actions.updateMovie(movieId));
    this.context.router.history.push(`/movie/${movieId}`);
  };

  render() {
    return (
      <div>
        {!this.props.person.id ? (
          this.props.isFetching ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )
        ) : (
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeave={false}
          >
            {this.props.config.images && (
              <IntlProvider locale={navigator.language}>
              <CastProfile
                key={this.props.person.id}
                config={this.props.config}
                person={this.props.person}
                handlePersonMovieClick={this.handlePersonMovieClick}
              />
              </IntlProvider>
            )}
          </ReactCSSTransitionGroup>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config.config,
    person: state.person.person,
    isFetching: state.person.isFetching
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CastProfielContainer)
);
