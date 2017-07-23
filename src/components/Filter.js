import React, { Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import FilterGenres from './FilterGenres';

class Filter extends Component {

  constructor(){
    super();

    this.state = {
      page : 1,
      primary_release_year : 2017,
      sort_by: 'popularity.desc',
      with_genres: [],
      'vote_average.gte': 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleGenresChange = this.handleGenresChange.bind(this);
    this.runQuery = this.runQuery.bind(this);

  }

  componentDidMount(){
    this.props.dispatch(actions.getConfig());
    this.props.dispatch(actions.getGenres());

    this.props.dispatch(actions.getDiscoverMovies('&page=1&primary_release_year=2017'));
  }

  objectToQueryStr(paramsObj) {
    return Object
          .keys(paramsObj)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`)
          .join('&');
  }

  runQuery(){
    const query = this.objectToQueryStr(this.state);
    this.props.dispatch(actions.getDiscoverMovies('&' + query));
  }

  handleChange(e){
    let val = e.target.value;
    let option = e.target.id;
    this.setState({ [option] : val }, () => this.runQuery());
  }

  handleGenresChange(e){
    this.setState({with_genres: e}, () => this.runQuery());
  }

  render(){
    let year_options = Array(118).fill().map((_, i) => <option key={i} value={2017 - i}>{2017 - i}</option>);

    return(
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              Movie Search
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup className="filter-element-wrapper">
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} defaultValue="popularity.desc" id="sort_by">
                  <option value="popularity.desc">Popularity Descending</option>
                  <option value="popularity.asc">Popularity Ascending</option>
                  <option value="vote_average.desc">Rating Descending</option>
                  <option value="vote_average.asc">Rating Ascending</option>
                  <option value="primary_release_date.desc">Release Date Descending</option>
                  <option value="primary_release_date.asc">Release Date Ascending</option>
                  <option value="title.asc">Title (A-Z)</option>
                  <option value="title.desc">Title (Z-A)</option>
                </FormControl>
              </FormGroup>
              <FormGroup className="filter-element-wrapper">
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} defaultValue="2017" id="primary_release_year">
                  <option value="">None</option>
                  {year_options}
                </FormControl>
              </FormGroup>
              {this.props.config.genres[0] &&
                <FormGroup className="filter-element-wrapper filter-genres-wrapper">
                  <FilterGenres genres={this.props.config.genres} onChange={this.handleGenresChange} value={this.state.with_genres}/>
                </FormGroup>
              }
              <FormGroup className="filter-element-wrapper">
                <FormControl componentClass="select" id="vote_average.gte" placeholder="select" onChange={this.handleChange} defaultValue="">
                  <option value="">None</option>
                  <option value="10">10</option>
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
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
