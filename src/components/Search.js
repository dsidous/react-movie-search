import React, { Component } from 'react';
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
        <span>{option.original_title}</span>
      </div>
    );
  }

  handleChange(selected){
    if (typeof selected[0] !== "undefined") {
      const movieId = selected[0].id;
      this.props.dispatch(actions.getMovie(movieId));
      this.props.dispatch(actions.getCrew(movieId));
      this.props.dispatch(actions.getSimilarMovie(movieId));
    }
  }

  render(){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Movie Search</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <AsyncTypeahead
                {...this.state}
                align="justify"
                labelKey="original_title"
                onChange={this.handleChange.bind(this)}
                onSearch={this.handleSearch.bind(this)}
                placeholder="Search for a movie title..."
                renderMenuItemChildren={this.renderMenuItemChildren}
              />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
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
