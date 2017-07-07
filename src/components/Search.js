import React, { Component } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Search extends Component {

  handleSearch(query) {
    if (!query) {
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.results}));
  }

  handleSelect(e){
    console.log(e.target.value);
    e.preventDefault();
  }

  renderMenuItemChildren(option, props, index) {
    return (
      <div key={option.id}>
        <span>{option.original_title}</span>
      </div>
    );
  }

  handleInputChange(selected){
    console.log(selected);
  }

  render(){
    return (
      <div>
        <AsyncTypeahead
          {...this.state}
          align="justify"
          bsSize="large"
          labelKey="original_title"
          onChange={this.handleInputChange.bind(this)}
          onSearch={this.handleSearch.bind(this)}
          placeholder="Search for a movie title..."
          renderMenuItemChildren={this.renderMenuItemChildren}
        />
      </div>
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
