import React, { Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Select from 'react-select';

import { Navbar, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import 'react-select/dist/react-select.css';

class Filter extends Component {

  constructor(){
    super();

    this.state = {
      page : 1,
      primary_release_year : 2017
    }

    this.handleChange = this.handleChange.bind(this);

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

  handleChange(val){
    console.log("Selected: " + JSON.stringify(val))
    // this.setState({ primary_release_year: option }, function() {
    //   const query = this.objectToQueryStr(this.state);
    //   this.props.dispatch(actions.getDiscoverMovies('&' + query));
    // });
  }

  render(){
    let year_options = Array(118).fill().map((_, i) => <option key={i} value={2017 - i}>{2017 - i}</option>);
    let genres = (typeof this.props.config.genres[0] !== 'undefined') ? this.props.config.genres : [];
    //let genres_options = genres.map( genre => <option key={genre.id} value={genre.id}>{genre.name}</option> );
    let genres_options = [{value: 1, label: 'action'},{value: 2, label: 'comedy'}]


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
              <FormGroup bsSize="small">
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} defaultValue="2017">
                  <option value="">None</option>
                  {year_options}
                </FormControl>
              </FormGroup>
              <Select
                name="select_genres"                
                simpleValue={true}
                options={genres_options}
                onChange={this.handleChange}
                multi={true}
              />
              {/* <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Select Genres</ControlLabel>
                <FormControl componentClass="select" multiple ref="select_genres" onChange={this.handleChange}>
                  <option value="">None</option>
                  {genres_options}
                </FormControl>
              </FormGroup> */}
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
