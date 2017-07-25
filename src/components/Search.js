import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Navbar, FormGroup } from 'react-bootstrap';

class Search extends Component {

  componentDidMount(){
    this.props.dispatch(actions.getConfig());
  }

  handleSearch(query) {
    if (!query) {
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.results}));
  }

  renderMenuItemChildren(option, props, index) {
    return (
      <div key={option.id}>
        <span><img src={this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[0] + option.poster_path} className="movie-search-img-thumb" alt="#"/></span>
        <span>{option.original_title} ({option.release_date.slice(0,4)})</span>
      </div>
    );
  }

  handleChange(selected){
    if (typeof selected[0] !== "undefined") {
      const movieId = selected[0].id;
      this.props.dispatch(actions.updateMovie(movieId));
      this.context.router.push(`/movie/${movieId}`);
    }
  }

  render(){
    return (
      <Navbar> 
        <Navbar.Header>
          <Navbar.Brand>
            Movie Search
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup bsSize="small">
              <AsyncTypeahead
                {...this.state}
                align="justify"
                labelKey="original_title"
                onChange={this.handleChange.bind(this)}
                onSearch={this.handleSearch.bind(this)}
                placeholder="Search for a movie title..."
                renderMenuItemChildren={this.renderMenuItemChildren.bind(this)}
              />
            </FormGroup>
            <FormGroup bsSize="small">
              OR
              <Link to={`/discover`} className="nav-discover">Discover</Link>
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    config: state.config,
    movie: state.movie
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
