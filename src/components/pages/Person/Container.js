import React, { Component } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from 'react-intl';

import PageTransition from "../../atoms/PageTransition/index";
import Person from "../../templates/Person";

export default class CastProfielContainer extends Component {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handlePersonMovieClick = (movieId, show) => {
    this.context.router.history.push(`/${show}/${movieId}`);
  };

  render() {
    return (
      <div>
        {
          (this.props.loading) ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
              <PageTransition>
                <IntlProvider locale={navigator.language}>
                  <Person
                    key={this.props.person.id}
                    person={this.props.person}
                    handlePersonMovieClick={this.handlePersonMovieClick}
                  />
                </IntlProvider>
              </PageTransition>
            )}
      </div>
    );
  }
}