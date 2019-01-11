import React, { Component } from "react";
import PropTypes from "prop-types";

import Filter from '../../organisms/Filter';
import Result from "../../molecules/Result";
import Spinner from "../../atoms/Spinner";
import PageTransition from "../../atoms/PageTransition";

class Tvs extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    genres: PropTypes.array.isRequired,
    movies: PropTypes.array.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  queryUpdate = (query) => {
    this.context.router.history.push(`/tvs?${query}`);
  }

  render() {
    if (this.props.loading || this.props.configLoading || this.props.genresLoading) {
      return <Spinner />
    };

    return (
      <PageTransition>
        <Filter query={this.props.query} genres={this.props.genres} queryUpdate={this.queryUpdate}>
          <Result {...this.props} media="tv"/>
        </Filter>
      </PageTransition>
    );
  }
}

export default Tvs;
