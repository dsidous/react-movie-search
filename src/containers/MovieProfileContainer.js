import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Vibrant from 'node-vibrant'

import MovieProfile from '../components/MovieProfile'
import * as actions from '../actions'

class MovieProfileContainer extends Component {

  state = {
    dcolor : []
  }

  static propTypes = {
    config: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.getPalette();
  }

  componentWillReceiveProps() {
    this.getPalette();
  }

  getPalette = (path) => {
    if (this.props.movie.movie.poster_path) {
      let path = this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[3] + this.props.movie.movie.poster_path;
      Vibrant
        .from(path)
        .getSwatches((err,palette) => (this.setState({dcolor: palette.DarkVibrant._rgb})))
    } else {
      this.setState({dcolor: [0,0,0]})
    }
  }

  handleMovieClick = (movieId) => {
    this.props.dispatch(actions.updateMovie(movieId));
    this.context.router.push(`/movie/${movieId}`);
  }

  render(){

    return (
      <div>
      {!this.props.movie.movie.id
        ? (this.props.movie.isFetching ? <h2>LOADING</h2> : '')
        : <div style={{ opacity: this.props.movie.isFetching ? 0.5 : 1 }}>
            <MovieProfile
                config={this.props.config.config}
                similar={this.props.movie.similar}
                movie={this.props.movie.movie}
                crew={this.props.movie.crew}
                videos={this.props.movie.videos}
                images={this.props.movie.images}
                dcolor={this.state.dcolor}
                handleMovieClick={this.handleMovieClick}
            />
          </div>
      }
    </div>
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
