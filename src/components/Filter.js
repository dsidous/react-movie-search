import React, { Component} from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

class Filter extends Component {

  componentDidMount(){
    this.props.dispatch(actions.getConfig());
    this.state = {
      page : 1,
      year : 2017
    }

    this.props.dispatch(actions.getDiscoverMovies('&page=1&year=2017'));

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const option = e.target.value;
    console.log(option);
    this.props.dispatch(actions.getDiscoverMovies('&page=1&primary_release_year=' + option));
  }

  render(){
    let year_options = Array(117).fill().map((_, i) => <option value={2016 - i}>{2016 - i}</option>);

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
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
                  <option value="0">None</option>
                  <option value="2017" selected>2017</option>
                  {year_options}
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
