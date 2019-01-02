import React, { Component } from "react";
import PropTypes from "prop-types";

import Filter from '../../organisms/Filter';
import Result from "../../molecules/Result";

class Movies extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    genres: PropTypes.array.isRequired,
    movies: PropTypes.array.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  queryUpdate = (query) => {
    this.context.router.history.push(`/movies?${query}`);
  }

  render() {
    if (this.props.loading || this.props.configLoading || this.props.genresLoading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    };

    return (
      <Filter query={this.props.query} genres={this.props.genres} queryUpdate={this.queryUpdate}>
        <Result {...this.props} />
      </Filter>
    );
  }
}

export default Movies;
