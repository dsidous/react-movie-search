import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from '../../atoms/Spinner';
import PageTransition from "../../atoms/PageTransition/index";
import SEO from "../../atoms/SEO";
import TopPeopleProfile from "../../organisms/TopPeople";

export default class TopPeople extends Component {

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

  handlePageSelect = e => {
    if (e > 0) {
      this.setState({ page: e }, () => {
        this.context.router.history.push(`/person?page=${this.state.page}`);
      });
    }
  };

  render() {
    if (this.props.loading) {
      return <Spinner />
    }
    return (
      <PageTransition>
        <SEO title="Popular people" />
        <div>
          <PageTransition>
            <TopPeopleProfile
              state={this.state}
              toppeople={this.props.toppeople}
              handlePageSelect={this.handlePageSelect}
            />
          </PageTransition>
        </div>
      </PageTransition>
    );
  }
}
