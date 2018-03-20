import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import MovieProfileContainer from '../containers/MovieProfileContainer'
import * as actions from '../actions'

class App extends Component {

  state = {
    movieId: this.props.match.params.movieId || ''
  }

  static propTypes = {
    movie : PropTypes.object.isRequired
  }

  componentDidMount(){
    let movieId = this.state.movieId;
    if (movieId !== '') {
      this.props.dispatch(actions.getMovie(movieId));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.movieId && (nextProps.match.params.movieId !== this.state.movieId)) {
      let movieId = nextProps.match.params.movieId;
      this.props.dispatch(actions.getMovie(movieId));
      this.setState({movieId});
    }
  }

  render() {
    return (
      <div className="App">
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
export default withRouter(connect(
  mapStateToProps
)(App));
