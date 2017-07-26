import React, { Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import Filter from '../components/Filter'


class FilterContainer extends Component {

  state = {
    page : 1,
    primary_release_year : 2017,
    sort_by: 'popularity.desc',
    with_genres: [],
    'vote_average.gte': 0
  }

  static propTypes = {
    config : PropTypes.object.isRequired,
    movies : PropTypes.object.isRequired
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

  runQuery = () => {
    const query = this.objectToQueryStr(this.state);
    this.props.dispatch(actions.getDiscoverMovies('&' + query));
  }

  handleChange = (e) => {
    let val = e.target.value;
    let option = e.target.id;
    this.setState({ [option] : val }, () => this.runQuery());
  }

  handleGenresChange = (e) => {
    this.setState({with_genres: e}, () => this.runQuery());
  }

  handlePageSelect = (e) => {
    this.setState({page: e}, () => this.runQuery());
  }

  render(){

    return(
      <div>
        <Filter
          {...this.props}
          state = {this.state}
          handleChange={this.handleChange}
          handleGenresChange={this.handleGenresChange}
          handlePageSelect={this.handlePageSelect}
        />
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
)(FilterContainer);
