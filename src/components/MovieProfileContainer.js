import React, { Component } from 'react';
import MovieProfile from './MovieProfile';
import { connect } from 'react-redux';

import * as Vibrant from 'node-vibrant'

import * as actions from '../actions';

class MovieProfileContainer extends Component {
  constructor(){
    super();

    this.state = {
      dcolor : []
    }
  }

  componentDidMount(){
    this.getPalette();
  }

  componentWillReceiveProps(){
    this.getPalette();
  }

  getPalette(path){
    if (this.props.movie.movie.poster_path) {
      let path = this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[3] + this.props.movie.movie.poster_path;
      Vibrant
        .from(path)
        .getSwatches((err,palette) => (this.setState({dcolor: palette.DarkVibrant._rgb})))
    }else {
      this.setState({dcolor: [0,0,0]})
    }
  }

  handleMovieClick(movieId){
      this.props.dispatch(actions.getMovie(movieId));
      this.props.dispatch(actions.getCrew(movieId));
      this.props.dispatch(actions.getSimilarMovie(movieId));
      this.props.dispatch(actions.getVideos(movieId));
  }

  render(){

    return(
      <MovieProfile
            config={this.props.config.config}
            similar={this.props.movie.similar}
            movie={this.props.movie.movie}
            crew={this.props.movie.crew}
            videos={this.props.movie.videos}
            dcolor={this.state.dcolor}
            handleMovieClick={this.handleMovieClick.bind(this)}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    config: state.config
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieProfileContainer);
