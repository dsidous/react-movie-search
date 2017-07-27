import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Search from './Search'
import MovieProfileContainer from '../containers/MovieProfileContainer'
import * as actions from '../actions'

class App extends Component {

  state = {
    movieId: this.props.params.movieId || ''
  }

  static propTypes = {
    movie : PropTypes.object.isRequired
  }

  componentDidMount(){
    let movieId = this.state.movieId;
    if (movieId !== '') {
      this.props.dispatch(actions.updateMovie(movieId));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.movieId && (nextProps.params.movieId !== this.state.movieId)) {
      let movieId = nextProps.params.movieId;
      this.props.dispatch(actions.updateMovie(movieId));
      this.setState({movieId});
    }
  }

  render() {
    return (
      <div className="App">
        <Search />
        <MovieProfileContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  }
}
export default connect(
  mapStateToProps
)(App);
