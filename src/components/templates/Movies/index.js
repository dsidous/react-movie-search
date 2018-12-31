import React, { Component } from "react";
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Pager
} from "react-bootstrap";
import PropTypes from "prop-types";

import FilterGenres from "../../atoms/FilterGenres";
import Result from "../../molecules/Result";

class Filter extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

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
    if (this.props.loading || this.props.configLoading || this.props.genresLoading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>)
    };

    var d = new Date();
    const year = d.getFullYear();
    const sumYear = year - 1900;
    let year_options = Array(sumYear)
      .fill()
      .map((_, i) => (
        <option key={i} value={year - i}>
          {year - i}
        </option>
      ));

    return (
      <div className="filter-wrapper">
        <Form inline>
          <FormGroup className="filter-element-wrapper">
            <ControlLabel>Sort By</ControlLabel>
            <br />
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              defaultValue={this.state.sort_by}
              id="sort_by"
            >
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="vote_average.desc">Rating Descending</option>
              <option value="vote_average.asc">Rating Ascending</option>
              <option value="primary_release_date.desc">
                Release Date Descending
            </option>
              <option value="primary_release_date.asc">
                Release Date Ascending
            </option>
              <option value="title.asc">Title (A-Z)</option>
              <option value="title.desc">Title (Z-A)</option>
            </FormControl>
          </FormGroup>
          <FormGroup className="filter-element-wrapper">
            <ControlLabel>Year</ControlLabel>
            <br />
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              defaultValue={this.state.primary_release_year}
              id="primary_release_year"
            >
              <option value="">None</option>
              {year_options}
            </FormControl>
          </FormGroup>
          <FormGroup className="filter-element-wrapper filter-genres-wrapper">
            <ControlLabel>Genres</ControlLabel>
            <br />
            <FilterGenres
              genres={this.props.genres}
              onChange={this.handleGenresChange}
              value={this.state.with_genres}
            />
          </FormGroup>
          <FormGroup className="filter-element-wrapper">
            <ControlLabel>Average vote</ControlLabel>
            <br />
            <FormControl
              componentClass="select"
              id="vote_average.gte"
              placeholder="select"
              onChange={this.handleChange}
              defaultValue={this.state["vote_average.gte"]}
            >
              <option value="">Greater than...</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </FormControl>
          </FormGroup>
        </Form>
        <Result {...this.props} />
        <Pager>
          <Pager.Item
            previous
            eventKey={this.state.page - 1}
            href="#"
            onSelect={this.handlePageSelect}
          >
            &larr; Previous
        </Pager.Item>
          <Pager.Item
            next
            eventKey={this.state.page + 1}
            onSelect={this.handlePageSelect}
          >
            Next &rarr;
        </Pager.Item>
        </Pager>
      </div>
    );
  }
}

export default Filter;
