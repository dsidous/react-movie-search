import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { IntlProvider } from 'react-intl';

import Person from "../../templates/Person";

export default class CastProfielContainer extends Component {
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
    this.context.router.history.push(`/movie/${movieId}`);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {
          (this.props.loading || this.props.configLoading) ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
              <span className="sr-only">Loading...</span>
            </div>
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
                    <Person
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