import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import * as actions from "../actions";
import Filter from "../components/Filter";

class FilterContainer extends Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);
    
    var d = new Date();
    const year = d.getFullYear();

    this.state = {
      page: parseInt(params.get("page"), 10) || 1,
      primary_release_year: params.get("primary_release_year") || year,
      sort_by: params.get("sort_by") || "popularity.desc",
      with_genres: params.get("with_genres") || [],
      "vote_average.gte": params.get("vote_average.gte") || 0
    };
  }

  static propTypes = {
    config: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired
  };

  componentDidMount() {
    const query = this.objectToQueryStr(this.state);
    this.props.dispatch(
      actions.getDiscoverMovies(`&${query}`)
    );
  }

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  objectToQueryStr(paramsObj) {
    return Object.keys(paramsObj)
      .map(
        key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`
      )
      .join("&");
  }

  runQuery = () => {
    const query = this.objectToQueryStr(this.state);
    this.props.dispatch({ type: "RESET_MOVIES_STATE" });
    this.props.dispatch(actions.getDiscoverMovies("&" + query));
    this.context.router.history.push(`/movies?${query}`);
  };

  handleChange = e => {
    let val = e.target.value;
    let option = e.target.id;
    this.setState({ [option]: val, page: 1 }, () => this.runQuery());
  };

  handleGenresChange = e => {
    this.setState({ with_genres: e, page: 1 }, () => this.runQuery());
  };

  handlePageSelect = e => {
    if (e > 0) {
      this.setState({ page: e }, () => this.runQuery());
    }
  };

  render() {
    return (
      <div>
        
        <Filter
          {...this.props}
          state={this.state}
          handleChange={this.handleChange}
          handleGenresChange={this.handleGenresChange}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

FilterContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    config: state.config,
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
)