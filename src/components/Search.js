import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";

import * as actions from "../actions";

class Search extends Component {
  state = {
    options: []
  };

  static propTypes = {
    config: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.dispatch(actions.getConfig());
  }

  handleSearch = query => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`
      )
        .then(resp => resp.json())
        .then(json => this.setState({ options: json.results }));
    }
  };

  renderMenuItemChildren = (option, props, index) => {
    return (
      <div key={option.id}>
        <span>
          <img
            src={
              this.props.config.config.images.base_url +
              this.props.config.config.images.poster_sizes[0] +
              option.poster_path
            }
            className="movie-search-img-thumb"
            alt="#"
          />
        </span>
        <span>
          {option.original_title} ({option.release_date.slice(0, 4)})
        </span>
      </div>
    );
  };

  handleChange = selected => {
    if (typeof selected[0] !== "undefined") {
      const movieId = selected[0].id;
      this.props.dispatch(actions.updateMovie(movieId));
      this.context.router.history.push(`/movie/${movieId}`);
    }
  };

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>Movie Search</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>MOVIES</Navbar.Text>
          <Navbar.Text>PEOPLE</Navbar.Text>
          <Navbar.Text>
            <Link to={"/discover"}>DISCOVER</Link>
          </Navbar.Text>
          <Navbar.Form pullLeft>
            <AsyncTypeahead
              {...this.state}
              isLoading={true}
              align="justify"
              labelKey="original_title"
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              placeholder="Search for a movie title..."
              renderMenuItemChildren={this.renderMenuItemChildren}
            />
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
