import React, { Component } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from 'react-intl';

import Spinner from '../../atoms/Spinner';
import PageTransition from "../../atoms/PageTransition/index";
import PersonProfile from "../../organisms/PersonProfile";

export default class Person extends Component {
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

    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <PageTransition>
        <IntlProvider locale={navigator.language}>
          <PersonProfile
            key={this.props.person.id}
            person={this.props.person}
            handlePersonMovieClick={this.handlePersonMovieClick}
          />
        </IntlProvider>
      </PageTransition>
    );
  }
}