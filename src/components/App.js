import React, { Component } from 'react';
import Search from './Search';
import MovieProfileContainer from './MovieProfileContainer';
import { connect } from 'react-redux';

class App extends Component {
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
