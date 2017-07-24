import React, { Component } from 'react';
import Search from './Search';
import MovieProfileContainer from './MovieProfileContainer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieId: this.props.params.movieId || ''
    }
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
        {this.props.movie.movie.id &&
          <MovieProfileContainer />
        }
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
