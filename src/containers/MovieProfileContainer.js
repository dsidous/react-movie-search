import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import * as Vibrant from 'node-vibrant'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import MovieProfile from '../components/MovieProfile'
import * as actions from '../actions'

class MovieProfileContainer extends Component {

  // state = {
  //   dcolor : []
  // }

  static propTypes = {
    config: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  // componentDidMount() {
  //   this.getPalette();
  // }

  // componentWillReceiveProps() {
  //   this.getPalette();
  // }

  componentDidUpdate = () => {
    ReactDom.findDOMNode(this).scrollIntoView();
  }

  // getPalette = (path) => {
  //   if (this.props.movie.movie.poster_path) {
  //     let path = this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[3] + this.props.movie.movie.poster_path;
  //     Vibrant
  //       .from(path)
  //       .getSwatches((err,palette) => (this.setState({dcolor: palette.DarkVibrant._rgb})))
  //   } else {
  //     this.setState({dcolor: [0,0,0]})
  //   }
  // }

  handleMovieClick = (movieId) => {
    this.props.dispatch({type:'RESET_MOVIE_STATE'});
    this.props.dispatch(actions.updateMovie(movieId));
    this.context.router.push(`/movie/${movieId}`);
  }

  handlePersonClick = (personId) => {
    this.props.dispatch({type:'RESET_PERSON'});
    this.props.dispatch(actions.updatePerson(personId));
    this.context.router.push(`/person/${personId}`);
  }

  render(){

    return (
      <div>
      {!this.props.movie.movie.id
        ? (this.props.movie.isFetching ? <h2>LOADING</h2> : '')
        : <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeave={false}>
            <MovieProfile
                key={this.props.movie.movie.id}
                config={this.props.config.config}
                movie={this.props.movie.movie}
                // dcolor={this.state.dcolor}
                handleMovieClick={this.handleMovieClick}
                handlePersonClick={this.handlePersonClick}
            />
          </ReactCSSTransitionGroup>
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
